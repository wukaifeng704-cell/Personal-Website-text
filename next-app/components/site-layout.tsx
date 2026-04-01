"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubMarkIcon } from "@/components/github-mark-icon";
import { footerSocialLinkOrder, socialLinks } from "@/config/socialLinks";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "首页" },
  { path: "/about", label: "关于我" },
  { path: "/portfolio", label: "作品集" },
  { path: "/blog", label: "博客" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none fixed left-1/2 top-0 z-0 h-[300px] w-[800px] -translate-x-1/2 animate-pulse-slow rounded-full bg-accent-green/10 blur-[120px]" />

      <header className="sticky top-0 z-50 glass-panel rounded-none border-l-0 border-r-0 border-t-0 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-border-grayblue bg-border-grayblue transition-colors group-hover:border-accent-green">
              <span className="font-mono font-bold text-white transition-colors group-hover:text-accent-green-light">K</span>
            </div>
            <span className="font-mono font-medium tracking-widest text-white">
              KrisWu<span className="text-accent-green-light">·老吴AI实验室</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive =
                item.path === "/blog"
                  ? pathname === "/blog" || pathname.startsWith("/blog/")
                  : pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors hover:text-white",
                    isActive ? "text-white" : "text-gray-400"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-green-light"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:wukaifeng704@gmail.com"
              className="text-gray-400 transition-colors hover:text-accent-green-light"
              aria-label="邮箱"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/wukaifeng704-cell"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition-colors hover:text-accent-green-light"
              aria-label="GitHub"
            >
              <GitHubMarkIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-7xl px-6 py-12"
        >
          {children}
        </motion.div>
      </main>

      <footer className="relative z-10 mt-auto border-t border-border-grayblue/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <p className="font-mono text-xs text-gray-500">© {new Date().getFullYear()} Kris Wu. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-500">
            {footerSocialLinkOrder.map((id) => {
              const { href, label, Icon } = socialLinks[id];
              const ready = Boolean(href.trim());
              return (
                <a
                  key={id}
                  href={ready ? href : "#"}
                  target={ready ? "_blank" : undefined}
                  rel={ready ? "noopener noreferrer" : undefined}
                  title={ready ? label : "请在 config/socialLinks.ts 中填写链接"}
                  aria-label={label}
                  onClick={ready ? undefined : (e) => e.preventDefault()}
                  className={cn(
                    "transition-colors hover:text-accent-green-light",
                    !ready && "cursor-not-allowed opacity-50 hover:text-gray-500"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
