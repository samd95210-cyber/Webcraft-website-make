import { Globe, Zap, Users, ShoppingCart } from 'lucide-react';
import { Service } from '../App';

interface ServicesProps {
  services: Service[];
  setCurrentPage: (page: string) => void;
  onServiceClick: (service: Service) => void;
}

export default function Services({ services, setCurrentPage, onServiceClick }: ServicesProps) {
  const iconMap: { [key: string]: any } = {
    'business': Globe,
    'landing': Zap,
    'portfolio': Users,
    'ecommerce': ShoppingCart,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Services I Offer
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the service that fits your needs. All packages include mobile responsiveness, SEO optimization, and 24/7 support.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.category] || Globe;
            return (
              <div
                key={service.id}
                onClick={() => onServiceClick(service)}
                className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 p-2.5 mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Icon className="w-full h-full text-slate-950" />
                </div>

                {/* Title and description */}
                <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{service.shortDescription}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 pb-6 border-b border-slate-700/50">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold text-cyan-400">{service.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onServiceClick(service);
                    }}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105 inline-block"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
