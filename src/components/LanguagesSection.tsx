import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const languages = [
  {
    language: "English",
    proficiency: "Fluent",
    level: "Native/Professional",
  },
  {
    language: "Igbo",
    proficiency: "Fluent",
    level: "Native/Professional",
  },
  {
    language: "Yoruba",
    proficiency: "Conversational",
    level: "Intermediate",
  },
  {
    language: "Hausa",
    proficiency: "Conversational",
    level: "Intermediate",
  },
];

const proficiencyColor = (proficiency: string) => {
  switch (proficiency.toLowerCase()) {
    case "fluent":
      return "bg-green-500/10 text-green-700 dark:text-green-400";
    case "conversational":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export function LanguagesSection() {
  return (
    <section id="languages" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Languages
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Languages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-md transition-shadow text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {lang.language}
                </h3>
                <Badge className={proficiencyColor(lang.proficiency)}>
                  {lang.proficiency}
                </Badge>
                <p className="text-xs text-muted-foreground mt-3">
                  {lang.level}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
