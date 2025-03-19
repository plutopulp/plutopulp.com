"use client";
import { Paragraph } from "@/components/ui/Typography";
import { cn, getContrastText } from "@/lib/utils";

interface AboutBioProps {
  bgColor?: string;
}

export default function AboutBio({ bgColor = "#ffffff" }: AboutBioProps) {
  // Get appropriate text color based on background color
  const textColorClass = getContrastText(
    bgColor,
    "text-gray-700",
    "text-gray-100"
  );

  // Common paragraph styles
  const paragraphClasses = cn(
    "text-lg md:text-xl leading-relaxed",
    textColorClass
  );

  return (
    <div className="space-y-6">
      <Paragraph className={paragraphClasses}>
        I&apos;m a Franco-Irish full-stack engineer based in London with a
        background in theoretical physics. Over the past four years, I&apos;ve
        worked across the stack, building APIs, frontends, and infrastructure.
      </Paragraph>
      <Paragraph className={paragraphClasses}>
        I enjoy solving technical problems, whether it’s improving database
        performance or designing modular frontend components. I also like
        working across teams to build well-structured and practical solutions.
      </Paragraph>

      <Paragraph className={paragraphClasses}>
        Outside of code, you&apos;ll find me on the BJJ mats, overthinking my
        next chess move, cooking up fiery curries, or making music.
      </Paragraph>
    </div>
  );
}
