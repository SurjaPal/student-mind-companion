import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TechStack } from "@/components/TechStack";
import { ImpactSection } from "@/components/ImpactSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TechStack />
      <ImpactSection />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
