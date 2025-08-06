/** biome-ignore-all assist/source/useSortedKeys: <explanation> */
module.exports = function (api) {
  api.cache(true)
  const plugins = [
    '@lingui/babel-plugin-lingui-macro',
    'react-native-reanimated/plugin',
    ['babel-plugin-react-compiler', { target: '19' }]
  ]

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          lazyImports: true,
          disableImportExportTransform: true
        }
      ]
    ],
    plugins
  }
}
