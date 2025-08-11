// plugins/withModifyGradle.js
const { withGradleProperties } = require('@expo/config-plugins')

const withModifyGradle = (config) => {
  return withGradleProperties(config, (decoratedAppConfig) => {
    // Check if the property already exists to avoid duplicates
    const existing = decoratedAppConfig.modResults.find(
      (item) => item.key === 'org.gradle.configuration-cache'
    )

    if (!existing) {
      decoratedAppConfig.modResults.push({
        key: 'org.gradle.configuration-cache',
        type: 'property',
        value: 'true'
      })
    }

    return decoratedAppConfig
  })
}

module.exports = withModifyGradle
