import { useAudience } from '../../context/AudienceContext';
import { STATS, RESULTS } from '../../data/audiences';
import SectionHeader from '../ui/SectionHeader';
import RevealBlock from '../ui/RevealBlock';
import InlineLeadForm from '../widgets/InlineLeadForm';
import s from './ResultsSection.module.css';

export default function ResultsSection() {
  const { audience } = useAudience();
  const stats = STATS[audience];
  const results = RESULTS[audience];

  return (
    <section className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <SectionHeader label="Результаты" center>
          9 из 10 клиентов — уже <span className="hl">в первый месяц</span>
        </SectionHeader>

        <RevealBlock delay={0.16}>
          <div className={s.statsRow}>
            {stats.map((stat, i) => (
              <div key={i} className={s.stat}>
                <div className={s.statNum}>{stat.n}</div>
                <div className={s.statDesc}>{stat.d}</div>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.24}>
          <div className={s.cardsGrid}>
            {results.map((r, i) => (
              <div key={i} className={s.card}>
                <div className={s.cardDot} />
                <div className={s.cardText}>{r}</div>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.32}>
          <InlineLeadForm />
        </RevealBlock>
      </div>
    </section>
  );
}
