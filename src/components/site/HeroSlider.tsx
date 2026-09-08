import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type HeroSlide = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  eyebrow?: string;
  line1?: string;
  line2?: string;
  sub?: string;
};

export function HeroSlider({
  slides,
  interval = 7000,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % slides.length), interval);
    return () => window.clearInterval(id);
  }, [slides.length, interval]);

  const slide = slides[i];
  if (!slide) return null;
  const hasText = Boolean(slide.eyebrow || slide.line1 || slide.sub);

  return (
    <>
      {/* media — slow ken-burns drift with a soft blurred crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.12, filter: "blur(12px)", clipPath: "inset(2% 0 2% 0)" }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "inset(0% 0 0% 0)",
            transition: { duration: 1.8, ease: [0.16, 0.84, 0.24, 1] },
          }}
          exit={{
            opacity: 0,
            scale: 0.985,
            filter: "blur(10px)",
            clipPath: "inset(1% 0 1% 0)",
            transition: { duration: 1.15, ease: [0.5, 0, 0.75, 0] },
          }}
          className="absolute inset-0"
        >
          {slide.kind === "image" ? (
            <motion.img
              src={slide.src}
              alt={slide.line1 ? `${slide.line1} ${slide.line2 ?? ""}` : "WBSK clinic"}
              className="size-full object-cover object-top"
              animate={{ scale: [1, 1.065], x: [0, i % 2 === 0 ? -8 : 8] }}
              transition={{ duration: interval / 1000 + 2, ease: "linear" }}
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

      <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />

      {/* text — only slides that carry copy show it; others stay clean */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {hasText && (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.9, ease: [0.22, 0.65, 0.2, 1], delay: 0.25 }}
            >
              {slide.eyebrow && <p className="eyebrow">{slide.eyebrow}</p>}
              {slide.line1 && (
                <h1 className="mt-3 max-w-3xl text-[2.75rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="text-gold-gradient block">{slide.line1}</span>
                  {slide.line2 && <span className="text-gold-gradient block">{slide.line2}</span>}
                </h1>
              )}
              {slide.sub && (
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {slide.sub}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* indicators */}
        <div className={`flex items-center gap-2 ${hasText ? "mt-7" : "mt-24 sm:mt-32"}`}>
          {slides.map((s, idx) => (
            <button
              key={(s.line1 ?? "slide") + idx}
              onClick={() => setI(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-[3px] rounded-full transition-all duration-700 ${
                idx === i ? "w-9 bg-gold shadow-[0_0_12px_var(--gold)]" : "w-4 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
