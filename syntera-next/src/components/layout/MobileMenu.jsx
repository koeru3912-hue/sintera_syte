'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '@/data/navigation';
import s from './MobileMenu.module.css';

const NAV_ITEMS = [
  { key: 'blog', href: '/blog' },
  { key: 'cases', href: '/#cases' },
  { key: 'about', href: '/about' },
  { key: 'contacts', href: '/contacts' },
];

export default function MobileMenu({ open, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onKey);
      return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
    }
  }, [open, onClose]);

  return (
    <>
      <div className={`${s.overlay} ${open ? s.open : ''}`} onClick={onClose} aria-hidden="true" />
      <div className={`${s.menu} ${open ? s.open : ''}`} role="dialog" aria-modal="true">
        <button className={s.closeBtn} onClick={onClose} aria-label="Закрыть меню">✕</button>
        <nav className={s.links}>
          {NAV_ITEMS.map((item) => (
            item.href.startsWith('/#') ? (
              <a key={item.key} href={item.href} className={s.link} onClick={onClose}>{t(`nav.${item.key}`)}</a>
            ) : (
              <Link key={item.key} href={item.href} className={s.link} onClick={onClose}>{t(`nav.${item.key}`)}</Link>
            )
          ))}
        </nav>
        <a href={PHONE_HREF} className={s.phone}>📞 {PHONE}</a>
        <div className={s.messengers}>
          <a href={TELEGRAM_URL} className={s.msg} target="_blank" rel="noopener noreferrer">✈️</a>
          <a href={WHATSAPP_URL} className={s.msg} target="_blank" rel="noopener noreferrer">💬</a>
        </div>
        <a href="/#cta" className={s.cta} onClick={onClose}>{t('nav.getAudit')}</a>
      </div>
    </>
  );
}
