"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

type Filter = "all" | "entreprise" | "ecole" | "exercice";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "entreprise", label: "Entreprise" },
  { value: "ecole", label: "École" },
  { value: "exercice", label: "Exercices" },
];

export default function ProjetsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Mes Projets"
          subtitle="Découvrez l'ensemble de mes réalisations professionnelles, scolaires et personnelles."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative px-5 py-2 text-sm font-medium rounded-2xl transition-all ${
                activeFilter === filter.value
                  ? "text-white"
                  : "bg-surface border border-border text-text-secondary hover:border-accent/30"
              }`}
            >
              {activeFilter === filter.value && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 btn-glow rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
