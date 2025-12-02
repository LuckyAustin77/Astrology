import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BABA_NAME, SERVICES_LIST } from '../constants';
import { Star, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (serviceName: string) => {
    const slug = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    navigate(`/service/${slug}`, { state: { name: serviceName } });
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative bg-cosmic-950 pt-20 pb-10 border-t border-white/10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <Star className="text-amber-500 fill-amber-500" size={24} />
                        <span className="text-3xl font-serif font-bold text-white tracking-widest">ASTRA</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                        Under the divine guidance of <span className="text-amber-400 font-serif">{BABA_NAME}</span>, 
                        we bridge the gap between ancient vedic wisdom and modern artificial intelligence to illuminate your path.
                    </p>
                    <div className="flex space-x-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
                            <Facebook size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
                            <Instagram size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
                            <Twitter size={18} />
                        </div>
                    </div>
                </div>

                {/* Services Column 1 */}
                <div>
                    <h3 className="text-xl font-serif text-amber-100 mb-6 border-b border-white/10 pb-2 inline-block">Divine Services</h3>
                    <ul className="space-y-3">
                        {SERVICES_LIST.slice(0, 10).map((service, idx) => (
                            <li 
                                key={idx} 
                                onClick={() => handleServiceClick(service)}
                                className="flex items-start space-x-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer group"
                            >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500"></span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Column 2 */}
                <div>
                    <h3 className="text-xl font-serif text-amber-100 mb-6 border-b border-white/10 pb-2 inline-block">Specializations</h3>
                    <ul className="space-y-3">
                        {SERVICES_LIST.slice(10, 20).map((service, idx) => (
                            <li 
                                key={idx} 
                                onClick={() => handleServiceClick(service)}
                                className="flex items-start space-x-2 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer group"
                            >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500"></span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h3 className="text-xl font-serif text-amber-100 mb-6 border-b border-white/10 pb-2 inline-block">Contact Baba Ji</h3>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <MapPin className="text-amber-500 mt-1 shrink-0" size={20} />
                            <span className="text-slate-300">
                                108 Vedic Center, Spiritual Avenue,<br/>
                                Mumbai, Maharashtra, India
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Phone className="text-amber-500 shrink-0" size={20} />
                            <a href="tel:+919876543210" className="text-slate-300 hover:text-amber-400 transition-colors">+91 98765 43210</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="text-amber-500 shrink-0" size={20} />
                            <a href="mailto:contact@vasantkkhande.com" className="text-slate-300 hover:text-amber-400 transition-colors">contact@vasantkkhande.com</a>
                        </div>
                        
                        {/* Quick Nav for Pages */}
                        <div className="pt-4 flex gap-4 text-sm font-bold text-amber-500">
                             <NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink>
                             <NavLink to="/contact" className="hover:text-white transition-colors">Contact Us</NavLink>
                        </div>

                        <div className="mt-2 p-4 bg-amber-900/20 rounded-lg border border-amber-500/20">
                            <p className="text-amber-200 text-sm italic">
                                "Problems are temporary, but the solutions written in your stars are permanent."
                            </p>
                            <p className="text-right text-amber-500 text-xs mt-2 font-bold">- {BABA_NAME}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Astra & {BABA_NAME}. All Rights Reserved.</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
                    {SERVICES_LIST.slice(20).map((s, i) => (
                        <span 
                            key={i} 
                            onClick={() => handleServiceClick(s)}
                            className="hover:text-amber-500 transition-colors cursor-pointer"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;