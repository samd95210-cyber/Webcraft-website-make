import { MessageSquare, Paintbrush, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '1',
      icon: MessageSquare,
      title: 'Discuss Requirements',
      description: 'We have a detailed discussion about your business, goals, target audience, and what you want from the website.',
      details: ['30-min call', 'Requirement gathering', 'Budget discussion'],
    },
    {
      number: '2',
      icon: Paintbrush,
      title: 'Design Preview',
      description: 'I create a beautiful design mockup and show you how your website will look. Make revisions until you are happy.',
      details: ['Desktop & mobile design', 'Multiple iterations', 'Fast turnaround'],
    },
    {
      number: '3',
      icon: Code,
      title: 'Development',
      description: 'Once design is approved, I start coding your website using latest technologies for speed and SEO.',
      details: ['Responsive coding', 'SEO optimization', 'Fast performance'],
    },
    {
      number: '4',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Website goes live! I handle domain setup, SSL, hosting, and provide 24/7 support for any issues.',
      details: ['Domain setup', '24/7 support', 'Post-launch training'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A simple, transparent process from your idea to a live website. No surprises, no hidden costs.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                )}

                {/* Card */}
                <div className="relative z-10 rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 p-2.5 mb-4 border border-blue-500/30">
                    <Icon className="w-full h-full text-blue-400" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline mobile view */}
        <div className="lg:hidden mt-12">
          <div className="space-y-6">
            {steps.map((_, index) => (
              <div key={index}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-slate-950 text-xs font-bold">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent mt-2"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6 text-lg">Ready to get started?</p>
          <a
            href="https://wa.me/919093730488?text=Hi%20Shyam%2C%20I%20want%20to%20start%20my%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
