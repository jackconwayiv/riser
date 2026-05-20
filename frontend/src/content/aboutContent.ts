export const ABOUT_HERO_LEAD =
  "The RISER was created by a Firefighter who saw firsthand how risky patient lifting can be and set out to build a safer, more portable way to help patients up.";

export const WHY_INVENT_RISER =
  "After 15 years working as a firefighter, Rick Beedle saw firsthand how often people need help getting up from the floor and how physically demanding and risky that process can be. When a friend and colleague suffered a career-ending back injury during a lift, it became clear that something needed to change. Existing tools are often too bulky, heavy, or impractical to transport quickly, so Rick looked to the improvised methods first responders rely on every day. What started as a makeshift solution using towels, bedsheets, and office chairs eventually became The RISER: a purpose-built device designed to safely and efficiently help lift patients off the ground.";

export const WHY_EMS_INNOVATIONS =
  "At EMS Innovations, we chose our name to reflect the mindset behind everything we do: finding practical, outside-the-box solutions to real challenges faced by first responders. Our first and current focus is The RISER, a product born directly from years of experience in the field and the need for a safer, more effective way to lift patients from the ground. While The RISER is our flagship product today, our broader mission is to continue developing innovative tools that make the job safer, easier, and more efficient for EMS professionals and firefighters in the future.";

export const RICK_BEEDLE_BIO =
  "Rick Beedle is the inventor of The RISER and has spent the last 15 years serving as a firefighter. Born and raised in suburban Detroit, Rick attended the University of Michigan before heading west to Phoenix, Arizona in search of new opportunities. His passion for helping people is what first drew him to firefighting, and that same mindset inspired him to create The RISER — a practical solution designed to make lifts safer and easier for firefighters while helping protect them from career-ending back injuries.";

export const RICK_BEEDLE_BOOK =
  "Beyond his work in emergency services and innovation, Rick is also committed to giving back to the community, including reading his own children's Christmas book (Firefighters' Night Before Christmas) at local schools and firehouses.";

export type ConferenceEntry = {
  id: string;
  name: string;
  /** Venue and city, e.g. "Indianapolis, IN — Indiana Convention Center" */
  location: string;
  /** Display date or range */
  dates: string;
  /** Path under `public/`, e.g. `conferences/fdic.svg` */
  logoSrc: string;
  logoAlt: string;
  /** Official conference or organization page */
  url: string;
};

export const CONFERENCES_ATTENDED: ConferenceEntry[] = [
  {
    id: "fdic-2025",
    name: "FDIC International 2025",
    location: "Indianapolis, IN — Indiana Convention Center & Lucas Oil Stadium",
    dates: "April 7–12, 2025",
    logoSrc: "conferences/FDIC International logo.png",
    logoAlt: "FDIC International",
    url: "https://www.fdic.com/",
  },
  {
    id: "iafc-crrl-2025",
    name: "IAFC 2025 Leadership Conference",
    location:
      "Glendale, AZ — Renaissance Phoenix Glendale Hotel & Spa",
    dates: "May 13–15, 2025",
    logoSrc: "conferences/iafc.png",
    logoAlt: "International Association of Fire Chiefs",
    url: "https://crrl2025.eventscribe.net/",
  },
  {
    id: "pffa-pep-2025",
    name: "PFFA Tucson PEP",
    location: "Tucson, AZ — JW Marriott Starr Pass Resort",
    dates: "May 30, 2025",
    logoSrc: "conferences/pffaz.png",
    logoAlt: "Professional Fire Fighters of Arizona",
    url: "https://www.iaff.org/event/professional-fire-fighters-of-arizona-pep-event/",
  },
  {
    id: "ems-world-2025",
    name: "EMS World Expo 2025",
    location: "Indianapolis, IN — Indiana Convention Center",
    dates: "October 20–24, 2025",
    logoSrc: "conferences/ems-world.png",
    logoAlt: "EMS World Expo",
    url: "https://www.emsworldexpo.com/en/home.html",
  },
  {
    id: "aalha-2026",
    name: "Arizona Assisted Living Homes Association Annual Conference",
    location: "Phoenix, AZ — Moon Valley Country Club",
    dates: "March 9, 2026",
    logoSrc: "conferences/aalha.png",
    logoAlt: "Arizona Assisted Living Homes Association",
    url: "https://aalha.org/Conference_Sponsors_Info_",
  },
  {
    id: "acnsc-2026",
    name: "Southwest Safety Conference (National Safety Council — Arizona Chapter)",
    location: "Mesa, AZ — DoubleTree by Hilton Phoenix Mesa",
    dates: "April 17, 2026",
    logoSrc: "conferences/acnsc.jpg",
    logoAlt: "National Safety Council — Arizona Chapter",
    url: "https://www.acnsc.org/southwest-safety-conference-save-the-date/",
  },
  {
    id: "frm-crrl-2026",
    name: "Fire-Rescue Med & Community Risk Reduction Leadership Conference",
    location:
      "Glendale, AZ — Renaissance Phoenix Glendale Hotel & Spa",
    dates: "May 19–21, 2026",
    logoSrc: "conferences/iafc.png",
    logoAlt: "Fire-Rescue Med and CRRL (IAFC)",
    url: "https://frm-crrl26.eventscribe.net/",
  },
];
