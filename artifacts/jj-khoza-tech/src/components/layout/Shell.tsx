import { ReactNode, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'JJ Khoza Tech | Digital Civilization Architecture',
    description:
      'JJ Khoza Tech develops advanced software, algorithms, quantum and classical computing systems, AI, HPC, mathematics, and cryptology.',
  },
  '/about': {
    title: 'About | JJ Khoza Tech',
    description:
      'Discover JJ Khoza Tech’s Johannesburg roots, global outlook, mission, and long-horizon approach to technology development.',
  },
  '/capabilities': {
    title: 'Capabilities | JJ Khoza Tech',
    description:
      'Explore JJ Khoza Tech capabilities across software engineering, algorithms, quantum computing, AI, mathematical technology, HPC, and cryptology.',
  },
  '/research': {
    title: 'Research | JJ Khoza Tech',
    description:
      'See how JJ Khoza Tech connects quantum science, artificial intelligence, mathematics, high-performance computing, and secure systems research.',
  },
  '/projects': {
    title: 'Projects | JJ Khoza Tech',
    description:
      'Explore 15 public JJ Khoza Tech project concepts across health, civic systems, digital economy, intelligent systems, communication, and trust.',
  },
  '/contact': {
    title: 'Contact | JJ Khoza Tech',
    description:
      'Start a conversation with JJ Khoza Tech about advanced technology development, research, algorithms, AI, quantum computing, or cryptology.',
  },
};

export function Shell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const previousLocationRef = useRef(location);
  const restoreMenuFocusRef = useRef(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);

    const meta = pageMeta[location] ?? {
      title: 'Page Not Found | JJ Khoza Tech',
      description: 'The requested JJ Khoza Tech page could not be found.',
    };
    const setMeta = (
      attribute: 'name' | 'property',
      key: string,
      content: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', window.location.href);
    setMeta(
      'property',
      'og:image',
      `${window.location.origin}/assets/jj-khoza-emblem.jpg`,
    );
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta(
      'name',
      'twitter:image',
      `${window.location.origin}/assets/jj-khoza-emblem.jpg`,
    );

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, [location]);

  useEffect(() => {
    if (previousLocationRef.current === location) return;

    previousLocationRef.current = location;
    const frame = window.requestAnimationFrame(() => {
      mainRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  useEffect(() => {
    if (!menuOpen) return;

    const dialog = menuDialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusable = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      );

    window.requestAnimationFrame(() => getFocusable()[0]?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (restoreMenuFocusRef.current) {
        menuButtonRef.current?.focus();
      }
      restoreMenuFocusRef.current = true;
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/research', label: 'Research' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-hidden bg-ink text-paper selection:bg-cyan selection:text-ink">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="aurora absolute -right-48 -top-36 h-[44rem] w-[44rem] rounded-full opacity-60" />
        <div className="absolute left-[8%] top-[42%] h-1 w-1 rounded-full bg-violet shadow-[0_0_24px_8px_rgba(145,132,255,0.45)]" />
        <div className="absolute right-[18%] top-[26%] h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_20px_6px_rgba(114,238,228,0.42)]" />
        <motion.div
          className="absolute -right-40 top-28 h-[32rem] w-[32rem] rounded-full border border-cyan/[0.07]"
          animate={reducedMotion ? { rotate: 0 } : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -right-16 top-64 h-[20rem] w-[20rem] rounded-full border border-violet/[0.08]"
          animate={reducedMotion ? { rotate: 0 } : { rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute left-1/2 top-20 h-px w-[65vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/10 to-transparent" />
      </div>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-cyan text-ink px-4 py-2 font-mono text-sm" data-testid="link-skip-content">
        Skip to content
      </a>

      <header className="fixed top-0 inset-x-0 z-40 border-b border-cyan/[0.08] bg-ink/70 backdrop-blur-xl transition-all duration-300" data-testid="header-site">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group" data-testid="link-brand-home">
            <div className="relative">
              <img 
                src="/assets/jj-khoza-emblem.jpg" 
                alt="JJ Khoza Tech Emblem" 
                 className="h-10 w-10 rounded-full border border-cyan/40 object-cover shadow-[0_0_22px_rgba(114,238,228,0.12)] transition-colors group-hover:border-cyan" 
              />
                 <div className="absolute inset-0 rounded-full ring-4 ring-cyan/10 transition-all group-hover:ring-cyan/25"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-wide text-paper">JJ Khoza Tech</span>
              <span className="font-mono text-[10px] text-paper/60 uppercase tracking-widest group-hover:text-cyan/80 transition-colors">Digital Civilization Architecture</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                 className={`rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-cyan/40 hover:text-cyan ${location === link.href ? 'border-cyan/30 bg-cyan/[0.08] text-cyan' : 'border-transparent text-paper/65'}`}
                aria-current={location === link.href ? 'page' : undefined}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
               className={`flex items-center gap-2 rounded-sm px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] shadow-[0_0_24px_rgba(114,238,228,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(114,238,228,0.25)] ${
                location === '/contact'
                  ? 'text-ink bg-copper'
                  : 'text-ink bg-cyan hover:bg-cyan/90'
              }`}
              aria-current={location === '/contact' ? 'page' : undefined}
              data-testid="link-nav-contact"
            >
              Contact <ArrowRight size={14} />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            ref={menuButtonRef}
             className="rounded-full border border-white/10 p-2 text-paper/80 transition-colors hover:border-cyan/40 hover:text-cyan lg:hidden"
            onClick={() => {
              restoreMenuFocusRef.current = true;
              setMenuOpen(!menuOpen);
            }}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            data-testid="button-toggle-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div
            ref={menuDialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
             className="signal-panel absolute inset-x-0 top-20 h-[calc(100vh-80px)] overflow-y-auto border-x-0 border-t-0 p-6 shadow-2xl lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`font-display text-3xl hover:text-cyan transition-colors ${location === link.href ? 'text-cyan' : 'text-paper'}`}
                  aria-current={location === link.href ? 'page' : undefined}
                  onClick={() => {
                    restoreMenuFocusRef.current = false;
                    setMenuOpen(false);
                  }}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="flex items-center gap-3 font-display text-3xl text-copper hover:text-copper/80 transition-colors mt-4 pt-4 border-t border-white/5"
                aria-current={location === '/contact' ? 'page' : undefined}
                onClick={() => {
                  restoreMenuFocusRef.current = false;
                  setMenuOpen(false);
                }}
                data-testid="link-mobile-contact"
              >
                Contact Us <ArrowUpRight size={24} />
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="relative z-10 mt-20 w-full flex-1 outline-none"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location}
            initial={reducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-navy border-t border-white/5 py-12 relative z-10" data-testid="footer-site">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-3">
              <Link href="/" className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity" data-testid="link-footer-brand">
               <img src="/assets/jj-khoza-emblem.jpg" alt="JJ Khoza Tech emblem" className="w-8 h-8 rounded-full border border-cyan/30 object-cover" />
              <span className="font-display font-medium text-sm">JJ Khoza Tech</span>
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-widest text-paper/40">
              © {new Date().getFullYear()} · Advance / Innovate / Transform
            </p>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-xs text-paper/60 uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link key={`footer-${link.href}`} href={link.href} className="hover:text-cyan transition-colors" data-testid={`link-footer-${link.label.toLowerCase()}`}>{link.label}</Link>
            ))}
            <Link href="/contact" className="hover:text-cyan transition-colors" data-testid="link-footer-contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
