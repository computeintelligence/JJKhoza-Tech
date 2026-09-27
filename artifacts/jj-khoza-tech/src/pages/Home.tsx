import { Reveal } from '@/components/ui/Reveal';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Network,
  Cpu,
  Play,
  Atom,
  ShieldCheck,
  Sparkles,
  Activity,
} from 'lucide-react';
import { Link } from 'wouter';
import { projects } from '@/data/projects';

const heroNodes = [
  { icon: Atom, label: 'Quantum Lab', className: 'left-[2%] top-[10%] md:left-[-4%]' },
  { icon: Sparkles, label: 'AI Systems', className: 'right-[0%] top-[6%] md:right-[-6%]' },
  { icon: ShieldCheck, label: 'Cryptology', className: 'left-[0%] bottom-[10%] md:left-[-8%]' },
  { icon: Network, label: 'Algorithms', className: 'right-[2%] bottom-[6%] md:right-[-4%]' },
];

const heroCapabilities = [
  { icon: Code2, title: 'Software Engineering', desc: 'Robust digital infrastructure that stays legible as it scales.' },
  { icon: Network, title: 'Algorithms Development', desc: 'Computational methods where performance is a strategic edge.' },
  { icon: Cpu, title: 'Quantum Computing', desc: 'Research spanning dependable machines and quantum states.' },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper pb-20 pt-20 text-navy md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(circle at 18% 20%, rgba(45,158,160,0.10), transparent 42%), radial-gradient(circle at 85% 15%, rgba(145,132,255,0.10), transparent 40%)' }} />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-navy/60 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-dark" />
                Est. 2016 / Johannesburg · Global
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mb-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-navy md:text-6xl">
                JJ Khoza Tech: <span className="text-cyan-dark">Intelligence</span>, Engineered for Impact.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-navy/65 md:text-xl">
                Research-driven software, algorithms and quantum systems — built at the edge of the possible.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Link href="/capabilities" className="flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-paper shadow-[0_16px_40px_rgba(8,24,44,0.25)] transition-all hover:-translate-y-0.5 hover:bg-navy-soft" data-testid="link-home-capabilities">
                  Explore the architecture <ArrowRight size={15} />
                </Link>
                <Link href="/research" className="flex items-center gap-2 px-2 py-3.5 font-mono text-xs uppercase tracking-widest text-navy/70 transition-colors hover:text-cyan-dark" data-testid="link-home-research">
                  Read our research <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Floating system panel */}
          <Reveal delay={220} className="relative mx-auto hidden w-full max-w-[26rem] lg:block">
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M70,80 C130,110 160,150 185,185" stroke="#2d9ea0" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.45" />
                <path d="M330,70 C280,105 250,145 220,180" stroke="#9184ff" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.45" />
                <path d="M60,335 C120,300 155,265 185,225" stroke="#e5ae62" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.5" />
                <path d="M335,330 C280,295 250,260 220,222" stroke="#2d9ea0" strokeWidth="1.5" strokeDasharray="3 5" fill="none" opacity="0.45" />
              </svg>

              {heroNodes.map((node) => (
                <div key={node.label} className={`absolute z-10 flex items-center gap-2 rounded-full border border-navy/10 bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(8,24,44,0.1)] backdrop-blur-sm ${node.className}`}>
                  <node.icon size={14} className="text-cyan-dark" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-navy/70">{node.label}</span>
                </div>
              ))}

              <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_30px_70px_rgba(8,24,44,0.18)]">
                <div className="mb-4 flex items-center justify-between border-b border-navy/10 pb-3">
                  <span className="font-display text-sm font-semibold text-navy">Systems Online</span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-cyan-dark">
                    <Activity size={11} /> Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-paper-deep p-3">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-navy/45">Compute</div>
                    <div className="mt-1 font-display text-lg font-medium text-navy">Active</div>
                  </div>
                  <div className="rounded-lg bg-paper-deep p-3">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-navy/45">Uptime</div>
                    <div className="mt-1 font-display text-lg font-medium text-navy">99.98%</div>
                  </div>
                  <div className="rounded-lg bg-paper-deep p-3">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-navy/45">Research</div>
                    <div className="mt-1 font-display text-lg font-medium text-navy">7 tracks</div>
                  </div>
                  <div className="rounded-lg bg-paper-deep p-3">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-navy/45">Projects</div>
                    <div className="mt-1 font-display text-lg font-medium text-navy">15 public</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Compact capability row */}
        <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-6 md:mt-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {heroCapabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 100}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white/80 p-5 shadow-[0_16px_40px_rgba(8,24,44,0.06)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-cyan">
                    <cap.icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-base font-medium text-navy">{cap.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">{cap.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Premise */}
      <section className="py-32 bg-paper text-navy">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4 text-copper mb-6 font-mono text-sm uppercase tracking-widest">
                <div className="w-12 h-[1px] bg-copper"></div>
                The Premise
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight">
                Intelligence should be useful.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pl-12">
            <Reveal delay={100}>
              <p className="text-2xl md:text-3xl font-display text-navy/80 leading-snug mb-12">
                <strong className="text-navy">Technology is not a spectacle.</strong> It is a way to give ambitious people, institutions and ideas more reach. We make complex systems understandable enough to trust — and powerful enough to matter.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-[1px] w-full bg-navy/10 mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-navy/70 text-lg leading-relaxed">
                <p>We design for the long horizon: resilient foundations, precise abstractions and room for discovery.</p>
                <p>Our work starts with a difficult question, not a predetermined answer.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="relative overflow-hidden bg-navy py-32">
        <div className="holo-grid absolute inset-0 opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan/5 rounded-full z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan/10 rounded-full z-0 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-medium text-paper mb-6">The Architecture</h2>
              <p className="text-paper/60 text-lg max-w-2xl mx-auto">
                A connected practice for building the computational, mathematical and secure infrastructure that a changing world requires.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: '01', icon: Code2, title: 'Software Engineering', desc: 'Robust digital infrastructure and products that remain legible as they scale.' },
              { id: '02', icon: Network, title: 'Algorithms Development', desc: 'Elegant computational methods for systems where performance is a strategic advantage.' },
              { id: '03', icon: Cpu, title: 'Quantum Computing', desc: 'Research and engineering across today’s dependable machines and tomorrow’s quantum states.' },
            ].map((cap, i) => (
              <Reveal key={cap.id} delay={i * 100}>
                 <Link href="/capabilities" className="signal-panel signal-corners group block h-full p-8 transition-all hover:-translate-y-1 hover:border-cyan/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]" data-testid={`card-home-capability-${cap.id}`}>
                   <cap.icon className="mb-6 text-cyan drop-shadow-[0_0_10px_rgba(114,238,228,0.35)] transition-transform group-hover:scale-110" size={32} />
                  <div className="font-mono text-copper text-xs mb-4">{cap.id}</div>
                  <h3 className="font-display text-2xl text-paper mb-4">{cap.title}</h3>
                  <p className="text-paper/60 text-sm leading-relaxed">{cap.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 text-center">
               <Link href="/capabilities" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cyan hover:text-cyan/80 transition-colors" data-testid="link-home-all-capabilities">
                View all disciplines <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-navy md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 border-b border-navy/15 pb-8 md:flex-row md:items-end">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
                  Work in motion
                </div>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl">
                  Public signals from the project field.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-navy/60">
                Health systems, digital exchange and infrastructure concepts —
                shown through the company’s public project walkthroughs.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <a
                  href={`https://www.youtube.com/watch?v=${project.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="signal-corners group block overflow-hidden border border-navy/15 bg-paper-deep shadow-[0_20px_50px_rgba(3,9,20,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(3,9,20,0.15)]"
                  aria-label={`Watch ${project.title} on YouTube`}
                  data-testid={`link-home-project-${project.id}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-navy">
                    <img
                      src={`https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 saturate-[.75] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan text-ink">
                      <Play size={13} fill="currentColor" />
                    </div>
                    <span className="absolute right-4 top-4 font-mono text-[10px] text-paper/70">
                      {project.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-copper">
                      {project.categoryLabel}
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-tight">
                      {project.title}
                    </h3>
                    <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-navy/50">
                      <span>Watch project</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 border border-navy/25 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:bg-navy hover:text-paper"
                data-testid="link-home-projects"
              >
                Explore all 15 projects <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
