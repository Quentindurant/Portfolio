"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Database, LayoutDashboard } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Développement Web",
    description: "Applications web complètes avec PHP, Laravel, JavaScript. Du back-end à l'interface utilisateur.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Développement Mobile",
    description: "Applications mobiles cross-platform avec Flutter et Dart. Interfaces fluides et performantes.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Base de données",
    description: "Conception et gestion de bases MySQL, Firebase. Modélisation, requêtes optimisées et sécurité.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Interfaces Dashboard",
    description: "Dashboards d'administration et outils internes. Tableaux de bord, graphiques et gestion de données.",
  },
];

export default function Services() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Ce que je fais"
          subtitle="Des compétences concrètes pour des projets ambitieux."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 bg-surface/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/20 transition-all h-full"
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
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
