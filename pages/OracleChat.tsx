import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { createOracleChat } from '../services/gemini';
import { Send, Sparkles, User, Bot } from 'lucide-react';

// Note: avoid depending on @google/genai in this stubbed client.

const OracleChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "Greetings, seeker. I am Astra. The stars have much to tell you. What weighs upon your soul today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session once
    if (!chatSessionRef.current) {
      chatSessionRef.current = createOracleChat();
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
          chatSessionRef.current = createOracleChat();
      }
      
      const result = chatSessionRef.current.sendMessageStream({ message: userMsg.text });
      
      let fullResponseText = "";
      const modelMsgId = (Date.now() + 1).toString();
      
      // Add placeholder for streaming response
      setMessages(prev => [...prev, {
          id: modelMsgId,
          role: 'model',
          text: '',
          timestamp: new Date()
      }]);

      for await (const chunk of result) {
         const c: any = chunk;
         if (c.text) {
             fullResponseText += c.text;
             setMessages(prev => prev.map(msg => 
                 msg.id === modelMsgId ? { ...msg, text: fullResponseText } : msg
             ));
         }
      }

    } catch (error) {
      console.error('Chat Error', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: 'The connection to the ethereal plane is weak. Please try again.',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] max-w-4xl mx-auto flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-slate-950/50 p-4 border-b border-white/5 flex items-center gap-3">
         <div className="p-2 bg-indigo-500/20 rounded-full">
            <Sparkles className="text-indigo-400" size={20} />
         </div>
         <div>
            <h2 className="font-bold text-slate-100">Oracle Astra</h2>
            <div className="flex items-center gap-1.5">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs text-slate-400">Connected to Cosmos</span>
            </div>
         </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`
               w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
               ${msg.role === 'user' ? 'bg-amber-600' : 'bg-indigo-600'}
            `}>
               {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            
            <div className={`
              max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed
              ${msg.role === 'user' 
                ? 'bg-amber-600/20 text-amber-50 rounded-br-none border border-amber-500/20' 
                : 'bg-indigo-600/20 text-indigo-50 rounded-bl-none border border-indigo-500/20'}
            `}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && messages[messages.length - 1]?.role === 'user' && (
           <div className="flex items-center gap-2 text-slate-500 text-xs ml-12">
              <Sparkles size={12} className="animate-spin" /> Divining...
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-slate-950/30 border-t border-white/5">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask the stars..."
            className="w-full bg-slate-900 border border-white/10 rounded-full py-4 pl-6 pr-14 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;

