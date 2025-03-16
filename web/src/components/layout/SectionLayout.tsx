import { ReactNode, useRef, RefObject } from "react";
import { Heading1 } from "@/components/ui/Typography";
import { getContrastText } from "@/lib/utils";
import { useInView, motion } from "framer-motion";

interface SectionLayoutProps {
  id: string;
  sectionRef: RefObject<HTMLElement | null>;
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
  sectionRef,
}) => {
  // Get the appropriate text color based on background
  const textColorClass = getContrastText(
    backgroundColor,
    "text-gray-800",
    "text-white"
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 w-full ${
        fullHeight
          ? "md:min-h-screen md:flex md:flex-col md:justify-center"
          : ""
      }`}
      style={{ backgroundColor }}
    >
      <div className={`container mx-auto px-4 ${className}`}>
        {title && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -200 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Heading1
              className={`text-center mb-14 uppercase tracking-wider ${textColorClass}`}
            >
              {title}
            </Heading1>
          </motion.div>
        )}
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
