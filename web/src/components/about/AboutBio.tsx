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
        Hello! I&apos;m a Franco-Irish fullstack engineer who wandered from
        physics into programming. With a PhD in theoretical physics under my
        belt, I&apos;ve spent the last 4 years building everything from scalable
        APIs to modular frontends, with strong experience in system architecture
        and DevOps.
      </Paragraph>

      <Paragraph className={paragraphClasses}>
        I get a strange satisfaction from untangling complex problems and
        turning them into elegant, maintainable solutions. My self-taught coding
        journey has equipped me with expertise in React, TypeScript, Next.js,
        Python, Django, FastAPI, PostgreSQL, Docker, kubernetes and CI/CD
        pipelines – all while embracing the debugging adventures that come with
        building robust applications.
      </Paragraph>

      <Paragraph className={paragraphClasses}>
        Outside of code, you&apos;ll find me on the mats practicing Brazilian
        Jiu-Jitsu, overthinking my next chess move, cooking up fiery curries, or
        making music. I love connecting my interests with tech, like my BJJPaths
        project – a mind-mapping app that helps map out your game.{" "}
      </Paragraph>
    </div>
  );
}
