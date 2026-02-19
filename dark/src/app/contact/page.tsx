"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const contacts = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "quentin.durant49@orange.fr",
    href: "mailto:quentin.durant49@orange.fr",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "Quentin Durant",
    href: "https://www.linkedin.com/in/quentin-durant-b71872253",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "Quentindurant",
    href: "https://github.com/Quentindurant",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Téléphone",
    value: "06 48 05 61 81",
    href: "tel:+33648056181",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Contact"
          subtitle="N'hésitez pas à me contacter pour discuter d'un projet ou d'une opportunité."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                className="gradient-border card-glow flex items-center gap-4 p-6 bg-surface rounded-2xl transition-all block"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-accent relative z-10"
                  style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(14,165,233,0.08))" }}
                >
                  {contact.icon}
                </div>
                <div className="relative z-10">
                  <p className="text-xs text-text-secondary mb-1">{contact.label}</p>
                  <p className="text-sm font-medium text-text-primary">{contact.value}</p>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <a
              href="/CV_Quentin_Durant.pdf"
              download
              className="btn-glow inline-flex items-center gap-2 px-8 py-3 text-white font-medium rounded-2xl"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
