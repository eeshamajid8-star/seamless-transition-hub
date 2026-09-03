import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
};

export function CompareSlider({ before, after, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-4/5 w-full touch-none overflow-hidden rounded-lg select-none"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDragging(true);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging && move(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      <img
        src={after}
        alt={`${alt} — after`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          loading="lazy"
          className="size-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 rounded-sm bg-ink/70 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] text-foreground uppercase backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-sm bg-ink/70 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-gold shadow-[0_0_18px_2px_color-mix(in_oklab,var(--gold)_60%,transparent)]"
        style={{
          left: `${pos}%`,
          transition: dragging ? "none" : "left 0.35s cubic-bezier(.22,.65,.2,1)",
        }}
      >
        <div
          className={`absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-ink/85 text-gold backdrop-blur-sm transition-transform duration-300 ${
            dragging ? "scale-110" : ""
          }`}
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor">
            <path d="M10 7 5 12l5 5M14 7l5 5-5 5" strokeWidth="1.6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
