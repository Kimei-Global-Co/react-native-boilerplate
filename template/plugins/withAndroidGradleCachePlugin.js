// plugins/withModifyGradle.js
const { withGradleProperties } = require('@expo/config-plugins')

const withModifyGradle = (config) => {
  return withGradleProperties(config, (config) => {
    // Check if the property already exists to avoid duplicates
    const existing = config.modResults.find(
      (item) => item.key === 'org.gradle.configuration-cache'
    )

    if (!existing) {
      config.modResults.push({
        key: 'org.gradle.configuration-cache',
        type: 'property',
        value: 'true'
      })
    }

    return config
  })
}

module.exports = withModifyGradle
