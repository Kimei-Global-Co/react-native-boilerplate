module.exports = {
  writerOpts: {
    commitGroupsSort: null,
    commitsSort: null,

    finalizeContext: (context, _, commits, __) => {
      // Sort commits by date and type
      const dateGroups = {}

      commits.forEach((commit) => {
        if (!commit.date) {
          return
        }

        if (!dateGroups[commit.date]) {
          dateGroups[commit.date] = {}
        }

        if (!dateGroups[commit.date][commit.type]) {
          dateGroups[commit.date][commit.type] = []
        }

        dateGroups[commit.date][commit.type].push(commit)
      })

      // Generate the full changelog content directly
      let changelog = '# Changelog\n\n'

      // Sort dates (newest first)
      Object.keys(dateGroups)
        .sort((a, b) => new Date(b) - new Date(a))
        .forEach((date) => {
          changelog += `## ${date}\n\n`

          // For each type in this date
          Object.keys(dateGroups[date]).forEach((type) => {
            const typeCommits = dateGroups[date][type]

            changelog += `### ${type}\n`
            typeCommits.forEach((commit) => {
              changelog += `* ${commit.subject} ([${commit.shortHash}](${commit.commitUrl}))\n`
            })
            changelog += '\n'
          })
        })

      context.content = changelog

      return context
    },

    groupBy: false,

    mainTemplate: '{{content}}',
    transform: (commit, context) => {
      // Skip if no type
      if (!commit.type) {
        return
      }

      // Create a mutable copy of the commit
      const newCommit = structuredClone(commit)

      // Transform commit types
      switch (newCommit.type.toLowerCase()) {
        case 'feat':
          newCommit.type = '✨ Features'
          break
        case 'fix':
          newCommit.type = '🐛 Bug Fixes'
          break
        case 'docs':
          newCommit.type = '📚 Documentation'
          break
        case 'style':
          newCommit.type = '💎 Styles'
          break
        case 'refactor':
          newCommit.type = '♻️ Code Refactoring'
          break
        case 'perf':
          newCommit.type = '⚡️ Performance Improvements'
          break
        case 'test':
          newCommit.type = '✅ Tests'
          break
        case 'build':
          newCommit.type = '📦 Build System'
          break
        case 'ci':
          newCommit.type = '👷 CI'
          break
        case 'chore':
          newCommit.type = '🔨 Chores'
          break
        default:
          return
      }

      // Transform notes
      if (newCommit.notes) {
        newCommit.notes.forEach((note) => {
          note.title = '🚨 BREAKING CHANGES'
        })
      }

      // Add short hash
      if (typeof newCommit.hash === 'string') {
        newCommit.shortHash = newCommit.hash.substring(0, 7)
      }

      const repository = context.packageData.repository.url
        .replace('git+', '')
        .replace('.git', '')
      if (repository) {
        newCommit.commitUrl = `${repository}/commit/${newCommit.hash}`
      }

      if (newCommit.scope === '*') {
        newCommit.scope = ''
      }

      if (typeof newCommit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl
        if (url) {
          url = `${url}/issues/`
          // Issue URLs.
          newCommit.subject = newCommit.subject.replaceAll(
            /#(\d+)/g,
            (_, issue) => {
              return `[#${issue}](${url}${issue})`
            }
          )
        }
      }

      // Add date for grouping
      if (newCommit.committerDate) {
        newCommit.date = newCommit.committerDate.split(' ')[0] // Extract YYYY-MM-DD
      }

      return newCommit
    }
  }
}
