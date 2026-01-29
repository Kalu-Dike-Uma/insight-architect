import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, LineChart, ClipboardCheck, Database } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Analytics & Tools",
    skills: ["Python", "R", "Excel", "Power BI", "Tableau", "SPSS", "STATA"],
  },
  {
    icon: LineChart,
    title: "Methods",
    skills: ["EDA", "Statistical modeling", "Machine learning", "Forecasting", "Survey analysis"],
  },
  {
    icon: ClipboardCheck,
    title: "MEL & Research",
    skills: ["Indicators", "Logframes", "Baseline/Midline/Endline", "DQA", "Donor reporting"],
  },
  {
    icon: Database,
    title: "Systems",
    skills: ["Cloud systems", "Data governance", "DHIS2", "Data quality assurance"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border border-border bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
