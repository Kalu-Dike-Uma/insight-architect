import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, Briefcase, TrendingUp, BarChart3 } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
          Researcher, Statistician,
          <br />
          <span className="text-primary dark:text-primary">Data Analytics & MEL Professional</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Turning complex data into actionable insights for businesses, NGOs, and research-driven programs.
        </p>

        {/* Credibility line with badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-sm text-muted-foreground">8+ years experience across private sector, donor-funded programs, and research</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <Badge variant="secondary" className="text-xs">Statistics</Badge>
          <Badge variant="secondary" className="text-xs">Data Analytics</Badge>
          <Badge variant="secondary" className="text-xs">Monitoring & Evaluation</Badge>
        </div>

        {/* Stat highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="p-6 rounded-lg bg-secondary/50 border border-border">
            <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="p-6 rounded-lg bg-secondary/50 border border-border">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">Business & Social</div>
            <div className="text-sm text-muted-foreground">Impact Analytics</div>
          </div>
          <div className="p-6 rounded-lg bg-secondary/50 border border-border">
            <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground">Data-Driven</div>
            <div className="text-sm text-muted-foreground">Decision Support</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            View My Projects
            <ArrowDown className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="#" className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToContact} className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
