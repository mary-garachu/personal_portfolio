export const resumeUrl = "/assets/Mary-Muthoni-Resume.pdf";

export const hero = {
  tag: "Web developer",
  title: "Hi, I'm Mary.",
  lede: "I build responsive, fast WordPress and React websites that help businesses grow.",
  portrait: {
    src: "/assets/img/mary-garachu-square.webp",
    alt: "Portrait of Mary Garachu",
  },
};

export const about = [
  "I'm a web developer with two years of experience in WordPress development and front-end work in React. At HoprLabs, I build and maintain responsive, SEO-optimised websites for businesses in healthcare, travel and industry.",
  "I work across custom theme modifications, plugin integration and performance tuning, and I handle the parts that keep a site healthy after launch: on-page SEO, speed, hosting, domains and security.",
  "Before code, I earned a degree in Exercise and Sport Science. I still approach learning the same way: steady practice, honest feedback, and getting a little better each round.",
];

export const experience = [
  {
    tag: "Now",
    tagVariant: "tag-accent",
    title: "Web Developer, HoprLabs",
    description:
      "Building and maintaining client websites in WordPress and React, from first build to ongoing performance, SEO and security work.",
  },
  {
    tag: "Internship",
    tagVariant: "tag-neutral",
    title: "Software Engineer Intern, M-TIBA",
    description:
      "Provided technical support to the customer care team and helped improve the payer and provider portals using TypeScript, Angular and MySQL. Recognised for outstanding collaboration and support.",
  },
];

export const featuredProject = {
  kicker: "Tour & travel · WordPress",
  title: "Nala Trails & Safaris",
  description:
    "A travel booking platform with destination filters and itineraries. I improved site navigation, SEO and the booking form so more visitors find a trip and enquire.",
  url: "https://nalatrailssafaris.com",
  caseStudy: "/projects/nala-trails-safaris/",
  image: {
    src: "/assets/img/nala-trails-safaris.webp",
    alt: "Nala Trails & Safaris home page",
    width: 1200,
    height: 720,
  },
};

export const projects = [
  {
    kicker: "Healthcare consultancy · WordPress",
    title: "Spirealm Health System Solutions",
    description:
      "A responsive site for a healthcare consultancy. I refined layout, typography and performance for clarity and accessibility.",
    url: "https://spirealm.co.ke",
    caseStudy: "/projects/spirealm/",
    image: {
      src: "/assets/img/spirealm.webp",
      alt: "Spirealm home page",
      position: "top",
    },
  },
  {
    kicker: "Corporate · Single-page app",
    title: "Ezra Enterprise",
    description:
      "A modern single-page site with interactive elements, focused on user experience, speed and responsive design across devices.",
    url: "https://ezraenterprise.com",
    caseStudy: "/projects/ezra-enterprise/",
    image: {
      src: "/assets/img/ezra-enterprise.webp",
      alt: "Ezra Enterprise home page",
    },
  },
];

export const githubProjects = [
  {
    title: "Simple shell",
    description: "A Unix shell in C with process creation, I/O redirection and signal handling.",
    tag: "C",
    url: "https://github.com/mary-garachu/simple_shell",
  },
  {
    title: "AirBnB clone",
    description: "A command interpreter with a BaseModel class for serialising and managing Airbnb objects.",
    tag: "Python",
    url: "https://github.com/mary-garachu/AirBnB_clone",
  },
  {
    title: "Andela clone",
    description: "A rebuild of Andela's hire-talent website.",
    tag: "HTML · SCSS",
    url: "https://github.com/mary-garachu/andela-clone",
  },
  {
    title: "CarePay clone",
    description: "A rebuild of a health-insurance tech company's site in Kenya and Nigeria.",
    tag: "HTML · CSS",
    url: "https://github.com/mary-garachu/carepay",
  },
];

export const skills = [
  {
    label: "Front end",
    tagVariant: "tag-accent",
    items: ["React", "JavaScript", "HTML", "CSS / SCSS", "TypeScript", "Angular"],
  },
  {
    label: "WordPress",
    tagVariant: "tag-accent-2",
    items: ["Themes", "Block themes", "Gutenberg", "Plugins"],
  },
  {
    label: "Site care",
    tagVariant: "tag-neutral",
    items: ["On-page SEO", "Speed optimisation", "Hosting & domains", "Web security"],
  },
  {
    label: "Back end & workflow",
    tagVariant: "tag-outline",
    items: ["Python", "C", "MySQL", "Git", "Agile / Scrum", "Jira · Asana · Trello · Notion"],
  },
];

export const education = [
  {
    dates: "Jul 2023 – Jul 2024",
    title: "Software Engineering",
    institution: "ALX Africa",
    description: "Specialised in front-end development, working in C, Python, JavaScript and React.",
  },
  {
    dates: "Apr 2014 – Oct 2019",
    title: "BSc Exercise & Sport Science",
    institution: "Kenyatta University",
  },
];

export const contact = {
  title: "Let's build something.",
  lede: "Need a website built, sped up or looked after? Send me an email and I'll get back to you.",
  email: "garachu.muthoni@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mary-muthoni-2330b5183/" },
    { label: "GitHub", url: "https://github.com/mary-garachu" },
    { label: "Resume (PDF)", url: resumeUrl, download: true },
  ],
};
