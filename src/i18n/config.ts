import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import it from './locales/it.json';
import de from './locales/de.json';
import nl from './locales/nl.json';
import ur from './locales/ur.json';
import he from './locales/he.json';
import hi from './locales/hi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ru: { translation: ru },
      it: { translation: it },
      de: { translation: de },
      nl: { translation: nl },
      ur: { translation: ur },
      he: { translation: he },
      hi: { translation: hi },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
