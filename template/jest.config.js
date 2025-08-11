module.exports = {
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['__tests__/.*/__mocks__', '__e2e__/.*'],
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|@discord|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|nanoid|@react-navigation/.*|@unimodules/.*|unimodules|react-native-svg|ky)'
  ]
}
