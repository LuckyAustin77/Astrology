import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { BABA_NAME } from '../constants';
import { CheckCircle2, Star, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract service name from state or convert from slug
  const serviceName = location.state?.name || slug?.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!serviceName) return <div>Loading...</div>;

  return (
    <div className="min-h-screen pb-20 animate-fade-in">
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-950">
             {/* Abstract background pattern generator */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow duration-[100s]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500/10 rounded-full animate-spin-slow duration-[60s]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-sm font-bold tracking-widest mb-6 uppercase">
                Premium Consultation
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                {serviceName}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Specialized spiritual solutions by <span className="text-amber-400 font-bold">{BABA_NAME}</span> to overcome obstacles and unlock your destiny.
            </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
         <div className="grid lg:grid-cols-3 gap-8">
             
             {/* Main Content Column */}
             <div className="lg:col-span-2 space-y-12">
                 
                 {/* Overview Card */}
                 <div className="glass-card p-10 rounded-[2.5rem] border-white/10 backdrop-blur-xl bg-slate-900/60">
                     <h2 className="text-3xl font-serif text-white mb-6">Why You Need This Service</h2>
                     <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        In the vast cosmic play, specific planetary alignments can cause disruptions in our daily lives related to <strong>{serviceName}</strong>. These are not merely coincidences but signals from the universe that an energy imbalance needs correction.
                     </p>
                     <p className="text-slate-300 text-lg leading-relaxed">
                        Whether it is due to a weak planetary position in your birth chart (Kundli) or the influence of negative external energies, ignoring these signs often leads to prolonged suffering. {BABA_NAME} uses ancient Vedic rituals and precise astrological calculations to diagnose the root cause of your struggle with {serviceName}.
                     </p>
                 </div>

                 {/* Symptoms / Signs Section */}
                 <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5">
                    <h3 className="text-2xl font-serif text-white mb-8">Signs You Need Help with {serviceName}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Recurring obstacles despite hard work",
                            "Unexplained anxiety or mental stress",
                            "Sudden downfall or loss of progress",
                            "Conflicts without logical reasons",
                            "Feeling stuck or blocked energy",
                            "Traditional methods failing to work"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                                <span className="text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                 </div>

                 {/* Approach Section */}
                 <div>
                     <h2 className="text-3xl font-serif text-white mb-6">Our Divine Approach</h2>
                     <div className="grid md:grid-cols-3 gap-6">
                         <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10">
                             <div className="text-4xl text-amber-500/20 font-bold mb-4">01</div>
                             <h4 className="text-lg font-bold text-white mb-2">Analysis</h4>
                             <p className="text-slate-400 text-sm">Deep study of your Horoscope & Prasn Kundli to find the planetary root cause.</p>
                         </div>
                         <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10">
                             <div className="text-4xl text-amber-500/20 font-bold mb-4">02</div>
                             <h4 className="text-lg font-bold text-white mb-2">Remedy</h4>
                             <p className="text-slate-400 text-sm">Customized Poojas, Gemstones, or Yantras specifically for {serviceName}.</p>
                         </div>
                         <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/10">
                             <div className="text-4xl text-amber-500/20 font-bold mb-4">03</div>
                             <h4 className="text-lg font-bold text-white mb-2">Protection</h4>
                             <p className="text-slate-400 text-sm">Creating a spiritual shield (Kavach) to prevent future recurrence.</p>
                         </div>
                     </div>
                 </div>

             </div>

             {/* Sidebar Column */}
             <div className="lg:col-span-1 space-y-8">
                 
                 {/* CTA Box */}
                 <div className="glass-card p-8 rounded-3xl sticky top-24 border-amber-500/30">
                     <h3 className="text-2xl font-serif text-white mb-2">Book Consultation</h3>
                     <p className="text-slate-400 text-sm mb-6">Speak directly with Baba Ji for {serviceName} solutions.</p>
                     
                     <div className="space-y-4 mb-8">
                         <div className="flex items-center gap-3 text-slate-300">
                             <Phone className="text-amber-500" size={18} />
                             <span className="font-mono font-bold">+91 98765 43210</span>
                         </div>
                         <div className="flex items-center gap-3 text-slate-300">
                             <ShieldCheck className="text-emerald-500" size={18} />
                             <span className="text-sm">100% Private & Confidential</span>
                         </div>
                     </div>

                     <button 
                        onClick={() => navigate('/contact')}
                        className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                     >
                         Book Now <ArrowRight size={18} />
                     </button>
                     
                     <p className="text-center text-xs text-slate-500 mt-4">Average response time: 2 hours</p>
                 </div>

                 {/* Mini Testimonial */}
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                     <div className="flex text-amber-500 mb-4">
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                         <Star size={16} fill="currentColor" />
                     </div>
                     <p className="text-slate-300 italic text-sm mb-4">
                         "I was losing hope regarding {serviceName}, but Baba Ji's guidance changed everything within 21 days. Truly miraculous."
                     </p>
                     <p className="text-slate-500 text-xs font-bold">- R. Sharma, Delhi</p>
                 </div>

             </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-serif text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
              <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">How long does it take to see results?</h4>
                  <p className="text-slate-400 text-sm">Results vary based on the complexity of the karma involved. However, most devotees start seeing positive shifts regarding {serviceName} within 11 to 41 days of performing the remedies.</p>
              </div>
              <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">Is my information kept private?</h4>
                  <p className="text-slate-400 text-sm">Absolutely. {BABA_NAME} follows a strict code of secrecy. Your details regarding {serviceName} will never be shared with anyone.</p>
              </div>
              <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">Can this be done remotely?</h4>
                  <p className="text-slate-400 text-sm">Yes, energy knows no distance. We can perform Poojas on your behalf (Sankalp) and send you the energized Yantras or Prasad via post.</p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

