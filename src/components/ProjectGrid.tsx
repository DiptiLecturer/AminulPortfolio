import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Android Mobile", "Next.js Web"] as const;

const ProjectGrid = () => {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="mt-8 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${active === f
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="card-hover group overflow-hidden rounded-2xl border border-border bg-card flex flex-col h-full"
  >
    {/* Actual Image Render */}
    <div className="relative h-52 overflow-hidden bg-secondary">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
        <span className="text-white text-xs font-medium">View Project Details</span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>
          <h3 className="mt-1 text-lg font-bold text-foreground">{project.title}</h3>
        </div>
        {/* Link to GitHub */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 shrink-0 text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-1">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium"
          >
            <span className="h-1 w-1 rounded-full bg-primary" />
            {h}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);
export default ProjectGrid;
