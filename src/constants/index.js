import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  coffee,
  jobit,
  tripguide,
  threejs,
  github,
  linkedin,
  playlist,
  elara,
  porf,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
id:"education",
title:"Education"
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Check Resume",
    icon: web,
    link:"/Anshu_Dhawan_Resume.pdf"
  },
  {
    title: "Github",
    icon: github,
    link:"https://github.com/Anshudhawan12/Anshudhawan12"
  },
  {
    title: "Linkedln",
    icon:linkedin,
      link:"https://www.linkedin.com/in/anshu-dhawan-949a662a6"

  },
  {
    title: "Problem Solver",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
   {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "Coffee Shop",
    description:
"Developed a visually appealing and well-structured website for Brewed Awakenings Coffee Shop featuring responsive design, interactive menu displays, and user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: coffee,
    source_code_link: "https://github.com/Anshudhawan12/Coffee-Shop.git",
    live_demo_link: "https://lnkd.in/d6YDqjbx ",
  },
  {
    name: "Playlist Management System",
    description:
"Developed a playlist management system in Java that allows users to create, manage, and update their music playlists",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "LinkedList",
        color: "green-text-gradient",
      },
      {
        name: "DSA",
        color: "pink-text-gradient",
      },
    ],
    image: playlist,
    source_code_link: "https://github.com/Anshudhawan12/Playlist-Manager",
  },
  {
    name: "Elara Regency",
    description:"A modern hotel management web application that allows users to book rooms, view available facilities.It features user authentication, and dynamic pages for hotel services and locations.",
    
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
         name: "Node.js",
        color: "blue-text-gradient",
      }
    ],
    image: elara,
    source_code_link: "https://github.com/Anshudhawan12/Elara-Regancy.git",
     live_demo_link:  "https://be-elararegency.onrender.com/"
  },
  {
    name: "Portfolio",
    description:"A personal portfolio showcasing my web development projects, skills, and experience. It highlights interactive web apps, responsive designs, and modern technologies",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: porf,
    source_code_link: "https://github.com/Anshudhawan12/Elara-Regancy.git",
     live_demo_link:  "https://be-elararegency.onrender.com/"
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
