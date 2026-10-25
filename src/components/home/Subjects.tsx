import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SubjectBrowser } from "./SubjectBrowser";

export function Subjects() {
  return (
    <section id="subjects" aria-labelledby="subjects-title" className="bg-white py-20 md:py-28">
      <Container>
      
<SectionHeading
  id="subjects-title"
  eyebrow="Assignment Subjects"
  title="Assignment Preparation Across Subjects"
  intro="Explore the subjects we cover and get assignments prepared according to your topic, brief, academic requirements and specified format."
/>

        <div className="reveal mt-12"><SubjectBrowser /></div>
        <p className="reveal mt-8 text-center text-ink-soft">Need an assignment in a specific subject? <Link href="/subjects" className="font-medium text-brand underline underline-offset-4">Search all subjects</Link></p>
      </Container>
    </section>
  );
}
