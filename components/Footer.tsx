const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umutgokmen/?skipRedirect=true" },
  { label: "GitHub", href: "https://github.com/umutgokmen" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 px-margin-lg border-t border-surface-border bg-surface">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="text-headline-md font-headline-md font-bold text-on-surface">
          UG.
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label-mono font-label-mono text-text-muted hover:text-primary transition-colors opacity-80 hover:opacity-100 uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
