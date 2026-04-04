'use client';
import { TICK } from '@/data/ticker';
import s from './Ticker.module.css';

export default function Ticker() {
  const items = [...TICK, ...TICK];

  return (
    <div className={s.wrapper} aria-hidden="true">
      <div className={s.track}>
        {items.map((t, i) => (
          <span key={i} className={s.item}>
            <span className={s.sep}>·</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
