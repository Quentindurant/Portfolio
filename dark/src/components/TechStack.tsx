"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionTitle from "./SectionTitle";
import { allTechStack } from "@/data/projects";

export default function TechStack() {
  return (
    <section className="py-20 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Ma Stack"
          subtitle="Les technologies que j'utilise au quotidien pour créer des applications performantes."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {allTechStack.map((tech, i) => (
            <ScrollReveal key={tech} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                className="px-5 py-3 bg-surface/80 backdrop-blur-sm border border-border/50 rounded-2xl text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              >
                {tech}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
