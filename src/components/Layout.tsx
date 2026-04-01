import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { footerSocialLinkOrder, socialLinks } from '../config/socialLinks';
import { cn } from '../lib/utils';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于我' },
    { path: '/portfolio', label: '作品集' },
    { path: '/blog', label: '博客' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-green/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-slow" />

      {/* Header */}
      <header className="sticky top-0 z-50 glass-panel border-t-0 border-l-0 border-r-0 rounded-none bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-border-grayblue flex items-center justify-center border border-border-grayblue group-hover:border-accent-green transition-colors">
              <span className="font-mono font-bold text-white group-hover:text-accent-green-light transition-colors">K</span>
            </div>
            <span className="font-mono font-medium text-white tracking-widest">
              KrisWu<span className="text-accent-green-light">·老吴AI实验室</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
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
            <a href="mailto:hello@example.com" className="text-gray-400 hover:text-accent-green-light transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-green-light transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto px-6 py-12"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-grayblue/50 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} Kris Wu. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-500">
            {footerSocialLinkOrder.map((id) => {
              const { href, label, Icon } = socialLinks[id];
              const ready = Boolean(href.trim());
              return (
                <a
                  key={id}
                  href={ready ? href : '#'}
                  target={ready ? '_blank' : undefined}
                  rel={ready ? 'noopener noreferrer' : undefined}
                  title={ready ? label : '请在 src/config/socialLinks.ts 中填写链接'}
                  aria-label={label}
                  onClick={ready ? undefined : (e) => e.preventDefault()}
                  className={cn(
                    'transition-colors hover:text-accent-green-light',
                    !ready && 'cursor-not-allowed opacity-50 hover:text-gray-500'
                  )}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
