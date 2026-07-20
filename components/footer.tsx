'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

const techItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Express.js",
  "React Native",
  "Git",
  "GitHub",
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/umerch1", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umer-farooq-u78600", icon: Linkedin },
  { label: "Email", href: "mailto:umerf3024@gmail.com", icon: Mail },
  { label: "Instagram", href: "https://www.instagram.com/umerf3024", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/70 bg-background/90 text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-[0_0_40px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              <Sparkles className="h-4 w-4" />
              Umer Farooq
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              Building refined digital experiences.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              I design and develop scalable, modern web and mobile applications with a strong emphasis on performance, usability, and clarity.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-600 dark:text-emerald-400">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
              Open to Opportunities
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Thank you for visiting my portfolio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="rounded-3xl border border-border/70 bg-card/70 p-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
              Navigation
            </h4>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition duration-200 hover:text-primary"
                >
                  <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
            className="rounded-3xl border border-border/70 bg-card/70 p-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
              Tech Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {techItems.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
            className="rounded-3xl border border-border/70 bg-card/70 p-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
              Let&apos;s Connect
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              I&apos;m always interested in discussing new projects, freelance work, or full-time opportunities.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2, scale: 1.05, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <address className="mt-6 space-y-2 not-italic text-sm text-muted-foreground">
              <a href="mailto:umerf3024@gmail.com" className="flex items-center gap-2 transition hover:text-primary">
                <Mail className="h-4 w-4" />
                umerf3024@gmail.com
              </a>
              <a href="tel:+923094162466" className="flex items-center gap-2 transition hover:text-primary">
                <Phone className="h-4 w-4" />
                +92 309 4162466
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Pakistan
              </span>
            </address>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {currentYear} Umer Farooq</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-rose-400">♥</span> using Next.js & TypeScript
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-2 text-foreground transition duration-200 hover:border-primary/40 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
