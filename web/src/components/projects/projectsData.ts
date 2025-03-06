import { Project } from "./types";

const projectsImages = "/images/projects";
// Image directories for project images
const projectImageDirs = {
  bjjpaths: projectsImages + "/bjjpaths",
  taskma: projectsImages + "/taskma",
  deviculum: projectsImages + "/deviculum",
  portfolio: projectsImages + "/portfolio",
};

export const projectsData: Project[] = [
  {
    id: "bjjpaths",
    title: "BJJpaths",
    meta: "Brazilian Jiu-Jitsu mind mapper",
    description:
      "A mind mapping web application for jiu-jitsu practitioners to lay out and connect their game. The user has a variety of move categories at their disposal (e.g. Submission, Grip, Transition etc...) and each category is represented by its own shape and colour. The user connects up moves depending on their opponent's action/reaction so that the map branches off into different move sequences.",
    technologies: {
      brief: ["Django", "ReactJS"],
      backend: ["python", "django", "restapi", "docker", "postgresql"],
      frontend: ["html", "css", "javascript", "reactjs", "semanticui"],
    },
    learnings: ["Auth0", "Drag & Drop", "Graph Traversal"],
    anchors: [
      {
        name: "Source",
        href: "https://github.com/Aviemusca/bjj-digraph",
        type: "github",
        color: "linear-gradient(to right, blue 50%, yellow 50%)",
      },
      { name: "Frontend", href: null, type: "github" },
      {
        name: "Live Site",
        href: "https://bjjpaths.com/",
        type: "globe",
      },
    ],
    image: projectImageDirs.bjjpaths + "/bjjpaths.png",
    sliderMedia: [
      {
        source: projectImageDirs.bjjpaths + "/bjjpaths-1.gif",
        type: "image",
        padding: "5%",
        caption: "Creating and editing a node.",
      },
      {
        source: projectImageDirs.bjjpaths + "/bjjpaths-2.gif",
        type: "image",
        padding: "5%",
        caption: "Creating an edge and arrow head following node contour.",
      },
    ],
  },
  {
    id: "taskma",
    title: "Taskma",
    meta: "Project management",
    description:
      "A task manager web application to help users complete their projects. Users build their projects by creating individual tasks within groups of related tasks. They can set task statuses, priorities, difficulties and dealines. Colour palettes and icons are associated with these fields to help visualise and quickly identify certain tasks.",
    technologies: {
      brief: ["Django", "ReactJS"],
      backend: ["python", "django", "restapi", "postgresql"],
      frontend: ["html", "css", "javascript", "reactjs", "semanticui"],
    },
    learnings: [
      "Designing Rest-APIs",
      "Consuming Rest-APIs",
      "Token Authentication",
      "Custom Hooks",
    ],
    anchors: [
      {
        name: "Backend Source",
        href: "https://github.com/Aviemusca/task-manager-backend",
        type: "github",
      },
      {
        name: "Frontend Source",
        href: "https://github.com/Aviemusca/task-manager-frontend",
        type: "github",
      },
      {
        name: "Live Site",
        href: "https://tamska.herokuapp.com/",
        type: "globe",
      },
    ],
    image: projectImageDirs.taskma + "/taskma.png",
    sliderMedia: [
      {
        source: projectImageDirs.taskma + "/project1.png",
        type: "image",
        padding: "5%",
        caption: "Project detail view at initial stage.",
      },
    ],
  },
  {
    id: "deviculum",
    title: "Deviculum",
    meta: "Curriculum learning outcome analysis",
    description:
      "A web application to help educators and academics develop curricula. Users build their curricula by associating learning outcomes/objectives (LOs) to curriculum modules. They can then analyse their curriculum using admin-provided or their own custom built verb taxonomies.",
    technologies: {
      brief: ["Django", "JavaScript"],
      backend: [
        "python",
        "django",
        "celery",
        "rabbitmq",
        "spacy",
        "postgresql",
      ],
      frontend: ["html", "css", "javascript", "bootstrap", "chartjs", "d3js"],
    },
    learnings: ["Authentication", "Django ORM", "OOP designs", "Chord Charts"],
    anchors: [
      {
        name: "Source",
        href: "https://github.com/Aviemusca/curriculum-dev",
        type: "github",
        color: "linear-gradient(to right, blue 50%, yellow 50%)",
      },
      { name: "Frontend", href: null, type: "github" },
      {
        name: "Live Site",
        href: "https://deviculum.herokuapp.com/",
        type: "globe",
      },
    ],
    image: projectImageDirs.deviculum + "/deviculum.png",
    sliderMedia: [
      {
        source: projectImageDirs.deviculum + "/curriculum.png",
        type: "image",
        padding: "22%",
        caption: "A Computer Science curriculum with 2 taxonomy analyses.",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    meta: "My portfolio website",
    description: "A portfolio website showcasing my projects and skills.",
    technologies: {
      brief: ["Next.js", "TypeScript", "Tailwind"],
      backend: ["nextjs"],
      frontend: ["html", "css", "typescript", "reactjs", "tailwind"],
    },
    learnings: ["CSS animations", "Responsive Design", "Next.js 14"],
    anchors: [
      {
        name: "Source",
        href: "https://github.com/plutopulp/portfolio-dev",
        type: "github",
      },
      {
        name: "Live Site",
        href: "https://plutopulp.com/",
        type: "globe",
      },
    ],
    image: projectImageDirs.portfolio + "/portfolio.png",
    sliderMedia: [
      {
        source: projectImageDirs.portfolio + "/landing.png",
        type: "image",
        padding: "5%",
        caption: "Landing page created with CSS animations",
      },
    ],
  },
];
