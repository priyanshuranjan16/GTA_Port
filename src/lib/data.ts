// Portfolio data for the GTA-themed portfolio

export const personalInfo = {
  name: "DEATH BLADE",
  tagline: "Full Stack Developer | Code Warrior | Boss Level Unlocked",
  bio: "A passionate developer and avid gamer, currently leveling up my skills in the final year of BTech. When I'm not coding, you'll find me conquering virtual worlds and completing side quests.",
  location: "India",
  email: "priyanshu.iiitr@gmail.com",
  github: "https://github.com/priyanshuranjan16",
  linkedin: "https://linkedin.com/in/priyanshuranjan16",
  twitter: "https://x.com/priyanshu_1_6",
  leetcode: "https://leetcode.com/blade_xd",
};

export const stats = {
  projectsCompleted: 15,
  coffeeConsumed: 500,
  gamesPlayed: 100,
  bugsSquashed: 999,
};

export const skills = [
  { name: "JavaScript", level: 5, category: "Frontend" },
  { name: "TypeScript", level: 4, category: "Frontend" },
  { name: "React", level: 5, category: "Frontend" },
  { name: "Next.js", level: 4, category: "Frontend" },
  { name: "HTML/CSS", level: 5, category: "Frontend" },
  { name: "Tailwind CSS", level: 5, category: "Frontend" },
  { name: "Node.js", level: 4, category: "Backend" },
  { name: "Python", level: 4, category: "Backend" },
  { name: "MongoDB", level: 3, category: "Backend" },
  { name: "PostgreSQL", level: 3, category: "Backend" },
  { name: "Git", level: 4, category: "Tools" },
  { name: "Docker", level: 3, category: "Tools" },
  { name: "VS Code", level: 5, category: "Tools" },
  { name: "Figma", level: 3, category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com",
    live: "https://example.com",
    respect: 1500,
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and conversation history.",
    tech: ["React", "Node.js", "OpenAI", "Socket.io"],
    image: "/projects/chat.jpg",
    github: "https://github.com",
    live: "https://example.com",
    respect: 2000,
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management with drag-and-drop, real-time updates, and team features.",
    tech: ["React", "Firebase", "Tailwind", "DnD Kit"],
    image: "/projects/tasks.jpg",
    github: "https://github.com",
    live: "https://example.com",
    respect: 1200,
  },
  {
    id: 4,
    title: "Gaming Stats Tracker",
    description: "Track your gaming statistics across multiple platforms with beautiful visualizations.",
    tech: ["Next.js", "Charts.js", "Gaming APIs", "MongoDB"],
    image: "/projects/gaming.jpg",
    github: "https://github.com",
    live: "https://example.com",
    respect: 1800,
  },
];

export const experience = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "Tech Company",
    period: "Jun 2025 - Present",
    description: "Working on full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver features.",
    type: "work",
  },
  {
    id: 2,
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "Jan 2024 - May 2025",
    description: "Built custom web solutions for clients including e-commerce sites, portfolios, and dashboards.",
    type: "work",
  },
  {
    id: 3,
    title: "BTech in Computer Science",
    company: "University Name",
    period: "2022 - 2026",
    description: "Final year student specializing in software development. Active member of coding clubs and hackathons.",
    type: "education",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
