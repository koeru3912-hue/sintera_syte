'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useAudience } from '@/context/AudienceContext';
import { CTA_DATA } from '@/data/audiences';
import { PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '@/data/navigation';
import LanguageSwitcher from '@/components/widgets/LanguageSwitcher';
import MobileMenu from './MobileMenu';
import s from './Navbar.module.css';

const NAV_ITEMS = [
  { key: 'blog', href: '/blog' },
  { key: 'cases', href: '/#cases' },
  { key: 'about', href: '/about' },
  { key: 'contacts', href: '/contacts' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { audience } = useAudience();
  const { t } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaText = CTA_DATA[audience]?.btn || t('nav.getAudit');

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.navScrolled : ''}`} role="navigation" aria-label="Основная навигация">
        <div className={s.navLeft}>
          <Link href="/" className={s.logo} aria-label="Syntera — на главную">
            Syntera
            <span className={s.logoDesc}>ИИ-система записи<br />клиентов 24/7</span>
          </Link>
        </div>

        <ul className={s.navLinks}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              {item.href.startsWith('/#') ? (
                <a href={item.href}>{t(`nav.${item.key}`)}</a>
              ) : (
                <Link href={item.href} className={pathname === item.href ? 'active' : ''}>
                  {t(`nav.${item.key}`)}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className={s.navRight}>
          <LanguageSwitcher />
          <a href={PHONE_HREF} className={s.navPhone} aria-label={`Позвонить ${PHONE}`}>
            <span className={s.navPhoneIcon}>📞</span>
            <span>{PHONE}</span>
          </a>
          <div className={s.navMessengers}>
            <a href={TELEGRAM_URL} className={s.navMsg} title="Telegram" target="_blank" rel="noopener noreferrer">✈️</a>
            <a href={WHATSAPP_URL} className={s.navMsg} title="WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
          </div>
          <a href="/#cta" className={s.navCta}>{ctaText}</a>
          <button className={s.burger} onClick={() => setMenuOpen(true)} aria-label="Открыть меню" aria-expanded={menuOpen}>☰</button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
