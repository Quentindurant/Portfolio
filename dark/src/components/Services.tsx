"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, FolderKanban, LayoutDashboard } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Applications Web",
    description:
      "Sites et applications web sur-mesure avec Laravel, React et Next.js. De l'API au front-end, des solutions complètes et performantes.",
    highlight: "Laravel / React / Next.js",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Applications Mobile",
    description:
      "Apps cross-platform iOS & Android avec Flutter. Interfaces fluides, notifications push et intégration d'APIs externes.",
    highlight: "Flutter / Dart / Firebase",
  },
  {
    icon: <FolderKanban className="w-6 h-6" />,
    title: "Gestion de projet",
    description:
      "Pilotage de projets télécom et web. Coordination d'équipes, suivi de déploiements et respect des délais.",
    highlight: "3 ans d'expérience terrain",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Outils internes",
    description:
      "Dashboards d'administration, outils métier et automatisation de processus. Tableaux de bord avec données en temps réel.",
    highlight: "Dashboards / Back-office",
  },
];

export default function Services() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Ce que je fais"
          subtitle="Du développement à la gestion de projet, des compétences concrètes acquises en entreprise."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 bg-surface/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/20 transition-all h-full flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-accent mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(14,165,233,0.08))" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3 flex-1">
                  {service.description}
                </p>
                <span className="text-xs text-accent/70 font-medium">
                  {service.highlight}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
