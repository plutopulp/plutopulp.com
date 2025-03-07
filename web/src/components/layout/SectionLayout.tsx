import React, { ReactNode } from "react";
import { Heading1 } from "@/components/ui/Typography";

interface SectionLayoutProps {
  id: string;
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  fullHeight?: boolean; // Optional prop to force full height regardless of content
}

/**
 * SectionLayout - A standardized layout for sections
 *
 * This component provides a consistent layout for all sections with:
 * - Full-width background color
 * - Consistent padding
 * - Centered content with max-width
 * - Optional title with standardized typography
 * - Min-height of viewport on larger screens
 */
const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  children,
  backgroundColor = "white",
  className = "",
  fullHeight = true, // Default to full height
}) => {
  return (
    <section
      id={id}
      className={`py-16 w-full ${
        fullHeight
          ? "md:min-h-screen md:flex md:flex-col md:justify-center"
          : ""
      }`}
      style={{ backgroundColor }}
    >
      <div className={`container mx-auto px-4 ${className}`}>
        {title && (
          <Heading1 className="text-center mb-14 uppercase tracking-wider">
            {title}
          </Heading1>
        )}
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
