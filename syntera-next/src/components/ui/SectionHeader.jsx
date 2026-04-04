import RevealBlock from './RevealBlock';

export default function SectionHeader({ label, children, center = false }) {
  const style = center ? { textAlign: 'center' } : undefined;

  return (
    <>
      <RevealBlock>
        <div className="lbl" style={style}>{label}</div>
      </RevealBlock>
      <RevealBlock delay={0.08}>
        <div className="ttl" style={style}>{children}</div>
      </RevealBlock>
    </>
  );
}
