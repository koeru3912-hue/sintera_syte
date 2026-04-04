import Link from 'next/link';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer} role="contentinfo">
      <div className={s.logo}>Syntera</div>
      <div className={s.copy}>&copy; {new Date().getFullYear()} Syntera. Все права защищены.</div>
      <nav className={s.links} aria-label="Ссылки в подвале">
        <Link href="/about">О компании</Link>
        <Link href="/contacts">Контакты</Link>
        <Link href="/privacy">Политика</Link>
        <Link href="/blog">Блог</Link>
      </nav>
    </footer>
  );
}
