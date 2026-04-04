'use client';
import { useTranslation } from 'react-i18next';
import Button from '@/components/ui/Button';
import InlineLeadForm from '@/components/widgets/InlineLeadForm';
import { PHONE, PHONE_HREF } from '@/data/navigation';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, maxWidth: 600, margin: '0 auto', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
      <div style={{ fontSize: 72, fontWeight: 800, color: 'var(--blue)', letterSpacing: -3 }}>404</div>
      <h1 style={{ fontSize: 24, fontWeight: 700 }}>{t('notFound.title')}</h1>
      <p style={{ color: 'var(--t2)', lineHeight: 1.6 }}>{t('notFound.text')}</p>
      <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button to="/" variant="orange">{t('notFound.home')}</Button>
        <Button to="/contacts" variant="ghost">{t('nav.contacts')}</Button>
        <Button to="/blog" variant="ghost">{t('footer.blog')}</Button>
      </nav>
      <p style={{ color: 'var(--t3)', fontSize: 13 }}>{t('notFound.callUs')} <a href={PHONE_HREF} style={{ color: 'var(--blue)', fontWeight: 600 }}>{PHONE}</a></p>
      <InlineLeadForm />
    </div>
  );
}
