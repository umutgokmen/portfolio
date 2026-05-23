import AccordionSection from "./AccordionSection";

const skillGroups = [
  {
    label: "Fullstack",
    skills: ["React", "Next.js", "Node.js"],
  },
  {
    label: "AI & ML",
    skills: ["PyTorch", "Computer Vision"],
  },
  {
    label: "Infrastructure",
    skills: ["AWS", "Docker"],
  },
  {
    label: "Languages",
    skills: ["TypeScript", "Python", "C++", "SQL"],
  },
];

const certificates = [
  "Anthropic Claude Code in Action",
  "Anthropic Building with the Claude API",
  "Anthropic Introduction to Agent Skills",
  "Anthropic Introduction to Model Context Protocol",
  "CS Bridge Program 2020",
];

export default function AboutSection() {
  return (
    <AccordionSection id="about" title="About">
      <div className="glass-card rounded-[24px] p-8 border-surface-border">
        <div className="space-y-8">
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-headline-md font-headline-md text-primary-container uppercase">
              Education
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <div>
                  <h4 className="text-headline-md font-headline-md text-on-surface">
                    Istanbul Ticaret Üniversitesi
                  </h4>
                  <p className="text-body-md text-on-surface-variant font-medium">
                    Computer Engineering
                  </p>
                </div>
                <span className="text-label-mono font-bold text-primary-container uppercase">
                  Ongoing
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <div>
                  <h4 className="text-headline-md font-headline-md text-on-surface">
                    Muğla 75. Yıl Fen Lisesi
                  </h4>
                  <p className="text-body-md text-on-surface-variant font-medium">
                    High School Diploma
                  </p>
                </div>
                <span className="text-label-mono text-text-muted uppercase">
                  2018–2022
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-headline-md font-headline-md text-primary-container uppercase">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillGroups.map((group) => (
                <div key={group.label} className="space-y-3">
                  <h4 className="text-label-mono font-bold text-on-surface uppercase tracking-wider">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full border border-surface-border text-label-mono text-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="space-y-4 pt-4">
            <h3 className="text-headline-md font-headline-md text-primary-container uppercase">
              Certificates
            </h3>
            <div className="flex flex-col gap-3">
              {certificates.map((cert) => (
                <div
                  key={cert}
                  className="text-body-md text-on-surface-variant font-medium"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AccordionSection>
  );
}
