/**
 * portfolioData.js — Production-quality data layer.
 * All images, projects, music, reading, blogs, and profile data.
 */

// ---- Avatar imports ----
import recruiterAvatar from '../assets/avatars/recruiter.png';
import developerAvatar from '../assets/avatars/developer.png';
import stalkerAvatar from '../assets/avatars/stalker.png';
import adventurerAvatar from '../assets/avatars/adventurer.png';

// ---- Category card images ----
import skillsImg from '../assets/categories/skills.png';
import projectsImg from '../assets/categories/projects.png';
import experienceImg from '../assets/categories/experience.png';
import educationImg from '../assets/categories/education.png';
import contactImg from '../assets/categories/contact.png';
import certificationsImg from '../assets/categories/certifications.png';
import musicImg from '../assets/categories/music.png';
import readingImg from '../assets/categories/reading.png';
import blogsImg from '../assets/categories/blogs.png';
import recommendationsImg from '../assets/categories/recommendations.png';

// ---- Project screenshot imports ----
import edmsScreenshot from '../assets/projects/edms.png';
import hrmsScreenshot from '../assets/projects/hrms.png';
import happinessScreenshot from '../assets/projects/happiness.png';

// ======== Personal Info ========
export const personalInfo = {
  name: "Prashant Srivastava",
  title: "Frontend Developer | Product Manager",
  tagline: "Crafting scalable web applications & bridging technical teams with business operations. Passionate about React, modern JavaScript, and delivering pixel-perfect user interfaces.",
  email: "prashantsri1974@gmail.com",
  phone: "+91 7860916149",
  linkedin: "https://www.linkedin.com/in/prashant-srivastava-315168302",
  github: "https://github.com/prashantsri1",
  resume: "https://drive.google.com/file/d/1hZgCiYh2yojEcJVos8yFPkuEHDW34iEy/view?usp=drivesdk",
};

// ======== Profiles ========
export const profiles = [
  { id: 'recruiter', name: 'Recruiter', avatar: recruiterAvatar },
  { id: 'developer', name: 'Developer', avatar: developerAvatar },
  { id: 'stalker', name: 'Stalker', avatar: stalkerAvatar },
  { id: 'adventurer', name: 'Adventurer', avatar: adventurerAvatar },
];

// ======== Content Rows per Profile ========
export const topPicksData = {
  recruiter: [
    { id: 'skills', title: 'Skills', image: skillsImg, path: '/skills' },
    { id: 'experience', title: 'Experience', image: experienceImg, path: '/professional' },
    { id: 'certifications', title: 'Certifications', image: certificationsImg, path: '/education' },
    { id: 'recommendations', title: 'Recommendations', image: recommendationsImg, path: '/education' },
    { id: 'projects', title: 'Projects', image: projectsImg, path: '/projects' },
    { id: 'contact', title: 'Contact Me', image: contactImg, path: '/contact' },
  ],
  developer: [
    { id: 'skills', title: 'Skills', image: skillsImg, path: '/skills' },
    { id: 'projects', title: 'Projects', image: projectsImg, path: '/projects' },
    { id: 'certifications', title: 'Certifications', image: certificationsImg, path: '/education' },
    { id: 'experience', title: 'Experience', image: experienceImg, path: '/professional' },
    { id: 'recommendations', title: 'Recommendations', image: recommendationsImg, path: '/education' },
    { id: 'contact', title: 'Contact Me', image: contactImg, path: '/contact' },
  ],
  stalker: [
    { id: 'projects', title: 'Projects', image: projectsImg, path: '/projects' },
    { id: 'skills', title: 'Skills', image: skillsImg, path: '/skills' },
    { id: 'experience', title: 'Experience', image: experienceImg, path: '/professional' },
    { id: 'contact', title: 'Contact Me', image: contactImg, path: '/contact' },
    { id: 'certifications', title: 'Certifications', image: certificationsImg, path: '/education' },
    { id: 'recommendations', title: 'Recommendations', image: recommendationsImg, path: '/education' },
  ],
  adventurer: [
    { id: 'experience', title: 'Experience', image: experienceImg, path: '/professional' },
    { id: 'projects', title: 'Projects', image: projectsImg, path: '/projects' },
    { id: 'skills', title: 'Skills', image: skillsImg, path: '/skills' },
    { id: 'certifications', title: 'Certifications', image: certificationsImg, path: '/education' },
    { id: 'contact', title: 'Contact Me', image: contactImg, path: '/contact' },
    { id: 'recommendations', title: 'Recommendations', image: recommendationsImg, path: '/education' },
  ],
};

export const continueWatchingData = [
  { id: 'music', title: 'Music', image: musicImg, path: '/music' },
  { id: 'reading', title: 'Reading', image: readingImg, path: '/reading' },
  { id: 'blogs', title: 'Blogs', image: blogsImg, path: '/blogs' },
  { id: 'certifications', title: 'Certifications', image: certificationsImg, path: '/education' },
  { id: 'contact', title: 'Contact Me', image: contactImg, path: '/contact' },
];

// ======== Nav Links ========
export const navLinks = [
  { label: "Home", path: "/browse" },
  { label: "Professional", path: "/professional" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Hire Me", path: "/contact" },
  { label: "Resume", path: "https://drive.google.com/file/d/1hZgCiYh2yojEcJVos8yFPkuEHDW34iEy/view?usp=drivesdk", external: true },
];

// ======== Tech Skills ========
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", desc: "Core Programming Language", logo: "/tech/javascript.svg" },
      { name: "ReactJS", desc: "UI Component Library", logo: "/tech/react.svg" },
      { name: "HTML5", desc: "Markup Language", logo: "/tech/html5.svg" },
      { name: "CSS3", desc: "Styling Language", logo: "/tech/css3.svg" },
      { name: "TailwindCSS", desc: "Utility-First CSS", logo: "/tech/tailwindcss.svg" },
      { name: "Redux", desc: "State Management", logo: "/tech/redux.svg" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", desc: "Backend Runtime", logo: "/tech/nodejs.svg" },
      { name: "Express.js", desc: "Web Framework", logo: "/tech/express.svg" },
      { name: "MongoDB", desc: "NoSQL Database", logo: "/tech/mongodb.svg" },
      { name: "Firebase", desc: "Backend-as-a-Service", logo: "/tech/firebase.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", desc: "Version Control", logo: "/tech/git.svg" },
      { name: "Bitbucket", desc: "Code Repository", logo: "/tech/bitbucket.svg" },
      { name: "VS Code", desc: "Code Editor", logo: "/tech/vscode.svg" },
      { name: "Netlify", desc: "Frontend Deployment", logo: "/tech/netlify.svg" },
      { name: "Jira", desc: "Project Management", logo: "/tech/jira.svg" },
      { name: "Chrome DevTools", desc: "Debugging & Performance", logo: "/tech/chrome.svg" },
    ],
  },
];

// ======== Experience ========
export const experience = [
  {
    id: 1,
    company: "MANUASTRO LLP",
    role: "Frontend Developer | Product Manager",
    period: "Nov 2025 — June 2026",
    tech: "React, Context API, RESTful APIs, Jira, Trello",
    highlights: [
      "Spearheaded migration from React Class to Functional Components, achieving 30% faster load times.",
      "Managed product lifecycles via Jira/Trello ensuring 100% timely delivery.",
      "Integrated RESTful APIs and streamlined back-office operations.",
      "Collaborated with cross-functional teams to align technical execution with business objectives.",
    ],
  },
];

// ======== Projects ========
export const projects = [
  {
    id: 1,
    title: "HRMS Portal",
    subtitle: "Full-Stack HR Management System",
    screenshot: hrmsScreenshot,
    tech: ["ReactJS", "Firebase", "TailwindCSS", "React Router"],
    description: "A comprehensive HRMS portal for complete office control. Features include employee attendance tracking, payroll management, timesheet logging, task assignment & tracking, leave management system, performance logs, document management, and role-based access control for HR admins and employees.",
    features: ["Attendance Tracker", "Payroll System", "Task Management", "Leave Management", "Performance Logs", "Document Hub"],
    liveUrl: 'https://hrmsportalproject.netlify.app/',
    codeUrl: "https://bitbucket.org/johnsnow2004/hrms-portal/src/main/",
    featured: true,
  },
  {
    id: 2,
    title: "HappinessWorld",
    subtitle: "Full-Stack SaaS Platform (MERN)",
    screenshot: happinessScreenshot,
    tech: ["MongoDB", "Express.js", "ReactJS", "Node.js"],
    description: "A complete SaaS wellness platform with dual admin and client-user panels. Features include volunteer registration (paid/unpaid), event management for mud therapy, music therapy & more, world happiness index visualization, community forums, event RSVP system, and comprehensive admin dashboard with analytics.",
    features: ["Admin Panel", "Client Portal", "Volunteer System", "Event Management", "Happiness Index", "Community Forums"],
    liveUrl: null,
    codeUrl: "https://bitbucket.org/johnsnow2004/happiness-world/src/main/",
    featured: true,
  },
  {
    id: 3,
    title: "EDMS",
    subtitle: "Employee Data Management System",
    screenshot: edmsScreenshot,
    tech: ["ReactJS", "TailwindCSS", "Context API", "LocalStorage"],
    description: "Role-based web application for comprehensive employee task management. Implemented dynamic task filtering, toast notifications, and secure state persistence via localStorage.",
    features: ["Role-Based Access", "Task Filtering", "Toast Notifications", "State Persistence"],
    liveUrl: "https://spectacular-vacherin-bd677d.netlify.app/",
    codeUrl: "https://bitbucket.org/johnsnow2004/employeemanagementsystem/src/main/",
    featured: false,
  },
];

// ======== Education ========
export const education = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    institution: "Dr. Ram Manohar Lohia Avadh University",
    period: "2022 — 2025",
    details: "CGPA: 7.9 | Merit Scholarship Recipient",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "ADCA",
    institution: "Lucknow Computer Institute",
    period: "Advanced Diploma in Computer Application",
    details: "Comprehensive training in computer applications and programming fundamentals",
    icon: "📜",
  },
];

// ======== Music (Hindi Old Songs with YT URLs) ========
export const musicData = {
  songs: [
    { title: "Lag Ja Gale", artist: "Lata Mangeshkar", year: "1964", ytUrl: "https://www.youtube.com/watch?v=TFr6G5zveS8", cover: "https://i.ytimg.com/vi/TFr6G5zveS8/mqdefault.jpg" },
    { title: "Ek Pyar Ka Nagma Hai", artist: "Lata Mangeshkar & Mukesh", year: "1972", ytUrl: "https://www.youtube.com/watch?v=H6xREmJdpbo", cover: "https://i.ytimg.com/vi/H6xREmJdpbo/mqdefault.jpg" },
    { title: "Tujhe Dekha Toh", artist: "Kumar Sanu & Lata", year: "1995", ytUrl: "https://www.youtube.com/watch?v=xm0bR2cP0Mg", cover: "https://i.ytimg.com/vi/xm0bR2cP0Mg/mqdefault.jpg" },
    { title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh", year: "1998", ytUrl: "https://www.youtube.com/watch?v=YOYN9qNXmAw", cover: "https://i.ytimg.com/vi/YOYN9qNXmAw/mqdefault.jpg" },
    { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", year: "2003", ytUrl: "https://www.youtube.com/watch?v=g0eO74UmRBs", cover: "https://i.ytimg.com/vi/g0eO74UmRBs/mqdefault.jpg" },
    { title: "Tum Hi Ho", artist: "Arijit Singh", year: "2013", ytUrl: "https://www.youtube.com/watch?v=Umqb9KENgmk", cover: "https://i.ytimg.com/vi/Umqb9KENgmk/mqdefault.jpg" },
    { title: "Mere Sapno Ki Rani", artist: "Kishore Kumar", year: "1969", ytUrl: "https://www.youtube.com/watch?v=VZ2kQ2eQJxw", cover: "https://i.ytimg.com/vi/VZ2kQ2eQJxw/mqdefault.jpg" },
    { title: "Kabhi Kabhi Mere Dil Mein", artist: "Mukesh & Lata", year: "1976", ytUrl: "https://www.youtube.com/watch?v=DJB7gBMQGPY", cover: "https://i.ytimg.com/vi/DJB7gBMQGPY/mqdefault.jpg" },
  ],
};

// ======== Reading (Books) ========
export const readingData = {
  books: [
    { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", desc: "Financial literacy and the mindset difference between the rich and the poor.", cover: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Atomic Habits", author: "James Clear", desc: "An easy & proven way to build good habits & break bad ones.", cover: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg" },
    { title: "The Alchemist", author: "Paulo Coelho", desc: "A magical fable about following your dreams and listening to your heart.", cover: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", desc: "The classic guide to success through the power of personal belief.", cover: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg" },
    { title: "The Psychology of Money", author: "Morgan Housel", desc: "Timeless lessons on wealth, greed, and happiness.", cover: "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Deep Work", author: "Cal Newport", desc: "Rules for focused success in a distracted world.", cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS._AC_UF1000,1000_QL80_.jpg" },
  ],
};

// ======== Blogs (AI & Studies) ========
export const blogsData = {
  posts: [
    { title: "The Future of AI in Frontend Development", desc: "How AI tools like Copilot and ChatGPT are reshaping how we write code, design interfaces, and ship products faster than ever before.", tag: "AI", readTime: "5 min" },
    { title: "Why React Functional Components Won", desc: "A deep dive into the shift from class components to hooks and why it made React development more intuitive and maintainable.", tag: "React", readTime: "4 min" },
    { title: "Understanding Large Language Models", desc: "Breaking down transformers, attention mechanisms, and why LLMs are the biggest paradigm shift in software engineering.", tag: "AI", readTime: "7 min" },
    { title: "TailwindCSS vs Traditional CSS", desc: "A practical comparison of utility-first CSS vs BEM/SCSS for real-world production applications at scale.", tag: "CSS", readTime: "3 min" },
    { title: "State Management in 2025", desc: "Redux, Zustand, Jotai, or Context API? Choosing the right state solution for your React application architecture.", tag: "React", readTime: "6 min" },
    { title: "Building Accessible Web Applications", desc: "WCAG guidelines, ARIA roles, and practical tips for making your web apps inclusive for everyone.", tag: "Web", readTime: "5 min" },
  ],
};
