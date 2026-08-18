/* =====================================
   IMPORT ALL LOGOS
===================================== */

/* ---- Skills Logos ---- */
// Frontend
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import jsLogo from "./assets/tech_logo/javascript.png";
import reactLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

// Backend
import nodeLogo from "./assets/tech_logo/nodejs.png";
import expressLogo from "./assets/tech_logo/express.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";

// Database
import mongoLogo from "./assets/tech_logo/mongodb.png";
import sqlLogo from "./assets/tech_logo/mysql.png";

// Languages
import cppLogo from "./assets/tech_logo/cpp.png";
import python from "./assets/tech_logo/python.png";
import javaLogo from "./assets/tech_logo/java.png";

// Tools
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercel from "./assets/tech_logo/vercel.png";

import postmanLogo from "./assets/tech_logo/postman.png";

/* ---- Experience / Education / Project Logos ---- */
import Lcit from "./assets/education_logo/lcit.webp"
import school from "./assets/education_logo/school.png"
import polytechnic from "./assets/education_logo/polytechnic.jpg"
import bitDurg from "./assets/education_logo/bit_durg.jpeg"
/* ====================================
   project
===================================== */

import yourspace from "./assets/work_logo/yourspace.png"
import chat from "./assets/work_logo/chat.png"
import devtinder from "./assets/work_logo/Devtinder.png"
import naviratas from "./assets/work_logo/naviratas.png"
import admanpower from "./assets/work_logo/admanpower.png"
import shopnow from "./assets/work_logo/shopnow.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React.js", logo: reactLogo },
      { name: "Redux ", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      // { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },

      { name: "Firebase", logo: firebaseLogo },

      { name: "MongoDB", logo: mongoLogo },
      { name: "SQL", logo: sqlLogo },
      // { name: "Postgre", logo: postgre },

    ],
  },

  {
    title: "Languages & DSA",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "C++ ", logo: cppLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "python", logo: python },
      // { name: "C", logo: c},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },

      { name: "Postman", logo: postmanLogo },
      { name: "vercel", logo: vercel },
    ],
  },
];

/* =====================================
   EXPERIENCE
===================================== */

export const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Laymotion",
    date: "11 May 2026 - 12 Aug 2026",
    location: "Delhi, India (Remote)",
    type: "Internship",
    desc: "Engineered scalable web applications using the MERN stack. Designed responsive user interfaces in React.js with modern styling, integrated robust RESTful APIs in Node.js & Express, optimized MongoDB queries, and collaborated across cross-functional teams to deliver high-performance production features.",
    highlights: [
      "Developed modular React components reducing UI render time and enhancing user experience.",
      "Integrated secure authentication mechanisms and REST API endpoints using Express & MongoDB.",
      "Collaborated in Agile sprints, utilizing Git/GitHub for version control and efficient code reviews.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Git & GitHub"],
  },
];

/* =====================================
   EDUCATION
===================================== */

export const education = [
  {
    id: 1,
    degree: "M.Tech in Data Science",
    school: "Bhilai Institute of Technology, Durg, Chhattisgarh",
    date: "2026 - 2028",
    grade: "Pursuing",
    desc: "Specializing in Data Science, Machine Learning, Data Analytics, Advanced Algorithms, and Artificial Intelligence.",
    img: bitDurg,
  },
  {
    id: 2,
    degree: "B.Tech in Computer Science Engineering",
    school: "Lakhmi Chand Institute of Technology, Bilaspur, Chhattisgarh",
    date: "2021 - 2025",
    grade: "82.07%",
    desc: "Focused on core computer science subjects including Data Structures, Algorithms, Web Development, Databases, and Software Engineering. Gained hands-on experience through full-stack MERN projects.",
    img: Lcit,
  },
  {
    id: 3,
    degree: "Diploma in Computer Science Engineering",
    school: "Government Girls Polytechnic",
    date: "2022",
    grade: "75.09%",
    desc: "Built strong fundamentals in programming, computer networks, operating systems, and database management systems.",
    img: polytechnic,
  },
  {
    id: 4,
    degree: "Class X (CGBSE)",
    school: "Sent Joseph Convent School",
    date: "2019",
    grade: "80.66%",
    desc: "Completed secondary education with a strong academic foundation in mathematics, science, and logical reasoning.",
    img: school,
  },
];

/* =====================================
   PROJECTS
===================================== */

export const projects = [
  {
    id: 0,
    title: "Naviratas – Global Certification Body Platform",
    image: naviratas,
    description:
      "A modern corporate certification platform enabling organizations to explore courses, verify certificates online, request business consultations, and access auditing & ISO certification services.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs"
    ],
    type: "Frontend",
    webapp: "https://dev.naviratas.com/",
  },
  {
    id: 1,
    title: "AD Manpower – Workforce & Business Management Platform",
    image: admanpower,
    description:
      "An expert manpower solutions web application for business operations management, featuring active job listings, employer services, candidate management, and an admin portal.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    type: "Full Stack",
    webapp: "https://www.admanpowerenterprises.com/",
  },
  {
    id: 2,
    title: "ShopNow – E-Commerce & Everyday Essentials Platform",
    image: shopnow,
    description:
      "A full-stack e-commerce web application featuring curated product collections, user authentication, interactive product search, cart management, and seamless online shopping experience.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs"
    ],
    type: "Full Stack",
  },
  {
    id: 3,
    title: "Online Rental & Property Listing Platform",
    image: yourspace,
    description:
      "A full-stack rental platform that allows users to list, search, and manage rental properties with secure authentication, image uploads, and real-time communication between tenants and owners.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Cloudinary"
    ],
    type: "Full Stack",
  },
  {
    id: 4,
    title: "Real-Time Communication Platform",
    image: chat,
    description:
      "A MERN stack rental platform featuring property listings, advanced search filters, secure authentication, image uploads, and real-time chat between tenants and property owners using Socket.IO.",
    tags: [
      "MERN Stack",
      "Redux",
      "JWT",
      "Nodemailer",
      "MongoDB",
      "Socket.IO",
    ],
    type: "Full Stack",
  },
  {
    id: 5,
    title: "DevTinder – Developer Connection App",
    image: devtinder,
    description:
      "A MERN stack-based developer connection platform where users can create profiles, swipe to connect, send connection requests, and build professional networks.",
    tags: [
      "MERN Stack",
      "JWT Authentication",
      "MongoDB",
      "Node.js",
      "Express.js",
      "React.js",
    ],
    type: "Full Stack",
  }
];

/* =====================================
   ACHIEVEMENTS
===================================== */

// export const achievements = [
//   {
//     platform: "LeetCode",
//     detail: "330+ problems solved (Easy, Medium, Hard)",
//   },
//   {
//     platform: "GeeksforGeeks",
//     detail: "150+ DSA problems solved",
//   },
// ];
