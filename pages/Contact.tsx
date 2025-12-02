import React from 'react';
import { BABA_NAME } from '../constants';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
  <div className="min-h-screen pb-20">
    <section className="relative py-20 bg-slate-950 border-b border-white/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Customer Care</h1>
      <p className="text-lg text-slate-400">
        We are here to listen to your problems. Reach out to us for appointments, inquiries, or emergency consultation.
      </p>
    </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid lg:grid-cols-2 gap-12">
            
      {/* Contact Info */}
      <div className="space-y-8">
        <div className="glass-card p-8 rounded-3xl">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Get in Touch</h2>
                    
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <Phone className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Phone Number</h3>
                <p className="text-slate-400 text-sm mb-1">Available 24/7 for urgent matters</p>
                <a href="tel:+919876543210" className="block text-xl text-amber-400 font-bold font-mono hover:text-amber-300 transition-colors">+91 98765 43210</a>
                <a href="tel:+919876543211" className="block text-xl text-amber-400 font-bold font-mono hover:text-amber-300 transition-colors">+91 98765 43211</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <Mail className="text-indigo-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email Address</h3>
                <p className="text-slate-400 text-sm mb-1">Send us your birth details for analysis</p>
                <a href="mailto:contact@vasantkkhande.com" className="block text-lg text-white font-mono hover:text-indigo-400 transition-colors">contact@vasantkkhande.com</a>
                <a href="mailto:support@astra-astrology.com" className="block text-lg text-white font-mono hover:text-indigo-400 transition-colors">support@astra-astrology.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <MapPin className="text-emerald-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Main Ashram</h3>
                <p className="text-slate-400 text-sm">
                  108 Vedic Center, Spiritual Avenue,<br />
                  Opposite Grand Temple, Mumbai,<br />
                  Maharashtra, India - 400001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Clock className="text-purple-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Visiting Hours</h3>
                <p className="text-slate-400 text-sm">Mon - Sat: 10:00 AM - 08:00 PM</p>
                <p className="text-slate-400 text-sm">Sunday: Closed (Emergency Only)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">WhatsApp Support</h3>
            <p className="text-green-200 text-sm">Chat with our assistants instantly</p>
          </div>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full transition-colors flex items-center gap-2">
            <MessageCircle size={20} /> Chat Now
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="glass-card p-8 md:p-10 rounded-3xl">
        <h2 className="text-2xl font-serif font-bold text-white mb-2">Send a Message</h2>
        <p className="text-slate-400 mb-8 text-sm">Fill out the form below and {BABA_NAME}'s team will get back to you within 24 hours.</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-bold">First Name</label>
              <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-slate-500 font-bold">Last Name</label>
              <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-500 font-bold">Email Address</label>
            <input type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-500 font-bold">Phone Number</label>
            <input type="tel" className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="+91 98765 43210" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-500 font-bold">Service Required</label>
            <select className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:border-amber-500 focus:outline-none transition-colors appearance-none">
              <option>Select a Service...</option>
              <option>Horoscope Reading</option>
              <option>Marriage Problem</option>
              <option>Career Guidance</option>
              <option>Black Magic Removal</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-500 font-bold">Message</label>
            <textarea className="w-full bg-slate-950/50 border border-white/10 rounded-xl p-4 text-white focus:border-amber-500 focus:outline-none transition-colors h-32 resize-none" placeholder="Describe your problem..."></textarea>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
            <Send size={20} /> Send Inquiry
          </button>
        </form>
      </div>
    </div>
    </section>
  </div>
  );
};

export default Contact;
