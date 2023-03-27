import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import localizableEN from './localizables/en/localizableEN.json';

const resources = { 
  en: {
    translation: localizableEN
  }
}

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: 'en' // default language
})

export default i18next