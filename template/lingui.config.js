/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en', 'vi', 'ja'],
  catalogs: [
    {
      path: '<rootDir>/src/locale/locales/{locale}/messages',
      include: ['src']
    }
  ],
  format: 'po'
}
