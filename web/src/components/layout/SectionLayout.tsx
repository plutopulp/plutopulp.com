import React, { ReactNode } from "react";
import { Heading1 } from "@/components/ui/Typography";

interface SectionLayoutProps {
  id: string;
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
}

/**
 * SectionLayout - A standardized layout for sections
 *
 * This component provides a consistent layout for all sections with:
 * - Full-width background color
 * - Consistent padding
 * - Centered content with max-width
 * - Optional title with standardized typography
 */
const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  title,
  children,
  backgroundColor = "white",
  className = "",
}) => {
  return (
    <section id={id} className="py-16 w-full" style={{ backgroundColor }}>
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
