import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { assignmentTypes } from "@/data/catalog";

export function AssignmentTypes() {
  return (
    <section
      id="assignments"
      aria-labelledby="types-title"
      className="bg-paper-deep py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="types-title"
          eyebrow="Assignment Preparation"
          title="Assignments Prepared for Every Type of Task"
          intro="From essays and case studies to research papers and dissertations, get assignment preparation tailored to your subject, instructions, formatting requirements and deadline."
        />

        <p className="reveal mx-auto mt-8 max-w-4xl text-center font-display text-xl leading-relaxed text-ink md:text-2xl">
          {assignmentTypes.map((t, i) => (
            <span key={t.slug}>
              <span className="whitespace-nowrap">{t.title}</span>
              {i < assignmentTypes.length - 1 && (
                <span aria-hidden className="mx-2 text-brand">
                  ·
                </span>
              )}{" "}
            </span>
          ))}
        </p>
        <ul className="mt-14 grid border-t border-ink md:grid-cols-2 md:gap-x-16">
          {assignmentTypes.map((t, i) => (
            <li
              key={t.slug}
              className="reveal group flex gap-5 border-b border-rule py-6"
            >
              <span
                className="w-8 pt-2 font-display text-lg text-brand"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-3xl transition-colors duration-200 group-hover:text-brand md:text-4xl">
                  {t.title}
                </h3>
                <p className="mt-1 text-ink-soft">{t.short}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
