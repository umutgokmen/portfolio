import AccordionSection from "./AccordionSection";

const projects = [
  {
    title: "CamelLayer",
    description: "AI coding prompt optimizer — translates, compresses and refines non-English prompts to cut token usage by ~40%.",
    href: "https://camellayer.com",
  },
  {
    title: "Retro Lokal",
    description: "Istanbul-based vintage marketplace that brings together curated secondhand clothing from local shops in one platform.",
    href: "https://retrolokal.com",
  },
  {
    title: "MUUS Coffee",
    description: "Premium matcha, specialty coffee and cold brew e-commerce with rapid delivery across Turkey.",
    href: "https://www.muuscoffee.com",
  },
];

export default function ProjectsSection() {
  return (
    <AccordionSection id="projects" title="Selected Work">
      <div className="grid gap-6">
        {projects.map((project) => (
          <a key={project.title} className="block group" href={project.href} target="_blank" rel="noopener noreferrer">
            <div className="glass-card rounded-[24px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-surface-border group-hover:border-primary-container transition-all duration-300">
              <div className="space-y-2">
                <h3 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary-container transition-colors">
                  {project.title}
                </h3>
                <p className="text-body-md font-body-md text-text-muted max-w-xl">
                  {project.description}
                </p>
              </div>
              <span className="material-symbols-outlined text-text-muted group-hover:text-primary-container transition-colors text-3xl shrink-0">
                arrow_outward
              </span>
            </div>
          </a>
        ))}
      </div>
    </AccordionSection>
  );
}
