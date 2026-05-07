export type OrgStatAccent = "fire" | "ems" | "neutral";

export type OrgStat = {
  id: string;
  agency: string;
  body: string;
  accent: OrgStatAccent;
};

export const ORG_STATS: OrgStat[] = [
  {
    id: "nih",
    agency: "NIH",
    body: "53% of EMS injuries are caused by strains or sprains. 51% of which occurred when moving a patient NOT involving a gurney.",
    accent: "neutral",
  },
  {
    id: "naemt",
    agency: "NAEMT",
    body: "1 in 4 EMS workers will suffer a career-ending back injury within the first 4 years of service.",
    accent: "neutral",
  },
  {
    id: "niosh",
    agency: "NIOSH",
    body: "$1,600 daily cost of EMS worker absence.",
    accent: "ems",
  },
  {
    id: "nfpa",
    agency: "NFPA",
    body: "52% of firefighter injuries are strains or sprains. 30% of lost time is due to strains or sprains.",
    accent: "fire",
  },
  {
    id: "iaff",
    agency: "IAFF",
    body: "50% of firefighter disability retirements stem from an on-duty back injury.",
    accent: "fire",
  },
  {
    id: "osha-cost",
    agency: "OSHA",
    body: "$32,023 average cost of workplace strain injury.",
    accent: "ems",
  },
  {
    id: "cdc",
    agency: "CDC",
    body: "Mechanical lifting devices reduce healthcare worker injuries by 66%.",
    accent: "ems",
  },
  {
    id: "osha-lift",
    agency: "OSHA",
    body: "Safe patient handling programs that include mechanical lifts reduce lifting injuries by 95%.",
    accent: "neutral",
  },
  {
    id: "nist",
    agency: "NIST",
    body: "$50,000–$200,000 annual cost of firefighter injuries per fire department.",
    accent: "ems",
  },
];

export const RISER_STEPS = [
  "Seatbelt your patient and set wheel brakes.",
  "Release flat lock and lift or pull straps.",
  "Lift until you hear the auto-lock click.",
  "Disengage wheel brakes and roll.",
];

export const RISER_SPECS = [
  {
    label: "Size",
    body: 'Same length and width as a backboard (17" × 72").',
  },
  {
    label: "Storage",
    body: "Backboard compartment — no modifications needed.",
  },
  {
    label: "Materials",
    body: "Stainless steel with HDPE (high-density polyethylene) seating and backrest inset into the steel.",
  },
  {
    label: "Cleaning",
    body: "All non-porous materials — just spray and wipe.",
  },
  {
    label: "Portability",
    body: "Locks flat and rolls like airline luggage.",
  },
  {
    label: "Usability",
    body: "Lift from rear or sides; pull straps from front.",
  },
  {
    label: "Mobility",
    body: "Rear caster wheels allow 360° rotation.",
  },
];

export const EMS_WORLD_AWARD_URL =
  "https://www.hmpgloballearningnetwork.com/site/emsworld/feature/2025-innovation-awards-winners";
export const FIREHOUSE_AWARD_URL =
  "https://www.firehouse.com/technology/article/55318362/firehouse-magazine-innovation-awards";
