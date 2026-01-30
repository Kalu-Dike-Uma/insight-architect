import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FooterCTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003D82] dark:text-blue-400 mb-4">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-cyan-500 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your data challenges into strategic opportunities? I'd love to discuss how I can contribute to your organization's success.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Get in Touch */}
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#003D82] dark:text-blue-400 mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 h-fit">
                    <Mail className="h-5 w-5 text-[#003D82] dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:kaldyke@gmail.com" className="text-gray-800 dark:text-gray-200 font-medium hover:text-[#003D82] dark:hover:text-blue-400 transition-colors">
                      kaldyke@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 h-fit">
                    <Phone className="h-5 w-5 text-[#003D82] dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+234806051020" className="text-gray-800 dark:text-gray-200 font-medium hover:text-[#003D82] dark:hover:text-blue-400 transition-colors">
                      (+234) 806-051-0208
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 h-fit">
                    <Linkedin className="h-5 w-5 text-[#003D82] dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a href="https://linkedin.com/in/kalu-dike-65b2b194" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 font-medium hover:text-[#003D82] dark:hover:text-blue-400 transition-colors">
                      linkedin.com/in/kalu-dike-65b2b194
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#003D82] dark:text-blue-400 mb-8">
                Quick Actions
              </h3>
              
              <div className="space-y-4 mb-8">
                {/* Download CV */}
                <Button
                  asChild
                  className="w-full bg-[#003D82] hover:bg-[#002a5c] text-white font-medium h-12 rounded-lg gap-2"
                >
                  <a href="/CV.pdf" download target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Download Complete CV
                  </a>
                </Button>

                {/* Send Email */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 font-medium h-12 rounded-lg gap-2"
                >
                  <a href="mailto:kaldyke@gmail.com">
                    <Mail className="h-4 w-4" />
                    Send Email Directly
                  </a>
                </Button>

                {/* LinkedIn */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#003D82] text-[#003D82] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium h-12 rounded-lg gap-2"
                >
                  <a href="https://linkedin.com/in/kalu-dike-65b2b194" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Available for full-time opportunities and consulting projects
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Kalu Dike Uma. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#003D82] dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
            <a href="https://linkedin.com/in/kalu-dike-65b2b194" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#003D82] dark:hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#003D82] dark:hover:text-blue-400 transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
