/** biome-ignore-all assist/source/useSortedKeys: Some things need their place.*/
module.exports = (api) => {
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
          disableImportExportTransform: true, // can not writing test when it is true
          disableDeepImportWarnings: true // take a look at this discussions https://github.com/react-native-community/discussions-and-proposals/discussions/893#top
        }
      ]
    ],
    plugins
  }
}
