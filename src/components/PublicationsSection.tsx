import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar } from "lucide-react";

const publications = [
  {
    title: "A Bayesian Belief Network for Risk Assessment of COVID-19 in Nigeria: A Case Study of University of Abuja Teaching Hospital",
    journal: "ASUU Journal of Science",
    volume: "Vol. 8 (1 & 2)",
    year: "2021",
    type: "Peer-Reviewed",
  },
  {
    title: "Contributed to multiple peer-reviewed local and international research publications",
    journal: "Various Journals",
    volume: "Multiple volumes",
    year: "2014 – Present",
    type: "Published Research",
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research & Publications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Publications list */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 h-fit">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-foreground mb-2">{pub.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{pub.journal}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{pub.volume}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {pub.year}
                      </span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="h-fit">
                    {pub.type}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
