import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export function FooterCTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interested in working together?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Let's discuss how I can help turn your data into actionable insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="gap-2"
          >
            <a href="/CV.pdf" download target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="mailto:your.email@example.com">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} • Data Analytics & MEL Professional
          </p>
        </div>
      </div>
    </section>
  );
}
