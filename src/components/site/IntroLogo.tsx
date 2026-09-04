import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu } from "lucide-react";
import logoAsset from "@/assets/logo.jpeg.asset.json";
import { DrawerMenu } from "./DrawerMenu";

export function IntroLogo() {
  const { scrollY } = useScroll();
  const [dims, setDims] = useState({ w: 1200, h: 900 });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isSmall = dims.w < 768;
  const bigSize = isSmall ? 132 : 184;
  const smallSize = isSmall ? 44 : 54;
  const end = dims.h * 0.6;

  const size = useTransform(scrollY, [0, end], [bigSize, smallSize], { clamp: true });
  const left = useTransform(scrollY, [0, end], [dims.w / 2 - bigSize / 2, isSmall ? 16 : 28], {
    clamp: true,
  });
  const top = useTransform(scrollY, [0, end], [dims.h * 0.42 - bigSize / 2, isSmall ? 12 : 16], {
    clamp: true,
  });
  const radius = useTransform(scrollY, [0, end], [96, 14], { clamp: true });
  const introOpacity = useTransform(scrollY, [0, end * 0.7], [1, 0], { clamp: true });
  const veilOpacity = useTransform(scrollY, [0, end], [1, 0], { clamp: true });
  const chromeOpacity = useTransform(scrollY, [end * 0.55, end], [0, 1], { clamp: true });

  return (
    <>
      {/* intro veil */}
      <motion.div
        aria-hidden
        style={{ opacity: veilOpacity }}
        className="pointer-events-none fixed inset-0 z-30 bg-background"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_62%)]" />
      </motion.div>

      {/* intro wordmark */}
      <motion.div
        style={{ opacity: introOpacity }}
        className="pointer-events-none fixed inset-x-0 z-40 flex flex-col items-center px-6 text-center"
        // positioned relative to the logo block
      >
        <div style={{ height: dims.h * 0.42 + bigSize / 2 + 28 }} />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-3xl tracking-wide text-foreground sm:text-4xl"
        >
          Dr. Waqar Bin Saif
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="eyebrow mt-4"
        >
          Aesthetic Physician &amp; Hair Transplant Surgeon
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <span className="text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-10 w-px bg-gold"
          />
        </motion.div>
      </motion.div>

      {/* flying logo */}
      <motion.div
        style={{ width: size, height: size, left, top, borderRadius: radius }}
        className="fixed z-50 overflow-hidden border border-gold/40 shadow-[0_10px_50px_-18px_var(--gold)]"
      >
        <img
          src={logoAsset.url}
          alt="WBSK — Dr. Waqar Bin Saif Khattak"
          className="size-full object-cover"
        />
      </motion.div>

      {/* header chrome */}
      <motion.header
        style={{ opacity: chromeOpacity }}
        className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 pl-20 md:pl-28">
          <div className="hidden leading-tight md:block">
            <p className="font-display text-lg">Dr. Waqar Bin Saif</p>
            <p className="text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase">
              Aesthetic &amp; Hair Restoration
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="ml-auto grid size-11 place-items-center rounded-md border border-gold/30 text-gold transition-all duration-400 hover:border-gold hover:bg-accent hover:shadow-[var(--shadow-gold)]"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </motion.header>

      <DrawerMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
