import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand + socials */}
          <div>
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-text-primary">
              Q<span className="text-gradient">.</span>Durant
            </span>
            <p className="mt-2 text-text-secondary text-sm">
              Angers, France
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/Quentindurant" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-primary border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/quentin-durant-b71872253" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-primary border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:quentin.durant49@orange.fr" className="w-9 h-9 rounded-xl bg-primary border border-border/50 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm text-text-secondary hover:text-accent transition-colors">Accueil</Link>
              <Link href="/projets" className="text-sm text-text-secondary hover:text-accent transition-colors">Projets</Link>
              <Link href="/a-propos" className="text-sm text-text-secondary hover:text-accent transition-colors">À propos</Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Statut */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Disponibilité</h4>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-text-secondary">Freelance & alternance Master</span>
            </div>
            <a href="/CV_Quentin_Durant.pdf" download className="text-sm text-accent hover:text-accent-light transition-colors">
              Télécharger mon CV &darr;
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Quentin Durant
          </p>
          <p className="text-xs text-text-secondary">
            Construit avec Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
