import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  CalendarClock,
  ChevronRight,
  Home,
  PhoneCall,
  ReceiptText,
  Scissors,
  Smile,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import logoAsset from "@/assets/logo.jpeg.asset.json";

type Item = {
  label: string;
  icon: typeof Home;
  href?: string;
  tagline?: string;
  children?: string[];
};

const MENU: Item[] = [
  { label: "Home", icon: Home, href: "#top" },
  {
    label: "Hair transplant",
    icon: Scissors,
    tagline: "Precision. Density. Natural Hairlines.",
    children: [
      "FUE method",
      "FUT method",
      "DHI method",
      "Sapphire Blade Technique",
      "Chinese punch Technique",
      "Turkish pattern Technique",
      "Mesh Pattern Technique",
      "Scalp Micro-Pigmentation",
      "Micro blading technique",
      "Pigment and Scalp pattern",
    ],
  },
  {
    label: "Hair Regeneration",
    icon: Sparkles,
    tagline: "Restore. Rejuvenate. Regrow.",
    children: [
      "Hair PRP",
      "Hair PRGF",
      "Hair Exosomes",
      "Low level laser therapy",
      "Medications",
    ],
  },
  {
    label: "Skin Treatment",
    icon: Smile,
    tagline: "Clarity. Balance. Radiance.",
    children: [
      "HydraFacial",
      "Carbon Peel and Pico Laser",
      "Laser treatment",
      "Face PRP and Microneedling",
      "Mesotherapy",
      "Whitening injections",
      "Botox treatment",
      "Fillers ( lips and face )",
      "Dark circles treatment",
      "Fat loss treatment",
    ],
  },
  { label: "Rate list", icon: ReceiptText, href: "#treatments" },
  { label: "About us", icon: Users, href: "#doctor" },
  { label: "Location Appointment", icon: CalendarClock, href: "#contact" },
  { label: "Contact us", icon: PhoneCall, href: "#contact" },
];

export function DrawerMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [active, setActive] = useState<Item | null>(null);

  const close = () => {
    onClose();
    setTimeout(() => setActive(null), 350);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-ink/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 0.65, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-sm flex-col overflow-y-auto border-l border-gold/25 bg-background"
          >
            <div className="flex items-start justify-between gap-4 px-6 pt-7 pb-5">
              <div className="flex items-center gap-4">
                <img
                  src={logoAsset.url}
                  alt="WBSK"
                  className="size-14 shrink-0 rounded-full border border-gold/40 object-cover"
                />
                <div className="leading-tight">
                  <p className="font-display text-xl text-gold">Dr Waqar</p>
                  <p className="font-display text-xl text-gold">Bin Saif Khattak</p>
                  <p className="mt-1 text-[0.52rem] tracking-[0.16em] text-muted-foreground uppercase">
                    Aesthetic Physician
                    <br />
                    Hair Transplant Surgeon
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Close menu"
                className="grid size-9 shrink-0 place-items-center rounded-md border border-border text-gold transition-colors hover:border-gold hover:bg-accent"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="hairline mx-6" />

            <div className="relative flex-1 px-6 py-6">
              <AnimatePresence mode="wait" initial={false}>
                {active === null ? (
                  <motion.nav
                    key="root"
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    {MENU.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          if (item.children) setActive(item);
                          else {
                            close();
                            if (item.href) window.location.hash = item.href;
                          }
                        }}
                        className="group flex w-full items-center gap-4 rounded-lg border border-gold/20 bg-card px-4 py-3.5 text-left transition-all duration-400 hover:border-gold/70 hover:bg-accent hover:shadow-[var(--shadow-gold)]"
                      >
                        <item.icon className="size-5 shrink-0 text-gold transition-transform duration-400 group-hover:scale-110" />
                        <span className="flex-1 text-sm">{item.label}</span>
                        <ChevronRight className="size-4 text-gold transition-transform duration-400 group-hover:translate-x-1" />
                      </button>
                    ))}
                  </motion.nav>
                ) : (
                  <motion.div
                    key={active.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <button
                        onClick={() => setActive(null)}
                        aria-label="Back"
                        className="grid size-9 place-items-center rounded-md border border-border text-gold transition-colors hover:border-gold hover:bg-accent"
                      >
                        <ArrowLeft className="size-4" />
                      </button>
                      <h3 className="font-display text-2xl text-gold">{active.label}</h3>
                    </div>
                    {active.tagline && (
                      <p className="mb-6 text-center text-xs tracking-[0.14em] text-muted-foreground">
                        {active.tagline}
                      </p>
                    )}
                    <div className="space-y-3">
                      {active.children?.map((c, i) => (
                        <a
                          key={c}
                          href="#contact"
                          onClick={close}
                          className="group flex items-center gap-4 rounded-lg border border-gold/20 bg-card px-4 py-3.5 transition-all duration-400 hover:border-gold/70 hover:bg-accent hover:shadow-[var(--shadow-gold)]"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 text-xs text-gold">
                            {i + 1}
                          </span>
                          <span className="flex-1 text-sm">{c}</span>
                          <ChevronRight className="size-4 text-gold transition-transform duration-400 group-hover:translate-x-1" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-16 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)]" />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
