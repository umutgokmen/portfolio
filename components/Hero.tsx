export default function Hero() {
  return (
    <section className="flex flex-col gap-stack-md" id="work">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Geometric Visual Card */}
        <div className="lg:col-span-5 rounded-[24px] border border-surface-border bg-surface-container-high overflow-hidden relative min-h-[400px] flex items-center justify-center p-6">
          <img
            alt="Geometric wormhole visual"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhLugUqCqSQMuAyYNx4CCoDdseZyNrwc4jj9UeUzA_452nKlrc-RsSonSjQDLuH9mwvuBnqOJGCoyaLKcAeczoC4I9VFV286gsaTwxHlfs8Orj7DHFVE7RhP34harTFAvpSE8RpJDT6i6rzZPeHOb2naRcVyq9wuS9sX6pTN7LyNRMYLAeMhbr0Y2_GkAiJVlxXBxMVKnFEhcW7_RLyHtUhOainmFafAkcaYJs_pWzmGRuITSyQXvutqQz-J3W0nxwEGM-uQnC_yyk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high/40 to-transparent pointer-events-none" />
        </div>

        {/* Right Content Card */}
        <div className="lg:col-span-7 rounded-[24px] border border-surface-border glass-card p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <h1 className="text-display-lg font-display-lg text-on-surface uppercase leading-none">
              Dive into the{" "}
              <span className="text-primary-container">work</span>
              <br /> of Umut.
            </h1>

            <div className="text-headline-md font-headline-md text-on-surface-variant">
              <div className="rotating-text-wrapper">
                <div className="rotating-text">
                  <span>Fullstack Software Engineer</span>
                  <span>AI Systems Builder</span>
                  <span>Creative Developer</span>
                </div>
              </div>
            </div>

            <p className="text-body-lg font-body-lg text-text-muted max-w-xl">
              Building scalable systems and AI-powered products. Based in
              Istanbul — working globally to design your digital self with no
              restraints on creativity.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#experience"
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 rounded-full border border-surface-border text-on-surface hover:border-primary-container hover:text-primary-container transition-colors duration-300 font-label-mono text-label-mono uppercase tracking-widest"
            >
              Discover{" "}
              <span className="material-symbols-outlined ml-2 text-sm">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
