import type { SVGProps } from "react";

/**
 * A minimal set of hand-drawn line icons. Keeping these as small inline SVGs
 * avoids pulling in an icon library for a handful of glyphs.
 */

export function IconShare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v12M12 3l4 4M12 3 8 7M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 20.5s-7.5-4.6-9.8-9C.7 8.1 2 4.5 5.4 3.7c2-.5 4 .3 5.1 2 .3.4.9.4 1.2 0 1.1-1.7 3.1-2.5 5.1-2 3.4.8 4.7 4.4 3.2 7.8-2.3 4.4-9.8 9-9.8 9z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 17.8l-6.2 3.1 1.6-6.8-5.2-4.6 6.9-.7L12 2.5z" />
    </svg>
  );
}

export function IconGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{ display: "block", height: "16px", width: "16px", fill: "currentColor" }}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
    </svg>
  );
}

export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true" {...props}>
      <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="2" />
      <path d="m15 15 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 12h15M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" {...props}>
      <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" {...props}>
      <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" {...props}>
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" {...props}>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type AmenityIconName =
  | "hairdryer" | "cleaning" | "shampoo" | "hot-water" | "shower-gel"
  | "washing-machine" | "hanger" | "bed" | "blinds" | "iron" | "storage" | "cot"
  | "tv" | "air-conditioning" | "fan" | "camera" | "alarm" | "wifi" | "workspace"
  | "kitchen" | "fridge" | "freezer" | "microwave" | "cooking" | "cutlery" | "kettle"
  | "coffee" | "wine" | "toaster" | "blender" | "cooker" | "entrance" | "patio"
  | "dining" | "parking" | "pool" | "hot-tub" | "gym" | "pets" | "cleaning-service"
  | "long-stay" | "self-check-in";

export function IconAmenity({ name, ...props }: SVGProps<SVGSVGElement> & { name: AmenityIconName }) {
  const common = { stroke: "currentColor", strokeWidth: 1.55, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const simplePaths: Record<AmenityIconName, string> = {
    hairdryer: "M4 10h7a4 4 0 0 1 0 8H8l-3 3v-5H4a3 3 0 0 1 0-6Zm7 0 5-3v10l-5-3M18 7v10",
    cleaning: "M7 9h10v11H7zM9 9V6h6v3M5 12h2m10 0h2M9 4h6",
    shampoo: "M8 8h8v13H8zM10 8V5h4v3M10 3h4",
    "hot-water": "M6 17h12l-1 4H7l-1-4Zm2-3c0-2 2-2 2-4m2 4c0-2 2-2 2-4m-6-5c2 1 2 2 0 3",
    "shower-gel": "M8 9h8v12H8zM10 9V6h4v3M14 4h3v2h-3",
    "washing-machine": "M5 4h14v17H5zM7 8h10M12 15a3 3 0 1 0 0 .1M9 6h.01",
    hanger: "M4 19h16l-8-6-6 4c-1 .7-1 2 0 2Zm8-6V9a2 2 0 1 1 2-2",
    bed: "M4 17v-6h16v6M4 14h16M6 11V8h5v3M4 17v3m16-3v3",
    blinds: "M5 4h14M7 4v16m5-16v16m5-16v16M5 20h14",
    iron: "M4 18h16l-4-8H9a5 5 0 0 0-5 5v3Zm5-8V7h6l2 3",
    storage: "M5 7h14v14H5zM8 7V4h8v3M9 12h6",
    cot: "M5 7h14v14H5zM8 7V4h8v3M8 11h8M8 21V7m8 14V7",
    tv: "M4 6h16v12H4zM9 21h6m-3-3v3",
    "air-conditioning": "M4 6h16v9H4zM8 19h8M7 10h10M8 15l-2 3m10-3 2 3",
    fan: "M12 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 10c-4-7-7 0-2 2m4 0c7-4 0-7-2-2m0 4c4 7 7 0 2-2",
    camera: "M4 8h4l2-2h4l2 2h4v11H4zM12 11a3 3 0 1 0 0 .1M18 10h.01",
    alarm: "M6 17h12l-1-7a5 5 0 0 0-10 0l-1 7Zm-2 0h16M9 4l-2-2m8 2 2-2",
    wifi: "M4 9a12 12 0 0 1 16 0M7 13a7 7 0 0 1 10 0M10 17a3 3 0 0 1 4 0M12 21h.01",
    workspace: "M4 5h16v14H4zM8 9h8M8 13h5M8 17h3",
    kitchen: "M4 5h16v16H4zM7 8h5v5H7zM15 8v8m-2 5V8",
    fridge: "M6 3h12v18H6zM6 11h12M9 7v2m0 5v2",
    freezer: "M6 3h12v18H6zM9 7h6M9 15h6",
    microwave: "M4 6h16v12H4zM7 9h8v6H7zM17 10h1m-1 3h1",
    cooking: "M5 8h14v13H5zM8 8V5h8v3M9 12h6",
    cutlery: "M7 4v7m0-7v7m0-7v7m0-7v17M12 4v6a2 2 0 0 0 4 0V4m-2 6v11",
    kettle: "M6 10h11v10H6zM8 10V7h7v3m2 2h2a2 2 0 0 1 0 4h-2M10 4h4",
    coffee: "M5 8h12v9H5zM17 10h2a2 2 0 0 1 0 4h-2M8 5h6",
    wine: "M7 4h10l-1 6a4 4 0 0 1-3 3v6h3m-8 0h6M9 4l1 6h4l1-6",
    toaster: "M5 9h14v9H5zM8 9V5h8v4M9 14h6",
    blender: "M7 4h10l-2 11H9L7 4Zm2 11v5h6v-5M9 8h6",
    cooker: "M5 8h14v13H5zM8 12h3m2 0h3M8 16h8M9 5h6",
    entrance: "M6 21V4h12v17M6 12h6m-2-3 3 3-3 3M15 8h.01",
    patio: "M4 20h16M6 20v-7h12v7M5 13l7-7 7 7M12 6v-3",
    dining: "M5 8h14v5H5zM8 13v8m8-8v8M6 4v4m12-4v4",
    parking: "M6 21V4h7a4 4 0 0 1 0 8H6m5-4h2",
    pool: "M4 15c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2M4 20c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2M7 4v7m0-7 5 3-5 3",
    "hot-tub": "M4 16h16M6 16v4h12v-4M8 12c0-2 2-2 2-4m3 4c0-2 2-2 2-4m-9 0c0-2 2-2 2-4",
    gym: "M7 8v8m10-8v8M4 11h16M4 13h16M7 6v12m10-12v12",
    pets: "M8 13a4 4 0 1 0 8 0c0-3-2-5-4-5s-4 2-4 5Zm-3-6h.01M7 4h.01m10 3h.01M17 4h.01",
    "cleaning-service": "M6 10h12v11H6zM9 10V7h6v3M8 4h8",
    "long-stay": "M4 7h16v14H4zM8 7V4h8v3M8 12h8M8 16h5",
    "self-check-in": "M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3M9 16l2 2 4-5",
  };

  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" {...props}><path d={simplePaths[name]} {...common} /></svg>;
}

export type ReviewMetricIconName = "cleanliness" | "accuracy" | "check-in" | "communication" | "location" | "value";

export function IconReviewMetric({ name, ...props }: SVGProps<SVGSVGElement> & { name: ReviewMetricIconName }) {
  const paths: Record<ReviewMetricIconName, JSX.Element> = {
    cleanliness: <><path d="M7 8h10v13H7zM9 8V5h6v3M9 12h6" /><path d="m16 3 1 1 2-2" /></>,
    accuracy: <><circle cx="12" cy="12" r="8" /><path d="m8 12 3 3 5-6" /></>,
    "check-in": <><circle cx="12" cy="12" r="8" /><path d="M12 8v5l3 2M4 5l2-2m12 2-2-2" /></>,
    communication: <><path d="M4 5h16v12H9l-5 4V5Z" /><path d="M8 10h8M8 13h5" /></>,
    location: <><path d="M5 6 12 4l7 2v14l-7-2-7 2V6Z" /><path d="M12 4v14M5 6l7 2 7-2" /></>,
    value: <><path d="m4 7 5-4h8l4 4-9 13L4 7Z" /><circle cx="14" cy="7" r="1" /></>,
  };

  return <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

