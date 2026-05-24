import { Check } from 'lucide-react';
import { Service } from '../App';

interface PricingProps {
  services: Service[];
  setCurrentPage: (page: string) => void;
}

export default function Pricing({ services, setCurrentPage }: PricingProps) {
  const plans = services.map(service => ({
    id: service.id,
    name: service.name,
    price: service.price,
    description: service.shortDescription,
    features: service.features,
    highlighted: service.id === '2', // Landing page
  }));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your budget. All plans include free consultation and support.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl border transition-all duration-300 overflow-hidden group ${
                plan.highlighted
                  ? 'border-blue-500/50 bg-slate-800/80 ring-2 ring-blue-500/20 lg:scale-105 lg:z-10'
                  : 'border-slate-700/50 bg-slate-800/50 hover:border-blue-500/30'
              }`}
            >
              {/* Top accent */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              )}

              <div className="p-8">
                {/* Plan name and badge */}
                <div className="mb-4">
                  {plan.highlighted && (
                    <span className="inline-block px-3 py-1 text-xs font-bold text-blue-400 bg-blue-500/20 rounded-full mb-2">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-white">
                    {plan.price}
                    {plan.price !== 'Custom' && (
                      <span className="text-lg font-normal text-slate-400">/project</span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setCurrentPage('contact')}
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 hover:from-blue-600 hover:to-cyan-500'
                      : 'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  Choose Plan
                </button>

                {/* Features list */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    What's Included
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Need something custom? Let's discuss your project.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-2 text-blue-400 border border-blue-500/50 rounded-lg hover:bg-blue-500/10 transition-colors text-sm font-medium"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
