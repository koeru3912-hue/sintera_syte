import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import s from './InlineLeadForm.module.css';

export default function InlineLeadForm({ dark = false, className = '' }) {
  const { t } = useTranslation();
  const { status, submit } = useFormSubmit();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(phone);
  };

  if (status === 'success') {
    return (
      <div className={`${s.form} ${dark ? s.dark : ''} ${className}`}>
        <div className={s.success}>{t('leadForm.success')}</div>
      </div>
    );
  }

  return (
    <form
      className={`${s.form} ${dark ? s.dark : ''} ${className}`}
      onSubmit={handleSubmit}
    >
      <div className={s.title}>{t('leadForm.title')}</div>
      <div className={s.subtitle}>{t('leadForm.subtitle')}</div>
      <div className={s.row}>
        <input
          className={s.input}
          type="tel"
          placeholder={t('hero.phonePlaceholder')}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          aria-label={t('contactForm.phone')}
        />
        <button
          className={s.btn}
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? t('leadForm.submitting') : t('leadForm.submit')}
        </button>
      </div>
      <div className={s.guarantee}>{t('leadForm.guarantee')}</div>
    </form>
  );
}
