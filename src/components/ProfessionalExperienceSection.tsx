import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "IT & Strategic Data Manager",
    company: "Alibert Products Nigeria Limited",
    location: "Abuja, Nigeria",
    period: "May 2017 – Present",
    highlights: [
      "Analyzed sales and operational datasets to identify high-performing products and locations, contributing to revenue growth.",
      "Led organization-wide data centralization and cloud migration, achieving 40% reduction in IT costs.",
      "Designed and implemented biometric staff management systems, reducing personnel costs by 20%.",
      "Managed cross-functional teams across IT, data, and operations functions.",
      "Ensured data integrity and security for over 300 staff locally and internationally.",
    ],
  },
  {
    title: "Monitoring, Evaluation & Learning (MEL) / IT Officer",
    company: "LevelUpRecyclers",
    location: "Abuja, Nigeria",
    period: "2024 – Present",
    highlights: [
      "Designed and implemented MEAL systems for donor-funded livelihood and waste-to-wealth programmes.",
      "Developed MEL frameworks, indicators, data collection tools, and reporting templates.",
      "Coordinated baseline, midline, and endline assessments ensuring data quality standards.",
      "Performed quantitative data analysis using Excel, SPSS, STATA and digital platforms.",
      "Trained project staff and community facilitators on MEL tools and IT skills.",
    ],
  },
  {
    title: "Monitoring, Evaluation & Learning (MEL) Officer / Data Analyst (Contract)",
    company: "Superskills Nigeria Limited",
    location: "Abuja, Nigeria",
    period: "June 2020 – Present",
    highlights: [
      "Designed and implemented M&E frameworks for skills development and institutional strengthening.",
      "Led baseline, midline, and endline assessments with comprehensive data quality management.",
      "Managed end-to-end data collection processes ensuring timely donor reporting.",
      "Supported capacity-building and training sessions for institutions including FCMB, FIRS.",
    ],
  },
  {
    title: "Research & M&E Assistant",
    company: "Ikechi Ibeji Associates",
    location: "Port Harcourt, Nigeria",
    period: "February 2014 – December 2016",
    highlights: [
      "Supported development of M&E plans and research instruments.",
      "Maintained project databases and conducted data cleaning and validation.",
      "Coordinated field officer training and monitored survey implementation.",
      "Contributed to impact studies on oil exploration effects in Niger Delta communities.",
    ],
  },
];

export function ProfessionalExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Experience timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 h-fit">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{exp.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
