import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { en } from '../locales/en'
import { pl } from '../locales/pl'

export const defaultLocale = 'en'
export const supportedLocales = ['en', 'pl'] as const
export type Locale = (typeof supportedLocales)[number]

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pl: { translation: pl },
    },
    fallbackLng: defaultLocale,
    supportedLngs: supportedLocales,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
