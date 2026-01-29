import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

interface Project {
  title: string;
  organization?: string;
  summary: string;
  problem: string;
  whatIDid: string[];
  tools: string[];
  impact: string[];
  keyInsight: string;
}

const projects: Project[] = [
  {
    title: "Sales & Operations Analytics & Data Systems Optimization",
    organization: "Alibert Products Nigeria Limited",
    summary: "Used data analytics and systems redesign to improve revenue visibility, cut costs, and strengthen operational controls.",
    problem: "Fragmented sales, operations, and workforce data limited performance tracking, cost control, and decision-making.",
    whatIDid: [
      "Centralized sales and operational data into a cloud-based system",
      "Analyzed product- and location-level performance",
      "Built management reports and dashboards",
      "Designed and deployed biometric staff management systems",
      "Established data governance practices",
    ],
    tools: ["Excel (Advanced)", "SPSS", "STATA", "Data cleaning", "Reporting", "Dashboards", "Cloud systems"],
    impact: [
      "Reduced IT costs by 40%",
      "Eliminated 30+ ghost and absentee workers, reducing personnel costs by 20%",
      "Improved revenue visibility and operational efficiency for 300+ staff",
    ],
    keyInsight: "I design systems that turn data insights into real operational and financial results.",
  },
  {
    title: "Designing a MEAL System for Donor-Funded Livelihood Programs",
    organization: "LevelUpRecyclers – Abuja",
    summary: "Designed and implemented a full Monitoring, Evaluation, Accountability & Learning (MEAL) system to track outcomes and strengthen donor reporting.",
    problem: "The organization lacked a structured MEAL framework aligned with donor requirements to track social and economic outcomes among women and youth in IDP camps.",
    whatIDid: [
      "Designed results frameworks, indicators, and data collection tools",
      "Conducted baseline and routine monitoring",
      "Coordinated data collection, verification, and DQAs",
      "Analyzed program data and produced dashboards and reports",
      "Documented lessons learned and success stories",
      "Trained staff on MEL tools and ethical data collection",
    ],
    tools: ["Excel", "SPSS", "STATA", "Survey design", "Sampling", "Indicator tracking", "Dashboards", "Donor reporting"],
    impact: [
      "Improved data accuracy and accountability",
      "Strengthened donor confidence through high-quality reporting",
      "Enabled learning-driven program improvement",
    ],
    keyInsight: "I bridge analytics and social impact to ensure data drives accountability and better programs.",
  },
  {
    title: "Predicting Taxi Fare Disputes Using Machine Learning",
    organization: "Google Advanced Data Analytics Capstone – Automatidata",
    summary: "Applied exploratory data analysis and machine learning to identify and predict factors contributing to taxi fare disputes.",
    problem: "Transportation authorities lack proactive tools to identify high-risk scenarios for fare disputes.",
    whatIDid: [
      "Cleaned and prepared large-scale taxi trip datasets",
      "Conducted exploratory data analysis",
      "Engineered relevant features",
      "Built and evaluated predictive models",
      "Interpreted model results for non-technical stakeholders",
    ],
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "EDA", "Feature engineering", "Predictive modeling", "Data visualization"],
    impact: [
      "Identified high-risk conditions linked to fare disputes",
      "Demonstrated how predictive analytics can support policy and operational decisions",
    ],
    keyInsight: "I turn ambiguous real-world problems into structured, decision-ready insights.",
  },
  {
    title: "Sales Performance Analytics & Forecasting Dashboard",
    summary: "Built an executive-level sales dashboard with forecasting to support performance tracking and planning.",
    problem: "Leadership had historical sales data but lacked a consolidated view of trends, profitability, and short-term revenue outlook.",
    whatIDid: [
      "Cleaned and prepared transactional sales data",
      "Defined leadership-focused KPIs",
      "Analyzed trends, seasonality, and performance gaps",
      "Built an interactive dashboard",
      "Applied time-series forecasting for short-term planning",
    ],
    tools: ["Power BI", "Excel", "Data cleaning", "KPI design", "Time-series analysis", "Forecasting", "Dashboard design"],
    impact: [
      "Supported data-driven pricing and planning decisions",
      "Enabled faster identification of high- and low-performing areas",
    ],
    keyInsight: "I build analytics tools that help leaders understand performance and anticipate change.",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border border-border bg-card hover:shadow-lg transition-shadow duration-300">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-primary">Project {index + 1}</span>
              </div>
              <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
              {project.organization && (
                <p className="text-sm text-muted-foreground font-medium">{project.organization}</p>
              )}
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </CollapsibleTrigger>
          </div>
          <p className="text-muted-foreground mt-3">{project.summary}</p>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="pt-0 space-y-6">
            {/* Problem */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Problem</h4>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>

            {/* What I Did */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">What I Did</h4>
              <ul className="space-y-1">
                {project.whatIDid.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Impact</h4>
              <ul className="space-y-1">
                {project.impact.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Insight */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Key Insight</h4>
                  <p className="text-muted-foreground italic">{project.keyInsight}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
