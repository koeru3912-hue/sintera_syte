import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import RevealBlock from '../components/ui/RevealBlock';
import InlineLeadForm from '../components/widgets/InlineLeadForm';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blog';
import s from './BlogPostPage.module.css';

function renderMarkdown(text) {
  // Simple markdown-like rendering for blog content
  return text
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i}>{block.slice(3)}</h2>;
      }
      if (block.startsWith('### ')) {
        return <h3 key={i}>{block.slice(4)}</h3>;
      }
      if (block.startsWith('| ')) {
        const rows = block.split('\n').filter((r) => r.trim() && !r.match(/^\|[-\s|]+$/));
        const headers = rows[0]?.split('|').filter(Boolean).map((c) => c.trim());
        const body = rows.slice(1).map((r) => r.split('|').filter(Boolean).map((c) => c.trim()));
        return (
          <table key={i}>
            <thead>
              <tr>{headers?.map((h, j) => <th key={j}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        );
      }
      if (block.match(/^\d+\. /)) {
        const items = block.split('\n').map((line) => line.replace(/^\d+\.\s*/, ''));
        return <ol key={i}>{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />)}</ol>;
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').map((line) => line.replace(/^-\s*/, ''));
        return <ul key={i}>{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />)}</ul>;
      }
      return <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(block) }} />;
    });
}

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const categoryLabel = BLOG_CATEGORIES.find((c) => c.id === post.category)?.label;

  return (
    <>
      <Helmet>
        <title>{post.title} — Блог Syntera</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className={s.page}>
        <div className="wrap">
          <Breadcrumbs items={[
            { label: 'Блог', href: '/blog' },
            { label: post.title },
          ]} />

          <RevealBlock>
            <article className={s.article}>
              <div className={s.meta}>
                <span className={s.category}>{categoryLabel}</span>
                <span className={s.date}>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                <span className={s.readTime}>{post.readTime}</span>
              </div>

              <h1 className={s.title}>{post.title}</h1>
              <p className={s.excerpt}>{post.excerpt}</p>

              <img className={s.heroImg} src={post.img} alt={post.title} loading="lazy" />

              <div className={s.content}>
                {renderMarkdown(post.content)}
              </div>

              <div className={s.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={s.tag}>#{tag}</span>
                ))}
              </div>

              <InlineLeadForm />

              {related.length > 0 && (
                <div className={s.related}>
                  <div className={s.relatedTitle}>Читайте также</div>
                  <div className={s.relatedGrid}>
                    {related.map((r) => (
                      <Link key={r.slug} to={`/blog/${r.slug}`} className={s.relatedCard}>
                        <div className={s.relatedCardTitle}>{r.title}</div>
                        <div className={s.relatedCardMeta}>{r.readTime} · {new Date(r.date).toLocaleDateString('ru-RU')}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </RevealBlock>
        </div>
      </div>
    </>
  );
}
