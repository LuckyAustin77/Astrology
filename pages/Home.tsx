import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ZODIAC_DATA, BABA_NAME } from '../constants';
import { ArrowRight, Star, Moon, Sun, Sparkles, UserCheck, ShieldCheck, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
  <div className="flex flex-col items-center overflow-x-hidden">
      
    {/* Hero Section */}
    <header className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[100px]"></div>
        
    <div className="relative z-10 text-center px-4 max-w-5xl">
      <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium tracking-widest mb-6 backdrop-blur-md">
        VEDIC WISDOM MEETS AI
      </div>
      <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Unlock Your</span>
        <span className="text-gold-gradient">Cosmic Destiny</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
        Experience the convergence of ancient astrology and modern technology. 
        Guided by the renowned <span className="text-amber-400 font-semibold">{BABA_NAME}</span>.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button 
          onClick={() => navigate('/horoscope')}
          className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)]"
        >
          Get Daily Reading
        </button>
        <button 
          onClick={() => navigate('/oracle')}
          className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          Chat with Oracle
        </button>
      </div>
    </div>
    </header>

    {/* Baba Introduction Section */}
    <section className="w-full py-24 bg-gradient-to-b from-transparent to-cosmic-900 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-amber-500 rounded-3xl blur-xl opacity-20 transform rotate-6"></div>
        <div className="relative bg-slate-900/50 border border-amber-500/30 rounded-3xl p-8 backdrop-blur-md aspect-[4/5] flex items-center justify-center overflow-hidden group">
           {/* Placeholder for Baba's Image */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"></div>
           <div className="relative z-10 text-center">
            <h3 className="text-4xl font-serif text-amber-500 font-bold mb-2">{BABA_NAME}</h3>
            <p className="text-white uppercase tracking-widest text-sm">Grand Master Astrologer</p>
           </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-serif text-white mb-6">Master of the <span className="text-amber-400">Mystic Arts</span></h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          With over 30 years of experience in Vedic Astrology, Palmistry, and Vastu Shastra, 
          <span className="text-amber-300 font-semibold"> {BABA_NAME} </span> has guided thousands of lost souls toward their true path.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Whether you are suffering from relationship turmoil, career stagnation, or unexplained negative energies, 
          Baba Ji possesses the ancient knowledge to diagnose and remedy your spiritual ailments.
        </p>
                
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            "Gold Medalist in Astrology",
            "Vastu Shastra Expert",
            "Black Magic Removal Specialist",
            "Love Marriage Solution"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
              <ShieldCheck className="text-emerald-400 shrink-0" size={20} />
              <span className="text-sm text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => navigate('/about')}
          className="px-6 py-3 border border-amber-500/50 text-amber-400 rounded-full hover:bg-amber-500 hover:text-black transition-all font-bold flex items-center gap-2 group"
        >
          Read Full Biography <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </div>
    </div>
    </section>

    {/* Services Highlight Section */}
    <section className="w-full py-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10"></div>
        
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-amber-500 font-serif tracking-widest uppercase">We Solve All Problems</span>
        <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Our Divine Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A comprehensive suite of spiritual services tailored to heal your past, secure your present, and illuminate your future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div onClick={() => navigate('/services')} className="group glass-card p-8 rounded-3xl cursor-pointer hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
            <UserCheck className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-serif text-white mb-3">Love & Relationships</h3>
          <p className="text-slate-400 mb-6 line-clamp-3">
            Reunite with lost love, solve husband-wife disputes, and ensure inter-caste marriage success through powerful Vashikaran and astrological remedies.
          </p>
          <div className="flex items-center text-amber-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
            Explore Solutions <ArrowRight size={16} className="ml-2" />
          </div>
        </div>

        {/* Service Card 2 */}
        <div onClick={() => navigate('/services')} className="group glass-card p-8 rounded-3xl cursor-pointer hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <Sparkles className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-serif text-white mb-3">Career & Future</h3>
          <p className="text-slate-400 mb-6 line-clamp-3">
            Unlock business growth, resolve job instability, and remove bad luck blocking your financial success. Kundli reading for accurate future prediction.
          </p>
          <div className="flex items-center text-amber-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
            View Career Remedies <ArrowRight size={16} className="ml-2" />
          </div>
        </div>

        {/* Service Card 3 */}
        <div onClick={() => navigate('/services')} className="group glass-card p-8 rounded-3xl cursor-pointer hover:bg-white/10 transition-all duration-300">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-serif text-white mb-3">Protection & Health</h3>
          <p className="text-slate-400 mb-6 line-clamp-3">
            Black magic removal, negative energy cleansing, and health problem solutions using ancient Tantra and Vedic Poojas.
          </p>
          <div className="flex items-center text-amber-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
            Get Protection <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button onClick={() => navigate('/services')} className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
          View All 25+ Services
        </button>
      </div>
    </div>
    </section>

    {/* Zodiac Grid Section */}
    <section className="w-full py-24 bg-black/20">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-serif text-center mb-12">Select Your Sign</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {ZODIAC_DATA.map((zodiac) => (
        <button
        key={zodiac.sign}
        onClick={() => navigate(`/horoscope?sign=${zodiac.sign}`)}
        className="group relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
        >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          {zodiac.symbol}
        </span>
        <h3 className="text-sm font-bold text-slate-300 group-hover:text-amber-300">{zodiac.sign}</h3>
        </button>
      ))}
      </div>
    </div>
    </section>

    {/* Testimonials / Trust Section (Length enhancement) */}
    <section className="w-full py-24 border-t border-white/5">
     <div className="max-w-5xl mx-auto px-6 text-center">
       <h2 className="text-3xl font-serif text-white mb-16">Trusted by Thousands</h2>
       <div className="grid md:grid-cols-3 gap-8">
         {[1, 2, 3].map((i) => (
           <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl text-amber-500/20 font-serif">"</div>
             <p className="text-slate-300 italic mb-6 relative z-10">
               "I was facing severe career issues and depression. Baba Ji's consultation changed my life completely. The remedies were simple yet effective."
             </p>
             <div className="flex items-center justify-center gap-2">
               <div className="w-8 h-8 rounded-full bg-slate-600"></div>
               <div className="text-left">
                 <div className="text-sm font-bold text-white">Devotee from Mumbai</div>
                 <div className="text-xs text-amber-500">★★★★★</div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
    </section>

    {/* Feature Cards Bottom */}
    <div className="w-full py-16 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border-t border-white/10">
     <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div onClick={() => navigate('/compatibility')} className="cursor-pointer group flex items-center justify-between p-10 rounded-3xl bg-slate-950/50 border border-white/10 hover:border-pink-500/50 transition-all">
        <div>
          <h3 className="text-3xl font-serif font-bold text-pink-200 mb-2">Cosmic Match</h3>
          <p className="text-slate-400">Analyze relationship potential with AI.</p>
        </div>
        <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Heart className="text-pink-500" size={28} />
        </div>
      </div>
      <div onClick={() => navigate('/oracle')} className="cursor-pointer group flex items-center justify-between p-10 rounded-3xl bg-slate-950/50 border border-white/10 hover:border-violet-500/50 transition-all">
        <div>
          <h3 className="text-3xl font-serif font-bold text-violet-200 mb-2">The Oracle</h3>
          <p className="text-slate-400">Speak directly to Astra, the AI oracle.</p>
        </div>
         <div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Sparkles className="text-violet-500" size={28} />
        </div>
      </div>
     </div>
    </div>
  </div>
  );
};

export default Home;
