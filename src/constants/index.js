// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//  company,
//   one_piece,
//   Port,
//   restaurant,
//   threejs,
// } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "service",
    title: "Service",
  },
  {
    id: "philosophy",
    title: "Philosophy",
  },
  {
    id: "subscription",
    title: "Subscription",
  },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React JS Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "UI/UX Designer",
//     icon: creator,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },

//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
// ];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    //icon: company,
    iconBg: "#383E56",
    date: "Sep 2021 - Oct 2022",
    points: [
      "Boosted customer satisfaction by 25% through improved customer service.",
      "Successfully delivered 4 projects on time, showcasing excellent project.",
      "Enhanced user experience and increased conversion rate by 20% by optimizing web pages, reducing page load time by 50%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    //icon: company,
    iconBg: "#383E56",
    date: "Nov 2022 - Jul 2023",
    points: [
      "Streamlined and optimized three complex projects, each completed within 3 months, resulting in a 25% reduction in customer complaints and a 30% improvement in customer satisfaction.",
      "Developed 20+ fully responsive web pages, reducing loading time by 2 seconds.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Improved website performance, resulting in a 15% decrease in bounce rate and a 25% increase in average session duration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "ABC XYZ",
    designation: "India",
    company: "AXB",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "ABC XYZ",
    designation: "India",
    company: "BYD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "ABC XYZ",
    designation: "India",
    company: "CZF",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "One Piece",
    description:
      "Created a dual-model answer retrieval tool for pinpointing queries within the extensive One Piece Anime Wiki fandom, showcasing expertise in machine learning, data science, and full-stack development. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "data_science",
        color: "green-text-gradient",
      },
    ],
    //image: one_piece,
    source_code_link: "https://github.com/tushaar9560/OnePiece-Question-Answering",
  },
  {
    name: "Personal Portfolio",
    description:
      "Created a sleek and modern company portfolio template using Bootstrap, featuring a structurally solid foundation and stunning layouts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "sliderjs",
        color: "pink-text-gradient",
      },
    ],
    //image: Port,
    source_code_link: "https://github.com/",
  },
  {
    name: "Restaurant Template",
    description:
      "Developed a restaurant website template having 8+ pages using HTML, CSS, and JavaScript, creating a seamless and engaging online presence that effectively showcases a restaurant’s offerings and enhances user experience",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    //image: restaurant,
    source_code_link: "https://github.com/",
  },
];

export { experiences, testimonials, projects };
