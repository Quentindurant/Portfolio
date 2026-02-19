"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projets/${project.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="gradient-border card-glow rounded-2xl overflow-hidden cursor-pointer group h-full"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-medium bg-accent/90 text-white rounded-full backdrop-blur-sm border border-accent/30">
                {project.category === "entreprise"
                  ? "Entreprise"
                  : project.category === "ecole"
                  ? "Ecole"
                  : "Exercice"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 bg-surface relative z-10">
            <h3 className="text-lg font-semibold text-text-primary mb-2 font-[family-name:var(--font-heading)] group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-2 mb-4">
              {project.shortDescription}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs bg-primary/80 rounded-lg text-text-secondary border border-border/50"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="px-2.5 py-1 text-xs bg-primary/80 rounded-lg text-accent border border-accent/20">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>

            <span className="text-sm font-medium text-accent group-hover:text-accent-light transition-colors inline-flex items-center gap-1">
              Voir le projet
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                &rarr;
              </motion.span>
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
