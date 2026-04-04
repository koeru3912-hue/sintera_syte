import { useReveal } from '../../hooks/useReveal';

export default function RevealBlock({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`rv ${isVisible ? 'in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
