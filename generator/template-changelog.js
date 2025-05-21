"use strict";

module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      // Create a mutable copy of the commit
      const newCommit = JSON.parse(JSON.stringify(commit));

      const issues = [];

      if (typeof newCommit.hash === "string") {
        newCommit.hash = newCommit.hash.substring(0, 7);
      }

      // Skip if no type
      if (!newCommit.type) return;

      // Transform commit types
      switch (newCommit.type.toLowerCase()) {
        case "feat":
          newCommit.type = "✨ Features";
          break;
        case "fix":
          newCommit.type = "🐛 Bug Fixes";
          break;
        case "docs":
          newCommit.type = "📚 Documentation";
          break;
        case "style":
          newCommit.type = "💎 Styles";
          break;
        case "refactor":
          newCommit.type = "♻️ Code Refactoring";
          break;
        case "perf":
          newCommit.type = "⚡️ Performance Improvements";
          break;
        case "test":
          newCommit.type = "✅ Tests";
          break;
        case "build":
          newCommit.type = "📦 Build System";
          break;
        case "ci":
          newCommit.type = "👷 CI";
          break;
        case "chore":
          newCommit.type = "🔨 Chores";
          break;
        default:
          return;
      }

      // Transform notes
      if (newCommit.notes) {
        newCommit.notes.forEach((note) => {
          note.title = "🚨 BREAKING CHANGES";
        });
      }

      // Add short hash
      if (typeof newCommit.hash === "string") {
        newCommit.shortHash = newCommit.hash.substring(0, 7);
      }

      const repository = context.packageData.repository.url
        .replace("git+", "")
        .replace(".git", "");

      if (repository) {
        newCommit.commitUrl = `${repository}/commit/${newCommit.hash}`;
      }

      if (newCommit.scope === "*") {
        newCommit.scope = "";
      }

      if (typeof newCommit.subject === "string") {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;
        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          newCommit.subject = newCommit.subject.replace(
            /#(\d+)/g,
            (_, issue) => {
              issues.push(issue);
              return `[#${issue}](${url}${issue})`;
            }
          );
        }
      }

      return newCommit;
    },
    groupBy: "type",
    commitGroupsSort: [
      "✨ Features",
      "🐛 Bug Fixes",
      "📚 Documentation",
      "💎 Styles",
      "♻️ Code Refactoring",
      "⚡️ Performance Improvements",
      "✅ Tests",
      "📦 Build System",
      "👷 CI",
      "🔨 Chores",
    ],
    commitsSort: ["subject"],
    noteGroupsSort: ["🚨 BREAKING CHANGES"],
    mainTemplate: `# Changelog\n\n{{#each commitGroups}}\n### {{title}}\n\n{{#each commits}}\n* {{subject}} ([{{shortHash}}]({{commitUrl}}))\n{{/each}}\n{{/each}}\n`,
  },
};
