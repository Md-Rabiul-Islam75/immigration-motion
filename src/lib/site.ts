/**
 * Central site configuration.
 * Edit this file to update navigation, services, contact details, and stats.
 * All content is placeholder-ready — swap copy/numbers when real content arrives.
 */

export const site = {
  name: "HnH Immigration",
  legalName: "HnH Immigration Services Inc.",
  tagline: "Your Pathway to Canada",
  description:
    "A regulated Canadian immigration consultancy guiding individuals, families, and businesses toward a confident new beginning.",
  email: "info@hnhimmigration.ca",
  phone: "+1 (000) 000-0000",
  address: "Toronto, Ontario, Canada",
  // Regulatory credential — update with the real RCIC / CICC license number.
  license: "RCIC #R000000 · CICC Member",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    whatsapp: "#",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  /** lucide-react icon name */
  icon:
    | "Plane"
    | "Map"
    | "Users"
    | "GraduationCap"
    | "Briefcase"
    | "Stamp"
    | "Building2"
    | "BadgeCheck";
};

export const services: Service[] = [
  {
    slug: "express-entry",
    title: "Express Entry",
    blurb:
      "Permanent residency through the FSW, CEC, and FST programs — profile optimization, CRS strategy, and end-to-end application support.",
    icon: "Plane",
  },
  {
    slug: "provincial-nominee",
    title: "Provincial Nominee Program",
    blurb:
      "Targeted nomination streams across Canadian provinces matched to your profile, occupation, and long-term goals.",
    icon: "Map",
  },
  {
    slug: "family-sponsorship",
    title: "Family Sponsorship",
    blurb:
      "Reunite with spouses, partners, parents, and dependent children through carefully prepared sponsorship applications.",
    icon: "Users",
  },
  {
    slug: "study-permit",
    title: "Study Permits",
    blurb:
      "From institution selection to study permit and post-graduation work — a complete roadmap for international students.",
    icon: "GraduationCap",
  },
  {
    slug: "work-permit",
    title: "Work Permits & LMIA",
    blurb:
      "Employer-specific and open work permits, LMIA support, and pathways from temporary work to permanent residence.",
    icon: "Briefcase",
  },
  {
    slug: "visitor-visa",
    title: "Visitor & Super Visa",
    blurb:
      "Temporary resident visas, visa extensions, and Super Visas for parents and grandparents.",
    icon: "Stamp",
  },
  {
    slug: "business-immigration",
    title: "Business Immigration",
    blurb:
      "Start-up Visa, self-employed, and entrepreneur streams for founders and investors building in Canada.",
    icon: "Building2",
  },
  {
    slug: "citizenship",
    title: "Citizenship",
    blurb:
      "Eligibility assessment, application preparation, and test guidance on the final step of your journey.",
    icon: "BadgeCheck",
  },
];

export type Step = { title: string; description: string };

export const process: Step[] = [
  {
    title: "Free Assessment",
    description:
      "We review your profile, goals, and eligibility across every viable program — with no obligation.",
  },
  {
    title: "Tailored Strategy",
    description:
      "You receive a clear, personalized roadmap detailing the best pathway, timeline, and document checklist.",
  },
  {
    title: "Application & Filing",
    description:
      "We prepare, review, and submit a complete, accurate application — keeping you informed at every stage.",
  },
  {
    title: "Landing in Canada",
    description:
      "From approval to arrival, we support your transition so you can start your new chapter with confidence.",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "12+", label: "Years of experience" },
  { value: "2,500+", label: "Successful applications" },
  { value: "40+", label: "Countries served" },
  { value: "98%", label: "Client satisfaction" },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "Are you a regulated immigration consultant?",
    a: "Yes. HnH Immigration operates as a regulated consultancy in good standing with the College of Immigration and Citizenship Consultants (CICC).",
  },
  {
    q: "How long does the immigration process take?",
    a: "Timelines vary by program and individual circumstances. During your free assessment we provide realistic, current processing estimates for your specific pathway.",
  },
  {
    q: "Do you offer a free initial consultation?",
    a: "Yes — your first eligibility assessment is complimentary and carries no obligation.",
  },
  {
    q: "Can you help if a previous application was refused?",
    a: "Absolutely. We review refusal reasons, identify what changed, and build a stronger re-application or appeal strategy where appropriate.",
  },
];
