import { Check, GraduationCap, Compass, MessageSquareText, SpellCheck, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";


const cards = [
  { Icon: Compass, title: "Assignment Preparation", wide: true, dark: true, body: "We prepare assignments according to your brief, subject, marking criteria and specific instructions. Each assignment is approached with attention to content, structure and the requirements you share.", points: ["Content tailored to your assignment brief", "Clear structure and organised explanations", "Research and relevant academic sources"] },
  { Icon: MessageSquareText, title: "Research & Content Development", body: "Get assignment content developed around your topic, with relevant research, clear explanations and a logical flow.", points: ["Topic-focused content development", "Relevant research and supporting sources", "Content organised around your instructions"] },
  { Icon: GraduationCap, title: "Subject-Specific Assignments", body: "Get assistance preparing assignments across different academic subjects, with content tailored to the topic and requirements.", points: ["Support across a range of subjects", "Content aligned with your assignment topic", "Preparation based on your specific brief"] },
  { Icon: SpellCheck, title: "Proofreading & Formatting", body: "Have your assignment checked for grammar, clarity, consistency and presentation, with formatting aligned with the guidelines you provide.", points: ["Grammar, spelling and clarity checks", "Consistent formatting and presentation", "Referencing style and citation checks"] },
  { Icon: CalendarCheck, title: "Deadline-Based Preparation", body: "Share your submission date and assignment requirements so the scope and expected delivery timeline can be discussed before proceeding.", points: ["Planning around your submission deadline", "Clear discussion of requirements", "Confirm the delivery timeline in advance"] },
];


export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-paper py-20 md:py-28">
      <Container>
        <SectionHeading id="approach-title" eyebrow="Our approach" title="Assignment Preparation, Tailored to Your Needs" intro="Explore our assignment preparation services, from research and content development to proofreading, formatting and deadline-based delivery." />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map(({ Icon, title, body, points, wide, dark }) => (
            <li key={title} className={`reveal lift rounded-2xl p-7 md:p-8 ${wide ? "lg:col-span-2" : ""} ${dark ? "on-dark border border-wine bg-gradient-to-br from-ink via-[#2a0d16] to-brand-dark text-white" : "gradient-border"}`}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${dark ? "bg-white/10 text-rose" : "bg-brand/10 text-brand"}`}><Icon aria-hidden size={24} /></span>
              <h3 className="mt-5 text-2xl md:text-3xl">{title}</h3>
              <p className={`mt-3 ${wide ? "max-w-xl" : ""} ${dark ? "text-white/80" : "text-ink-soft"}`}>{body}</p>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (<li key={p} className={`flex items-start gap-2.5 text-sm ${dark ? "text-white/85" : "text-ink"}`}><Check aria-hidden size={16} className={`mt-0.5 shrink-0 ${dark ? "text-rose" : "text-brand"}`} />{p}</li>))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
