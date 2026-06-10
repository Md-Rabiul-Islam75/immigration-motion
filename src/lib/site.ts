/**
 * Central site configuration — real content from hnhimmigration.ca.
 * Edit this file to update navigation, services, contact details, and stats.
 */

export const site = {
  name: "HnH Immigration",
  legalName: "HnH Immigration Inc.",
  tagline: "Education · Immigration · Investment",
  pitch: "Calgary's trusted immigration experts.",
  description:
    "HnH Immigration Inc. specializes in Canadian immigration and educational consulting — guiding individuals and families to a new life in Canada with transparent, reliable, and efficient service.",
  email: "info@hnhimmigration.ca",
  phone: "+1 647-786-9467",
  address: "Suite 2500 - 500 4th Ave. SW, Calgary, AB, T2P 2V6",
  hours: "Mon – Fri : 10 am to 6 pm",
  poweredBy: "Cyber Ace",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    whatsapp: "#",
  },
  director: {
    name: "Zain Alabedin Ghadai",
    role: "Director & Lead Immigration Counselor",
    photo: "/director-img.png",
  },
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
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
    title: "Guided Assessment",
    description:
      "We start with a guided assessment so you understand your readiness before choosing a package — clarity first, no pressure.",
  },
  {
    title: "The Right Next Step",
    description:
      "Based on your profile and goals, we identify the best program and map out a clear, personalized pathway forward.",
  },
  {
    title: "Packages & Application",
    description:
      "Move into a package with confidence. We prepare, review, and submit a complete, accurate application on your behalf.",
  },
  {
    title: "Your Canadian Dream",
    description:
      "From approval to arrival, our around-the-clock support stays with you until you settle into your new life in Canada.",
  },
];

/** Headline stats shown across the site. */
export const stats: { value: string; label: string }[] = [
  { value: "99%", label: "Client Satisfaction" },
  { value: "7+", label: "Years of Experience" },
  { value: "600+", label: "Verified Clients" },
];

export const trustLine =
  "Trusted by over 600+ successful clients across 20+ industries";

/** Highlight stat boxes (about + why-choose-us sections). */
export const aboutStats = [
  { value: "42 hrs", label: "Application Approval Time" },
  { value: "600+", label: "Successful Cases" },
];

export const whyStats = [
  { value: "98%", label: "Visa Approval Rate" },
  { value: "7+", label: "Years in Business" },
];

/** Reasons shown in the "Why Choose Us" section. */
export const whyChoose: { title: string; description: string }[] = [
  {
    title: "Transparent & Honest",
    description:
      "Clear eligibility assessments and upfront guidance — we tell you where you stand, never what you want to hear.",
  },
  {
    title: "Personalised Strategy",
    description:
      "Every case is unique. We build a pathway around your profile, occupation, and long-term goals.",
  },
  {
    title: "End-to-End Support",
    description:
      "From your first consultation to landing day, our team stays with you through every form and milestone.",
  },
  {
    title: "Proven Track Record",
    description:
      "600+ successful clients across 20+ industries trust HnH with one of life's biggest decisions.",
  },
];

/** Trust badges shown in the footer and contact page. */
export const badges: string[] = [
  "Regulated Consultancy",
  "100% Confidential",
  "Free Initial Assessment",
];

export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had an outstanding experience with HnH Immigration Inc service. The entire process was smooth, efficient and stress free. The staff was very professional, knowledgeable and friendly. The team went above and beyond to ensure there were no delays. I truly appreciate the exceptional level of service.",
    name: "Farah Nauman",
    rating: 5,
  },
  {
    quote:
      "Thank you HnH Immigration Inc. for your excellent service. Thank you Mr. Zain and his team who are so helpful and loyal about their services. They always answered all my questions and concerns without getting annoyed. They explained the entire process well and made it stress free throughout. That is why I highly recommend HnH Immigration Inc to my friends.",
    name: "Waleed Bahloul",
    rating: 5,
  },
  {
    quote:
      "It was a great decision choosing HnH Immigration Inc. as a consultant in the study permit application for my younger brother. The team was really amazing and studied the case thoroughly, helping in every step of the procedure. Always available when needed — perfect to rely on!",
    name: "Shuker Ullah",
    rating: 5,
  },
  {
    quote:
      "Thank you for your exceptional service and professionalism throughout the visa process. Your dedication and prompt assistance made everything smooth and stress-free. Highly appreciated!",
    name: "Shayan Anees",
    rating: 5,
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMins: number;
  image: string;
  author: string;
};

/** Blog / journal posts. Content is illustrative editorial copy. */
export const posts: Post[] = [
  {
    slug: "express-entry-2026",
    title: "Express Entry in 2026: what's changing and how to prepare",
    excerpt:
      "Category-based draws are reshaping the fastest route to permanent residence. Here's how to position your CRS profile for the year ahead.",
    category: "Express Entry",
    date: "May 28, 2026",
    readMins: 7,
    image: "/immigration-plane.jpg",
    author: "Zain Alabedin Ghadai",
  },
  {
    slug: "pnp-practical-guide",
    title: "A practical guide to Provincial Nominee Programs",
    excerpt:
      "Each province runs its own streams with its own priorities. We break down how to match your occupation and goals to the right nomination.",
    category: "PNP",
    date: "May 14, 2026",
    readMins: 9,
    image: "/immigration-3.jpg",
    author: "HnH Immigration",
  },
  {
    slug: "study-to-pr",
    title: "From study permit to PR: the international student pathway",
    excerpt:
      "Studying in Canada can be the first step toward staying for good. Map the journey from admission to post-graduation work to residency.",
    category: "Study",
    date: "April 30, 2026",
    readMins: 6,
    image: "/immigration-5.jpg",
    author: "HnH Immigration",
  },
  {
    slug: "family-sponsorship-checklist",
    title: "The family sponsorship document checklist",
    excerpt:
      "Reuniting with loved ones starts with a complete, accurate file. Use our checklist to avoid the delays that trip up most applications.",
    category: "Sponsorship",
    date: "April 18, 2026",
    readMins: 5,
    image: "/immigration-4.jpg",
    author: "HnH Immigration",
  },
  {
    slug: "settling-in-calgary",
    title: "Settling in Calgary: a newcomer's first 90 days",
    excerpt:
      "Banking, healthcare, housing, and community — a grounded look at the practical steps that make the first three months feel like home.",
    category: "Settlement",
    date: "April 2, 2026",
    readMins: 8,
    image: "/immigration2.jpg",
    author: "HnH Immigration",
  },
  {
    slug: "work-permits-lmia",
    title: "Work permits & LMIA, explained simply",
    excerpt:
      "Employer-specific or open? What an LMIA really involves, and how a temporary work permit can become a long-term pathway to staying.",
    category: "Work",
    date: "March 20, 2026",
    readMins: 7,
    image: "/immigration-airport.jpg",
    author: "HnH Immigration",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "How does the process start?",
    a: "Every journey begins with a guided assessment so you understand your readiness before choosing a package — clear, honest advice with no pressure.",
  },
  {
    q: "Where is HnH Immigration based?",
    a: "We are based in Calgary, Alberta and proudly serve clients across Canada and around the world.",
  },
  {
    q: "Do you offer a free initial consultation?",
    a: "Yes — book a consultation and we'll review your situation and outline the pathway that best fits your goals.",
  },
  {
    q: "What kind of support do you provide?",
    a: "From initial consultation to completed application, our team guides you every step of the way with around-the-clock support.",
  },
];
