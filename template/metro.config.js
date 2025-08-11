// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const { withRozenite } = require('@rozenite/metro')
const defaultConfig = getDefaultConfig(__dirname)
const { transformer, resolver } = defaultConfig

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
  ...transformer,
  babelTransformerPath: require.resolve('@lingui/metro-transformer/expo')
}

defaultConfig.resolver = {
  ...resolver,
  sourceExts: [...resolver.sourceExts, 'po', 'pot'],
  unstable_enablePackageExports: false //related issue => https://github.com/facebook/metro/pull/1448 and https://github.com/lingui/js-lingui/issues/2231
}

defaultConfig.transformer.minifierConfig = {
  compress: {
    drop_console: true
  }
}

module.exports = withRozenite(defaultConfig)
