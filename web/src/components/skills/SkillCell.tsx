"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCellProps {
  name: string;
  icon: string;
  index?: number; // For animation delay calculation
  inView?: boolean; // Whether parent section is in view
}

// Link map for each skill to learn more
const skillLinks: Record<string, string> = {
  // Languages
  Python: "https://docs.python.org/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  C: "https://en.cppreference.com/w/c",
  PHP: "https://www.php.net/docs.php",
  BASH: "https://www.gnu.org/software/bash/manual/bash.html",

  // Backend
  Django: "https://www.djangoproject.com/",
  "REST APIs": "https://restfulapi.net/",
  Docker: "https://docs.docker.com/",
  Celery: "https://docs.celeryq.dev/",
  PostgreSQL: "https://www.postgresql.org/docs/",
  MySQL: "https://dev.mysql.com/doc/",

  // Frontend
  "HTML-5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS-3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  ReactJS: "https://react.dev/",
  "Semantic UI": "https://semantic-ui.com/",
  Bootstrap: "https://getbootstrap.com/docs/",
  ChartJS: "https://www.chartjs.org/docs/",

  // Other
  Linux: "https://www.kernel.org/",
  Git: "https://git-scm.com/doc",
  Heroku: "https://devcenter.heroku.com/",
  LaTeX: "https://www.latex-project.org/help/documentation/",
  Gnuplot: "http://gnuplot.info/documentation.html",
  Figma: "https://help.figma.com/",
};

/**
 * SkillCell component that displays a skill icon and its name
 * Includes animation capabilities for staggered reveal
 */
export const SkillCell: React.FC<SkillCellProps> = ({
  name,
  icon,
  index = 0,
  inView = false,
}) => {
  // Animation delay based on index position
  const delay = 0.1 + index * 0.25;

  // Get the appropriate link for this skill
  const link = skillLinks[name] || "#";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 group cursor-pointer no-underline"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-16 h-16 mb-1 relative flex items-center justify-center">
        <Image
          src={`/icons/${icon}`}
          alt={`${name} icon`}
          width={42}
          height={42}
          className="object-contain transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <span className="text-xs font-normal text-center text-gray-800 group-hover:text-[#5893AB] transition-colors duration-200">
        {name}
      </span>
    </motion.a>
  );
};

export default SkillCell;
