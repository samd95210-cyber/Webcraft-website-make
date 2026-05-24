import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919093730488?text=Hi%20Shyam%2C%20I%20want%20to%20discuss%20my%20website%20project"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 group-hover:scale-110 cursor-pointer border-2 border-green-300/30">
        <MessageCircle size={32} className="text-white" />
        
        {/* Pulse animation rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 animate-ping"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-700/50 shadow-lg">
          Chat with us
          <div className="absolute bottom-0 right-4 transform translate-y-full w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-slate-700/50"></div>
        </div>
      </div>
    </a>
  );
}
