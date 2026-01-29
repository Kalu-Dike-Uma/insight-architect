import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Brain, Target, Shield } from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Data Analysis & Visualization",
    description: "Transforming raw data into insights leaders can understand and act on.",
  },
  {
    icon: Brain,
    title: "Machine Learning & Statistical Analysis",
    description: "Predictive modeling, regression, and advanced analytics for decision support.",
  },
  {
    icon: Target,
    title: "Monitoring, Evaluation & Learning (MEL)",
    description: "Designing systems that track outcomes, accountability, and impact for donor-funded and social programs.",
  },
  {
    icon: Shield,
    title: "Data Systems & Quality Assurance",
    description: "Building reliable, secure, and scalable data environments that improve data quality and continuity.",
  },
];

export function WhatIDoSection() {
  return (
    <section id="what-i-do" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
