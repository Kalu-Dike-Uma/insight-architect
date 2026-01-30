import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProfessionalExperienceSection } from "@/components/ProfessionalExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { FooterCTA } from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProfessionalExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <WhatIDoSection />
        <ProjectsSection />
        <LanguagesSection />
        <PublicationsSection />
        <FooterCTA />
      </main>
    </div>
  );
};

export default Index;
