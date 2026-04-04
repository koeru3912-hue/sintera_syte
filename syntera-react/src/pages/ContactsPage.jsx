import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import RevealBlock from '../components/ui/RevealBlock';
import ContactForm from '../components/widgets/ContactForm';
import { PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '../data/navigation';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Контакты — Syntera</title>
        <meta name="description" content="Свяжитесь с Syntera: телефон, Telegram, WhatsApp. Бесплатный аудит вашего бизнеса." />
      </Helmet>

      <div className={s.page}>
        <div className="wrap">
          <Breadcrumbs items={[{ label: 'Контакты' }]} />

          <div className={s.grid}>
            <RevealBlock>
              <div className={s.info}>
                <h1>Свяжитесь с нами</h1>
                <p className={s.subtitle}>
                  Расскажите о вашей ситуации — мы подберём решение и проведём бесплатный аудит.
                  Отвечаем в течение 24 часов.
                </p>

                <div className={s.contacts}>
                  <div className={s.contactItem}>
                    <div className={s.contactIcon}>📞</div>
                    <div>
                      <div className={s.contactLabel}>Телефон</div>
                      <div className={s.contactValue}>
                        <a href={PHONE_HREF}>{PHONE}</a>
                      </div>
                    </div>
                  </div>

                  <div className={s.contactItem}>
                    <div className={s.contactIcon}>✉️</div>
                    <div>
                      <div className={s.contactLabel}>Email</div>
                      <div className={s.contactValue}>
                        <a href="mailto:hello@syntera.io">hello@syntera.io</a>
                      </div>
                    </div>
                  </div>

                  <div className={s.contactItem}>
                    <div className={s.contactIcon}>📍</div>
                    <div>
                      <div className={s.contactLabel}>Офис</div>
                      <div className={s.contactValue}>Варшава, Польша</div>
                    </div>
                  </div>
                </div>

                <div className={s.messengers}>
                  <a href={TELEGRAM_URL} className={s.messenger} target="_blank" rel="noopener noreferrer">
                    ✈️ Telegram
                  </a>
                  <a href={WHATSAPP_URL} className={s.messenger} target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp
                  </a>
                </div>

                <div className={s.schedule}>
                  <strong>График работы:</strong><br />
                  Пн — Пт: 9:00 — 18:00 (CET)<br />
                  Сб — Вс: обработка заявок в автоматическом режиме
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.15}>
              <div className={s.formCard}>
                <ContactForm
                  title="Оставить заявку"
                  subtitle="Заполните форму, и мы свяжемся с вами для бесплатной консультации"
                  showName
                  showMessage
                />
              </div>
            </RevealBlock>
          </div>

          <RevealBlock delay={0.2}>
            <div className={s.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438458428!2d20.8506776!3d52.2329869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2s!4v1680000000000"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Офис Syntera на карте"
              />
            </div>
          </RevealBlock>
        </div>
      </div>
    </>
  );
}
