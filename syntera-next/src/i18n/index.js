import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './ru.json';
import kz from './kz.json';

const isClient = typeof window !== 'undefined';
const saved = isClient ? localStorage.getItem('i18nextLng') : null;
const lng = (saved === 'kz') ? 'kz' : 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      kz: { translation: kz },
    },
    lng,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

if (isClient) {
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
  });
}

export default i18n;
