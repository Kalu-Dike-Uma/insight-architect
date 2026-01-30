import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    category: "Monitoring & Evaluation",
    items: [
      "Planning for Monitoring & Evaluation – Philanthropy University",
      "From Data Collection to Data Use – FHI 360",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Google Advanced Data Analytics – Coursera (2025)",
      "Python for Data Science & Machine Learning – Udemy",
      "Advanced Data Visualization – Udemy",
      "Applied Data Science Lab – WorldQuant University",
      "Biostatistics – NextGenU",
    ],
  },
  {
    category: "Specialized Skills",
    items: [
      "DHIS2 Training",
      "Certified in Cybersecurity (ISC2)",
      "Project Management Professional (PMP) – Training",
      "Statistics: The Science of Decisions",
    ],
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base text-foreground">{cert.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
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
