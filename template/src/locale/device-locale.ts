import { type Locale, getLocales as defaultGetLocales } from 'expo-localization'

interface LocalWithLanguageCode extends Locale {
  languageCode: string
}

export function getLocales(): LocalWithLanguageCode[] {
  const locales = defaultGetLocales?.() ?? []
  const language: LocalWithLanguageCode[] = []

  for (const locale of locales) {
    language.push(locale as LocalWithLanguageCode)
  }

  return language
}

export const deviceLocales = getLocales()

export const deviceLanguageCodes = deviceLocales.map((l) => l.languageCode)
