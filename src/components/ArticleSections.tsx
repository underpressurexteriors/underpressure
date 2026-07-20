import type { ContentSection } from "@/lib/blog";

export default function ArticleSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <div key={section.heading ?? i}>
          {section.heading && (
            <h2 className="text-display mb-3 text-2xl text-navy">{section.heading}</h2>
          )}
          <div className="space-y-4 text-ink/80">
            {section.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
