export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a data analytics and monitoring & evaluation professional with over 8 years of experience across the private sector, NGOs, donor-funded programs, and research environments.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My work focuses on using data to improve decision-making, accountability, and impact — whether in business operations, social programs, or policy-driven initiatives.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I enjoy working with multidisciplinary teams and translating complex analysis into insights that leaders can act on.
          </p>
        </div>
      </div>
    </section>
  );
}
