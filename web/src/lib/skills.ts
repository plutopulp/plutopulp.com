/**
 * Skill/Technology interface to represent any technical skill
 */
export interface Skill {
  id: string;
  name: string;
  icon: string;
  link?: string;
}

/**
 * All skills defined in a single place for reuse across the application
 */
export const skills: Record<string, Skill> = {
  // Frontend related
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript.svg",
    link: "https://www.typescriptlang.org/docs/",
  },
  html: {
    id: "html",
    name: "HTML-5",
    icon: "html5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    id: "css",
    name: "CSS-3",
    icon: "css3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  reactjs: {
    id: "reactjs",
    name: "ReactJS",
    icon: "react.svg",
    link: "https://react.dev/",
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs.svg",
    link: "https://nextjs.org/docs",
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind.svg",
    link: "https://tailwindcss.com/docs",
  },
  semanticui: {
    id: "semanticui",
    name: "Semantic UI",
    icon: "semanticUI.svg",
    link: "https://semantic-ui.com/",
  },
  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "bootstrap.svg",
    link: "https://getbootstrap.com/docs/",
  },
  chartjs: {
    id: "chartjs",
    name: "ChartJS",
    icon: "chartjs.svg",
    link: "https://www.chartjs.org/docs/",
  },
  d3js: {
    id: "d3js",
    name: "D3.js",
    icon: "d3js.svg",
    link: "https://d3js.org/",
  },
  figma: {
    id: "figma",
    name: "Figma",
    icon: "figma.svg",
    link: "https://help.figma.com/",
  },

  // Backend related
  python: {
    id: "python",
    name: "Python",
    icon: "python.svg",
    link: "https://docs.python.org/",
  },
  php: {
    id: "php",
    name: "PHP",
    icon: "php.svg",
    link: "https://www.php.net/docs.php",
  },
  django: {
    id: "django",
    name: "Django",
    icon: "django.svg",
    link: "https://www.djangoproject.com/",
  },
  restapi: {
    id: "restapi",
    name: "REST APIs",
    icon: "restAPI.png",
    link: "https://restfulapi.net/",
  },
  celery: {
    id: "celery",
    name: "Celery",
    icon: "celery.svg",
    link: "https://docs.celeryq.dev/",
  },
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql.svg",
    link: "https://www.postgresql.org/docs/",
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    icon: "mySQL.svg",
    link: "https://dev.mysql.com/doc/",
  },
  rabbitmq: {
    id: "rabbitmq",
    name: "RabbitMQ",
    icon: "rabbitmq.svg",
    link: "https://www.rabbitmq.com/documentation.html",
  },
  spacy: {
    id: "spacy",
    name: "SpaCy",
    icon: "spacy.svg",
    link: "https://spacy.io/usage",
  },

  // DevOps related
  docker: {
    id: "docker",
    name: "Docker",
    icon: "docker.png",
    link: "https://docs.docker.com/",
  },
  linux: {
    id: "linux",
    name: "Linux",
    icon: "linux.svg",
    link: "https://www.kernel.org/",
  },
  git: {
    id: "git",
    name: "Git",
    icon: "git.svg",
    link: "https://git-scm.com/doc",
  },
  heroku: {
    id: "heroku",
    name: "Heroku",
    icon: "heroku.svg",
    link: "https://devcenter.heroku.com/",
  },
  bash: {
    id: "bash",
    name: "BASH",
    icon: "bash.svg",
    link: "https://www.gnu.org/software/bash/manual/bash.html",
  },

  // Other skills
  c: {
    id: "c",
    name: "C",
    icon: "c.svg",
    link: "https://en.cppreference.com/w/c",
  },
  latex: {
    id: "latex",
    name: "LaTeX",
    icon: "latex.svg",
    link: "https://www.latex-project.org/help/documentation/",
  },
  gnuplot: {
    id: "gnuplot",
    name: "Gnuplot",
    icon: "gnuplot.svg",
    link: "http://gnuplot.info/documentation.html",
  },
};

/**
 * Skill groups that can be customized/renamed without changing the underlying skills
 */
export type SkillGroupName =
  | "frontend"
  | "backend"
  | "devops"
  | "other"
  | string;

/**
 * Predefined skill groups - organized by category
 */
export const skillGroups: Record<SkillGroupName, Skill[]> = {
  frontend: [
    skills.javascript,
    skills.typescript,
    skills.html,
    skills.css,
    skills.reactjs,
    skills.nextjs,
    skills.tailwind,
    skills.semanticui,
    skills.bootstrap,
    skills.chartjs,
    skills.d3js,
    skills.figma,
  ],
  backend: [
    skills.python,
    skills.php,
    skills.django,
    skills.restapi,
    skills.celery,
    skills.postgresql,
    skills.mysql,
    skills.rabbitmq,
    skills.spacy,
  ],
  devops: [skills.docker, skills.linux, skills.git, skills.heroku, skills.bash],
  other: [skills.c, skills.latex, skills.gnuplot],
};

/**
 * Helper function to create a custom group of skills
 */
export function createSkillGroup(skillIds: string[]): Skill[] {
  return skillIds.map((id) => skills[id]).filter(Boolean);
}
