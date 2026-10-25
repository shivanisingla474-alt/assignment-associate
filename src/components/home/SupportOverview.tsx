import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const areas = [
  {
    title: "Assignment Writing & Preparation",
    body: "Get assignments prepared according to your subject, assignment brief, marking criteria and specific instructions. From structuring the content to developing well-organised answers, each assignment is tailored to your requirements.",
  },
  {
    title: "Research & Content Development",
    body: "Get help developing assignment content with relevant research, credible sources and clear explanations. We focus on presenting information logically and aligning the content with your topic and academic requirements.",
  },
  {
    title: "Referencing & Formatting",
    body: "Need Harvard, APA, MLA, Chicago or another referencing style? Get assignments formatted according to your guidelines, with properly organised citations, reference lists and presentation.",
  },
  {
    title: "Proofreading & Quality Checks",
    body: "Get your assignment reviewed for grammar, clarity, structure, consistency and formatting. We help identify issues and refine the final document to better match your instructions.",
  },
  {
    title: "Customised to Your Requirements",
    body: "Every assignment comes with different instructions, subjects and deadlines. Share your brief, word count, preferred format and submission date so the work can be tailored to your specific requirements.",
  },
];

export function SupportOverview() {
  return (
    <section
      id="support"
      aria-labelledby="support-title"
      className="bg-paper py-20 md:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Assignment support
          </p>
          <h2
            id="support-title"
            className="mt-3 text-3xl leading-[1.1] md:text-5xl"
          >
            Assignment Preparation, Tailored to Your Needs
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            From research and content development to referencing and formatting,
            get assignment preparation tailored to your subject, instructions,
            marking criteria and deadline.
          </p>
          <Link
            href="/how-it-works"
            className="group mt-6 inline-flex items-center gap-2 font-medium text-brand"
          >
            See how we work with you
            <ArrowRight
              aria-hidden
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <ol className="border-t border-ink">
          {areas.map((a, i) => (
            <li
              key={a.title}
              className="reveal group grid gap-3 border-b border-rule py-8 transition-colors hover:bg-white sm:grid-cols-[4.5rem_1fr] sm:px-3"
            >
              <span
                className="font-display text-4xl text-brand/60 transition-colors group-hover:text-brand"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl">{a.title}</h3>
                <p className="mt-2 text-ink-soft">{a.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
