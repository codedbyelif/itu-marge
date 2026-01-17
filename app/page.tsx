import Hero from "./components/Hero";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/FAQ";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Features from "@/components/Features";

export default function Page() {
  return (
    <>
      <Hero />
      <HeroSection />
      <Features />
      <FAQ />

    </>
  );
}
