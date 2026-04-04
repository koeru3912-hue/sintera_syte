import { useState } from 'react';
import { useAudience } from '../../context/AudienceContext';
import { CTA_DATA } from '../../data/audiences';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import RevealBlock from '../ui/RevealBlock';
import s from './CTASection.module.css';

export default function CTASection() {
  const { audience } = useAudience();
  const data = CTA_DATA[audience];
  const { status, submit } = useFormSubmit();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(phone);
  };

  return (
    <section className={s.wrapper} id="cta">
      <RevealBlock>
        <div className={s.block}>
          <div style={{ position: 'relative' }}>
            <div className={s.label}>Бесплатный аудит</div>
            <h2 className={s.heading}>{data.h}</h2>
            <p className={s.text}>{data.p}</p>

            {status === 'success' ? (
              <div className={s.success}>✓ Заявка принята! Свяжемся в ближайшее время.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={s.formRow}>
                  <input
                    className={s.input}
                    type="tel"
                    placeholder="Ваш номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-label="Номер телефона"
                  />
                  <button className={s.btn} type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Отправка...' : `${data.btn} →`}
                  </button>
                </div>
                <div className={s.hint}>{data.hint}</div>
              </form>
            )}
          </div>
        </div>
      </RevealBlock>
    </section>
  );
}
