import { Reveal } from '@/components/ui/Reveal';
import { SignalField } from '@/components/ui/SignalField';
import {
  ArrowRight,
  Globe2,
  Layers3,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { Link } from 'wouter';

const disciplines = [
  'Software engineering',
  'Algorithms development',
  'Quantum & classical computing',
  'Mathematical technology ecosystems',
  'Computational intelligence',
  'Cryptology algorithms development',
];

const principles = [
  {
    icon: Target,
    index: '01',
    title: 'Start with the real question.',
    body: 'The first task is not to prescribe a tool. It is to understand the question, the people around it and the constraints that make it worth solving.',
  },
  {
    icon: ShieldCheck,
    index: '02',
    title: 'Make trust observable.',
    body: 'Clear models, considered trade-offs and evidence-led iteration make difficult systems easier to inspect, improve and rely on.',
  },
  {
    icon: Globe2,
    index: '03',
    title: 'Design for the wider system.',
    body: 'A useful system changes what becomes possible next. We look beyond the first brief to the networks, institutions and futures it touches.',
  },
];

export default function About() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="holo-grid absolute inset-y-0 right-0 w-1/2 opacity-35" />
        <div className="aurora absolute -right-28 top-4 h-[36rem] w-[36rem] rounded-full opacity-55" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 md:grid-cols-[1.15fr_.85fr] md:py-32">
          <Reveal>
            <div className="mb-7 font-mono text-sm uppercase tracking-[0.22em] text-cyan">
              About the company / 2016—
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.04] text-paper md:text-7xl">
              A technology practice built for the long horizon.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-paper/65">
              JJ Khoza Tech works where difficult questions meet the tools to
              make them legible: software, mathematics, intelligent systems,
              advanced computing and cryptology.
            </p>
          </Reveal>
          <Reveal delay={180} className="mx-auto w-full max-w-sm">
            <SignalField label="Origin / Johannesburg" />
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-br from-paper via-paper to-paper-deep text-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-28">
          <Reveal className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
              The premise
            </div>
            <h2 className="mt-5 max-w-sm font-display text-4xl font-medium leading-tight md:text-5xl">
              Advanced technology should increase human reach.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <p className="font-display text-2xl leading-snug text-navy/80 md:text-3xl">
              Founded in Johannesburg in 2016, JJ Khoza Tech is a research-minded
              development company with an African point of view and a global
              operating ambition.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/65">
              Our mission is to <strong className="text-navy">Advance,
              Innovate & Transform</strong> the global landscape by grounding
              ambitious ideas in dependable systems. We move between theory and
              implementation, staying close enough to the mathematics to
              understand what is possible and close enough to people to make it
              useful.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-navy/15 pt-7 sm:grid-cols-3">
              <div>
                <div className="font-display text-3xl">2016</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">
                  Founded
                </div>
              </div>
              <div>
                <div className="font-display text-3xl">JHB</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">
                  Point of origin
                </div>
              </div>
              <div>
                <div className="font-display text-3xl">∞</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">
                  Long horizon
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                  Operating posture
                </div>
                <h2 className="mt-4 font-display text-4xl font-medium text-paper md:text-5xl">
                  How we hold the work.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-paper/50">
                A few simple commitments keep the work ambitious without
                allowing it to become abstract.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.index} delay={index * 100}>
                <div className="signal-panel signal-corners group h-full p-7">
                  <div className="flex items-center justify-between">
                    <principle.icon
                      className="text-copper transition-transform duration-500 group-hover:rotate-12"
                      size={32}
                    />
                    <span className="font-mono text-xs text-paper/35">
                      {principle.index}
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-2xl text-paper">
                    {principle.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-paper/55">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-[.85fr_1.15fr] md:items-start">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
              One connected practice
            </div>
            <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
              Different instruments. One direction.
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-paper/55">
              The work does not sit in isolated departments. A question can
              move from a mathematical model into an algorithm, a product,
              secure infrastructure or a new research direction.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-1 border-l border-white/15 sm:grid-cols-2">
              {disciplines.map((discipline, index) => (
                <div
                  key={discipline}
                  className="group border-b border-white/10 px-6 py-6 transition-colors hover:bg-white/[0.03] sm:[&:nth-child(odd)]:border-r"
                >
                  <div className="mb-4 flex items-center gap-3 font-mono text-[10px] text-copper">
                    <Layers3 size={14} />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="font-display text-xl text-paper transition-colors group-hover:text-cyan">
                    {discipline}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cyan/25 bg-gradient-to-r from-cyan via-[#a1eee8] to-violet text-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
              Continue exploring
            </div>
            <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">
              See what the practice can hold.
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-3 border border-ink/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-cyan"
            data-testid="link-about-capabilities"
          >
            Explore capabilities <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
