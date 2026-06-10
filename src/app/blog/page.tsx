import type { Metadata } from "next";
import { BlogHero, BlogList } from "@/components/sections/blog";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and practical guides on Canadian immigration from HnH Immigration — Express Entry, PNP, study and work permits, sponsorship, and settlement.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <Cta />
    </>
  );
}
