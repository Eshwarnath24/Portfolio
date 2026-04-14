import React, { useEffect, useState } from 'react';

const CustomCursor = ({ isDark }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateEnabled = () => setIsEnabled(mediaQuery.matches);

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    document.body.style.cursor = 'none';

    const onPointerMove = (event) => {
      if (!(event.target instanceof Element)) return;
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);

      const target = event.target;
      const isClickable =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        ['button', 'a', 'input', 'select', 'textarea'].includes(target.tagName.toLowerCase());

      setIsHovering(!!isClickable);
    };

    const onPointerLeave = () => {
      setIsVisible(false);
      setIsPressed(false);
      setIsHovering(false);
    };

    const onPointerDown = (event) => {
      if (event.button !== 0) return;
      setIsPressed(true);
    };
    const onPointerUp = () => setIsPressed(false);
    const onBlur = () => {
      setIsVisible(false);
      setIsPressed(false);
      setIsHovering(false);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('mouseleave', onPointerLeave);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('blur', onBlur);

    return () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('mouseleave', onPointerLeave);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('blur', onBlur);
    };
  }, [isEnabled]);

  if (!isEnabled || !isVisible) return null;

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isPressed ? 0.8 : 1})`,
          backgroundColor: isDark ? '#fff' : '#4f46e5',
        }}
      />

      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isPressed ? 0.8 : isHovering ? 1.5 : 1
          })`,
          opacity: isPressed ? 0.4 : isHovering ? 0.3 : 0.5,
          borderColor: isDark ? '#818cf8' : '#4f46e5',
          backgroundColor: isHovering
            ? isDark
              ? 'rgba(129, 140, 248, 0.2)'
              : 'rgba(79, 70, 229, 0.1)'
            : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
