const { withXcodeProject } = require('expo/config-plugins')

const BUILD_PHASE_NAME = 'Bundle React Native code and images'
const EXTRA_PACKAGER_ARGS = 'EXTRA_PACKAGER_ARGS="--asset-catalog-dest ./"'

function normalizeShellScript(shellScript) {
  if (!shellScript) {
    return ''
  }

  return shellScript
    .replace(/^"|"$/g, '')
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
}

function escapeShellScript(script) {
  return script
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
}

function setShellScript(phase, script) {
  phase.shellScript = `"${escapeShellScript(script)}"`
}

module.exports = function withIosAssetCatalog(appConfig) {
  return withXcodeProject(appConfig, (decoratedAppConfig) => {
    try {
      const { PBXShellScriptBuildPhase } =
        decoratedAppConfig.modResults.hash.project.objects

      if (!PBXShellScriptBuildPhase) {
        return decoratedAppConfig
      }

      const phases = Object.values(PBXShellScriptBuildPhase)
      const bundlePhase = phases.find(
        (phase) =>
          phase?.isa === 'PBXShellScriptBuildPhase' &&
          typeof phase.name === 'string' &&
          phase.name.includes(BUILD_PHASE_NAME)
      )

      if (!bundlePhase) {
        return decoratedAppConfig
      }

      const script = normalizeShellScript(bundlePhase.shellScript)

      if (script.includes('EXTRA_PACKAGER_ARGS')) {
        return decoratedAppConfig
      }

      const nextScript = `${EXTRA_PACKAGER_ARGS}\n${script}`
      setShellScript(bundlePhase, nextScript)
    } catch (e) {
      console.error('withIosAssetCatalog failed', e)
    }

    return decoratedAppConfig
  })
}
