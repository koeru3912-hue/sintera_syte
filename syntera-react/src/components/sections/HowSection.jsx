import SectionHeader from '../ui/SectionHeader';
import RevealBlock from '../ui/RevealBlock';
import InlineLeadForm from '../widgets/InlineLeadForm';
import s from './HowSection.module.css';

const STEPS = [
  { n: '01', t: 'Аудит точек потери', d: 'Анализируем путь клиента от первого обращения до визита. Находим, где именно уходят деньги — до начала внедрения.' },
  { n: '02', t: 'Ответ за 30–90 секунд', d: 'Каждая заявка — по единому сценарию, без «забыли» и «не успели». 24/7 по всем каналам.' },
  { n: '03', t: 'Напоминания и «дожимы»', d: 'Автоподтверждения, напоминание за день и за час. Тёплые лиды не теряются из-за отсутствия обратной связи.' },
  { n: '04', t: 'Прозрачная аналитика', d: 'Видите: что происходит с заявками, где теряются клиенты, какие рекламные каналы реально работают.' },
  { n: '05', t: 'Единый контур + CRM/МИС', d: 'Все каналы — в одном окне. Данные автоматически уходят в вашу CRM и МИС без ручного труда.' },
  { n: '06', t: 'Живая поддержка по тел.', d: 'В критической ситуации отвечает живой человек, а не бот и не тикет-система.' },
];

export default function HowSection() {
  return (
    <section className="sec" id="how" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <SectionHeader label="Как это работает">
          Система берёт на себя<br /><span className="hl">всю рутину записи</span>
        </SectionHeader>

        <RevealBlock delay={0.16}>
          <div className={s.grid}>
            {STEPS.map((step) => (
              <div key={step.n} className={s.card}>
                <div className={s.num}>{step.n}</div>
                <div className={s.title}>{step.t}</div>
                <div className={s.desc}>{step.d}</div>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.24}>
          <InlineLeadForm />
        </RevealBlock>
      </div>
    </section>
  );
}
