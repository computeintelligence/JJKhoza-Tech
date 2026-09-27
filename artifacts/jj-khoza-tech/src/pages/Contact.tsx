import { Reveal } from '@/components/ui/Reveal';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <section className="relative flex min-h-[80vh] flex-1 items-center overflow-hidden bg-ink py-24">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="holo-grid absolute inset-y-0 right-0 w-1/2 opacity-35"></div>
        <div className="aurora pointer-events-none absolute -right-28 bottom-0 h-[40rem] w-[40rem] rounded-full opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <Reveal>
                <div className="font-mono text-cyan text-sm uppercase tracking-widest mb-6">The Next Signal</div>
                <h1 className="text-5xl md:text-7xl font-display font-medium text-paper leading-tight mb-8">
                  Bring us the hard problem.
                </h1>
                <p className="text-xl text-paper/70 leading-relaxed mb-12">
                  A new system to imagine, a research question to pressure-test or a technology frontier that needs a clearer path forward — start there.
                </p>
                <a href="mailto:hello@jjkhozatech.com" className="scan-line inline-flex items-center gap-4 rounded-sm border border-cyan bg-gradient-to-r from-cyan to-violet px-8 py-5 font-mono text-sm uppercase tracking-widest text-ink shadow-[0_0_36px_rgba(114,238,228,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(145,132,255,0.28)]" data-testid="link-contact-email-primary">
                  hello@jjkhozatech.com <ArrowRight size={18} />
                </a>
              </Reveal>
            </div>
            
            <div className="flex flex-col justify-center">
              <Reveal delay={200}>
                <div className="signal-panel signal-corners rounded-2xl p-10">
                  <div className="flex items-start gap-5 mb-8">
                    <MapPin className="text-copper shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-display text-2xl text-paper mb-3">Global Headquarters</h3>
                      <p className="text-paper/60 font-mono text-sm leading-relaxed uppercase tracking-wider">
                        Johannesburg<br />
                        South Africa<br />
                        Operating Globally
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-white/10 mb-8"></div>
                  
                  <div className="flex items-start gap-5">
                    <Mail className="text-copper shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="font-display text-2xl text-paper mb-3">Direct Inquiries</h3>
                      <p className="text-paper/60 text-sm leading-relaxed mb-5 max-w-sm">
                        JJ Khoza Tech works across borders, disciplines and the space between research and deployment. Open a conversation.
                      </p>
                      <a href="mailto:hello@jjkhozatech.com" className="text-cyan font-mono text-sm hover:underline uppercase tracking-widest inline-flex items-center gap-2" data-testid="link-contact-email-secondary">
                        Send a message <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
