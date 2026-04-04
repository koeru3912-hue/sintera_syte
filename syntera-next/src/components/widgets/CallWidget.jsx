'use client';
import { PHONE_HREF } from '@/data/navigation';
import s from './CallWidget.module.css';

export default function CallWidget() {
  return (
    <div className={s.widget}>
      <div className={s.bubble}>Позвонить прямо сейчас</div>
      <a href={PHONE_HREF} className={s.btn} title="Позвонить" aria-label="Позвонить">
        📞
      </a>
    </div>
  );
}
