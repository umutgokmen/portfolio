"use client";

export default function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full px-6 py-3 border border-surface-border bg-surface-container/80 backdrop-blur-md flex justify-between items-center z-50">
      <div className="text-headline-md font-headline-md font-bold text-on-surface">
        UG.
      </div>


      <a
        href="mailto:umutgokmen48@gmail.com"
        className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-label-mono text-label-mono font-bold hover:bg-[#fb8c3a] active:scale-95 active:brightness-90 transition-all duration-100"
      >
        Let&apos;s create ↗
      </a>
    </nav>
  );
}
