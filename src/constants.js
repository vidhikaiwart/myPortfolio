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
import gsapLogo from "./assets/tech_logo/gsap.png";

// Backend
import nodeLogo from "./assets/tech_logo/nodejs.png";
import expressLogo from "./assets/tech_logo/express.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";

// Database
import mongoLogo from "./assets/tech_logo/mongodb.png";
import sqlLogo from "./assets/tech_logo/mysql.png";

// Languages
import cppLogo from "./assets/tech_logo/cpp.png";

// Tools
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

import postmanLogo from "./assets/tech_logo/postman.png";

/* ---- Experience / Education / Project Logos ---- */


/* ====================================
   SKILLS
===================================== */

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React.js", logo: reactLogo },
      { name: "Redux Toolkit", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "Firebase Functions", logo: firebaseLogo },
      { name: "JWT Authentication", logo: postmanLogo },
      { name: "Nodemailer", logo: postmanLogo },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: mongoLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "Firebase Firestore", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages & DSA",
    skills: [
      { name: "C++ (DSA)", logo: cppLogo },
      { name: "JavaScript", logo: jsLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "npm",  },
      { name: "Postman",  },
    ],
  },
];

/* =====================================
   EXPERIENCE
===================================== */

export const experiences = [
  {
    id: 0,
    img: {},
    role: "Frontend Developer (Intern)",
    company: "Aaharmenu",
    date: "Internship",
    desc: [
      "Built responsive websites using HTML, CSS, and Bootstrap.",
      "Created animations and interactions using JavaScript and GSAP.",
      "Improved performance and overall user experience.",
    ],
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "GSAP"],
  },
];

/* =====================================
   EDUCATION
===================================== */

export const education = [
  {
    id: 0,
    img: {},
    school: "Lakhmi Chand Institute of Technology",
    location: "Bilaspur, Chhattisgarh",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    date: "2021 - 2025",
    desc:
      "Pursuing B.Tech with strong fundamentals in Data Structures, Algorithms, Web Development, and Software Engineering.",
  },
  {
    id: 1,
    img: {},
    school: "Jindal Adarsh School",
    location: "Chhattisgarh",
    degree: "Class XII (CGBSE)",
    date: "2021",
    grade: "96.2%",
    desc:
      "Completed higher secondary education with excellent academic performance.",
  },
];

/* =====================================
   PROJECTS
===================================== */

export const projects = [
  {
    id: 0,
    title: "AI Mock Interview Platform",
    image: {},
    description:
      "AI-powered interview preparation platform using OpenAI GPT-4 with real-time feedback, Firebase authentication, and serverless backend.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Firebase",
      "OpenAI GPT-4",
    ],
    type: "Full Stack",
  },
  {
    id: 1,
    title: "StudyNotion E-Tech Platform",
    image: {},
    description:
      "A full-stack course platform with authentication, payments, OTP-based password reset, and Redux state management.",
    tags: [
      "MERN Stack",
      "Redux",
      "JWT",
      "Nodemailer",
      "MongoDB",
    ],
    type: "Full Stack",
  },
];

/* =====================================
   ACHIEVEMENTS
===================================== */

export const achievements = [
  {
    platform: "LeetCode",
    detail: "330+ problems solved (Easy, Medium, Hard)",
  },
  {
    platform: "GeeksforGeeks",
    detail: "150+ DSA problems solved",
  },
];
