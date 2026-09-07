import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type FilmSlide = { title: string; caption: string; src: string; poster: string };

export function VideoCarousel({ slides }: { slides: FilmSlide[] }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (step: number) => {
    setDir(step);
    setI((v) => (v + step + slides.length) % slides.length);
  };

  const s = slides[i]!;

  return (
    <div className="relative mt-12">
      <div className="glow-ring overflow-hidden rounded-xl border border-border bg-card">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={i}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.5, ease: [0.22, 0.65, 0.2, 1] }}
          >
            <video
              className="aspect-video w-full object-cover"
              src={s.src}
              poster={s.poster}
              controls
              playsInline
              preload="none"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4">
              <div className="min-w-0">
                <p className="truncate text-sm">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.caption}</p>
              </div>
              <p className="text-[0.6rem] tracking-[0.24em] text-gold uppercase">
                {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous video"
          className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-400 hover:border-gold hover:bg-accent hover:shadow-[var(--shadow-gold)]"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((sl, idx) => (
            <span
              key={sl.title}
              className={`h-[3px] rounded-full transition-all duration-400 ${
                idx === i ? "w-8 bg-gold" : "w-3 bg-gold/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next video"
          className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-400 hover:border-gold hover:bg-accent hover:shadow-[var(--shadow-gold)]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
