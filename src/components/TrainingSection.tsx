import { BookOpen, Clock, Signal, MonitorPlay } from "lucide-react";
import { course } from "@/constants/data";
import { motion } from "framer-motion";

const TrainingSection = () => {
  return (
    <section id="training" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Training Program
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Level Up Your Skills
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        >
          <div className="bg-primary/5 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-muted-foreground">{course.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3">
                <Clock size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-semibold text-foreground">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3">
                <Signal size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Level</p>
                  <p className="text-sm font-semibold text-foreground">{course.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3">
                <MonitorPlay size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Format</p>
                  <p className="text-sm font-semibold text-foreground">{course.format}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-foreground">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {course.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
