import Link from 'next/link';
import s from './Breadcrumbs.module.css';

export default function Breadcrumbs({ items }) {
  return (
    <nav className={s.nav} aria-label="Хлебные крошки">
      <Link href="/">Главная</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span className={s.sep}>›</span>
          {i === items.length - 1 ? (
            <span className={s.current}> {item.label}</span>
          ) : (
            <Link href={item.href}> {item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
