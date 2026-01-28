/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  catalogs: [
    {
      include: ['src'],
      path: '<rootDir>/src/locale/locales/{locale}/messages'
    }
  ],
  format: 'po',
  locales: ['en', 'vi', 'ja']
}
