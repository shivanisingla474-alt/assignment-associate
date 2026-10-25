import { Hero } from "@/components/home/Hero";
import { SupportOverview } from "@/components/home/SupportOverview";
import { AssignmentTypes } from "@/components/home/AssignmentTypes";
import { Subjects } from "@/components/home/Subjects";
import { BrandFeature } from "@/components/home/BrandFeature";
import { WhyChoose } from "@/components/home/WhyChoose";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StartSection } from "@/components/home/StartSection";
import { Approach } from "@/components/home/Approach";
import { Countries } from "@/components/home/Countries";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SupportOverview />
      <AssignmentTypes />
      <Subjects />
      <BrandFeature />
      <WhyChoose />
      <HowItWorks />
      <StartSection />
      <Approach />
      <Countries />
      <Faq />
      <FinalCta />
    </>
  );
}