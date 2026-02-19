import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold font-[family-name:var(--font-heading)] text-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-4 font-[family-name:var(--font-heading)]">
          Page introuvable
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="btn-glow inline-block px-8 py-3 text-white font-medium rounded-2xl"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
