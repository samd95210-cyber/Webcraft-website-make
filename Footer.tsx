import { Mail, Phone } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center font-bold text-slate-950">
                W
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                WebCraft
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Modern websites for businesses, creators, and startups.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Portfolio', id: 'portfolio' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">Landing Pages</span></li>
              <li><span className="text-sm text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">Business Websites</span></li>
              <li><span className="text-sm text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">Portfolios</span></li>
              <li><span className="text-sm text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">E-Commerce</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919093730488"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Phone size={16} />
                9093730488
              </a>
              <a
                href="mailto:samd95210@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Mail size={16} />
                samd95210@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8">
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              title="Facebook"
            >
              f
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/50 transition-all"
              title="Instagram"
            >
              📷
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              title="Twitter"
            >
              𝕏
            </a>
          </div>

          {/* Bottom text */}
          <div className="text-center text-sm text-slate-500">
            <p>&copy; {currentYear} WebCraft. All rights reserved.</p>
            <p className="mt-2">
              Built with <span className="text-red-500">❤️</span> for businesses that want to grow online.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
