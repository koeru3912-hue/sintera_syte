import { useState } from 'react';
import { CASES } from '../../data/cases';
import SectionHeader from '../ui/SectionHeader';
import RevealBlock from '../ui/RevealBlock';
import Modal from '../ui/Modal';
import InlineLeadForm from '../widgets/InlineLeadForm';
import s from './CasesSection.module.css';

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <section className="sec" id="cases">
      <div className="wrap">
        <SectionHeader label="Кейсы">
          По 2 кейса в каждой<br /><span className="hl">из трёх ниш</span>
        </SectionHeader>

        <RevealBlock delay={0.16}>
          <div className={s.grid}>
            {CASES.map((c, i) => (
              <div
                key={i}
                className={s.card}
                onClick={() => setActiveCase(c)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveCase(c)}
              >
                <img className={s.img} src={c.img} alt={c.title} loading="lazy" />
                <div className={s.body}>
                  <div className={s.loc}>{c.loc}</div>
                  <div className={s.niche}>{c.niche}</div>
                  <div className={s.title}>{c.title}</div>
                  <div className={s.metrics}>
                    {c.metrics.map((m, j) => (
                      <div key={j} className={s.metric}>
                        <strong>{m.v}</strong>
                        <span>{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.24}>
          <InlineLeadForm />
        </RevealBlock>
      </div>

      <Modal open={!!activeCase} onClose={() => setActiveCase(null)}>
        {activeCase && (
          <>
            <div className={s.modalNiche}>{activeCase.niche}</div>
            <div className={s.modalLoc}>{activeCase.loc}</div>
            <h3 className={s.modalTitle}>{activeCase.title}</h3>
            <div className={s.block}>
              <div className={s.blockLabel}>Проблема</div>
              <p>{activeCase.problem}</p>
            </div>
            <div className={s.block}>
              <div className={s.blockLabel}>Решение</div>
              <p>{activeCase.solution}</p>
            </div>
            <div className={s.block}>
              <div className={s.blockLabel}>Результаты</div>
              <div className={s.chips}>
                {activeCase.metrics.map((m, i) => (
                  <span key={i} className={s.chip}>{m.l}: {m.v}</span>
                ))}
              </div>
            </div>
            <div className={s.block}>
              <div className={s.blockLabel}>Технологии</div>
              <p>{activeCase.tech}</p>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
