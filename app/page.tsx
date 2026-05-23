import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid-pattern opacity-50" />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-container/5 blur-[120px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-surface-bright/20 blur-[100px] pointer-events-none z-[-1]" />

      <Nav />

      <main className="max-w-container-max mx-auto px-6 md:px-margin-lg pt-32 pb-24 flex flex-col gap-12">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
