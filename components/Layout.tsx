import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Sparkles, MessageCircle, Heart, Home, Flower2, Info, Phone } from 'lucide-react';
import StarBackground from './StarBackground';
import Footer from './Footer';

const Layout: React.FC = () => {
  const navItems = [
    { to: "/", icon: <Home size={20} />, label: "Home" },
    { to: "/about", icon: <Info size={20} />, label: "About" },
    { to: "/services", icon: <Flower2 size={20} />, label: "Services" },
    { to: "/horoscope", icon: <Sparkles size={20} />, label: "Horoscope" },
    { to: "/compatibility", icon: <Heart size={20} />, label: "Compatibility" },
    { to: "/contact", icon: <Phone size={20} />, label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-amber-500/30">
      <StarBackground />
      
      {/* Navbar - Sticky Top */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
             <div className="flex items-center space-x-3">
                <span className="text-3xl animate-pulse-slow">✨</span>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold tracking-widest text-gold-gradient">
                    ASTRA
                  </span>
                  <span className="text-[0.6rem] text-slate-400 uppercase tracking-[0.2em]">Divine Guidance</span>
                </div>
             </div>

             {/* Desktop Nav */}
             <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `
                      group flex items-center space-x-2 text-sm font-medium tracking-wide transition-all duration-300
                      ${isActive ? 'text-amber-400' : 'text-slate-400 hover:text-white'}
                    `}
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="font-serif">{item.label}</span>
                  </NavLink>
                ))}
                
                {/* Oracle Chat Button specialized */}
                <NavLink 
                  to="/oracle"
                  className="ml-4 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>Oracle AI</span>
                </NavLink>
             </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 pb-safe">
        <div className="flex justify-around items-center h-16 px-2 overflow-x-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `
                  flex flex-col items-center justify-center w-full min-w-[60px] h-full p-2 transition-colors
                  ${isActive ? 'text-amber-400' : 'text-slate-500'}
                `}
              >
                {item.icon}
                <span className="text-[9px] mt-1 font-medium">{item.label}</span>
              </NavLink>
            ))}
            <NavLink
                to="/oracle"
                className={({ isActive }) => `
                  flex flex-col items-center justify-center w-full min-w-[60px] h-full p-2 transition-colors
                  ${isActive ? 'text-purple-400' : 'text-slate-500'}
                `}
              >
                <MessageCircle size={20} />
                <span className="text-[9px] mt-1 font-medium">Oracle</span>
              </NavLink>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 pt-20 min-h-screen flex flex-col">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;