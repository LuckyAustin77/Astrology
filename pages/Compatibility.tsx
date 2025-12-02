import React, { useState } from 'react';
import { ZODIAC_DATA } from '../constants';
import { ZodiacSign, CompatibilityResult } from '../types';
import { getCompatibility } from '../services/gemini';
import { Heart, Loader2, ArrowRight, Flame, Droplets, Wind, Mountain } from 'lucide-react';

const Compatibility: React.FC = () => {
  const [sign1, setSign1] = useState<ZodiacSign>(ZodiacSign.Aries);
  const [sign2, setSign2] = useState<ZodiacSign>(ZodiacSign.Libra);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    if (loading) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await getCompatibility(sign1, sign2);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-4">
            Cosmic Synastry
        </h1>
        <p className="text-slate-400 text-lg">Decode the chemistry written in the stars.</p>
      </div>

      {/* Selector Section */}
      <div className="w-full glass-card p-8 md:p-12 rounded-[3rem] border-pink-500/20 relative overflow-hidden mb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-pink-500/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            <ZodiacSelector value={sign1} onChange={setSign1} label="Partner 1" />
            
            <div className="flex flex-col items-center justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-pink-500 blur-xl opacity-50 animate-pulse"></div>
                    <div className="bg-slate-900 p-4 rounded-full border border-pink-500/50 shadow-2xl relative z-10">
                        <Heart className="text-pink-500" fill="currentColor" size={32} />
                    </div>
                </div>
            </div>
            
            <ZodiacSelector value={sign2} onChange={setSign2} label="Partner 2" />
          </div>

          <div className="mt-12 text-center">
            <button
                onClick={handleMatch}
                disabled={loading}
                className="group relative px-12 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-serif font-bold text-lg text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:scale-105"
            >
                <span className="relative z-10 flex items-center gap-3">
                {loading ? 'Consulting Stars...' : 'Reveal Compatibility'}
                {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
      </div>

      {/* Result Section */}
      {loading && (
         <div className="flex flex-col items-center py-12">
             <Loader2 className="animate-spin text-pink-400 mb-4" size={48} />
             <p className="text-pink-200/70 animate-pulse font-serif">Calculating celestial alignment...</p>
         </div>
      )}

      {result && !loading && (
        <div className="w-full animate-fade-in mb-24">
          <div className="bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-pink-500/30 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
             
             <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                   {/* Progress Ring */}
                   <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="1" />
                      <path 
                        className="text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] transition-all duration-1000 ease-out" 
                        strokeDasharray={`${result.score}, 100`} 
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        strokeLinecap="round" 
                      />
                   </svg>
                   <div className="flex flex-col items-center">
                       <span className="text-5xl font-serif font-bold text-white">{result.score}%</span>
                       <span className="text-xs text-pink-400 uppercase tracking-widest mt-1">Match</span>
                   </div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-pink-200 text-center">{result.matchType}</h2>
             </div>
             
             <div className="flex-1">
               <h3 className="text-xl font-serif text-white mb-4 border-b border-white/10 pb-2">Celestial Analysis</h3>
               <p className="text-slate-300 text-lg leading-relaxed italic">
                 "{result.analysis}"
               </p>
               
               <div className="mt-8 flex gap-4">
                   <div className="px-4 py-2 bg-pink-500/10 rounded-lg text-pink-300 text-sm border border-pink-500/20">Emotional Bond</div>
                   <div className="px-4 py-2 bg-purple-500/10 rounded-lg text-purple-300 text-sm border border-purple-500/20">Intellectual</div>
                   <div className="px-4 py-2 bg-indigo-500/10 rounded-lg text-indigo-300 text-sm border border-indigo-500/20">Values</div>
               </div>
             </div>
          </div>
        </div>
      )}

      {/* Educational Content */}
      <section className="w-full grid md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-serif text-white mb-6">The 4 Elements of Love</h3>
              <p className="text-slate-400 mb-6">Compatibility often boils down to elemental harmony. Knowing the element of your partner helps navigate conflict.</p>
               
              <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-red-900/20 border border-red-500/20">
                      <div className="p-2 bg-red-500/20 rounded-full"><Flame size={18} className="text-red-400"/></div>
                      <div>
                          <h4 className="text-white font-serif">Fire Signs</h4>
                          <p className="text-xs text-slate-400">Aries, Leo, Sagittarius. Passionate, dynamic, temperamental.</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-emerald-900/20 border border-emerald-500/20">
                      <div className="p-2 bg-emerald-500/20 rounded-full"><Mountain size={18} className="text-emerald-400"/></div>
                      <div>
                          <h4 className="text-white font-serif">Earth Signs</h4>
                          <p className="text-xs text-slate-400">Taurus, Virgo, Capricorn. Grounded, loyal, practical.</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-sky-900/20 border border-sky-500/20">
                      <div className="p-2 bg-sky-500/20 rounded-full"><Wind size={18} className="text-sky-400"/></div>
                      <div>
                          <h4 className="text-white font-serif">Air Signs</h4>
                          <p className="text-xs text-slate-400">Gemini, Libra, Aquarius. Intellectual, communicative, social.</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-blue-900/20 border border-blue-500/20">
                      <div className="p-2 bg-blue-500/20 rounded-full"><Droplets size={18} className="text-blue-400"/></div>
                      <div>
                          <h4 className="text-white font-serif">Water Signs</h4>
                          <p className="text-xs text-slate-400">Cancer, Scorpio, Pisces. Emotional, intuitive, sensitive.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="glass-card p-8 rounded-3xl flex flex-col justify-center">
               <h3 className="text-2xl font-serif text-white mb-4">Beyond Sun Signs</h3>
               <p className="text-slate-300 leading-relaxed mb-6">
                   While this tool analyzes Sun Sign compatibility (your core ego), a true astrological matchmaking process (Synastry) involves comparing the positions of:
               </p>
               <ul className="space-y-3 mb-8">
                   <li className="flex gap-3 text-slate-400 text-sm">
                       <span className="text-pink-500 font-bold">Moon:</span> Emotional needs and domestic comfort.
                   </li>
                   <li className="flex gap-3 text-slate-400 text-sm">
                       <span className="text-pink-500 font-bold">Venus:</span> Love language, affection, and values.
                   </li>
                   <li className="flex gap-3 text-slate-400 text-sm">
                       <span className="text-pink-500 font-bold">Mars:</span> Physical chemistry, drive, and conflict style.
                   </li>
                   <li className="flex gap-3 text-slate-400 text-sm">
                       <span className="text-pink-500 font-bold">Mercury:</span> Communication style and intellectual bond.
                   </li>
               </ul>
               <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/20">
                   <p className="text-pink-200 text-sm italic">
                       "For a complete Kundli matching and detailed marriage compatibility report, please visit our Services page."
                   </p>
               </div>
          </div>
      </section>

    </div>
  );
};

const ZodiacSelector: React.FC<{ value: ZodiacSign, onChange: (s: ZodiacSign) => void, label: string }> = ({ value, onChange, label }) => {
   const current = ZODIAC_DATA.find(z => z.sign === value);
   return (
      <div className="w-full md:w-64 bg-white/5 p-6 rounded-3xl border border-white/5 text-center flex flex-col items-center hover:bg-white/10 transition-colors group">
         <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">{label}</span>
         <div className="text-6xl mb-4 text-slate-200 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{current?.symbol}</div>
         <select 
            value={value} 
            onChange={(e) => onChange(e.target.value as ZodiacSign)}
            className="w-full bg-slate-950 text-white font-serif py-3 px-4 rounded-xl border border-white/10 focus:border-pink-500 focus:outline-none text-center appearance-none cursor-pointer hover:border-white/30 transition-colors"
         >
            {ZODIAC_DATA.map(z => <option key={z.sign} value={z.sign}>{z.sign}</option>)}
         </select>
      </div>
   );
}

export default Compatibility;
