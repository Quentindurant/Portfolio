"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";

const categories = [
  {
    name: "Front-end",
    color: "from-cyan-500/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    techs: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
  },
  {
    name: "Back-end",
    color: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    techs: ["PHP", "Laravel", "Node.js", "MySQL", "Firebase"],
  },
  {
    name: "Mobile",
    color: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/30",
    techs: ["Flutter", "Dart"],
  },
  {
    name: "Outils",
    color: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
    techs: ["Git", "GitHub", "VS Code", "Docker", "Linux", "Figma"],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Ma Stack"
          subtitle="Les technologies que j'utilise au quotidien, organisées par domaine."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIndex) => (
            <ScrollReveal key={cat.name} delay={catIndex * 0.1}>
              <div className={`p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border ${cat.borderColor} h-full`}>
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} text-xs font-semibold text-text-primary mb-4`}>
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech, i) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 bg-primary/80 border border-border/50 rounded-xl text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
