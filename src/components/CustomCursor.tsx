import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const orbPosRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleEnterLink = () => {
      if (orbRef.current) {
        orbRef.current.style.width = '40px';
        orbRef.current.style.height = '40px';
        orbRef.current.style.opacity = '0.6';
      }
    };

    const handleLeaveLink = () => {
      if (orbRef.current) {
        orbRef.current.style.width = '20px';
        orbRef.current.style.height = '20px';
        orbRef.current.style.opacity = '0.8';
      }
    };

    const animateOrb = () => {
      orbPosRef.current.x += (posRef.current.x - orbPosRef.current.x) * 0.12;
      orbPosRef.current.y += (posRef.current.y - orbPosRef.current.y) * 0.12;

      if (orbRef.current) {
        orbRef.current.style.left = `${orbPosRef.current.x}px`;
        orbRef.current.style.top = `${orbPosRef.current.y}px`;
      }

      animRef.current = requestAnimationFrame(animateOrb);
    };

    document.addEventListener('mousemove', handleMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleEnterLink);
      el.addEventListener('mouseleave', handleLeaveLink);
    });

    animRef.current = requestAnimationFrame(animateOrb);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      <div ref={orbRef} className="cursor-orb" style={{ opacity: 0.8 }} />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
