import { Quote, ArrowUpRight } from "lucide-react";
import { testimonial } from "@/constants/data";
import { motion } from "framer-motion";

const SuccessStory = () => {
  return (
    <section id="success" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Success Stories
          </span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Student Spotlight
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Quote size={20} className="text-accent" />
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground italic">
                "{testimonial.quote}"
              </blockquote>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-xl bg-secondary/50 p-4">
              {/* Avatar placeholder */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.university}
                </p>
              </div>
              <div className="hidden text-right sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted-foreground">
                    {testimonial.previousRole}
                  </span>
                  <ArrowUpRight size={14} className="text-accent" />
                  <span className="text-xs font-semibold text-accent">
                    {testimonial.currentRole}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-foreground">
                  @ {testimonial.company}
                </p>
              </div>
            </div>

            {/* Mobile role transition */}
            <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
              <span className="text-xs text-muted-foreground">
                {testimonial.previousRole}
              </span>
              <ArrowUpRight size={14} className="text-accent" />
              <span className="text-xs font-semibold text-accent">
                {testimonial.currentRole} @ {testimonial.company}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStory;
