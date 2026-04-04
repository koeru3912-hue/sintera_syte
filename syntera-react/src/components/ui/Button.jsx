import { Link } from 'react-router-dom';
import s from './Button.module.css';

export default function Button({
  children,
  variant = 'orange',
  size = 'md',
  href,
  to,
  arrow,
  className = '',
  ...props
}) {
  const cls = `${s.btn} ${s[variant]} ${s[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
        {arrow && <span className={s.arr}>→</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
        {arrow && <span className={s.arr}>→</span>}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
      {arrow && <span className={s.arr}>→</span>}
    </button>
  );
}
