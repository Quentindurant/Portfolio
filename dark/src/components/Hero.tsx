"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Building2, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-text-secondary">
                Disponible en freelance &middot; Recherche alternance <span className="text-text-primary font-medium">Master MBA Full Stack</span>
              </span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6 border border-accent/20"
            >
              Développeur Web & Mobile
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6">
              <span className="text-text-primary">Quentin</span>{" "}
              <span className="text-gradient">Durant</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-lg mb-4 leading-relaxed">
              Chef de projet Telecom & développeur web chez GCservice, en Bachelor B3 (MyDigitalSchool).
              Je conçois des applications web et mobiles avec Laravel, React, Next.js et Flutter.
            </p>

            {/* Location + status */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Angers, France
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                GCservice
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projets"
                className="btn-glow px-8 py-3 text-white font-medium rounded-2xl text-center"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="btn-outline px-8 py-3 border border-border text-text-primary font-medium rounded-2xl text-center"
              >
                Me contacter
              </Link>
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-10 pt-8 border-t border-border/50"
            >
              {[
                { value: "11+", label: "Projets" },
                { value: "15+", label: "Technos" },
                { value: "3 ans", label: "En alternance" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="text-xl font-bold text-accent">{stat.value}</span>
                  <p className="text-xs text-text-secondary mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-[60px] scale-90" />

              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden relative z-10 gradient-border">
                <Image
                  src="/images/moi.png"
                  alt="Quentin Durant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating code badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-14 h-14 bg-surface/80 backdrop-blur-md rounded-2xl border border-border/50 z-20 flex items-center justify-center"
              >
                <Code className="w-5 h-5 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-sky-500/10 rounded-xl border border-sky-500/20 z-20 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
