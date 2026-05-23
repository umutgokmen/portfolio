"use client";

import { useState } from "react";

interface AccordionSectionProps {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function AccordionSection({
  id,
  title,
  defaultOpen = false,
  children,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="flex flex-col" id={id}>
      <button
        className="flex items-center justify-between w-full text-left py-6 border-b border-surface-border group focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface uppercase group-hover:text-primary transition-colors">
          {title}
        </h2>
        <span
          className={`material-symbols-outlined text-4xl text-text-muted chevron-icon ${open ? "rotated" : ""}`}
        >
          expand_more
        </span>
      </button>

      <div className={`accordion-content pt-8 ${open ? "" : "closed"}`}>
        {children}
      </div>
    </section>
  );
}
