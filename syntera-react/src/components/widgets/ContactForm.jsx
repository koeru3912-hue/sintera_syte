import { useState } from 'react';
import Button from '../ui/Button';
import s from './ContactForm.module.css';

function validatePhone(phone) {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.length < 7) return 'Введите корректный номер телефона';
  return '';
}

function validateName(name) {
  if (name.trim().length < 2) return 'Введите ваше имя';
  return '';
}

export default function ContactForm({ showName = true, showMessage = false, title, subtitle }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = field === 'phone' ? validatePhone(form.phone)
      : field === 'name' ? validateName(form.name)
      : '';
    if (err) setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    newErrors.phone = validatePhone(form.phone);
    if (showName) newErrors.name = validateName(form.name);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setErrors(newErrors);
      setTouched({ name: true, phone: true, message: true });
      return;
    }

    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={s.success}>
        <div className={s.successIcon}>✅</div>
        <div className={s.successTitle}>Заявка принята!</div>
        <div className={s.successText}>Свяжемся с вами в течение 24 часов. Проверьте телефон — мы позвоним или напишем в мессенджер.</div>
      </div>
    );
  }

  const getInputCls = (field) => {
    let cls = s.input;
    if (field === 'message') cls += ` ${s.textarea}`;
    if (touched[field] && errors[field]) cls += ` ${s.inputError}`;
    else if (touched[field] && !errors[field] && form[field]) cls += ` ${s.inputValid}`;
    return cls;
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      {title && <div className={s.title}>{title}</div>}
      {subtitle && <div className={s.subtitle}>{subtitle}</div>}

      {showName && (
        <div className={s.field}>
          <label className={s.label}>
            Имя <span className={s.required}>*</span>
          </label>
          <input
            className={getInputCls('name')}
            type="text"
            placeholder="Как к вам обращаться"
            value={form.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            required
          />
          {touched.name && errors.name && <div className={s.error}>{errors.name}</div>}
        </div>
      )}

      <div className={s.field}>
        <label className={s.label}>
          Телефон <span className={s.required}>*</span>
        </label>
        <input
          className={getInputCls('phone')}
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={form.phone}
          onChange={handleChange('phone')}
          onBlur={handleBlur('phone')}
          required
        />
        {touched.phone && errors.phone && <div className={s.error}>{errors.phone}</div>}
      </div>

      {showMessage && (
        <div className={s.field}>
          <label className={s.label}>Сообщение</label>
          <textarea
            className={getInputCls('message')}
            placeholder="Расскажите о вашей ситуации"
            value={form.message}
            onChange={handleChange('message')}
            rows={4}
          />
        </div>
      )}

      <Button
        type="submit"
        variant="orange"
        size="md"
        className={s.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
      </Button>

      <div className={s.guarantee}>🔒 Конфиденциально · Без обязательств · Ответим за 24 часа</div>
    </form>
  );
}
