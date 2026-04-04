'use client';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealBlock from '@/components/ui/RevealBlock';
import InlineLeadForm from '@/components/widgets/InlineLeadForm';
import s from './PricingSection.module.css';

const BREAKDOWN = [
  { n: '01', t: 'Аудит и проектирование', d: 'Анализируем путь клиента, выявляем точки потери заявок и денег, формируем понятный план внедрения.', b: '✓ Вы заранее знаете, где теряются деньги — никакой «работы вслепую»' },
  { n: '02', t: 'Внедрение технологии', d: 'Подключаем все каналы связи, автоматизируем заявки, напоминания, подтверждения, переносы, передачу в CRM.', b: '✓ Каждая заявка — по единому стандарту, без сбоев и забывчивости' },
  { n: '03', t: 'Регламенты и сценарии', d: 'Единые сценарии общения с клиентами, стандарты обработки сложных запросов, обновляемая база знаний.', b: '✓ Результат не зависит от конкретного администратора' },
  { n: '04', t: 'Сопровождение и поддержка', d: 'Сопровождение после запуска, изменения под акции и услуги, живая поддержка по телефону.', b: '✓ Система постоянно в рабочем состоянии — не «брошена» после запуска' },
];

export default function PricingSection() {
  return (
    <section className="sec" id="price" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <SectionHeader label="Состав продукта">
          Что входит<br /><span className="hl">в стоимость</span>
        </SectionHeader>

        <RevealBlock delay={0.16}>
          <div className={s.bdGrid}>
            {BREAKDOWN.map((item) => (
              <div key={item.n} className={s.bdCard}>
                <div className={s.bdNum}>{item.n}</div>
                <div className={s.bdTitle}>{item.t}</div>
                <div className={s.bdDesc}>{item.d}</div>
                <div className={s.bdBenefit}>{item.b}</div>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.24}>
          <div className={s.pricingRow}>
            <div className={s.priceCard}>
              <div className={s.priceName}>Пакет 1</div>
              <div className={s.priceDesc}>Базовая система коммуникации</div>
              <div className={s.priceAmount}>200 000 ₽</div>
              <div className={s.priceSub}>Абонентская плата: 35 000 ₽ / мес</div>
              <a href="#cta" className={`${s.priceCta} ${s.priceCtaGhost}`}>Получить аудит →</a>
            </div>
            <div className={`${s.priceCard} ${s.priceCardFeatured}`}>
              <div className={s.badge}>Рекомендуем</div>
              <div className={s.priceName}>Пакет 2</div>
              <div className={s.priceDesc}>Базовая система + Голосовой помощник</div>
              <div className={s.priceAmount}>450 000 ₽</div>
              <div className={s.priceSub}>Абонентская плата: 70 000 ₽ / мес</div>
              <a href="#cta" className={`${s.priceCta} ${s.priceCtaPrimary}`}>Получить аудит →</a>
            </div>
          </div>
          <div className={s.priceNote}>Поэтапная оплата · Договор · Гарантия результата</div>
        </RevealBlock>

        <RevealBlock delay={0.32}>
          <InlineLeadForm />
        </RevealBlock>
      </div>
    </section>
  );
}
