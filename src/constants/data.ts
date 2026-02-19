import { Code, Smartphone, Globe, Users, GraduationCap, MapPin, Database, Server, Flame, BarChart3 } from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Training", href: "#training" },
  { label: "Projects", href: "#projects" },
  { label: "Success Stories", href: "#success" },
  { label: "Contact", href: "#footer" },
];

export const stats = [
  { value: "86%", label: "Success Rate", icon: "BarChart3" },
  { value: "100+", label: "Graduates", icon: "GraduationCap" },
  { value: "3", label: "NSDA Batches", icon: "Users" },
  { value: "2", label: "Industrial Attachments Batches", icon: "Users" },
];

export const courseStack = [
  "Kotlin",
  "SQLite",
  "Jetpack Compose",
  "Retrofit",
  "Ktor",
  "Firebase",
  "Supabase",
  "SQLite", // Note: This is duplicated in your original list
  "Kotlin Multiplatform",
];

export const course = {
  title: "Zero to Hero: Android App Development",
  description:
    "A comprehensive, industry-ready training program that takes you from zero programming knowledge to building and deploying production-grade Android applications. Covers modern tools, architectures, and best practices used by top companies.",
  duration: "12 Weeks(customizable)",
  level: "Beginner to Advanced",
  format: "Live + Hands-on Projects",
  stack: courseStack,
};

export type Project = {
  id: number;
  title: string;
  description: string;
  category: "Android Mobile" | "Next.js Web";
  image: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string; // Added for better linking
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Note App (Jetpack Compose)",
    description:
      "A modern note-taking application built with Room Database and Jetpack Compose. Features a clean MVVM architecture and local data persistence.",
    category: "Android Mobile",
    image: "AminulPortfolio/public/notes.png",
    tags: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM"],
    highlights: ["Local Persistence", "Modern UI", "AI Integration logic"],
    githubUrl: "https://github.com/AminulMunnaDev/NoteAppAIJpc"
  },
  {
    id: 2,
    title: "Osaka Business & Inventory",
    description:
      "A professional business website for Osaka, featuring a robust backend inventory management system to track sales.",
    category: "Next.js Web",
    image: "/images/projects/osaka-web.jpg",
    tags: ["Next.js", "React", "Node.js", "Inventory System"],
    highlights: ["Backend Integration", "Inventory Tracking", "Business SEO"],
    githubUrl: "https://github.com/DiptiLecturer/osakaWebsite"
  },
  {
    id: 3,
    title: "NSDA Location Management",
    description:
      "An XML-based Android service for location management, developed as part of the NSDA job assessment. Handles coordinate tracking and UI mapping.",
    category: "Android Mobile",
    image: "/images/projects/location-xml.jpg",
    tags: ["Android XML", "Java/Kotlin", "Location Services", "NSDA"],
    highlights: ["GPS Integration", "Service Management", "Task-based UI"],
    githubUrl: "https://github.com/DiptiLecturer/NSDA_JOB_3_XML"
  },
  {
    id: 4,
    title: "Developer Portfolio Website",
    description:
      "A high-performance personal portfolio built with Next.js to showcase professional skills, projects, and educational background.",
    category: "Next.js Web",
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    highlights: ["Responsive Design", "Project Showcase", "Contact Form"],
    githubUrl: "https://github.com/DiptiLecturer/AminulPortfolio"
  }
];

export const testimonial = {
  name: "Mortuza Mizan",
  university: "Daffodil International University (DIU)",
  previousRole: "CSE Student",
  currentRole: "Android Developer",
  company: "Envobyte",
  quote:
    "The training completely transformed my career path. The hands-on projects and real-world problem solving gave me the confidence to land my first developer role. The mentorship didn't stop after the course — I still get guidance whenever I need it.",
  image: "/images/testimonials/rakibul.jpg",
};

export const socialLinks = {
  github: "https://github.com/DiptiLecturer",
  whatsapp: "https://wa.me/01628458285",
};