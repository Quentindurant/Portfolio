"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Projets en avant"
          subtitle="Découvrez mes réalisations les plus significatives."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projets"
            className="btn-outline inline-block px-8 py-3 border border-border text-text-primary font-medium rounded-2xl"
          >
            Voir tous les projets &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
