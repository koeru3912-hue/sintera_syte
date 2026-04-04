import { Link } from 'react-router-dom';
import s from './Breadcrumbs.module.css';

export default function Breadcrumbs({ items }) {
  return (
    <nav className={s.nav} aria-label="Хлебные крошки">
      <Link to="/">Главная</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span className={s.sep}>›</span>
          {i === items.length - 1 ? (
            <span className={s.current}> {item.label}</span>
          ) : (
            <Link to={item.href}> {item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
