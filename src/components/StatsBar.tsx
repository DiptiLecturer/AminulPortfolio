import { BarChart3, GraduationCap, Users } from "lucide-react";
import { stats } from "@/constants/data";
import { motion } from "framer-motion";

// This map connects the string name in your data.ts to the actual Lucide Icon component
const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  GraduationCap,
  Users,
};

const StatsBar = () => {
  return (
    <section className="relative border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-5 px-6 py-10"
            >
              {/* Icon Container with the soft blue/primary background from the image */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 shadow-sm">
                <Icon size={24} className="text-primary" />
              </div>
              
              <div className="flex flex-col">
                <p className="text-3xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBar;