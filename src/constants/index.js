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
  jobit,
  tripguide,
  threejs,
} from "../assets";
import abidi from "../assets/company/abidi.png";
import nova from "../assets/company/nova.png";
import python from "../assets/tech/python.png";
import firebase from "../assets/tech/firebase.png";
import sql from "../assets/tech/sql.png";
import azure from "../assets/tech/azure.png";
import nextjs from "../assets/tech/next.png";
import smartparking from "../assets/tech/smartparking.png";
import virtual from "../assets/tech/virtual.png";
import hr from "../assets/tech/hr.png";
import rideapp from "../assets/tech/rideapp.png";
import website from "../assets/tech/website.png";
import backenddev from "../assets/tech/backend.png";
import mobiledev from "../assets/tech/mobile.png";
import fulldev from "../assets/tech/fulldev.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  

];

const services = [
  {
    title: "Web Developer",
    icon: website,
  },
  {
    title: "Native Developer",
    icon: mobiledev,
  },
  {
    title: "Backend Developer",
    icon: backenddev,
  },
  {
    title: "Fullstack Developer",
    icon: fulldev,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "next",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "python",
    icon: python,
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
    name: "azure",
    icon: azure,
  },
  {
    name: "sql",
    icon: sql,
  },
  
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Abidi Solutions",
    icon: abidi,
    iconBg: "#383E56",
    date: "November 2023 - Present",
    points: [
      "Developed and maintained website-based projects using the MERN stack (React.js, Node.js,Express.js, MongoDB), ensuring scalability and performance optimization. ",
      "Led the development of app-based projects utilizing React Native, Node.js, Express.js, and Firebase, delivering high-quality mobile applications for Android and iOS platforms. ",
      "Implemented backend APIs for seamless integration between frontend and databases, enhancing user experience and reducing load times",
      "Collaborated with cross-functional teams to streamline development workflows and deliver solutions that meet client needs on time.",
    ],
  },
  {
    title: "Website Developer Internship ",
    company_name: "Super Nova",
    icon: nova,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      "Contributed to frontend app development using .NET C# and React Native, focusing on improving user interfaces and experience.",
      "Assisted in the development of mobile applications, ensuring responsive design and functionality across multiple platforms.",
      "Collaborated with senior developers to debug and optimize existing applications, improving performance and stability",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Smart Parking System",
    description:
      "I developed a cross-platform React Native app that allows users to search, reserve, and pay for parking spots seamlessly. The app features a real-time slot detection system using TensorFlow and OpenCV, ensuring accurate availability updates. I also implemented machine learning-based license plate recognition for automated vehicle verification, enhancing security and streamlining access.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: smartparking,
    source_code_link: "https://github.com/Syed-Maaz-Ali-1611/ParkingApp.git",
  },
  {
    name: "Virtual Assistant",
    description:
      "I developed a Python-based Virtual Assistant using NLP and machine learning to automate tasks like scheduling, answering queries, and handling routine activities. It offers an interactive, conversational experience, reducing workload and boosting productivity. The assistant continuously improves its performance by learning from user interactions, enhancing accuracy and satisfaction over time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "open-ai",
        color: "pink-text-gradient",
      },
    ],
    image: virtual,
    source_code_link: "https://github.com/Syed-Maaz-Ali-1611/ai-virtual-assistant-.git",
  },
  {
    name: "HR MANAGMENT",
    description:
      "HR MANAGEMENT is an all-in-one platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline HR, finance, and project management. It offers features like attendance tracking, email management, document storage, project tracking, and financial oversight, all in one system. By centralizing these functions, it boosts productivity, improves workflow efficiency, and helps organizations maintain better control over their operations.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "exrpress js",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: hr,
  },
  {
    name: "Ride Hailing APP",
    description:
      "I developed a cross-platform ride-hailing app using React Native, Node.js, Firebase, and Google Maps APIs. Key features include user registration, trip booking, real-time tracking, in-app payments, and a chatbot for customer support. Firebase handles authentication, real-time database, and cloud functions, ensuring smooth back-end operations. Google Maps integration optimizes routes and provides real-time traffic updates. The app prioritizes a seamless, intuitive user experience for effortless ride booking and tracking.",
    tags: [
      {
        name: "react native / native",
        color: "blue-text-gradient",
      },
      {
        name: "exrpress js",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
    ],
    image: rideapp,
  },
];

export { services, technologies, experiences, testimonials, projects };
