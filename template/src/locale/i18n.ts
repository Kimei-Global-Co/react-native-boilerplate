import { useEffect } from 'react'

import '@formatjs/intl-locale/polyfill-force'
import '@formatjs/intl-pluralrules/locale-data/vi'
import '@formatjs/intl-pluralrules/polyfill-force'
import { i18n } from '@lingui/core'

import { messages as messagesEn } from './locales/en/messages.po'
import { messages as messagesJa } from './locales/ja/messages.po'
import { messages as messagesVi } from './locales/vi/messages.po'

// import * as persistedState from '../utils/persisted-state'

export enum AppLanguage {
  en = 'en',
  vi = 'vi',
  ja = 'ja'
}

export async function dynamicActivateLocale(
  locale: AppLanguage
): Promise<void> {
  switch (locale) {
    case AppLanguage.en: {
      i18n.loadAndActivate({ locale, messages: messagesEn })
      await import('@formatjs/intl-pluralrules/locale-data/en')
      break
    }
    case AppLanguage.ja: {
      i18n.loadAndActivate({ locale, messages: messagesJa })
      await import('@formatjs/intl-pluralrules/locale-data/ja')
      break
    }

    default: {
      i18n.loadAndActivate({ locale, messages: messagesVi })
      break
    }
  }
}

export function useLocaleLanguage(): void {
  const appLanguage = 'vi'

  useEffect(() => {
    dynamicActivateLocale(appLanguage as AppLanguage)
  }, [appLanguage])
}
