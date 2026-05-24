import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center font-bold text-slate-950">
              W
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              WebCraft
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
            >
              Get Quote
            </button>
            <button
              onClick={() => setCurrentPage('admin')}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-semibold"
            >
              Admin
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-400 bg-blue-400/5'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className="w-full mx-4 my-2 px-4 py-2 text-sm font-medium text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
            >
              Get Quote
            </button>
            <button
              onClick={() => {
                setCurrentPage('admin');
                setMobileMenuOpen(false);
              }}
              className="w-full mx-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all font-semibold"
            >
              Admin
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
