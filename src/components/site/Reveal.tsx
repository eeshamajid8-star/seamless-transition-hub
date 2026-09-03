import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 22, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 0.65, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-3 text-4xl leading-tight sm:text-5xl ${
            light ? "text-cream-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <div className="mx-auto mt-5 flex items-center justify-center gap-3">
          <span className="hairline w-16" />
          <span className="size-1.5 rotate-45 bg-gold" />
          <span className="hairline w-16" />
        </div>
      </Reveal>
    </div>
  );
}
