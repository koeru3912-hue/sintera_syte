'use client';
import { useTranslation } from 'react-i18next';
import s from './LanguageSwitcher.module.css';

const LANGS = ['ru', 'kz'];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <div className={s.switcher} role="group" aria-label="Выбор языка">
      {LANGS.map((lng) => (
        <button
          key={lng}
          className={`${s.btn} ${i18n.language === lng ? s.active : ''}`}
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={i18n.language === lng}
        >
          {t(`lang.${lng}`)}
        </button>
      ))}
    </div>
  );
}
