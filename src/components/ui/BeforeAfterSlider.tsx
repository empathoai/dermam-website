import { MouseEvent, PointerEvent, TouchEvent, useRef, useState } from 'react';
import ResponsiveImage from './ResponsiveImage';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = '',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    updatePosition(event.clientX);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;
    updatePosition(event.clientX);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    updatePosition(touch.clientX);
  };

  return (
    <div
      ref={frameRef}
      data-before-after-slider
      className={`group relative aspect-[4/3] overflow-hidden rounded-[1rem] border border-border-soft bg-base-900 shadow-xl touch-none select-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onMouseDown={(event) => updatePosition(event.clientX)}
      onMouseMove={handleMouseMove}
      onTouchStart={(event) => handleTouchMove(event)}
      onTouchMove={handleTouchMove}
    >
      <ResponsiveImage
        src={afterSrc}
        alt={afterAlt}
        width={960}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ResponsiveImage
          src={beforeSrc}
          alt={beforeAlt}
          width={960}
          height={720}
          className="h-full w-full object-cover"
        />
      </div>

      <span className="absolute left-4 top-4 rounded bg-base-900/75 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-base-100 backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute right-4 top-4 rounded bg-base-900/75 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-base-100 backdrop-blur-sm">
        Después
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-base-100/90 shadow-[0_0_16px_rgba(20,19,19,0.35)]"
        style={{ left: `${position}%` }}
      />

      <div
        className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-base-100/20 bg-base-900 text-base-100 shadow-xl transition-transform duration-300 group-hover:scale-105"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="h-5 w-px bg-base-100/70" />
        <span className="mx-1.5 h-5 w-px bg-base-100/70" />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        onInput={(event) => setPosition(Number(event.currentTarget.value))}
        aria-label="Comparar imagen antes y después"
        className="pointer-events-none absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
