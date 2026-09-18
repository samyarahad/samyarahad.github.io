import { Navbar, Hero } from "@/components/site/navbar-hero";
import { StatsStrip, FeatureBento } from "@/components/site/feature-bento";
import { ProductTour } from "@/components/site/product-tour";
import { Infrastructure, Changelog, CtaSection, Footer } from "@/components/site/sections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#09090b] text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <FeatureBento />
        <ProductTour />
        <Infrastructure />
        <Changelog />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
