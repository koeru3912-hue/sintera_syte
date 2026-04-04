import { Link } from 'react-router-dom';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer} role="contentinfo">
      <div className={s.logo}>Syntera</div>
      <div className={s.copy}>&copy; {new Date().getFullYear()} Syntera. Все права защищены.</div>
      <nav className={s.links} aria-label="Ссылки в подвале">
        <Link to="/about">О компании</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/privacy">Политика</Link>
        <Link to="/blog">Блог</Link>
      </nav>
    </footer>
  );
}
