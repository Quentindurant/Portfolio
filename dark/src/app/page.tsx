import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <TechStack />

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/50">
              <div className="absolute inset-0 bg-surface" />
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-500/5 rounded-full blur-[80px]" />
              <div className="absolute inset-0 bg-dot-pattern opacity-40" />

              <div className="relative z-10 p-12 sm:p-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
                  <span className="text-text-primary">Un projet </span>
                  <span className="text-gradient">en tête ?</span>
                </h2>
                <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                  Disponible pour des missions freelance ou une alternance Master MBA Développeur Full Stack.
                  N&apos;hésitez pas à me contacter.
                </p>
                <Link
                  href="/contact"
                  className="btn-glow inline-block px-8 py-3 text-white font-medium rounded-2xl"
                >
                  Me contacterr
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
