import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Phone,
  Play,
  MessageCircle,
  Star,
  Check,
  Sprout,
  Syringe,
  Smile,
  Droplets,
} from "lucide-react";

import { IntroLogo } from "@/components/site/IntroLogo";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CompareSlider } from "@/components/site/BeforeAfter";
import { StackedSteps, type Step } from "@/components/site/Steps";
import { HeroSlider, type HeroSlide } from "@/components/site/HeroSlider";
import { VideoCarousel } from "@/components/site/VideoCarousel";
import { openMenu, type MenuCategory } from "@/components/site/menu-store";

import bannerAsset from "@/assets/banner.jpeg.asset.json";
import hairTransAsset from "@/assets/hairtrans.jpeg.asset.json";
import hair2Asset from "@/assets/hair2.jpeg.asset.json";
import procedureVideo from "@/assets/procedure.mp4.asset.json";
import procedureVideo2 from "@/assets/procedure2.mp4.asset.json";
import before1 from "@/assets/before1.jpg";
import after1 from "@/assets/after1.jpg";
import before2 from "@/assets/before2.jpg";
import after2 from "@/assets/after2.jpg";
import before3 from "@/assets/before3.jpg";
import after3 from "@/assets/after3.jpg";
import prp from "@/assets/prp.jpg";
import aestheticImg from "@/assets/aesthetic.jpg";
import clinic1 from "@/assets/clinic1.jpg";
import clinic2 from "@/assets/clinic2.jpg";
import clinic3 from "@/assets/clinic3.jpg";
import testimonial1 from "@/assets/testimonial1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Waqar Bin Saif | Hair Transplant & Aesthetic Clinic" },
      {
        name: "description",
        content:
          "FUE, Sapphire FUE and DHI hair transplants, PRP hair regeneration and aesthetic medicine by Dr. Waqar Bin Saif — natural hairlines, permanent results.",
      },
      { property: "og:title", content: "Dr. Waqar Bin Saif | The Art of Hair Restoration" },
      {
        property: "og:description",
        content:
          "Precision hair transplant surgery and aesthetic medicine. 5000+ successful procedures, 4.9 star rated clinic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const treatments: {
  title: string;
  tags: string;
  body: string;
  image: string;
  category: MenuCategory;
}[] = [
  {
    title: "Hair Transplant",
    tags: "FUE • Sapphire FUE • DHI • FUT • Hybrid",
    body: "Natural and personality-changing results",
    image: hairTransAsset.url,
    category: "Hair transplant",
  },
  {
    title: "Hair Regeneration",
    tags: "PRP • PRGF • Exosomes",
    body: "Stimulate growth. Stronger. Thicker. Fuller.",
    image: prp,
    category: "Hair Regeneration",
  },
  {
    title: "Aesthetic Medicine",
    tags: "Skin Treatment • Injectables • Advanced Therapies",
    body: "Enhance your natural beauty.",
    image: aestheticImg,
    category: "Skin Treatment",
  },
];

const heroSlides: HeroSlide[] = [
  {
    kind: "image",
    src: bannerAsset.url,
    eyebrow: "The art of",
    line1: "HAIR",
    line2: "RESTORATION",
    sub: "Precision. Natural Results. Personalized Care.",
  },
  { kind: "video", src: procedureVideo.url, poster: hairTransAsset.url },
  { kind: "image", src: prp },
  { kind: "video", src: procedureVideo2.url, poster: bannerAsset.url },
  { kind: "image", src: aestheticImg },
];

const heroIcons: { icon: typeof Sprout; label: string; href: string }[] = [
  { icon: Sprout, label: "Hair\nTransplant", href: "#treatments" },
  { icon: Syringe, label: "PRP / PRGF\nExosomes", href: "#treatments" },
  { icon: Smile, label: "Skin\nAesthetics", href: "#treatments" },
  { icon: Droplets, label: "Botox\n& Fillers", href: "#treatments" },
  { icon: Star, label: "Reviews", href: "#clinic" },
];

const results = [
  { before: before1, after: after1, meta: "FUE • 4500 grafts • 10 months", grade: "Norwood Grade 3" },
  {
    before: before2,
    after: after2,
    meta: "Sapphire FUE • 4200 grafts • 9 months",
    grade: "Norwood Grade 3",
  },
  { before: before3, after: after3, meta: "DHI • 3800 grafts • 10 months", grade: "Norwood Grade 4" },
];

const steps: Step[] = [
  {
    n: "01",
    title: "Consultation",
    body: "A one-to-one assessment with Dr. Waqar. Scalp analysis, donor evaluation and an honest plan built around your face, age and long-term hair pattern.",
    image: clinic3,
  },
  {
    n: "02",
    title: "Hairline Design",
    body: "Your hairline is drawn by hand, millimetre by millimetre, respecting natural density gradients, temple angles and facial proportion.",
    image: hair2Asset.url,
  },
  {
    n: "03",
    title: "Extraction",
    body: "Grafts are harvested individually under magnification with micro punches, preserving follicle integrity and leaving the donor area intact.",
    image: hairTransAsset.url,
  },
  {
    n: "04",
    title: "Implantation",
    body: "Each follicle is placed at a controlled depth, angle and direction so growth mirrors the way your hair naturally falls.",
    image: bannerAsset.url,
  },
  {
    n: "05",
    title: "Recovery",
    body: "A guided aftercare protocol with medicated washes, sleeping guidance and 24/7 access to the clinic team through the first ten days.",
    image: clinic2,
  },
  {
    n: "06",
    title: "Follow Up",
    body: "Scheduled reviews at 1, 3, 6 and 12 months with photographic tracking, plus regeneration therapy where it accelerates results.",
    image: clinic1,
  },
];

const faqs = [
  {
    q: "Is hair transplant surgery painful?",
    a: "The procedure is performed under local anaesthesia with a comfort-first protocol. Most patients describe only mild pressure and are able to watch a film or listen to music throughout.",
  },
  {
    q: "How long is the recovery period?",
    a: "Most patients return to desk work within 2–3 days. Redness settles in roughly 7–10 days and the donor area heals within two weeks under our aftercare protocol.",
  },
  {
    q: "When will I see the final results?",
    a: "Early growth appears from month three, noticeable density around month six, and the final refined result between ten and twelve months.",
  },
  {
    q: "Are the results permanent?",
    a: "Transplanted follicles are taken from a genetically resistant donor zone, so they continue to grow for life. We also plan for future thinning of native hair.",
  },
];

function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div id="top" className="relative bg-background">
      <IntroLogo />

      {/* intro screen spacer */}
      <div className="h-screen" aria-hidden />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-12 sm:px-6 md:pb-20">
          <HeroSlider slides={heroSlides} />

          <div className="relative mt-8 flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row">
            <a
              href="#contact"
              className="glow-ring bg-gold-gradient flex items-center justify-between gap-4 rounded-md border border-transparent px-5 py-3.5 text-xs font-medium tracking-[0.16em] text-primary-foreground uppercase sm:px-6 sm:py-4 sm:text-sm"
            >
              Book Consultation <CalendarDays className="size-4 shrink-0" />
            </a>
            <a
              href="#results"
              className="glow-ring flex items-center justify-between gap-4 rounded-md border border-gold/40 bg-ink/50 px-5 py-3.5 text-xs tracking-[0.16em] text-foreground uppercase backdrop-blur-sm sm:px-6 sm:py-4 sm:text-sm"
            >
              View Results <ArrowRight className="size-4 shrink-0 text-gold" />
            </a>
          </div>

          <div className="relative mt-10 grid grid-cols-5 gap-1 sm:gap-4">
            {heroIcons.map((h) => (
              <a
                key={h.label}
                href={h.href}
                className="group flex flex-col items-center gap-2 rounded-lg border border-transparent px-1 py-3 text-center transition-all duration-400 hover:border-gold/30 hover:bg-ink/40 sm:px-2"
              >
                <h.icon
                  className="size-5 text-gold transition-all duration-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_var(--gold)] sm:size-7"
                  strokeWidth={1.4}
                />
                <span className="text-[0.5rem] leading-tight tracking-[0.12em] whitespace-pre-line text-muted-foreground uppercase transition-colors group-hover:text-gold sm:text-[0.6rem] sm:tracking-[0.18em]">
                  {h.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="treatments" className="section-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Discover Our Treatment"
          title={
            <span className="block space-y-1">
              <span className="block">
                Restore <span className="text-gold">—</span> What you&rsquo;ve lost
              </span>
              <span className="block">
                Refine <span className="text-gold">—</span> What you already have
              </span>
              <span className="block">
                Redefine <span className="text-gold">—</span> What&rsquo;s possible
              </span>
            </span>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <button
                type="button"
                onClick={() => openMenu(t.category)}
                className="glow-ring media-zoom group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card text-left"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <h3 className="text-2xl">{t.title}</h3>
                  <p className="text-xs tracking-[0.12em] text-gold uppercase">{t.tags}</p>
                  <p className="text-sm text-muted-foreground">{t.body}</p>
                  <span className="mt-auto inline-flex size-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-400 group-hover:bg-gold group-hover:text-primary-foreground">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative overflow-hidden border-y border-border bg-card/40">
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <p className="font-display text-5xl text-gold">&ldquo;</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-3xl leading-snug sm:text-4xl">
              I fix hairlines and fine lines —<br /> not bad decisions.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-xl text-gold italic">
              Dr. Waqar Bin Saif Khattak
            </p>
          </Reveal>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section id="results" className="bg-cream py-24 text-cream-foreground md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow">Real Patients. Real Results.</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl text-cream-foreground sm:text-5xl">Before &amp; After</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                <span className="hairline w-16" />
                <span className="size-1.5 rotate-45 bg-gold-deep" />
                <span className="hairline w-16" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-sm text-cream-foreground/60">
                Drag the divider to compare
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {results.map((r, i) => (
              <Reveal key={r.meta} delay={i * 0.1}>
                <div className="glow-ring overflow-hidden rounded-xl border border-cream-foreground/10 bg-background/95">
                  <CompareSlider before={r.before} after={r.after} alt={r.meta} />
                  <div className="flex items-center justify-between gap-3 bg-cream px-4 py-4">
                    <div>
                      <p className="text-[0.62rem] tracking-[0.18em] text-cream-foreground uppercase">
                        {r.meta}
                      </p>
                      <p className="mt-1 text-xs text-cream-foreground/60">{r.grade}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 flex justify-center">
              <a
                href="#contact"
                className="glow-ring inline-flex items-center gap-4 rounded-md bg-ink px-8 py-4 text-xs tracking-[0.22em] text-foreground uppercase"
              >
                View More Results <ArrowRight className="size-4 text-gold" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-6 md:py-32">
        <SectionHeading eyebrow="Watch the art in action" title="Procedure Film" />
        <Reveal delay={0.12}>
          <VideoCarousel
            slides={[
              {
                title: "Hairline Design & Extraction",
                caption: "Inside the theatre with Dr. Waqar",
                src: procedureVideo.url,
                poster: hairTransAsset.url,
              },
              {
                title: "Graft Implantation",
                caption: "Angle, depth and direction — placed by hand",
                src: procedureVideo2.url,
                poster: bannerAsset.url,
              },
            ]}
          />
        </Reveal>
      </section>

      {/* JOURNEY / STACKED STEPS */}
      <section id="journey" className="px-5 pb-24 sm:px-6 md:pb-32">
        <SectionHeading eyebrow="The Hair Transplant Journey" title="Step by Step" />
        <StackedSteps steps={steps} />
      </section>

      {/* DOCTOR */}
      <section id="doctor" className="section-light border-y border-border py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Meet Dr. Waqar" title="A Passion For Perfection" />
          <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <div className="media-zoom overflow-hidden rounded-xl border border-gold/25">
                <img
                  src={hair2Asset.url}
                  alt="Dr. Waqar Bin Saif at the WBSK clinic"
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="space-y-4">
              {[
                "MBBS, Aesthetic Physician",
                "PGD Dermatology",
                "Masters in Aesthetic Medicine",
                "Hair Transplant Surgeon",
                "International Trainer & Speaker",
                "5000+ Successful Procedures",
              ].map((c, i) => (
                <Reveal key={c} delay={i * 0.06}>
                  <div className="group flex items-center gap-4 rounded-md border border-transparent px-3 py-2 transition-colors hover:border-border hover:bg-accent/40">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-gold/50 text-gold transition-all duration-400 group-hover:bg-gold group-hover:text-primary-foreground">
                      <Check className="size-3.5" />
                    </span>
                    <p className="text-sm text-muted-foreground">{c}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.4}>
                <a
                  href="#contact"
                  className="glow-ring mt-4 inline-flex items-center gap-3 rounded-md border border-gold/40 px-6 py-3 text-xs tracking-[0.2em] text-foreground uppercase"
                >
                  About Dr. Waqar <ArrowRight className="size-4 text-gold" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Patient Testimonials" title="Stories That Inspire" />
        <Reveal delay={0.12}>
          <figure className="glow-ring media-zoom relative mt-12 overflow-hidden rounded-xl border border-border">
            <img
              src={testimonial1}
              alt="Patient Hamza Ali after his hair transplant"
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/55" />
            <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-8 text-center">
              <motion.span
                animate={{ boxShadow: ["0 0 0 0 rgba(0,0,0,0)", "0 0 40px 6px var(--gold)", "0 0 0 0 rgba(0,0,0,0)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="grid size-14 place-items-center rounded-full border border-gold/60 bg-ink/60"
              >
                <Play className="size-5 text-gold" />
              </motion.span>
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                “Dr. Waqar is not just a doctor, he is an artist. My results are better than I
                imagined.”
              </p>
              <cite className="text-xs tracking-[0.24em] text-gold not-italic uppercase">
                — Hamza Ali
              </cite>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* CLINIC */}
      <section id="clinic" className="border-y border-border bg-card/50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Our Clinic" title="Experience Excellence" />
          <div className="mt-14 grid gap-4">
            <Reveal>
              <div className="media-zoom overflow-hidden rounded-xl border border-border">
                <img
                  src={clinic1}
                  alt="WBSK clinic reception"
                  loading="lazy"
                  className="aspect-16/9 w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { src: clinic2, alt: "Private treatment room" },
                { src: clinic3, alt: "Consultation lounge" },
                { src: prp, alt: "Regeneration therapy" },
              ].map((g, i) => (
                <Reveal key={g.alt} delay={i * 0.08}>
                  <div className="media-zoom overflow-hidden rounded-xl border border-border">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* REVIEWS */}
          <Reveal delay={0.15}>
            <div className="glow-ring mt-12 rounded-xl border border-border bg-background p-10 text-center">
              <p className="eyebrow">Google Reviews</p>
              <p className="mt-4 font-display text-5xl text-gold">4.9</p>
              <div className="mt-3 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Based on 300+ reviews</p>
              <a
                href="#contact"
                className="glow-ring mt-7 inline-flex items-center gap-3 rounded-md border border-gold/40 px-7 py-3 text-xs tracking-[0.2em] uppercase"
              >
                Read All Reviews <ArrowRight className="size-4 text-gold" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="section-light px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Quick Answers" />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm transition-colors hover:text-gold"
                >
                  {f.q}
                  <ChevronDown
                    className={`size-4 shrink-0 text-gold transition-transform duration-400 ${
                      faqOpen === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: faqOpen === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden">
        <img
          src={bannerAsset.url}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <p className="eyebrow">Ready To Transform?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl">Book your consultation today</h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-5 max-w-lg text-sm text-muted-foreground">
              Take the first step towards your best version. Every plan begins with an honest,
              one-to-one assessment.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <a
                href="tel:+920000000000"
                className="glow-ring bg-gold-gradient flex flex-1 items-center justify-center gap-3 rounded-md px-6 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase"
              >
                Book Consultation <CalendarDays className="size-4" />
              </a>
              <a
                href="https://wa.me/920000000000"
                className="glow-ring flex flex-1 items-center justify-center gap-3 rounded-md border border-gold/40 px-6 py-4 text-xs tracking-[0.2em] uppercase"
              >
                WhatsApp Us <MessageCircle className="size-4 text-gold" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10 pb-28 text-center md:pb-10">
        <p className="font-display text-xl text-gold">WBSK</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Dr. Waqar Bin Saif Khattak — Aesthetic Physician &amp; Hair Transplant Surgeon
        </p>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
        <a
          href="https://wa.me/920000000000"
          className="flex flex-col items-center gap-1 py-3 text-[0.55rem] tracking-[0.18em] uppercase transition-colors hover:text-gold"
        >
          <MessageCircle className="size-5 text-gold" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="bg-gold-gradient flex flex-col items-center gap-1 py-3 text-[0.55rem] tracking-[0.18em] text-primary-foreground uppercase"
        >
          <CalendarDays className="size-5" />
          Book Appointment
        </a>
        <a
          href="tel:+920000000000"
          className="flex flex-col items-center gap-1 py-3 text-[0.55rem] tracking-[0.18em] uppercase transition-colors hover:text-gold"
        >
          <Phone className="size-5 text-gold" />
          Call Now
        </a>
      </div>
    </div>
  );
}
