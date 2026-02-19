import { Github, MessageCircle, Heart } from "lucide-react";
import { socialLinks } from "@/constants/data";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div>
            <a href="#hero" className="text-xl font-bold text-foreground">
              <span className="gradient-text">Dev</span>Trainer
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Building developers, one project at a time.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={socialLinks.whatsappCoaching}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                Start 1-on-1 Coaching
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            Built with <Heart size={12} className="text-accent" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
