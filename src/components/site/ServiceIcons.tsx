import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.45,
  viewBox: "0 0 48 48",
};

export function HairTransplantIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M17 5c0 10-7 15-7 24 0 7 5 12 12 12 8 0 13-5 13-13 0-5-2-9-1-15" />
      <path d="M25 7c-1 8-6 13-6 21 0 5 2 9 6 11M35 11c-3 3-5 6-5 11" />
      <path d="M36 22h8M37 27h7M38 32h5" />
    </svg>
  );
}

export function InjectionIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="m10 38 8-8M7 41l3-3M16 32l-3-3 17-17 7 7-17 17-4-4Z" />
      <path d="m27 15 7 7M32 10l9 9M35 7l6 6M20 25l3 3" />
    </svg>
  );
}

export function SkinProfileIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M29 5c-8 1-13 7-13 15v6l-5 6h7v9" />
      <path d="M29 5c-1 5 2 8 6 11l-3 4 4 4-5 3c-1 7-5 11-13 10" />
      <path d="M14 13c-4 3-5 9-3 14M10 17c-3 3-3 8-1 11" />
    </svg>
  );
}

export function BodyContourIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M17 5c2 5 1 9-1 13-2 5-2 12 0 25M31 5c-2 5-1 9 1 13 2 5 2 12 0 25" />
      <path d="M18 8c4 2 8 2 12 0M16 20c5 3 11 3 16 0M16 35c5-2 11-2 16 0M16 43c5-3 11-3 16 0" />
    </svg>
  );
}

export function PremiumStarIcon(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="m24 4 5.7 12.4 13.3 1.5-9.8 9.2 2.7 13.1L24 33.5l-11.9 6.7 2.7-13.1L5 17.9l13.3-1.5L24 4Z" />
    </svg>
  );
}