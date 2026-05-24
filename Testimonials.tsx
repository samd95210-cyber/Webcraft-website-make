import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Restaurant Owner',
      business: 'The Golden Fork',
      content: 'Shyam built my restaurant website in just 5 days. It looks professional, loads super fast, and I have been getting good orders through it. Highly recommended!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      title: 'Coaching Institute',
      business: 'Learn English Fluently',
      content: 'The website has increased our student inquiries by 3x! The WhatsApp integration makes it super easy for parents to reach us. Great work!',
      rating: 5,
      image: '👩‍🏫',
    },
    {
      name: 'Amit Patel',
      title: 'E-Commerce Seller',
      business: 'TechGadgets Store',
      content: 'Best investment for my online store. The website is fast, secure, and the payment integration works flawlessly. Support is also available 24/7.',
      rating: 5,
      image: '👨‍💻',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            What Clients Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real feedback from real clients who have worked with me to build their online presence.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl bg-slate-800/50 border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-400">
                    {testimonial.title} • {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust section */}
        <div className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-800/50 border border-blue-500/20">
          <p className="text-slate-300 text-lg mb-2">
            ⭐ <span className="font-bold text-white">50+ Projects Completed</span> with 99% Client Satisfaction
          </p>
          <p className="text-slate-400 text-sm">
            Join hundreds of happy business owners who have grown their online presence with me.
          </p>
        </div>
      </div>
    </section>
  );
}
