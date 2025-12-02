import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BABA_NAME, SERVICES_LIST } from '../constants';
import { Shield, Heart, Briefcase, Zap, Anchor, Eye } from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName: string) => {
    // Create a slug from the service name (e.g., "Love Problem" -> "love-problem")
    const slug = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    navigate(`/service/${slug}`, { state: { name: serviceName } });
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-950 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-amber-500 font-serif tracking-[0.3em] uppercase text-sm mb-4 block">Ancient Wisdom Solutions</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Divine Services by <br/>
            <span className="text-gold-gradient">{BABA_NAME}</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From the complexities of love to the hurdles of career, every problem has a planetary root and a spiritual solution. Click on any service below to learn more.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Highlighted Category: Love & Relationships */}
            <div onClick={() => handleServiceClick("Love & Marriage")} className="glass-card p-8 rounded-3xl hover:border-pink-500/50 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="text-pink-500" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Love & Marriage</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Relationships are governed by Venus and Mars. When alignment is off, discord follows. We specialize in uniting souls.
                </p>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> Love Problem Solutions</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> Inter-Caste Marriage</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> Lost Love Recovery</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> Divorce Prevention</li>
                </ul>
            </div>

            {/* Highlighted Category: Career & Finance */}
            <div onClick={() => handleServiceClick("Career & Business")} className="glass-card p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="text-emerald-500" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Career & Business</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Saturn and Jupiter dictate your professional success. Remove the obstacles blocking your promotion or business growth.
                </p>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Job Instability</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Business Failures</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Financial Debt</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Career Path Guidance</li>
                </ul>
            </div>

            {/* Highlighted Category: Mystical & Protection */}
            <div onClick={() => handleServiceClick("Protection & Occult")} className="glass-card p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="text-purple-500" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Protection & Occult</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Ancient remedies to cleanse your aura and protect your family from negative influences and evil eyes.
                </p>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Black Magic Removal</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Negative Energy Clearing</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Vashikaran Specialist</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Protective Pooja</li>
                </ul>
            </div>

             {/* Highlighted Category: Vastu & Land */}
             <div onClick={() => handleServiceClick("Vastu & Property")} className="glass-card p-8 rounded-3xl hover:border-amber-500/50 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Anchor className="text-amber-500" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Vastu & Property</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Ensure your home and office bring prosperity. We analyze the energy flow of your physical space.
                </p>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Flat & Land Examination</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Vastu Shastra Consultant</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Property Disputes</li>
                </ul>
            </div>

             {/* Highlighted Category: Prediction */}
             <div onClick={() => handleServiceClick("Reading & Prediction")} className="glass-card p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="text-cyan-500" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Reading & Prediction</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Using the ancient arts of face reading, palmistry, and chart analysis to reveal your timeline.
                </p>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Horoscope Kundli Reading</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Palmistry (Palm Reading)</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Face Reading</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Future Predictions</li>
                </ul>
            </div>

            {/* Highlighted Category: Special Issues */}
            <div onClick={() => handleServiceClick("Specific Problems")} className="glass-card p-8 rounded-3xl hover:border-red-500/50 transition-all duration-500 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="text-red-500" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Specific Problems</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    Unique challenges require unique solutions. Baba Ji provides remedies for even the most niche issues.
                </p>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Film Industry Issues</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Political Problems</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Abroad/Visa Problems</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Court Cases</li>
                </ul>
            </div>

        </div>
      </section>

      {/* Full List */}
      <section className="py-16 bg-black/20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-center text-amber-200 mb-12">Complete List of Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {SERVICES_LIST.map((service, index) => (
                    <button 
                        key={index}
                        onClick={() => handleServiceClick(service)}
                        className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-slate-300 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300"
                    >
                        {service}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-[2rem] border-amber-500/30">
              <h2 className="text-4xl font-serif text-white mb-6">Unsure what you need?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                  Book a consultation with <span className="text-amber-400 font-bold">{BABA_NAME}</span> or use our AI Oracle to identify the root cause of your troubles.
              </p>
              <button 
                onClick={() => navigate('/contact')} 
                className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                  Book Appointment
              </button>
          </div>
      </section>
    </div>
  );
};

export default Services;
