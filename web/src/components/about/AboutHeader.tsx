"use client";
import { Heading1 } from "@/components/ui/Typography";
import { cn, getContrastText } from "@/lib/utils";

interface AboutHeaderProps {
  bgColor?: string;
}

export default function AboutHeader({ bgColor = "#ffffff" }: AboutHeaderProps) {
  // Get appropriate text color based on background color
  const textColorClass = getContrastText(
    bgColor,
    "text-gray-800",
    "text-white"
  );

  return (
    <div className="mb-12 text-center">
      <Heading1
        className={cn("text-5xl md:text-6xl font-bold mb-6", textColorClass)}
      >
        ABOUT
      </Heading1>
    </div>
  );
}
