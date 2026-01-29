import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterCTA } from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIDoSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <FooterCTA />
      </main>
    </div>
  );
};

export default Index;
