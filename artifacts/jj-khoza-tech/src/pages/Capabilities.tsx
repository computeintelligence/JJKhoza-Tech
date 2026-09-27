import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, ChevronRight, Network } from 'lucide-react';
import { Link } from 'wouter';

const capabilities = [
  {
    id: 'software',
    number: '01',
    name: 'Software engineering',
    description:
      'Robust digital infrastructure and products that remain legible as they scale.',
    focus:
      'Turn a difficult product or operational need into a dependable digital system with a clear architecture.',
    outputs: 'Product foundations · Interfaces · System integration',
    category: 'build',
  },
  {
    id: 'algorithms',
    number: '02',
    name: 'Algorithms development',
    description:
      'Elegant computational methods for systems where performance is a strategic advantage.',
    focus:
      'Shape the rules, methods and computational pathways that let a system solve the right problem with precision.',
    outputs: 'Algorithms · Optimisation · Computational methods',
    category: 'build',
  },
  {
    id: 'quantum',
    number: '03',
    name: 'Quantum & classical computing',
    description:
      'Research and engineering across today’s dependable machines and tomorrow’s quantum states.',
    focus:
      'Work across established computing practice and emerging quantum possibilities without losing sight of what can be built now.',
    outputs: 'Research directions · Prototypes · Compute strategy',
    category: 'compute',
  },
  {
    id: 'maths',
    number: '04',
    name: 'Mathematical technology ecosystems',
    description:
      'Formal models, simulation environments and the connective tissue between theory and use.',
    focus:
      'Give complex ideas a rigorous structure so they can be tested, explained and carried into application.',
    outputs: 'Models · Simulations · Decision frameworks',
    category: 'science',
  },
  {
    id: 'intelligence',
    number: '05',
    name: 'Computational intelligence',
    description:
      'Systems that learn, reason and adapt without losing sight of the humans they serve.',
    focus:
      'Design intelligent behaviour that is useful in context, understandable to its operators and open to improvement.',
    outputs: 'AI systems · Assistants · Decision support',
    category: 'intelligence',
  },
  {
    id: 'cryptology',
    number: '06',
    name: 'Cryptology algorithms development',
    description:
      'Security primitives and privacy-preserving architectures for a networked civilization.',
    focus:
      'Build trust into the underlying logic of identity, exchange and communication rather than adding it as an afterthought.',
    outputs: 'Cryptographic systems · Identity · Secure exchange',
    category: 'security',
  },
];

const filters = [
  { id: 'all', label: 'All systems' },
  { id: 'build', label: 'Build' },
  { id: 'compute', label: 'Compute' },
  { id: 'science', label: 'Science' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'security', label: 'Security' },
];

export default function Capabilities() {
  const [activeFilter, setActiveFilter] = useState('all');
  const reducedMotion = useReducedMotion();
  const visible = useMemo(
    () =>
      activeFilter === 'all'
        ? capabilities
        : capabilities.filter(
            (capability) => capability.category === activeFilter,
          ),
    [activeFilter],
  );

  return (
    <div className="w-full overflow-hidden">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="holo-grid absolute inset-y-0 right-0 w-[48%] opacity-35" />
        <div className="aurora absolute -right-40 -top-24 h-[42rem] w-[42rem] rounded-full opacity-50" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <div className="font-mono text-sm uppercase tracking-[0.22em] text-cyan">
              The architecture / 01—06
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-medium leading-[1.04] text-paper md:text-7xl">
              Many disciplines.
              <br />
              <span className="bg-gradient-to-r from-paper/45 via-cyan/65 to-violet/70 bg-clip-text text-transparent">One direction.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-xl leading-relaxed text-paper/60">
              JJ Khoza Tech brings mathematical thinking, computational power
              and human context into the same room — then builds from there.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
                A connected stack
              </div>
              <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">
                Choose a lens. See the system.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/50">
              Each capability is a point of entry into a wider practice. Filter
              by the kind of work you need to make progress.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex gap-3 overflow-x-auto py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                data-testid={`button-filter-${filter.id}`}
                className={`shrink-0 rounded-full border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                  activeFilter === filter.id
                    ? 'border-cyan bg-cyan text-ink'
                    : 'border-white/15 bg-transparent text-paper/55 hover:border-cyan hover:text-cyan'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="border-t border-white/10">
          {visible.map((capability, index) => (
              <motion.article
                key={capability.id}
                layout
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.4,
                  delay: reducedMotion ? 0 : Math.min(index * 0.04, 0.24),
                }}
                className="group border-b border-white/10 px-4 py-10 transition-colors hover:bg-gradient-to-r hover:from-cyan/[0.035] hover:to-violet/[0.035] md:px-6 md:py-12"
                data-testid={`card-capability-${capability.id}`}
              >
                <div className="grid grid-cols-1 gap-7 md:grid-cols-[4.5rem_1fr_1.2fr_auto] md:items-start md:gap-8">
                  <div className="font-mono text-lg text-copper">
                    {capability.number}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-paper transition-colors group-hover:text-cyan md:text-3xl">
                      {capability.name}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-paper/55">
                      {capability.description}
                    </p>
                  </div>
                  <div className="border-l border-white/10 pl-5 md:pl-7">
                    <div className="font-mono text-[10px] uppercase tracking-[0.17em] text-cyan">
                      What it holds
                    </div>
                    <p className="mt-3 max-w-md leading-relaxed text-paper/65">
                      {capability.focus}
                    </p>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/35">
                      {capability.outputs}
                    </p>
                  </div>
                  <ChevronRight
                    className="hidden text-cyan transition-transform duration-500 group-hover:translate-x-2 md:block"
                    size={24}
                  />
                </div>
              </motion.article>
          ))}
        </motion.div>

        <Reveal delay={180}>
          <div className="signal-panel signal-corners mt-16 grid grid-cols-1 gap-8 p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:p-9">
            <Network className="text-cyan" size={32} />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan">
                The connective tissue
              </div>
              <p className="mt-2 max-w-2xl font-display text-xl leading-snug text-paper">
                The most interesting work happens between the disciplines.
              </p>
            </div>
            <Link
              href="/research"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan transition-colors hover:text-paper"
              data-testid="link-capabilities-research"
            >
              Read our research <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
