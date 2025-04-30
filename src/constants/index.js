const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Practical Coding Experience" },
  { value: 3, suffix: "+", label: "Full Stack Projects Built" },
  { value: 15, suffix: "+", label: "Technologies & Tools Used" },
  { value: 100, suffix: "%", label: "Ownership of Academic & Freelance Work" },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Full Stack Ownership",
    desc: "From UI to backend APIs, I build complete, scalable web apps with clean and maintainable code.",
  },
  {
    imgPath: "/images/communication.png",
    title: "Clear Communication",
    desc: "Always keep things transparent—whether it’s progress, blockers, or timelines—so everyone stays aligned.",
  },
  {
    imgPath: "/images/deadline.png",
    title: "Dependable Delivery",
    desc: "I stick to deadlines and deliver production-ready work you can trust, without sacrificing quality.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Working as a freelance frontend developer has been a transformative experience. It gave me real-world exposure to client expectations, agile collaboration, and the importance of writing scalable UI code.",
    logoPath: "/images/laptop.png",
    title: "Frontend Developer (Freelance) – Kivlik Technologies Inc",
    date: "April 2023 - Present",
    responsibilities: [
      "Developed key modules like the admin dashboard and timeslot logic for a car wash platform.",
      "Built responsive, intuitive UIs using React, Redux, and Bootstrap.",
      "Maintained consistent delivery and transitioned into ongoing freelance work based on performance.",
    ],
  },
  {
    review:
      "Building CropChain helped me understand the full lifecycle of product development — from API design and authentication to OCR-based features. It pushed me to architect scalable solutions in a real-world context.",
    logoPath: "/images/plant.png",
    title: "Full Stack Developer – CropChain Project",
    date: "2024 (Academic + Personal Project)",
    responsibilities: [
      "Built a MERN stack platform enabling farmers to directly sell their products.",
      "Implemented JWT-based authentication and OCR for identity verification.",
      "Used Redux and RTK Query for scalable state and API management.",
    ],
  },
  {
    review:
      "College was where I built my core technical foundation and explored various technologies through hands-on learning. Organizing the Concurso tech fest was a major milestone that strengthened my leadership, collaboration, and problem-solving skills while giving me real exposure to event planning and team dynamics.",
    logoPath: "/images/education.png",
    title: "Bachelor of Computer Applications – Kannur University",
    date: "2022 - 2025",
    responsibilities: [
      "Maintained a CGPA of 8.10 while actively contributing to tech fests and academic projects.",
      "Led the tech team for Concurso '24 and developed key campus-related tools.",
      "Built full-stack applications such as the CropChain using MERN Stack.",
    ],
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/aakamshpm",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://linkedin.com/in/aakamshpm",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
