/**
 * Skill/Technology interface to represent any technical skill
 */
export interface Skill {
  id: SkillId;
  name: string;
  icon: string;
  link?: string;
  publish: boolean; // Whether to show this skill publicly
}

/**
 * Define all valid skill IDs as a union type
 * This provides better type checking and autocompletion
 */
export type SkillId =
  // Frontend skills
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "reactjs"
  | "nextjs"
  | "tailwind"
  | "styledcomponents"
  | "semanticui"
  | "bootstrap"
  | "chartjs"
  | "d3js"
  | "figma"
  | "visx"
  | "webpack"
  | "yarn"
  // Backend skills
  | "python"
  | "fastapi"
  | "django"
  | "flask"
  | "php"
  | "restapi"
  | "postgresql"
  | "celery"
  | "mongodb"
  | "mysql"
  | "rabbitmq"
  | "spacy"
  | "redis"
  | "sqlalchemy"
  | "poetry"
  | "langchain"
  | "huggingface"
  // DevOps skills
  | "docker"
  | "kubernetes"
  | "linux"
  | "git"
  | "heroku"
  | "bash"
  | "githubactions"
  | "grafana"
  | "prometheus"
  | "loki"
  // Other skills
  | "c"
  | "latex"
  | "gnuplot";

/**
 * All skills defined in a single place for reuse across the application
 */
export const skills: Record<SkillId, Skill> = {
  // Frontend related
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    publish: true, // Core skill for full stack
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript.svg",
    link: "https://www.typescriptlang.org/docs/",
    publish: true, // Modern essential for serious development
  },
  html: {
    id: "html",
    name: "HTML-5",
    icon: "html5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    publish: false, // Too basic to highlight
  },
  css: {
    id: "css",
    name: "CSS-3",
    icon: "css3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    publish: false, // Too basic to highlight
  },
  reactjs: {
    id: "reactjs",
    name: "ReactJS",
    icon: "react.svg",
    link: "https://react.dev/",
    publish: true, // Key frontend framework
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs.svg",
    link: "https://nextjs.org/docs",
    publish: true, // Modern React framework
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind.svg",
    link: "https://tailwindcss.com/docs",
    publish: true, // Modern CSS framework
  },
  styledcomponents: {
    id: "styledcomponents",
    name: "Styled Components",
    icon: "styledcomponents.svg",
    link: "https://styled-components.com/docs",
    publish: true, // CSS-in-JS used extensively
  },
  semanticui: {
    id: "semanticui",
    name: "Semantic UI",
    icon: "semanticUI.svg",
    link: "https://semantic-ui.com/",
    publish: false, // Less commonly used now
  },
  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "bootstrap.svg",
    link: "https://getbootstrap.com/docs/",
    publish: false, // Common but not as impressive
  },
  chartjs: {
    id: "chartjs",
    name: "ChartJS",
    icon: "chartjs.svg",
    link: "https://www.chartjs.org/docs/",
    publish: true, // Good data visualization skill
  },
  d3js: {
    id: "d3js",
    name: "D3.js",
    icon: "d3js.svg",
    link: "https://d3js.org/",
    publish: true, // Advanced data visualization
  },
  figma: {
    id: "figma",
    name: "Figma",
    icon: "figma.svg",
    link: "https://help.figma.com/",
    publish: true, // Design collaboration skill
  },
  visx: {
    id: "visx",
    name: "visx",
    icon: "visx.png",
    link: "https://airbnb.io/visx/",
    publish: true, // Advanced React visualization library
  },
  webpack: {
    id: "webpack",
    name: "Webpack",
    icon: "webpack.svg",
    link: "https://webpack.js.org/concepts/",
    publish: true, // Advanced bundler knowledge
  },
  yarn: {
    id: "yarn",
    name: "Yarn",
    icon: "yarn.svg",
    link: "https://yarnpkg.com/",
    publish: false, // Package manager, expected knowledge
  },

  // Backend related
  python: {
    id: "python",
    name: "Python",
    icon: "python.svg",
    link: "https://docs.python.org/",
    publish: true, // Core backend language
  },
  fastapi: {
    id: "fastapi",
    name: "FastAPI",
    icon: "fastapi.svg",
    link: "https://fastapi.tiangolo.com/",
    publish: true, // Used extensively, modern Python framework
  },
  flask: {
    id: "flask",
    name: "Flask",
    icon: "flask.svg",
    link: "https://flask.palletsprojects.com/",
    publish: true, // Lightweight Python framework with fair experience
  },
  php: {
    id: "php",
    name: "PHP",
    icon: "php.svg",
    link: "https://www.php.net/docs.php",
    publish: false, // Less modern for new projects
  },
  django: {
    id: "django",
    name: "Django",
    icon: "django.svg",
    link: "https://www.djangoproject.com/",
    publish: true, // Robust Python framework
  },
  restapi: {
    id: "restapi",
    name: "REST APIs",
    icon: "restAPI.png",
    link: "https://restfulapi.net/",
    publish: true, // Essential for backend development
  },
  celery: {
    id: "celery",
    name: "Celery",
    icon: "celery.svg",
    link: "https://docs.celeryq.dev/",
    publish: true, // Advanced task queue system
  },
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql.svg",
    link: "https://www.postgresql.org/docs/",
    publish: true, // Advanced enterprise database
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    icon: "mongodb.svg",
    link: "https://docs.mongodb.com/",
    publish: false, // Limited experience
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    icon: "mySQL.svg",
    link: "https://dev.mysql.com/doc/",
    publish: false, // Common but PostgreSQL more advanced
  },
  rabbitmq: {
    id: "rabbitmq",
    name: "RabbitMQ",
    icon: "rabbitmq.svg",
    link: "https://www.rabbitmq.com/documentation.html",
    publish: true, // Advanced message broker
  },
  spacy: {
    id: "spacy",
    name: "SpaCy",
    icon: "spacy.svg",
    link: "https://spacy.io/usage",
    publish: true, // Advanced NLP library
  },
  redis: {
    id: "redis",
    name: "Redis",
    icon: "redis.svg",
    link: "https://redis.io/documentation",
    publish: true, // Advanced in-memory database
  },
  sqlalchemy: {
    id: "sqlalchemy",
    name: "SQLAlchemy",
    icon: "sqlalchemy.svg",
    link: "https://docs.sqlalchemy.org/",
    publish: true, // Advanced ORM for Python
  },
  poetry: {
    id: "poetry",
    name: "Poetry",
    icon: "poetry.svg",
    link: "https://python-poetry.org/docs/",
    publish: true, // Modern Python dependency management
  },
  langchain: {
    id: "langchain",
    name: "LangChain",
    icon: "langchain.svg",
    link: "https://js.langchain.com/docs/",
    publish: false, // Not proficient enough with it
  },
  huggingface: {
    id: "huggingface",
    name: "Hugging Face",
    icon: "huggingface.svg",
    link: "https://huggingface.co/docs",
    publish: true, // ML framework with significant experience
  },

  // DevOps related
  docker: {
    id: "docker",
    name: "Docker",
    icon: "docker.png",
    link: "https://docs.docker.com/",
    publish: true, // Essential for modern deployment
  },
  kubernetes: {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "kubernetes.svg",
    link: "https://kubernetes.io/docs/home/",
    publish: true, // Advanced container orchestration
  },
  linux: {
    id: "linux",
    name: "Linux",
    icon: "linux.svg",
    link: "https://www.kernel.org/",
    publish: true, // Fundamental for server management
  },
  git: {
    id: "git",
    name: "Git",
    icon: "git.svg",
    link: "https://git-scm.com/doc",
    publish: false, // Too basic/expected
  },
  heroku: {
    id: "heroku",
    name: "Heroku",
    icon: "heroku.svg",
    link: "https://devcenter.heroku.com/",
    publish: false, // Platform-specific and simpler than custom deployments
  },
  bash: {
    id: "bash",
    name: "BASH",
    icon: "bash.svg",
    link: "https://www.gnu.org/software/bash/manual/bash.html",
    publish: true, // Advanced scripting skill
  },
  githubactions: {
    id: "githubactions",
    name: "GitHub Actions",
    icon: "githubactions.svg",
    link: "https://docs.github.com/en/actions",
    publish: true, // Modern CI/CD pipeline
  },
  grafana: {
    id: "grafana",
    name: "Grafana",
    icon: "grafana.svg",
    link: "https://grafana.com/docs/grafana/latest/",
    publish: true, // Advanced monitoring and visualization
  },
  prometheus: {
    id: "prometheus",
    name: "Prometheus",
    icon: "prometheus.svg",
    link: "https://prometheus.io/docs/introduction/overview/",
    publish: true, // Advanced monitoring system
  },
  loki: {
    id: "loki",
    name: "Loki",
    icon: "loki.svg",
    link: "https://grafana.com/docs/loki/latest/",
    publish: false, // Part of grafana
  },

  // Other skills
  c: {
    id: "c",
    name: "C",
    icon: "c.svg",
    link: "https://en.cppreference.com/w/c",
    publish: true, // Lower-level programming knowledge
  },
  latex: {
    id: "latex",
    name: "LaTeX",
    icon: "latex.svg",
    link: "https://www.latex-project.org/help/documentation/",
    publish: false, // Nice but not core for development
  },
  gnuplot: {
    id: "gnuplot",
    name: "Gnuplot",
    icon: "gnuplot.svg",
    link: "http://gnuplot.info/documentation.html",
    publish: false, // Specialized and less used in web development
  },
};

/**
 * Skill groups that can be customized/renamed without changing the underlying skills
 */
export type SkillGroupName = "frontend" | "backend" | "devops" | "other";

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
    skills.styledcomponents,
    skills.semanticui,
    skills.bootstrap,
    skills.chartjs,
    skills.d3js,
    skills.visx,
    skills.webpack,
    skills.yarn,
    skills.figma,
  ],
  backend: [
    skills.python,
    skills.fastapi,
    skills.django,
    skills.flask,
    skills.php,
    skills.restapi,
    skills.postgresql,
    skills.celery,
    skills.mongodb,
    skills.mysql,
    skills.rabbitmq,
    skills.redis,
    skills.sqlalchemy,
    skills.poetry,
  ],
  devops: [
    skills.docker,
    skills.kubernetes,
    skills.linux,
    skills.git,
    skills.heroku,
    skills.githubactions,
    skills.grafana,
    skills.prometheus,
    skills.loki,
  ],
  other: [
    skills.bash,
    skills.c,
    skills.latex,
    skills.gnuplot,
    skills.langchain,
    skills.huggingface,
    skills.spacy,
  ],
};

/**
 * Helper function to create a custom group of skills
 * Only includes skills that are marked for publishing
 */
export function createSkillGroup(skillIds: SkillId[]): Skill[] {
  return skillIds
    .map((id) => skills[id])
    .filter((skill) => skill && skill.publish);
}
