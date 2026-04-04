import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className={s.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={s.modal} role="dialog" aria-modal="true">
        <button className={s.close} onClick={onClose} aria-label="Закрыть">✕</button>
        {children}
      </div>
    </div>,
    document.body
  );
}
