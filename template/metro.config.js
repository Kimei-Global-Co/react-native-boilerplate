// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const { transformer } = defaultConfig

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
    nonInlinedRequires: [
      'React',
      'react',
      'react/jsx-dev-runtime',
      'react/jsx-runtime',
      'react-native'
    ]
  }
})

defaultConfig.transformer = {
  ...transformer
}

defaultConfig.transformer.minifierConfig = {
  compress: {
    drop_console: true
  }
}

module.exports = defaultConfig
