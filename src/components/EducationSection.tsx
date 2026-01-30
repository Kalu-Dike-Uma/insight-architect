import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science (MSc) – Statistics",
    institution: "University of Abuja",
    location: "Nigeria",
    year: "2022",
  },
  {
    degree: "Bachelor of Science (BSc Hons 2.1) – Statistics & Computer Science",
    institution: "University of Port Harcourt",
    location: "Nigeria",
    year: "2014",
  },
];

const awards = [
  "Best Graduating Student, Mathematics/Statistics – University of Port Harcourt",
  "Prof. A.R. Bestman Prize – Best Graduating Student (Mathematics/Statistics)",
  "Chief I.O. Erekosima Prize – Best Graduating Student",
  "Dr. E.O. Biu Prize – Best Student in Statistical Computing",
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Awards
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6">Academic Qualifications</h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 h-fit">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base text-foreground">{edu.degree}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                          <Calendar className="h-3 w-3" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards column */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Honors & Awards</h3>
            <Card className="border border-border bg-card">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {awards.map((award, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-primary text-xl leading-none">★</span>
                      <p className="text-sm text-muted-foreground">{award}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
