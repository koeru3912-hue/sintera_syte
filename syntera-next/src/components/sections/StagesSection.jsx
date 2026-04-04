'use client';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealBlock from '@/components/ui/RevealBlock';
import InlineLeadForm from '@/components/widgets/InlineLeadForm';
import s from './StagesSection.module.css';

const STAGES = [
  {
    n: '01',
    t: 'Аудит и проектирование системы',
    d: 'Анализируем путь клиента от первого обращения до визита. Выявляем точки потери заявок и денег. Фиксируем регламенты и скрипты.',
    r: 'Вы получаете чёткое понимание: где теряются деньги, что будет изменено и каким будет результат — до начала внедрения',
  },
  {
    n: '02',
    t: 'Внедрение технологии и регламентов',
    d: 'Подключаем все каналы связи. Автоматизируем обработку заявок, напоминания, подтверждения. Внедряем единые сценарии. Настраиваем CRM и МИС.',
    r: 'Заявки обрабатываются за 30–90 секунд, хаос в расписании исчезает, вы перестаёте быть «узким горлышком»',
  },
  {
    n: '03',
    t: 'Сопровождение и контроль результата',
    d: 'Сопровождаем систему после запуска. Оперативно вносим изменения под акции и новые услуги. Живая поддержка по телефону.',
    r: 'Система не просто внедрена — она работает, адаптируется и даёт стабильный управляемый результат',
  },
];

export default function StagesSection() {
  return (
    <section className="sec" id="stages">
      <div className="wrap">
        <SectionHeader label="Процесс">
          3 шага к <span className="or">загрузке 80%</span>
        </SectionHeader>

        <RevealBlock delay={0.16}>
          <div className={s.list}>
            {STAGES.map((stage) => (
              <div key={stage.n} className={s.row}>
                <div className={s.num}>{stage.n}</div>
                <div>
                  <div className={s.title}>{stage.t}</div>
                  <div className={s.desc}>{stage.d}</div>
                  <div className={s.result}>
                    → <strong>Результат:</strong> {stage.r}
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
    </section>
  );
}
