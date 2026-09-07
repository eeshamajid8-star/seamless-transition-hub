import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type HeroSlide = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  eyebrow: string;
  line1: string;
  line2: string;
  sub: string;
};

export function HeroSlider({
  slides,
  interval = 6500,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % slides.length), interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  const slide = slides[i]!;

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 0.65, 0.2, 1] }}
          className="absolute inset-0"
        >
          {slide.kind === "image" ? (
            <img
              src={slide.src}
              alt={`${slide.line1} ${slide.line2}`}
              className="size-full object-cover object-top"
            />
          ) : (
            <video
              src={slide.src}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              className="size-full object-cover object-center"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 to-background/45" />

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.7, ease: [0.22, 0.65, 0.2, 1] }}
          >
            <p className="eyebrow">{slide.eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-[2.75rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-gold-gradient block">{slide.line1}</span>
              <span className="text-gold-gradient block">{slide.line2}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {slide.sub}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-7 flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.line1 + idx}
              onClick={() => setI(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === i ? "w-9 bg-gold" : "w-4 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
