import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'The Spice Kitchen',
      category: 'Restaurant Website',
      description: 'Modern, responsive website for a fine dining restaurant with menu, reservation system, and online ordering.',
      image: 'https://images.pexels.com/photos/8939307/pexels-photo-8939307.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tags: ['Design', 'Development', 'SEO'],
    },
    {
      title: 'Learn Code Academy',
      category: 'Coaching Portal',
      description: 'Professional website for online coaching institute with course showcase, student testimonials, and enrollment forms.',
      image: 'https://images.pexels.com/photos/8055488/pexels-photo-8055488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tags: ['Design', 'Development', 'Database'],
    },
    {
      title: 'Designer Portfolio',
      category: 'Portfolio Website',
      description: 'Creative portfolio site for a graphic designer featuring project gallery, case studies, and contact system.',
      image: 'https://images.pexels.com/photos/16313660/pexels-photo-16313660.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tags: ['Design', 'Animation', 'UX'],
    },
    {
      title: 'TechStart Launches',
      category: 'Landing Page',
      description: 'High-converting landing page for a SaaS startup with hero section, features, pricing, and CTA optimization.',
      image: 'https://images.pexels.com/photos/7413913/pexels-photo-7413913.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tags: ['Design', 'Marketing', 'CRO'],
    },
    {
      title: 'Fresh Groceries',
      category: 'E-Commerce Store',
      description: 'Complete e-commerce platform with product catalog, cart system, payment gateway, and inventory management.',
      image: 'https://images.pexels.com/photos/5650016/pexels-photo-5650016.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tags: ['Development', 'Payment', 'Database'],
    },
    {
      title: 'Digital Agency Hub',
      category: 'Agency Website',
      description: 'Full-featured agency website showcasing services, team, portfolio, client testimonials, and client login area.',
      image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tags: ['Design', 'Development', 'CMS'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Portfolio & Case Studies
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Check out some of my recent projects. Each one built with attention to detail and modern best practices.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col"
            >
              {/* Image section */}
              <div className="h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content section */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category badge */}
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-2">
                  {project.category}
                </span>

                {/* Title and description */}
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View button */}
                <button className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mt-auto">
                  View Case Study
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More work note */}
        <div className="mt-16 text-center p-8 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <p className="text-lg text-slate-300 mb-4">
            Want to see more? WhatsApp me to discuss your project and I'll share detailed portfolio.
          </p>
          <a
            href="https://wa.me/919093730488?text=Hi%20Shyam%2C%20I%20want%20to%20see%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-500 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
