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
  "SQLite",
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
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Location Management App",
    description:
      "Real-time GPS tracking and geofencing solution for fleet management. Features live location sharing, route history, and automated alerts.",
    category: "Android Mobile",
    image: "/images/projects/location-app.jpg",
    tags: ["Kotlin", "Jetpack Compose", "Google Maps SDK", "Firebase"],
    highlights: ["Real-time tracking", "Geofencing alerts", "Route history"],
  },
  {
    id: 2,
    title: "Next.js Inventory Management",
    description:
      "Full-stack inventory management system with role-based access control, real-time stock updates, and analytics dashboard.",
    category: "Next.js Web",
    image: "/images/projects/inventory-app.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    highlights: ["Role-based access", "Real-time updates", "Analytics dashboard"],
  },
  {
    id: 3,
    title: "E-Commerce Mobile App",
    description:
      "Feature-rich shopping app with payment gateway integration, push notifications, and offline-first architecture.",
    category: "Android Mobile",
    image: "/images/projects/ecommerce-app.jpg",
    tags: ["Kotlin", "Retrofit", "Room DB", "Stripe"],
    highlights: ["Payment integration", "Push notifications", "Offline support"],
  },
  {
    id: 4,
    title: "Learning Management Portal",
    description:
      "Web-based LMS with course management, progress tracking, video streaming, and certificate generation.",
    category: "Next.js Web",
    image: "/images/projects/lms-app.jpg",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    highlights: ["Course management", "Video streaming", "Certificates"],
  },
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
  github: "https://github.com/DiptiLecurer",
  whatsapp: "https://wa.me/01628458285",
};
