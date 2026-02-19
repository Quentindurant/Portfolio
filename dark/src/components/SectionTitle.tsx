import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <ScrollReveal className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full ${centered ? "mx-auto" : ""}`}
        style={{ background: "linear-gradient(90deg, #06B6D4, #0EA5E9)" }}
      />
    </ScrollReveal>
  );
}
