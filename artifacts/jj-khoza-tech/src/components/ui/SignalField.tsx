import { motion, useReducedMotion } from 'framer-motion';

interface SignalFieldProps {
  label?: string;
  className?: string;
}

export function SignalField({
  label = 'Live system / 01',
  className = '',
}: SignalFieldProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`relative aspect-square w-full max-w-[27rem] select-none ${className}`}
      aria-hidden="true"
    >
      <div className="aurora absolute inset-[8%] rounded-full opacity-80" />
      <div className="absolute inset-[9%] rounded-full border border-cyan/25 shadow-[0_0_50px_rgba(114,238,228,0.06)]" />
      <div className="absolute inset-[20%] rounded-full border border-violet/25" />
      <div className="absolute inset-[32%] rounded-full border border-copper/15" />
      <motion.div
        className="absolute inset-[9%] rounded-full border border-dashed border-cyan/45"
        animate={reducedMotion ? { rotate: 0 } : { rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[20%] rounded-full border border-dashed border-violet/45"
        animate={reducedMotion ? { rotate: 0 } : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_28px_rgba(114,238,228,0.9)]" />
      <motion.div
        className="absolute left-1/2 top-[9%] h-3 w-3 -translate-x-1/2 rounded-full bg-copper shadow-[0_0_20px_rgba(229,174,98,0.75)]"
        animate={
          reducedMotion
            ? { scale: 1, opacity: 1 }
            : { scale: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="signal-corners flex h-28 w-28 items-center justify-center rounded-full border border-cyan/35 bg-ink/85 p-2 shadow-[0_0_90px_rgba(114,238,228,0.18)] backdrop-blur-sm md:h-36 md:w-36">
          <img
            src="/assets/jj-khoza-emblem.jpg"
            alt=""
            className="h-full w-full rounded-full object-cover saturate-[.65]"
          />
        </div>
      </div>
      <div className="absolute bottom-[7%] left-[8%] font-mono text-[9px] uppercase tracking-[0.28em] text-paper/40">
        {label}
      </div>
      <div className="absolute right-[6%] top-[14%] h-1.5 w-1.5 rounded-full bg-cyan/80 shadow-[0_0_14px_3px_rgba(114,238,228,0.35)]" />
      <div className="absolute bottom-[19%] right-[15%] h-1.5 w-1.5 rounded-full bg-violet/80 shadow-[0_0_14px_3px_rgba(145,132,255,0.35)]" />
    </div>
  );
}