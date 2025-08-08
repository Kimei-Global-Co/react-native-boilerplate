const { withAndroidManifest } = require('expo/config-plugins')

module.exports = function withAndroidManifestPlugin(appConfig) {
  return withAndroidManifest(appConfig, (decoratedAppConfig) => {
    try {
      decoratedAppConfig.modResults.manifest.application[0].$[
        'android:largeHeap'
      ] = 'true'
    } catch (e) {
      console.error(`withAndroidManifestPlugin failed`, e)
    }
    return decoratedAppConfig
  })
}
