"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Settings,
  Wrench,
  MonitorSmartphone,
  LinkIcon,
  ExternalLink,
  Github,
  FileText,
  Check,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

const iconBg = "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(14,165,233,0.08))";

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: Props) {
  return (
    <div className="pt-20 pb-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projets"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour aux projets
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-4 border border-accent/20">
                  {project.categoryLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4">
                  <span className="text-gradient">{project.title}</span>
                </h1>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-text-secondary w-20 flex-shrink-0">Lieu</span>
                    <span className="text-sm text-text-primary">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-text-secondary w-20 flex-shrink-0">Rôle</span>
                    <span className="text-sm text-text-primary">{project.role}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-surface border border-border/50 rounded-xl text-text-secondary hover:border-accent/30 hover:text-accent transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-[30px]" />
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden gradient-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Problematique */}
        <ScrollReveal>
          <section className="py-12">
            <div className="relative overflow-hidden rounded-2xl border border-border/50 p-8">
              <div className="absolute inset-0 bg-surface" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                    Problématique
                  </h2>
                </div>
                <p className="text-text-secondary leading-relaxed">{project.problem}</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Fonctionnalites */}
        <ScrollReveal>
          <section className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                <Settings className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                Fonctionnalités
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-4 bg-surface/80 rounded-2xl border border-border/50 hover:border-accent/20 transition-all"
                >
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Technologies */}
        <ScrollReveal>
          <section className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                <Wrench className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                Technologies utilisées
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2.5 bg-surface border border-border/50 rounded-2xl text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Screenshots */}
        {project.screenshots.length > 1 && (
          <ScrollReveal>
            <section className="py-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                  <MonitorSmartphone className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                  Captures d&apos;écran
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative h-64 rounded-2xl overflow-hidden gradient-border cursor-pointer"
                  >
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Links */}
        <ScrollReveal>
          <section className="py-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: iconBg }}>
                <LinkIcon className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
                Liens
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-glow px-6 py-3 text-white font-medium rounded-2xl inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Voir la démo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 border border-border text-text-primary font-medium rounded-2xl inline-flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Voir sur GitHub
                </a>
              )}
              {project.docUrl && (
                <a href={project.docUrl} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 border border-border text-text-primary font-medium rounded-2xl inline-flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Documentation
                </a>
              )}
            </div>
          </section>
        </ScrollReveal>

        {/* Navigation prev/next */}
        <section className="py-12 border-t border-border/30">
          <div className="flex justify-between">
            {prevProject ? (
              <Link href={`/projets/${prevProject.slug}`} className="group flex items-center gap-3 p-4 rounded-2xl hover:bg-surface/50 transition-all">
                <ArrowLeft className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:-translate-x-1 transition-all" />
                <div>
                  <span className="text-xs text-text-secondary block">Projet précédent</span>
                  <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">{prevProject.title}</span>
                </div>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link href={`/projets/${nextProject.slug}`} className="group flex items-center gap-3 p-4 rounded-2xl hover:bg-surface/50 transition-all text-right">
                <div>
                  <span className="text-xs text-text-secondary block">Projet suivant</span>
                  <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">{nextProject.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </Link>
            ) : <div />}
          </div>
        </section>
      </div>
    </div>
  );
}
