import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Brain } from "lucide-react";

export function AboutSection() {
  const expertise = [
    "Data Analytics & Visualization",
    "Monitoring, Evaluation & Learning (MEL)",
    "Research Design & Statistics",
    "Business Intelligence",
    "Organizational Strategy",
    "Team Leadership & Training",
  ];

  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Publications", value: "1+" },
    { label: "Cost Savings Generated", value: "40%" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Professional Summary */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Data-Driven Strategy Professional
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I transform complex organizational data challenges into strategic opportunities through rigorous analysis, innovative thinking, and evidence-based insights.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                With 8+ years across private sector, NGOs, and research environments, I design MEL systems, conduct advanced analytics, and empower leaders to make confident, impact-driven decisions.
              </p>
            </div>

            {/* Key expertise */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Core Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex gap-2 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full sm:w-fit bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12"
            >
              <a href="#contact">
                Let's Work Together
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right: Visual Stats & Quote */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Achievement Card */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-foreground">
                    Key Achievement
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Led organization-wide data centralization and cloud migration, achieving <span className="text-primary font-semibold">40% reduction in IT costs</span> and <span className="text-primary font-semibold">eliminating 30+ ghost workers</span> through biometric systems implementation.
                </p>
              </CardContent>
            </Card>

            {/* Testimonial/Philosophy */}
            <Card className="border border-border bg-card">
              <CardContent className="p-6 italic">
                <p className="text-muted-foreground leading-relaxed">
                  "I believe that great insights come from asking the right questions, rigorous analysis, and deep listening to stakeholders. My goal is to be a trusted partner in transforming data into decisions that matter."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
