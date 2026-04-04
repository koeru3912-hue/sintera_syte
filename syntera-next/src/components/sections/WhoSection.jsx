'use client';
import { useAudience } from '@/context/AudienceContext';
import { AUD, PAINS } from '@/data/audiences';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealBlock from '@/components/ui/RevealBlock';
import InlineLeadForm from '@/components/widgets/InlineLeadForm';
import s from './WhoSection.module.css';

export default function WhoSection() {
  const { audience, setAudience } = useAudience();

  return (
    <section className="sec" id="who">
      <div className="wrap">
        <SectionHeader label="Для кого">
          Узнаёте <span className="hl">себя?</span>
        </SectionHeader>

        <RevealBlock delay={0.16}>
          <div className={s.grid}>
            {AUD.map((a) => (
              <div
                key={a.id}
                className={`${s.card} ${audience === a.id ? s.cardActive : ''}`}
                onClick={() => setAudience(a.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setAudience(a.id)}
              >
                <div className={s.icon}>{a.emoji}</div>
                <div className={s.title}>{a.label}</div>
                <ul className={s.pains}>
                  {PAINS[a.id].map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.24}>
          <div className={s.note}>
            <strong>Проблема не в администраторах и не в рекламе.</strong> Проблема — в отсутствии единой системы. Нет сценария, нет автоконтроля, нет связки каналов с CRM. Результат — замкнутый круг: <em style={{ color: 'var(--orange)', fontStyle: 'normal', fontWeight: 600 }}>реклама → заявки → хаос → разочарование → ещё больше контроля</em>.
          </div>
        </RevealBlock>

        <RevealBlock delay={0.32}>
          <InlineLeadForm />
        </RevealBlock>
      </div>
    </section>
  );
}
