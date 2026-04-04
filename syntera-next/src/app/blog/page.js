'use client';
import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import RevealBlock from '@/components/ui/RevealBlock';
import InlineLeadForm from '@/components/widgets/InlineLeadForm';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog';
import s from './page.module.css';

export default function BlogPage() {
  const [category, setCategory] = useState('all');
  const filtered = category === 'all' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <div className={s.page}>
      <div className="wrap">
        <Breadcrumbs items={[{ label: 'Блог' }]} />
        <RevealBlock><div className={s.header}><h1>Блог</h1><p>Статьи об автоматизации, ИИ и росте бизнеса</p></div></RevealBlock>
        <div className={s.categories}>
          {BLOG_CATEGORIES.map((cat) => (
            <button key={cat.id} className={`${s.catBtn} ${category === cat.id ? s.catBtnActive : ''}`} onClick={() => setCategory(cat.id)}>{cat.label}</button>
          ))}
        </div>
        <div className={s.grid}>
          {filtered.map((post) => (
            <RevealBlock key={post.slug}>
              <Link href={`/blog/${post.slug}`} className={s.card}>
                <img className={s.cardImg} src={post.img} alt={post.title} loading="lazy" />
                <div className={s.cardBody}>
                  <div className={s.cardMeta}>
                    <span className={s.cardCategory}>{BLOG_CATEGORIES.find((c) => c.id === post.category)?.label}</span>
                    <span className={s.cardDate}>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                    <span className={s.cardReadTime}>{post.readTime}</span>
                  </div>
                  <div className={s.cardTitle}>{post.title}</div>
                  <div className={s.cardExcerpt}>{post.excerpt}</div>
                  <div className={s.cardTags}>{post.tags.map((tag) => <span key={tag} className={s.tag}>#{tag}</span>)}</div>
                </div>
              </Link>
            </RevealBlock>
          ))}
        </div>
        <InlineLeadForm />
      </div>
    </div>
  );
}
