import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BABA_NAME } from '../constants';
import { Star, Shield, Award, Users, Globe, BookOpen, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393798-2f77f37d25e6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-amber-200 font-serif tracking-wide">
                Bridging the Gap Between Ancient Vedic Wisdom & Modern Life
            </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2rem] opacity-30 blur-2xl"></div>
                <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-800">
                    <img 
                        src="https://images.unsplash.com/photo-1598556851416-527e02df082a?q=80&w=1974&auto=format&fit=crop" 
                        alt="Spiritual Teacher" 
                        className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                        <h2 className="text-3xl font-serif font-bold text-amber-500">{BABA_NAME}</h2>
                        <p className="text-white text-sm uppercase tracking-widest mt-1">Spiritual Guide & Astrologer</p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-white">A Legacy of <span className="text-amber-500">Divine Healing</span></h2>
                <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                <p className="text-slate-300 text-lg leading-relaxed">
                    For over three decades, <strong>{BABA_NAME}</strong> has been a beacon of hope for those navigating the turbulent waters of life. Born into a lineage of illustrious Vedic scholars, Baba Ji began his journey into the mystic arts at the tender age of seven.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                    His profound understanding of <em>Jyotish Shastra</em> (Astrology), <em>Samudrika Shastra</em> (Face & Palm Reading), and <em>Tantra Vidya</em> allows him to diagnose the root cause of problems that modern science often fails to explain.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                    He believes that every individual is born with a unique cosmic blueprint. Suffering arises when we drift away from this blueprint due to karmic debts or negative influences. His mission is to realign you with your destiny.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-3xl font-bold text-amber-500 mb-1">30+</div>
                        <div className="text-sm text-slate-400">Years of Experience</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-3xl font-bold text-amber-500 mb-1">50k+</div>
                        <div className="text-sm text-slate-400">Lives Transformed</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="glass-card p-8 rounded-3xl text-center group hover:bg-white/5 transition-all">
                <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="text-indigo-400" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Global Reach</h3>
                <p className="text-slate-400">
                    Helping devotees across the globe, from India to the UK, USA, and Canada, through digital consultations and remote poojas.
                </p>
            </div>
            <div className="glass-card p-8 rounded-3xl text-center group hover:bg-white/5 transition-all">
                <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="text-amber-400" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">100% Confidential</h3>
                <p className="text-slate-400">
                    Your secrets are safe with the divine. We maintain strict privacy regarding your personal issues and remedies.
                </p>
            </div>
            <div className="glass-card p-8 rounded-3xl text-center group hover:bg-white/5 transition-all">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-4">Vedic Authenticity</h3>
                <p className="text-slate-400">
                    We rely strictly on the ancient scriptures (Vedas and Puranas) for all rituals, ensuring purity and efficacy.
                </p>
            </div>
        </div>

        {/* Certifications / Trust */}
        <div className="glass-card p-12 rounded-[3rem] border-amber-500/20 bg-gradient-to-b from-amber-900/10 to-transparent text-center mb-24">
            <Award className="w-16 h-16 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Accredited Excellence</h2>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
                <span className="px-6 py-2 bg-black/40 rounded-full border border-white/10">Jyotish Visharad</span>
                <span className="px-6 py-2 bg-black/40 rounded-full border border-white/10">Vastu Ratna</span>
                <span className="px-6 py-2 bg-black/40 rounded-full border border-white/10">Gold Medalist 2015</span>
                <span className="px-6 py-2 bg-black/40 rounded-full border border-white/10">Lifetime Achievement in Occult Sciences</span>
            </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
             <h2 className="text-2xl text-slate-300 mb-6">Ready to change your life?</h2>
             <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-amber-500/20 inline-flex items-center gap-2"
             >
                Contact Baba Ji <ArrowRight size={20} />
             </button>
        </div>
      </section>
    </div>
  );
};

export default About;
