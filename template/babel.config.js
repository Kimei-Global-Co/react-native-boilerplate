/** biome-ignore-all assist/source/useSortedKeys: Some things need their place.*/
module.exports = (api) => {
  api.cache(true)
  const unistylesPluginOptions = {
    root: 'src',
    autoRemapImports: [
      {
        path: 'src',
        imports: [
          {
            isDefault: true,
            name: 'NativeText',
            path: 'react-native/Libraries/Text/TextNativeComponent',
            mapTo: 'NativeText'
          },
          {
            isDefault: true,
            path: 'react-native/Libraries/Components/View/ViewNativeComponent',
            mapTo: 'NativeView'
          }
        ]
      }
    ],
    debug: true
  }
  const plugins = [
    '@lingui/babel-plugin-lingui-macro',
    ['react-native-unistyles/plugin', unistylesPluginOptions],
    'react-native-reanimated/plugin',
    ['babel-plugin-react-compiler', { target: '19' }]
  ]

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          lazyImports: true,
          disableImportExportTransform: true // can not writing test when it is true
        }
      ]
    ],
    plugins
  }
}
