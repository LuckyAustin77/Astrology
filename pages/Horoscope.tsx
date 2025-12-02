import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ZODIAC_DATA } from '../constants';
import { ZodiacSign, HoroscopeResult } from '../types';
import { getDailyHoroscope } from '../services/gemini';
import { Loader2, RefreshCw, Moon, Sun, Star, Sparkles } from 'lucide-react';

const Horoscope: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSign = searchParams.get('sign') as ZodiacSign | null;
  
  const [selectedSign, setSelectedSign] = useState<ZodiacSign>(initialSign || ZodiacSign.Aries);
  const [horoscope, setHoroscope] = useState<HoroscopeResult | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch horoscope when sign changes
  useEffect(() => {
    const fetchHoroscope = async () => {
      setLoading(true);
      try {
        const data = await getDailyHoroscope(selectedSign);
        setHoroscope(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
    // Update URL param without refreshing
    setSearchParams({ sign: selectedSign });
  }, [selectedSign, setSearchParams]);

  const currentZodiacInfo = ZODIAC_DATA.find(z => z.sign === selectedSign);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Daily Horoscope</h1>
          <p className="text-slate-400">Align your day with the cosmic energy.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-24">
        
        {/* Sidebar Selector */}
        <div className="w-full lg:w-1/3 glass-card p-6 rounded-3xl sticky top-24">
          <h3 className="text-lg font-serif text-amber-400 mb-6 border-b border-white/10 pb-2">Select Your Sign</h3>
          <div className="grid grid-cols-3 gap-3">
            {ZODIAC_DATA.map((z) => (
              <button
                key={z.sign}
                onClick={() => setSelectedSign(z.sign)}
                className={`p-3 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                  selectedSign === z.sign 
                    ? 'bg-amber-500 text-slate-900 scale-105 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-400'
                }`}
                title={z.sign}
              >
                <span className="text-2xl mb-1">{z.symbol}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider">{z.sign}</span>
              </button>
            ))}
          </div>
          
          {currentZodiacInfo && (
            <div className="mt-8 text-center p-6 bg-black/20 rounded-2xl border border-white/5">
              <div className="text-7xl mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-float">{currentZodiacInfo.symbol}</div>
              <h2 className="text-3xl font-serif font-bold text-white mb-1">{currentZodiacInfo.sign}</h2>
              <p className="text-indigo-300 text-sm mb-4 tracking-widest uppercase">{currentZodiacInfo.dateRange}</p>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Sun size={12}/> Element: {currentZodiacInfo.element}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {currentZodiacInfo.traits.map(trait => (
                  <span key={trait} className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-2/3">
          {loading ? (
            <div className="h-96 flex flex-col items-center justify-center text-slate-400 glass-card rounded-3xl">
              <Loader2 className="animate-spin mb-4 text-amber-500" size={48} />
              <p className="animate-pulse font-serif text-lg">Consulting the celestial sphere...</p>
            </div>
          ) : horoscope ? (
            <div className="space-y-8 animate-fade-in">
               <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-40 bg-indigo-600/10 rounded-full filter blur-[80px] group-hover:bg-indigo-600/20 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 p-32 bg-amber-500/5 rounded-full filter blur-[64px]"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                        <div>
                            <h2 className="text-2xl font-serif text-white">Daily Forecast</h2>
                            <p className="text-slate-400 text-sm mt-1">Planetary alignment for {selectedSign}</p>
                        </div>
                        <span className="text-sm font-mono text-amber-400 bg-amber-900/20 px-4 py-2 rounded-full border border-amber-500/20">
                        {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </div>

                    <div className="mb-10">
                        <Sparkles className="text-amber-500 mb-4" size={24} />
                        <p className="text-xl md:text-2xl leading-relaxed text-slate-200 font-serif">
                            "{horoscope.prediction}"
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                            <span className="text-amber-500/60 text-xs uppercase tracking-widest font-bold mb-2">Power Color</span>
                            <div className="w-8 h-8 rounded-full mb-2 border border-white/20" style={{backgroundColor: horoscope.luckyColor.toLowerCase()}}></div>
                            <span className="text-lg font-medium text-white">{horoscope.luckyColor}</span>
                        </div>
                        <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                            <span className="text-amber-500/60 text-xs uppercase tracking-widest font-bold mb-2">Lucky Number</span>
                            <span className="text-4xl font-serif font-bold text-white my-1">{horoscope.luckyNumber}</span>
                        </div>
                        <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors">
                            <span className="text-amber-500/60 text-xs uppercase tracking-widest font-bold mb-2">Current Mood</span>
                            <span className="text-3xl my-1">✨</span>
                            <span className="text-lg font-medium text-white">{horoscope.mood}</span>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
          ) : null}

            {/* Additional Length Content */}
            <div className="mt-12 space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                    <h2 className="text-2xl font-serif text-white mb-4">Understanding Your Daily Transit</h2>
                    <p className="text-slate-400 leading-relaxed mb-4">
                        Daily horoscopes are calculated based on the position of the Moon relative to your sun sign. The Moon moves quickly, changing signs every 2.5 days, which dramatically affects our emotional state and daily interactions.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                        While your Sun sign (what we typically call "your sign") represents your core ego and purpose, the daily transits highlight the fleeting energies available to you right now. Use this wisdom to time your actions—start projects when the energy is initiating (Cardinal signs), focus on stability when grounded (Fixed signs), or embrace change when flexible (Mutable signs).
                    </p>
                </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8 rounded-3xl">
                        <h3 className="text-xl font-serif text-amber-200 mb-3 flex items-center gap-2">
                            <Moon size={20} /> Lunar Influence
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            The Moon governs your inner world, instincts, and subconscious. Today's prediction heavily weighs the lunar aspect to guide your emotional responses.
                        </p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl">
                        <h3 className="text-xl font-serif text-amber-200 mb-3 flex items-center gap-2">
                            <Sun size={20} /> Solar Vitality
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            The Sun provides the raw vitality and willpower. When the Sun makes a harmonious angle to your sign, obstacles melt away.
                        </p>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Horoscope;
 
