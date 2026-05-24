import { ArrowLeft, Check, Clock, Zap } from 'lucide-react';
import { Service } from '../App';

interface ServiceDetailProps {
  service: Service;
  setCurrentPage: (page: string) => void;
}

export default function ServiceDetail({ service, setCurrentPage }: ServiceDetailProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image section */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-96 object-cover rounded-xl border border-slate-700/50 shadow-2xl shadow-blue-500/20"
            />
            <div className="absolute top-4 left-4 px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-lg text-sm font-bold backdrop-blur-sm">
              {service.category.toUpperCase()}
            </div>
          </div>

          {/* Info section */}
          <div className="flex flex-col justify-between">
            {/* Title and price */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={18} className="text-cyan-400" />
                    <span className="text-sm text-slate-400">Delivery Time</span>
                  </div>
                  <p className="text-lg font-bold text-white">{service.deliveryTime}</p>
                </div>
                <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={18} className="text-cyan-400" />
                    <span className="text-sm text-slate-400">Price</span>
                  </div>
                  <p className="text-lg font-bold text-white">{service.price}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`https://wa.me/919093730488?text=Hi%20Shyam%2C%20I'm%20interested%20in%20${encodeURIComponent(service.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
            >
              Book This Service
            </a>
          </div>
        </div>

        {/* Features section */}
        <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
            <p className="text-slate-400">
              We deliver your project on time, every time. No delays.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2">Quality Focused</h3>
            <p className="text-slate-400">
              Premium code, beautiful design, and full functionality guaranteed.
            </p>
          </div>
          <div className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-bold text-white mb-2">Full Support</h3>
            <p className="text-slate-400">
              Get 24/7 support after launch. We're always here to help.
            </p>
          </div>
        </div>

        {/* Process section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Requirement', desc: 'Discuss your needs' },
              { step: '2', title: 'Design', desc: 'Preview & revisions' },
              { step: '3', title: 'Build', desc: 'Code & optimize' },
              { step: '4', title: 'Launch', desc: 'Live & support' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-slate-950 font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 mb-6">
            Let's discuss your project and create something amazing together.
          </p>
          <a
            href="https://wa.me/919093730488?text=Hi%20Shyam%2C%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
