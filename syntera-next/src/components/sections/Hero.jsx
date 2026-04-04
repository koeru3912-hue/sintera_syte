'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAudience } from '@/context/AudienceContext';
import { AUD, HERO } from '@/data/audiences';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import s from './Hero.module.css';

export default function Hero() {
  const { audience, setAudience } = useAudience();
  const data = HERO[audience];
  const { status, submit } = useFormSubmit();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(phone);
  };

  return (
    <section className={s.hero}>
      <div className={`${s.deco} ${s.deco1}`} />
      <div className={`${s.deco} ${s.deco2}`} />
      <div className={`${s.deco} ${s.deco3}`} />

      <div className={s.body}>
        {/* Left column */}
        <div className={s.left}>
          <div className={s.tabs}>
            {AUD.map((a) => (
              <button
                key={a.id}
                className={`${s.tab} ${audience === a.id ? s.tabActive : ''}`}
                onClick={() => setAudience(a.id)}
              >
                {a.emoji} {a.label}
              </button>
            ))}
          </div>

          <div className={s.eyebrow}>{t('hero.eyebrow')}</div>

          <h1
            className={s.h1}
            dangerouslySetInnerHTML={{ __html: data.h1 }}
          />

          <p className={s.sub}>{data.sub}</p>

          {/* Big lead form */}
          {status === 'success' ? (
            <div className={s.success}>
              {t('hero.success')}
            </div>
          ) : (
            <form className={s.bigForm} onSubmit={handleSubmit}>
              <div className={s.bigFormTitle}>{t('hero.formLabel')}</div>
              <div className={s.bigFormSub}>{t('hero.formSublabel')}</div>

              <div className={s.bigFormFields}>
                <div className={s.fieldGroup}>
                  <label className={s.fieldLabel}>{t('contactForm.name')} *</label>
                  <input
                    className={s.bigInput}
                    type="text"
                    placeholder={t('contactForm.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className={s.fieldGroup}>
                  <label className={s.fieldLabel}>{t('contactForm.phone')} *</label>
                  <input
                    className={s.bigInput}
                    type="tel"
                    placeholder={t('hero.phonePlaceholder')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                className={s.bigSubmit}
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? t('hero.submitting') : t('hero.submit')}
                <span className={s.submitArr}>→</span>
              </button>

              <div className={s.guarantee}>{t('hero.guarantee')}</div>
              <div className={s.urgency}>
                <span className={s.urgencyDot} />
                <span dangerouslySetInnerHTML={{ __html: t('hero.urgency') }} />
              </div>
            </form>
          )}
        </div>

        {/* Right column */}
        <div className={s.right}>
          <div className={s.proofCard}>
            <div className={s.proofTop}>
              <img className={s.proofAvatar} src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&q=80&fit=crop&crop=face" alt="Анна Ковалевская" loading="lazy" />
              <div>
                <div className={s.proofName}>Анна Ковалевская</div>
                <div className={s.proofRole}>Владелец WHITE-DENTAL, Варшава</div>
              </div>
            </div>
            <div className={s.proofText}>«Перестала тушить пожары с администраторами. Система сама записывает, напоминает и возвращает пациентов. За первый месяц — плюс 23 новых записи.»</div>
            <div className={s.proofMetric}>📈 Загрузка выросла с 40% до 74%</div>
          </div>

          <div className={s.statsGrid}>
            {data.stats.map((stat, i) => (
              <div key={i} className={s.stat}>
                <div className={s.statNum}>{stat.n}</div>
                <div className={s.statLabel}>{stat.l}</div>
              </div>
            ))}
          </div>

          <div className={s.proofCard}>
            <div className={s.proofTop}>
              <img className={s.proofAvatar} src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80&fit=crop&crop=face" alt="Мария Лейтан" loading="lazy" />
              <div>
                <div className={s.proofName}>Мария Лейтан</div>
                <div className={s.proofRole}>Владелец Glam Studio, Прага</div>
              </div>
            </div>
            <div className={s.proofText}>«60% клиентов, которые не приходили больше 2 месяцев, вернулись после автоматической реактивации. Это просто магия.»</div>
            <div className={s.proofMetric}>💰 Средний чек вырос на 25%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
