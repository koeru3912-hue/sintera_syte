import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata = { title: 'Политика конфиденциальности — Syntera' };

const h2s = { fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--t)' };
const ps = { fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, marginBottom: 12 };

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 104, paddingBottom: 80 }}>
      <div className="wrap" style={{ maxWidth: 800 }}>
        <Breadcrumbs items={[{ label: 'Политика конфиденциальности' }]} />
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 32 }}>Политика конфиденциальности</h1>

        <div style={{ marginBottom: 32 }}><h2 style={h2s}>1. Общие положения</h2><p style={ps}>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта syntera.io.</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>2. Какие данные мы собираем</h2><p style={ps}>Имя и контактные данные (телефон, email), данные об использовании сайта (cookies, IP-адрес), информация из переписки.</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>3. Цели обработки</h2><p style={ps}>Связь с вами, предоставление информации об услугах, улучшение работы сайта, выполнение требований законодательства.</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>4. Защита данных</h2><p style={ps}>Мы принимаем необходимые технические и организационные меры для защиты ваших данных.</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>5. Передача третьим лицам</h2><p style={ps}>Мы не продаём и не передаём ваши данные третьим лицам, за исключением случаев, предусмотренных законодательством.</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>6. Cookies</h2><p style={ps}>Сайт использует cookies для улучшения пользовательского опыта.</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>7. Ваши права</h2><p style={ps}>Вы можете запросить информацию о ваших данных, потребовать исправления или удаления. Свяжитесь с нами: hello@syntera.io</p></div>
        <div style={{ marginBottom: 32 }}><h2 style={h2s}>8. Контакты</h2><p style={ps}>Email: hello@syntera.io · Телефон: +48 459 568 780</p></div>
        <p style={{ fontSize: 12, color: 'var(--t3)' }}>Последнее обновление: апрель 2026</p>
      </div>
    </div>
  );
}
