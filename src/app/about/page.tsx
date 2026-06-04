import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about HnH Immigration — a regulated Canadian immigration consultancy built on honesty, expertise, and genuine care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="People first, paperwork second"
        lede="We are a regulated Canadian immigration consultancy helping people build new lives with clarity and confidence."
      />
      <About />
      <Process />
      <Cta />
    </>
  );
}
