import { Reveal } from '@/components/ui/Reveal';
import { SignalField } from '@/components/ui/SignalField';
import { ArrowRight, ArrowUpRight, ScanLine, Code2, Network, Cpu, Play } from 'lucide-react';
import { Link } from 'wouter';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pb-28 pt-16 md:pb-32 md:pt-20">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="holo-grid absolute inset-x-0 top-0 h-[70%] opacity-45"></div>
        <div className="aurora absolute -right-32 top-0 h-[48rem] w-[48rem] rounded-full opacity-70"></div>
        
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-3 text-cyan mb-8 font-mono text-sm uppercase tracking-widest">
                <ScanLine size={16} />
                <span>Est. 2016 / Johannesburg · Global</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mb-8 font-display text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl lg:text-[5.6rem]">
                We build the <span className="text-glow bg-gradient-to-r from-cyan via-paper to-violet bg-clip-text font-normal italic text-transparent">thinking</span> layer of tomorrow.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-paper/70 max-w-2xl leading-relaxed mb-12">
                JJ Khoza Tech is a research-minded technology development company working where the Fourth Industrial Revolution meets the Second Quantum Revolution.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/capabilities" className="scan-line flex items-center gap-2 rounded-sm border border-cyan bg-cyan px-6 py-4 font-mono text-sm uppercase tracking-widest text-ink shadow-[0_0_32px_rgba(114,238,228,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(114,238,228,0.3)]" data-testid="link-home-capabilities">
                  Explore the architecture <ArrowRight size={16} />
                </Link>
                <Link href="/research" className="flex items-center gap-2 text-paper/80 hover:text-cyan px-6 py-4 font-mono text-sm uppercase tracking-widest transition-colors" data-testid="link-home-research">
                  Read our research
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={220} className="mx-auto hidden w-full max-w-[27rem] lg:block">
            <div className="signal-panel signal-corners rounded-[2rem] p-5">
              <SignalField label="Core signal / Johannesburg" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signal Strip */}
      <section className="relative z-20 border-y border-cyan/25 bg-gradient-to-r from-cyan via-[#92efe7] to-violet py-10 text-ink">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-ink/20">
          <Reveal delay={0} className="md:px-4 first:pl-0">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-2 opacity-80">Operating at</div>
            <div className="font-display text-xl font-medium">The edge of the possible</div>
          </Reveal>
          <Reveal delay={100} className="md:px-4 pt-4 md:pt-0">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-2 opacity-80">Core posture</div>
            <div className="font-display text-xl font-medium">Research → reality</div>
          </Reveal>
          <Reveal delay={200} className="md:px-4 pt-4 md:pt-0">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-2 opacity-80">Perspective</div>
            <div className="font-display text-xl font-medium">African, global</div>
          </Reveal>
          <Reveal delay={300} className="md:px-4 pt-4 md:pt-0">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-2 opacity-80">Status</div>
            <div className="font-display text-xl font-medium">Building forward</div>
          </Reveal>
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
