import { Project } from "@/types/project";

const projectsImages = "/images/projects";
const projectsVideos = "/videos/projects";
// Image directories for project images
const projectImageDirs = {
  bjjpaths: `${projectsImages}/bjjpaths`,
  taskma: `${projectsImages}/taskma`,
  deviculum: `${projectsImages}/deviculum`,
  portfolio: `${projectsImages}/portfolio`,
};

// Video directories for project videos
const projectVideoDirs = {
  bjjpaths: `${projectsVideos}/bjjpaths`,
  taskma: `${projectsVideos}/taskma`,
  deviculum: `${projectsVideos}/deviculum`,
  portfolio: `${projectsVideos}/portfolio`,
};

// BJJpaths project
const bjjpathsProject: Project = {
  id: "bjjpaths",
  title: "BJJpaths",
  meta: "Brazilian Jiu-Jitsu mind mapper",
  description:
    "A mind mapping web application for jiu-jitsu practitioners to lay out and connect their game. " +
    "The user has a variety of move categories at their disposal (e.g. Submission, Grip, Transition etc...) " +
    "and each category is represented by its own shape and colour. The user connects up moves depending on their opponent's action/reaction so that the map branches off into different move sequences. ",
  technologies: {
    brief: ["Django", "ReactJS", "PostgreSQL", "Docker"],
    backend: ["python", "django", "restapi", "postgresql"],
    frontend: ["html", "css", "javascript", "reactjs", "semanticui"],
    devops: ["docker"],
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
  ],
  image: `${projectImageDirs.bjjpaths}/bjjpaths.png`,
  sliderMedia: [
    {
      source: `${projectImageDirs.bjjpaths}/bjjpaths-1.gif`,
      type: "image",
      padding: "5%",
      caption: "Creating and editing a node.",
    },
    {
      source: `${projectImageDirs.bjjpaths}/bjjpaths-2.gif`,
      type: "image",
      padding: "5%",
      caption: "Creating an edge and arrow head following node contour.",
    },
    {
      source: `${projectImageDirs.bjjpaths}/bjjpaths-delete-node.gif`,
      type: "image",
      padding: "5%",
      caption: "Highlighting all the connecting paths between 2 nodes.",
    },
    {
      source: `${projectImageDirs.bjjpaths}/bjjpaths-layout.gif`,
      type: "image",
      padding: "5%",
      caption: "Different layout types.",
    },
  ],
};

// Taskma project
const taskmaProject: Project = {
  id: "taskma",
  title: "Taskma",
  meta: "Project management",
  description:
    "A task manager web application to help users complete their projects. " +
    "Users build their projects by creating individual tasks within groups of related tasks. " +
    "They can set task statuses, priorities, difficulties and dealines. " +
    "Colour palettes and icons are associated with these fields to help visualise and quickly identify certain tasks. " +
    "Projects include a manager where the user can filter and sort tasks over multiple properties, " +
    "to further target specific tasks. Check out the demo video on the last slide.",

  technologies: {
    brief: ["Django", "ReactJS", "PostgreSQL"],
    backend: ["python", "django", "restapi", "postgresql"],
    frontend: ["html", "css", "javascript", "reactjs", "semanticui"],
    devops: ["git", "heroku"],
  },

  learnings: [
    "Designing Rest-APIs",
    "Consuming Rest-APIs",
    "Token Authentication",
    "APIViews and Viewsets",
    "Permission + Authentication Classes",
    "Presentational/Container Component Design",
    "Frontend Form Validation",
    "React Context",
    "Custom Hooks",
  ],
  anchors: [
    {
      name: "Backend Source",
      href: "https://github.com/plutopulp/task-manager-backend",
      type: "github",
    },
    {
      name: "Frontend Source",
      href: "https://github.com/plutopulp/task-manager-frontend",
      type: "github",
    },
  ],
  image: `${projectImageDirs.taskma}/taskma.png`,
  sliderMedia: [
    {
      source: `${projectImageDirs.taskma}/colorsExTask.png`,
      type: "image",
      padding: "5%",
      caption:
        "Left: Task property colours and icons. Right: Example task card in expanded form.",
    },
    {
      source: `${projectImageDirs.taskma}/project1.png`,
      type: "image",
      padding: "5%",
      caption: "Project detail view at initial stage.",
    },
    {
      source: `${projectImageDirs.taskma}/project2.png`,
      type: "image",
      padding: "5%",
      caption:
        "Project detail view at mature stage. Here tasks are sorted by priority, then by difficulty.",
    },
    {
      source: `${projectImageDirs.taskma}/filterWidgetModal.png`,
      type: "image",
      padding: "5%",
      caption: "The task filter widget modal window.",
    },
    {
      source: `${projectImageDirs.taskma}/sortWidgetModal.png`,
      type: "image",
      padding: "5%",
      caption: "The task sort widget modal window.",
    },
    {
      source: `${projectVideoDirs.taskma}/taskma.mp4`,
      type: "video",
      padding: "5%",
      caption: "Taskma demo video.",
    },
  ],
};

// Deviculum project
const deviculumProject: Project = {
  id: "deviculum",
  title: "Deviculum",
  meta: "Curriculum learning outcome analysis",
  description:
    "A web application to help educators and academics develop curricula. " +
    "Users build their curricula by associating learning outcomes/objectives (LOs) to curriculum modules. " +
    "They can then analyse their curriculum using admin-provided or their own custom built verb taxonomies. " +
    "LOs are parsed using an NLP library in order to identify verbs and return a statistical breakdown of the verb categories covered by their curriculum within a chosen taxonomy. " +
    "Each curriculum can have multiple taxonomy analyses. Check out the demo video on the last slide.",

  technologies: {
    brief: ["Django", "JavaScript", "PostgreSQL"],
    backend: ["python", "django", "spacy", "postgresql"],
    frontend: ["html", "css", "javascript", "bootstrap", "chartjs", "d3js"],
    devops: ["celery", "rabbitmq", "docker", "linux"],
  },
  learnings: ["Authentication", "Django ORM", "OOP designs", "Chord Charts"],
  anchors: [
    {
      name: "Source",
      href: "https://github.com/plutopulp/curriculum-dev",
      type: "github",
      color: "linear-gradient(to right, blue 50%, yellow 50%)",
    },
    { name: "Frontend", href: null, type: "github" },
  ],
  image: `${projectImageDirs.deviculum}/deviculum.png`,
  sliderMedia: [
    {
      source: `${projectImageDirs.deviculum}/curriculum.png`,
      type: "image",
      padding: "5%",
      caption: "A Computer Science curriculum with 2 taxonomy analyses.",
    },
    {
      source: `${projectImageDirs.deviculum}/taxonomy.png`,
      type: "image",
      padding: "5%",
      caption: "An example Blooms taxonomy of verbs.",
    },
    {
      source: `${projectImageDirs.deviculum}/taxonomy-overlap2.png`,
      type: "image",
      padding: "5%",
      caption:
        "A chord diagram representing the verb overlap between Blooms taxonomy categories.",
    },
    {
      source: `${projectVideoDirs.deviculum}/deviculum.mp4`,
      type: "video",
      padding: "5%",
      caption: "Deviculum demo video.",
    },
  ],
};

// Portfolio project
const portfolioProject: Project = {
  id: "portfolio",
  title: "Portfolio",
  meta: "My portfolio website",
  description: `A responsive portfolio website that showcases my development journey and technical expertise. 
  I designed this site with a focus on clean aesthetics and engaging user experience.
  I also wanted to have a bit of fun with CSS animations and transitions.`,
  technologies: {
    brief: ["Next.js", "TypeScript", "Tailwind"],
    backend: [],
    frontend: ["html", "css", "typescript", "reactjs", "nextjs", "tailwind"],
    devops: ["docker"],
    other: [],
  },
  learnings: ["CSS animations", "Responsive Design", "Next.js 14"],
  anchors: [
    {
      name: "Source",
      href: "https://github.com/plutopulp/plutopulp.com",
      type: "github",
    },
    {
      name: "Live Site",
      href: "https://plutopulp.com/",
      type: "globe",
    },
  ],
  image: `${projectImageDirs.portfolio}/landing-cropped.png`,
  sliderMedia: [
    {
      source: `${projectImageDirs.portfolio}/landing.png`,
      type: "image",
      padding: "5%",
      caption: "Landing page created with CSS keyframe animations",
    },
  ],
};

// Combine all projects into a single array
export const projectsData: Project[] = [
  bjjpathsProject,
  portfolioProject,
  deviculumProject,
  taskmaProject,
];
