import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Shyam,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919093730488?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Let's Start Your Project
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to get your website? Reach out in any way that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919093730488?text=Hi%20Shyam%2C%20I%20want%20to%20discuss%20my%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/20 p-2.5 flex-shrink-0 border border-green-500/30">
                  <MessageCircle className="w-full h-full text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">WhatsApp</h4>
                  <p className="text-sm text-slate-400">9093730488</p>
                  <p className="text-xs text-slate-500 mt-1">Instant reply • Preferred method</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:samd95210@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 p-2.5 flex-shrink-0 border border-blue-500/30">
                  <Mail className="w-full h-full text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-sm text-slate-400">samd95210@gmail.com</p>
                  <p className="text-xs text-slate-500 mt-1">Response within 24 hours</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:9093730488"
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 p-2.5 flex-shrink-0 border border-purple-500/30">
                  <Phone className="w-full h-full text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone Call</h4>
                  <p className="text-sm text-slate-400">9093730488</p>
                  <p className="text-xs text-slate-500 mt-1">Mon-Sat, 10am-8pm IST</p>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
              <div className="flex gap-3 mb-3">
                <MapPin size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Based in India</h4>
                  <p className="text-sm text-slate-400">Available for projects worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="9093730488"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                >
                  <option value="">Select project type</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="business-website">Business Website</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="custom">Custom Web App</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under ₹5,000</option>
                  <option value="5-10k">₹5,000 - ₹10,000</option>
                  <option value="10-25k">₹10,000 - ₹25,000</option>
                  <option value="25k+">₹25,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2 mt-6"
              >
                <Send size={18} />
                Send via WhatsApp
              </button>

              <p className="text-xs text-slate-400 text-center mt-3">
                Form data will be sent to WhatsApp for faster response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
