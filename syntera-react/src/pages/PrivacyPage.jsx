import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const sectionStyle = { marginBottom: 32 };
const h2Style = { fontSize: 20, fontWeight: 700, marginBottom: 12, color: 'var(--t)' };
const pStyle = { fontSize: 14, color: 'var(--t2)', lineHeight: 1.7, marginBottom: 12 };

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — Syntera</title>
      </Helmet>

      <div style={{ paddingTop: 104, paddingBottom: 80 }}>
        <div className="wrap" style={{ maxWidth: 800 }}>
          <Breadcrumbs items={[{ label: 'Политика конфиденциальности' }]} />

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: 32 }}>
            Политика конфиденциальности
          </h1>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Общие положения</h2>
            <p style={pStyle}>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта syntera.io (далее — «Сайт»), принадлежащего компании Syntera (далее — «Компания»).
            </p>
            <p style={pStyle}>
              Используя Сайт, вы соглашаетесь с условиями данной Политики. Если вы не согласны с условиями, пожалуйста, не используйте Сайт.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. Какие данные мы собираем</h2>
            <p style={pStyle}>Мы можем собирать следующие персональные данные:</p>
            <ul style={{ ...pStyle, paddingLeft: 20, listStyle: 'disc' }}>
              <li>Имя и контактные данные (телефон, email), предоставленные вами через формы на сайте</li>
              <li>Данные об использовании сайта (cookies, IP-адрес, тип браузера)</li>
              <li>Информация, предоставленная в переписке с нами</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Цели обработки данных</h2>
            <p style={pStyle}>Ваши данные используются для:</p>
            <ul style={{ ...pStyle, paddingLeft: 20, listStyle: 'disc' }}>
              <li>Связи с вами по вашим заявкам</li>
              <li>Предоставления информации о наших услугах</li>
              <li>Улучшения работы сайта и качества обслуживания</li>
              <li>Выполнения требований законодательства</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Защита данных</h2>
            <p style={pStyle}>
              Мы принимаем необходимые технические и организационные меры для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Передача данных третьим лицам</h2>
            <p style={pStyle}>
              Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством, или при вашем явном согласии.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Cookies</h2>
            <p style={pStyle}>
              Сайт использует cookies для улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера, однако это может повлиять на функциональность сайта.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Ваши права</h2>
            <p style={pStyle}>Вы имеете право:</p>
            <ul style={{ ...pStyle, paddingLeft: 20, listStyle: 'disc' }}>
              <li>Запросить информацию о хранящихся у нас ваших данных</li>
              <li>Потребовать исправления или удаления ваших данных</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
            <p style={pStyle}>
              Для реализации ваших прав свяжитесь с нами: hello@syntera.io
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Контакты</h2>
            <p style={pStyle}>
              По вопросам, связанным с обработкой персональных данных, обращайтесь:<br />
              Email: hello@syntera.io<br />
              Телефон: +48 459 568 780
            </p>
          </div>

          <p style={{ fontSize: 12, color: 'var(--t3)', marginTop: 32 }}>
            Последнее обновление: апрель 2026
          </p>
        </div>
      </div>
    </>
  );
}
