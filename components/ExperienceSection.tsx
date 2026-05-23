import AccordionSection from "./AccordionSection";

const experiences = [
  {
    num: "01",
    title: "Software Engineer",
    company: "GIS Analytics",
    period: "Mar 2026–Present",
    location: "London Remote",
    tag: null,
  },
  {
    num: "02",
    title: "Software Engineer",
    company: "okeep",
    period: "Jan 2026–Present",
    location: null,
    tag: "AI Automation",
  },
  {
    num: "03",
    title: "IT Specialist",
    company: "B4AFC",
    period: "Jan–May 2026",
    location: null,
    tag: "Infrastructure",
  },
  {
    num: "04",
    title: "Intern",
    company: "Boyner",
    period: "Jul–Aug 2025",
    location: null,
    tag: "SQL & Data",
  },
];

export default function ExperienceSection() {
  return (
    <AccordionSection id="experience" title="Experience">
      <div className="grid gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.num}
            className="group relative flex items-center gap-6 p-6 rounded-xl border border-surface-border hover:border-primary-container/30 transition-all duration-300"
          >
            <div className="text-label-mono font-bold text-primary-container opacity-50">
              {exp.num}
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  {exp.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  @ {exp.company}
                </p>
              </div>
              <div className="flex gap-3 text-label-mono text-text-muted">
                <span>{exp.period}</span>
                {(exp.location || exp.tag) && (
                  <span className="hidden md:inline">•</span>
                )}
                {exp.location && <span>{exp.location}</span>}
                {exp.tag && (
                  <span className="text-primary/80">{exp.tag}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AccordionSection>
  );
}
