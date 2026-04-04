import { useScrollTop } from '../../hooks/useScrollTop';
import s from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const { show, scrollToTop } = useScrollTop();

  return (
    <button
      className={`${s.btn} ${show ? s.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Наверх"
      title="Наверх"
    >
      ↑
    </button>
  );
}
