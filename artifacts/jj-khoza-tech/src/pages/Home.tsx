import { Reveal } from '@/components/ui/Reveal';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CircleCheck,
  Code2,
  Cpu,
  Database,
  Layers3,
  Network,
  Play,
  Radio,
  ScanLine,
  Server,
} from 'lucide-react';
import { Link } from 'wouter';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="w-full">
      <section className="home-hero relative isolate overflow-hidden pb-16 pt-10 text-[#10141a] md:pb-20 md:pt-14">
        <div className="home-hero-backdrop" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-4 md:pt-7">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#247f7c] md:mb-7 md:text-sm">
                <ScanLine size={15} />
                <span>Est. 2016 / Johannesburg · Global</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mx-auto mb-5 max-w-4xl font-display text-4xl font-medium leading-[1.05] md:mb-6 md:text-6xl lg:text-7xl">
                We build the{' '}
                <span className="bg-[linear-gradient(105deg,#2d9ea0_5%,#6555d5_95%)] bg-clip-text font-normal italic text-transparent">
                  thinking
                </span>{' '}
                layer of tomorrow.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#4e5865] md:mb-9 md:text-lg">
                JJ Khoza Tech is a research-minded technology development company working where the Fourth Industrial Revolution meets the Second Quantum Revolution.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-5">
                <Link
                  href="/capabilities"
                  className="scan-line inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#63d9cb] to-[#9b8af0] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#10141a] shadow-[0_12px_32px_rgba(85,134,168,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(85,134,168,0.25)]"
                  data-testid="link-home-capabilities"
                >
                  Explore the architecture <ArrowRight size={15} />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[#394653] transition-colors hover:text-[#247f7c]"
                  data-testid="link-home-research"
                >
                  Read our research <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="home-device-stage">
            <Reveal delay={180} className="home-dashboard relative z-[2] mx-auto rounded-2xl border border-[#dce2eb] bg-white/95 p-4 shadow-[0_28px_90px_rgba(18,33,57,0.16)] backdrop-blur-md md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#e8ebf0] pb-4">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#7a8795]">
                    JJ Khoza Tech / Core systems
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold text-[#10141a]">
                    Live overview
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#edf8f4] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#27836b]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3cab83]" />
                  All systems normal
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="min-h-[116px] rounded-xl border border-[#edf0f4] bg-[#f4f6f9] p-3.5 md:p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7a8795]">System status</span>
                    <CircleCheck size={15} className="text-[#35a681]" />
                  </div>
                  <div className="mt-3 font-display text-lg font-semibold text-[#10141a]">Operational</div>
                  <div className="mt-1 font-mono text-[9px] text-[#788492]">99.98% platform uptime</div>
                </div>

                <div className="min-h-[116px] rounded-xl border border-[#edf0f4] bg-[#f4f6f9] p-3.5 md:p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7a8795]">Signal activity</span>
                    <Activity size={15} className="text-[#6555d5]" />
                  </div>
                  <svg className="mt-2 h-12 w-full overflow-visible" viewBox="0 0 220 48" fill="none" role="img" aria-label="Signal activity trending upward">
                    <defs>
                      <linearGradient id="home-sparkline" x1="0" y1="24" x2="220" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#42c9bb" />
                        <stop offset="1" stopColor="#7866df" />
                      </linearGradient>
                    </defs>
                    <path d="M1 37C15 37 18 30 31 32S49 37 61 28 80 31 92 22 112 26 124 19 143 22 155 13 174 18 187 10 204 13 219 4" stroke="url(#home-sparkline)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M1 37C15 37 18 30 31 32S49 37 61 28 80 31 92 22 112 26 124 19 143 22 155 13 174 18 187 10 204 13 219 4V48H1V37Z" fill="url(#home-sparkline)" fillOpacity=".1" />
                  </svg>
                </div>

                <div className="min-h-[116px] rounded-xl border border-[#edf0f4] bg-[#f4f6f9] p-3.5 md:p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7a8795]">Active projects</span>
                    <Layers3 size={15} className="text-[#3389bf]" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-semibold text-[#10141a]">08</span>
                    <span className="font-mono text-[9px] text-[#27836b]">+2 this month</span>
                  </div>
                  <div className="mt-1 font-mono text-[9px] text-[#788492]">Across 4 research domains</div>
                </div>

                <div className="min-h-[116px] rounded-xl border border-[#edf0f4] bg-[#f4f6f9] p-3.5 md:p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#7a8795]">Latest deploy</span>
                    <ArrowUpRight size={15} className="text-[#6555d5]" />
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#6555d5] shadow-sm"><Server size={14} /></span>
                    <div>
                      <div className="font-display text-xs font-semibold text-[#10141a]">Signal Intelligence</div>
                      <div className="mt-0.5 font-mono text-[9px] text-[#788492]">v2.8.4 · deployed 4m ago</div>
                    </div>
                    <Check size={13} className="ml-auto shrink-0 text-[#35a681]" />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="home-dashboard-stand" aria-hidden="true"><span /></div>

            <div className="home-device home-device--research">
              <span className="home-device-icon bg-[#e8f7f4] text-[#288f83]"><BrainCircuit size={18} /></span>
              <span><span className="home-device-label">Research Node</span><span className="home-device-state">Inference active</span></span>
              <span className="home-device-pulse bg-[#41bda8]" />
            </div>
            <div className="home-device home-device--data">
              <span className="home-device-icon bg-[#eeebfb] text-[#6956c8]"><Database size={18} /></span>
              <span><span className="home-device-label">Data Node</span><span className="home-device-state">Sync complete</span></span>
              <span className="home-device-pulse bg-[#8372d9]" />
            </div>
            <div className="home-device home-device--signal">
              <span className="home-device-icon bg-[#e8f2fa] text-[#3982b7]"><Radio size={18} /></span>
              <span><span className="home-device-label">Signal Node</span><span className="home-device-state">Network stable</span></span>
              <span className="home-device-pulse bg-[#4d97c7]" />
            </div>
          </div>

          <div className="home-feature-grid mx-auto mt-16 max-w-5xl border-t border-[#dfe4eb] pt-8 md:mt-20 md:pt-10">
            {[
              { icon: BrainCircuit, title: 'Applied Research', description: 'Turning frontier ideas into useful, testable systems.', tone: 'teal' },
              { icon: Network, title: 'Systems Architecture', description: 'Building resilient foundations for a complex world.', tone: 'purple' },
              { icon: Activity, title: 'Signal Intelligence', description: 'Finding clarity in data, patterns and change.', tone: 'blue' },
            ].map((feature, index) => (
              <Reveal key={feature.title} delay={index * 100}>
                <article className="home-feature flex items-start gap-4 py-4 md:py-0">
                  <span className={`home-feature-icon home-feature-icon--${feature.tone}`}><feature.icon size={19} /></span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-[#10141a]">{feature.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#687381]">{feature.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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
