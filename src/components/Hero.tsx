import { MessageCircle, ArrowRight, Code2, GraduationCap, Star } from "lucide-react";
import { socialLinks } from "@/constants/data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-24"
    >
      {/* Rich background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[60px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:justify-between lg:gap-12">

        {/* LEFT: Text */}
        <div className="flex-1 text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2"
          >
            <span className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for Projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-medium text-muted-foreground"
          >
            Hi, I'm <span className="text-foreground font-semibold">Aminul Islam</span>
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem]"
          >
            I build{" "}
            <span className="gradient-text">production-grade</span>
            <br />
            systems, then{" "}
            <span className="gradient-text">teach</span>
            <br />
            you to master them.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            Android Developer & Technical Trainer bridging the gap between
            academic learning and industry-ready skills — through real-world
            projects that actually ship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* FIXED: Added opening <a> tag */}
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35"
            >
              <MessageCircle size={17} />
              Let's Talk
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            {/* FIXED: Added opening <a> tag */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-card hover:shadow-md"
            >
              View Projects
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            {[
              { icon: Code2, value: "30+", label: "Projects Built" },
              { icon: GraduationCap, value: "170+", label: "Students Trained" },
              { icon: Star, value: "3+ Yrs", label: "Experience" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-foreground leading-none">{value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          {/* Decorative rings */}
          <div className="absolute -inset-4 rounded-[2rem] border border-accent/20" />
          <div className="absolute -inset-8 rounded-[2.5rem] border border-accent/10" />

          {/* Accent blob behind image */}
          <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent/5" />

          {/* Image container */}
          <div
            className="relative h-[440px] w-[330px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl sm:h-[500px] sm:w-[380px]"
            style={{ background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))" }}
          >
            <img
              src="/profile.png"
              alt="Aminul Islam - Android Developer"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-6 top-8 rounded-2xl border border-border bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur-md"
          >
      
            <p className="mt-0.5 text-sm font-bold text-foreground">Android Dev</p>
          </motion.div>

          {/* Skill chip */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -right-5 top-1/3 rounded-2xl border border-accent/30 bg-accent/10 px-3 py-2 backdrop-blur-md shadow-lg"
          >
            <p className="text-xs font-semibold text-accent">Kotlin / Next</p>
          </motion.div>

          {/* Experience badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10">
                <Star size={14} className="text-accent fill-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="text-base font-extrabold text-foreground">4+ Years</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;