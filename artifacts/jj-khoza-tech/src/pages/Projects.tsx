import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play, ScanLine } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SignalField } from '@/components/ui/SignalField';
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>(
    'all',
  );
  const reducedMotion = useReducedMotion();
  const visibleProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="w-full overflow-hidden">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="holo-grid absolute inset-y-0 right-0 w-1/2 opacity-35" />
        <div className="aurora absolute -right-28 top-0 h-[38rem] w-[38rem] rounded-full opacity-55" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_.9fr] md:py-32">
          <Reveal>
            <div className="mb-7 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-cyan">
              <ScanLine size={16} />
              <span>Public work / 15 signals</span>
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.04] text-paper md:text-7xl">
              Ideas made visible.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-paper/65">
              A growing field of systems, platforms and instruments presented
              by JJ Khoza Tech. Each signal below links back to its original
              public walkthrough.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">
              <span>Johannesburg / Global</span>
              <span className="text-copper">Advance / Innovate / Transform</span>
            </div>
          </Reveal>
          <Reveal delay={180} className="mx-auto w-full max-w-md">
            <SignalField label="Catalogue / online" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-copper">
                The catalogue
              </div>
              <h2 className="mt-3 font-display text-3xl text-paper md:text-4xl">
                Fifteen public project signals.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/50">
              Filter the field by the kind of system each project explores.
              The collection is sourced from the official JJ Khoza Tech
              channel.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="flex gap-2 overflow-x-auto py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.id as 'all' | ProjectCategory)
                  }
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? 'border-cyan bg-cyan text-ink'
                      : 'border-white/15 text-paper/55 hover:border-cyan/70 hover:text-cyan'
                  }`}
                  data-testid={`button-project-filter-${category.id}`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 20, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.45,
                  delay: reducedMotion ? 0 : Math.min(index * 0.04, 0.3),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="signal-panel signal-corners group flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-cyan/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
                data-testid={`card-project-${project.id}`}
              >
                <a
                  href={`https://www.youtube.com/watch?v=${project.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-video overflow-hidden border-b border-white/10 bg-ink focus-visible:outline-none"
                  aria-label={`Watch ${project.title} on YouTube`}
                  data-testid={`link-project-video-${project.id}`}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`}
                    alt=""
                    loading={index < 3 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover opacity-75 saturate-[.7] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70">
                    <span className="text-copper">{project.number}</span>
                    <span>/</span>
                    <span>{project.categoryLabel}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan/50 bg-ink/75 text-cyan backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Play size={15} fill="currentColor" />
                  </div>
                  <ArrowUpRight
                    className="absolute bottom-5 right-5 text-paper/60 transition-colors group-hover:text-cyan"
                    size={18}
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight text-paper">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-paper/55">
                    {project.summary}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
                    <span>Official video</span>
                    <span className="text-cyan/75">Open signal</span>
                  </div>
                </div>
              </motion.article>
          ))}
        </motion.div>

        <Reveal delay={150}>
          <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-paper/45">
              Titles and summaries are intentionally close to the public source
              material. For the full presentation of each project, follow the
              official video.
            </p>
            <a
              href="https://www.youtube.com/@jjkhoza1538"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan transition-colors hover:text-paper"
              data-testid="link-projects-channel"
            >
              Visit the channel <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}