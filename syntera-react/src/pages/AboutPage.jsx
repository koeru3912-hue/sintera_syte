import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';
import RevealBlock from '../components/ui/RevealBlock';
import s from './AboutPage.module.css';

const VALUES = [
  { icon: '🎯', title: 'Результат, а не процесс', desc: 'Мы измеряем успех загрузкой вашей клиники, а не количеством отчётов. Гарантия результата — в договоре.' },
  { icon: '🤝', title: 'Партнёрство', desc: 'Не «внедрили и забыли». Сопровождаем систему, адаптируем под ваши акции и изменения. Живая поддержка по телефону.' },
  { icon: '🔬', title: 'Технологии с умом', desc: 'Используем ИИ там, где он реально помогает. Не усложняем ради модного слова — упрощаем вашу работу.' },
];

const TEAM = [
  { name: 'Алексей Петров', role: 'CEO & Основатель', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&crop=face' },
  { name: 'Мария Соколова', role: 'Руководитель внедрения', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fit=crop&crop=face' },
  { name: 'Дмитрий Ким', role: 'Технический директор', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&fit=crop&crop=face' },
];

const STATS = [
  { n: '50+', l: 'Клиентов' },
  { n: '3', l: 'Страны' },
  { n: '80%', l: 'Средняя загрузка' },
  { n: '24/7', l: 'Поддержка' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>О компании — Syntera</title>
        <meta name="description" content="Syntera — команда, которая создаёт ИИ-системы записи клиентов для клиник, медцентров и салонов красоты." />
      </Helmet>

      <div className={s.page}>
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'О компании' }]} />

          <RevealBlock>
            <div className={s.hero}>
              <h1>Мы делаем так, чтобы ваши клиенты <span style={{ color: 'var(--blue)' }}>не терялись</span></h1>
              <p>Syntera — это команда разработчиков, маркетологов и специалистов по автоматизации. Мы создаём ИИ-системы, которые записывают клиентов 24/7, без выходных и человеческого фактора.</p>
            </div>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <div className={s.values}>
              {VALUES.map((v, i) => (
                <div key={i} className={s.value}>
                  <div className={s.valueIcon}>{v.icon}</div>
                  <div className={s.valueTitle}>{v.title}</div>
                  <div className={s.valueDesc}>{v.desc}</div>
                </div>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock delay={0.15}>
            <div className={s.stats}>
              {STATS.map((stat, i) => (
                <div key={i} className={s.stat}>
                  <div className={s.statNum}>{stat.n}</div>
                  <div className={s.statLabel}>{stat.l}</div>
                </div>
              ))}
            </div>
          </RevealBlock>

          <RevealBlock delay={0.2}>
            <div className={s.team}>
              <h2 className={s.teamTitle}>Команда</h2>
              <div className={s.teamGrid}>
                {TEAM.map((m, i) => (
                  <div key={i} className={s.member}>
                    <img className={s.memberPhoto} src={m.photo} alt={m.name} loading="lazy" />
                    <div className={s.memberName}>{m.name}</div>
                    <div className={s.memberRole}>{m.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealBlock>

          <RevealBlock delay={0.25}>
            <div className={s.cta}>
              <h2>Готовы начать?</h2>
              <p>Получите бесплатный аудит вашего бизнеса — покажем, где теряются клиенты</p>
              <Button to="/#cta" variant="orange" arrow>Получить аудит</Button>
            </div>
          </RevealBlock>
        </div>
      </div>
    </>
  );
}
