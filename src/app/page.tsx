import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { TrustBanner } from "@/components/sections/trust-banner";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { WhyChoose } from "@/components/sections/why-choose";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBanner />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
