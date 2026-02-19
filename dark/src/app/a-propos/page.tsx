"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 11, suffix: "", label: "Projets réalisés" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Années d'expérience" },
];

const timeline = [
  {
    year: "2025 - Présent",
    title: "B3 Développeur Web - Alternance",
    company: "MyDigitalSchool & GCservice",
    description:
      "Formation Bachelor développeur web en alternance. Développement d'applications web internes, gestion de projets.",
  },
  {
    year: "2023 - 2025",
    title: "BTS SIO - Option SLAM (Développement)",
    company: "ESPL MyDigitalSchool, Angers",
    description:
      "Formation en alternance spécialisée en développement d'applications, base de données et gestion de projets informatiques.",
  },
  {
    year: "2022 - 2025",
    title: "Développeur Web & Support Réseau Telecom",
    company: "GC Développement / GCservice, Cholet",
    description:
      "Développement d'applications web internes, support technique, staging d'équipements et déploiement réseau.",
  },
  {
    year: "2019 - 2022",
    title: "Baccalauréat STI2D - Option SIN",
    company: "Lycée Chevrollier, Angers",
    description:
      "Formation en systèmes d'information et numérique, bases de la programmation et des réseaux.",
  },
];

const qualities = [
  {
    icon: "01",
    title: "Rigoureux",
    desc: "Code propre, documenté et maintenable. Je respecte les bonnes pratiques.",
  },
  {
    icon: "02",
    title: "Pragmatique",
    desc: "Orienté solutions concrètes. Je privilégie l'efficacité et la simplicité.",
  },
  {
    icon: "03",
    title: "Curieux",
    desc: "Toujours en veille technologique. J'explore de nouvelles technologies régulièrement.",
  },
  {
    icon: "04",
    title: "Collaboratif",
    desc: "Travail en équipe, communication claire et partage des connaissances.",
  },
];

export default function AProposPage() {
  return (
    <div className="pt-28 pb-20 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="À propos"
          subtitle="Développeur web passionné, orienté applications concrètes."
        />

        {/* Intro */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-[40px]" />
              <div className="relative h-80 rounded-2xl overflow-hidden gradient-border">
                <Image
                  src="/images/moi.png"
                  alt="Quentin Durant"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
                Quentin <span className="text-gradient">Durant</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Actuellement en B3 Développeur Web en alternance chez GCservice (MyDigitalSchool),
                je travaille principalement avec PHP, Laravel, JavaScript et Flutter pour créer
                des applications concrètes et performantes.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Mon parcours combine développement web et gestion de projets télécom,
                ce qui me donne une vision globale des enjeux techniques et business.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Je suis à la recherche d&apos;une alternance pour un Master MBA Développeur Full Stack (2 ans),
                et disponible pour des missions freelance. Ouvert à toute opportunité ambitieuse.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Façon de travailler */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 p-8 sm:p-10 mb-20">
            <div className="absolute inset-0 bg-surface" />
            <div className="absolute inset-0 bg-dot-pattern opacity-30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-8">
                Ma façon de travailler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {qualities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl bg-primary/50 border border-border/50 hover:border-accent/20 transition-all"
                  >
                    <span className="text-xs font-bold text-accent/60 font-mono">{item.icon}</span>
                    <h4 className="text-accent font-semibold mt-2 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats with counter */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="gradient-border card-glow rounded-2xl p-8 text-center bg-surface"
              >
                <span className="text-5xl font-bold text-gradient font-[family-name:var(--font-heading)] inline-block">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <p className="text-text-secondary mt-3 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-10 text-center">
            Parcours
          </h3>
          <div className="relative">
            {/* Vertical line with gradient */}
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px"
              style={{ background: "linear-gradient(to bottom, #06B6D4, #1E293B)" }}
            />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot with glow */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1.5 mt-2 z-10">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping opacity-30" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                    }`}
                  >
                    <div className="p-5 rounded-2xl bg-surface/50 border border-border/30 hover:border-accent/20 transition-all">
                      <span className="text-xs text-accent font-semibold tracking-wider uppercase">
                        {item.year}
                      </span>
                      <h4 className="text-base font-semibold text-text-primary mt-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-accent/70 mt-1">{item.company}</p>
                      <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
