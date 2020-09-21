import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';
import vn from './vn.json';

const languages = {
  en: {translation: en},
  vn: {translation: vn},
};

const loadedLanguages = ['en'];

export function setI18nLanguage(language) {
  i18n.changeLanguage(language);
  sessionStorage.setItem('language', language);
  return language;
}

export async function loadLanguage(language) {
  if (i18n.language !== language) {
    if (!loadedLanguages.includes(language)) {
      return import(`./${language}/${language}.json`).then(msgs => {
        i18n.addResourceBundle(language, 'translation', msgs, true, true);
        loadedLanguages.push(language);
        return setI18nLanguage(language);
      });
    }
    return Promise.resolve(setI18nLanguage(language));
  }

  return Promise.resolve(language);
}

i18n.use(initReactI18next).init({
  resources: languages,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation'],
});

export default i18n;
