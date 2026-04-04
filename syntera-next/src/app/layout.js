import Providers from '@/components/Providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/global.css';

export const metadata = {
  title: 'Syntera — ИИ-система записи клиентов',
  description: 'Загрузка клиники до 80% за 3 месяца. ИИ-менеджер записывает клиентов 24/7, отвечает за 30 секунд.',
  openGraph: {
    title: 'Syntera — ИИ-система записи клиентов',
    description: 'Внедряем ИИ-менеджера «под ключ» с гарантией результата.',
    url: 'https://syntera.io',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#5B8AFF" />
      </head>
      <body>
        <Providers>
          <a href="#main" className="skip-link">Перейти к содержимому</a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
