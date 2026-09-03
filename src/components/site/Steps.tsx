import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export type Step = {
  n: string;
  title: string;
  body: string;
  image: string;
};

function StepCard({ step, index, total }: { step: Step; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.28", "end 0.2"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.35]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <div ref={ref} className="sticky top-28 md:top-32" style={{ zIndex: index + 1 }}>
      <motion.article
        style={{ scale, opacity, y }}
        className="glow-ring mx-auto overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)]"
      >
        <div className="grid md:grid-cols-2">
          <div className="media-zoom relative h-56 md:h-80">
            <img
              src={step.image}
              alt={step.title}
              loading="lazy"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent md:bg-linear-to-r" />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-gold/50 font-display text-sm text-gold">
                {step.n}
              </span>
              <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                Step {step.n} of {String(total).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-3xl">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function StackedSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="mx-auto mt-14 max-w-4xl space-y-10 pb-24">
      {steps.map((s, i) => (
        <StepCard key={s.n} step={s} index={i} total={steps.length} />
      ))}
    </div>
  );
}
