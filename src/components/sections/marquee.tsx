import { Container } from "@/components/ui/container";

// Keywords that scroll continuously beneath the hero — mdx.so signature strip.
const items = [
  "Express Entry",
  "Provincial Nominee",
  "Family Sponsorship",
  "Study Permits",
  "Work Permits",
  "Visitor Visa",
  "Business Immigration",
  "Citizenship",
];

export function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <section className="relative border-y border-line bg-ink-soft py-5">
      <Container className="max-w-none px-0">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {loop.map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-10 text-sm font-medium uppercase tracking-[0.18em] text-cream/55"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-gold/70" />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
