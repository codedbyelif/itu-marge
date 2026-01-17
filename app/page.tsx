import Hero from "./components/Hero";
import HeroSection from "@/components/HeroSection";
import FAQ from "@/components/FAQ";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Content1 } from "@/components/content1";

export default function Page() {
  return (
    <>
      <Hero />
      <HeroSection />
      <Content1 />
      <FAQ />

    </>
  );
}
