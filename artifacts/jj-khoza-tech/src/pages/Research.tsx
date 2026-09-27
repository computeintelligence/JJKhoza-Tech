import { Reveal } from '@/components/ui/Reveal';
import { SignalField } from '@/components/ui/SignalField';
import { Atom, Sigma, ShieldCheck } from 'lucide-react';

export default function Research() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="holo-grid absolute inset-y-0 right-0 w-1/2 opacity-35" />
        <div className="aurora absolute -right-32 top-0 h-[40rem] w-[40rem] rounded-full opacity-55" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <div className="font-mono text-cyan text-sm uppercase tracking-widest mb-6">Research & Theory</div>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-paper leading-tight max-w-3xl mb-16">
            The whole is smarter <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">than its parts.</span>
          </h1>
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal delay={100}>
            <p className="text-xl text-paper/80 leading-relaxed mb-8">
              Quantum research needs classical discipline. Secure systems need elegant mathematics. AI needs a world worth serving. Our advantage lives in the exchange between fields.
            </p>
            <p className="text-lg text-paper/60 leading-relaxed">
              We approach research not as isolated academic exercises, but as interconnected nodes in a broader intelligence system. By fusing computational intelligence with high-performance computing, we unlock capabilities that singular disciplines cannot reach alone.
            </p>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="signal-panel signal-corners relative mx-auto my-12 max-w-md rounded-[2rem] p-5">
              <SignalField label="Research constellation / active" />
              <div className="absolute left-5 top-5 rounded-full border border-cyan/20 bg-ink/80 p-3 text-cyan backdrop-blur">
                <Atom size={20} />
              </div>
              <div className="absolute bottom-5 left-5 rounded-full border border-copper/20 bg-ink/80 p-3 text-copper backdrop-blur">
                <Sigma size={20} />
              </div>
              <div className="absolute right-5 top-5 rounded-full border border-violet/25 bg-ink/80 p-3 text-violet backdrop-blur">
                <ShieldCheck size={20} />
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </section>
    </div>
  );
}
