import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminPanel from './components/AdminPanel';
import ServiceDetail from './components/ServiceDetail';
import { database } from './config/firebase';
import { ref, onValue } from 'firebase/database';

export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  image: string;
  features: string[];
  deliveryTime: string;
  active: boolean;
  category: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'Business Website',
      shortDescription: 'Professional multi-page website for your shop, restaurant, agency, or any local business.',
      description: 'Complete business website with 5-7 pages, contact forms, WhatsApp integration, and advanced SEO setup for maximum visibility.',
      price: '₹9,999',
      image: 'https://images.pexels.com/photos/14553720/pexels-photo-14553720.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      features: ['5-7 pages', 'Contact forms', 'WhatsApp integration', 'Advanced SEO', 'Speed optimized', 'Google Analytics setup', 'Priority support'],
      deliveryTime: '7-10 days',
      active: true,
      category: 'website',
    },
    {
      id: '2',
      name: 'Landing Page',
      shortDescription: 'High-converting single-page website to sell your product, service, or app.',
      description: 'Optimized landing page designed to convert visitors into customers. Fast loading, mobile responsive, and CTA-focused design.',
      price: '₹4,999',
      image: 'https://images.pexels.com/photos/14553706/pexels-photo-14553706.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      features: ['Fast loading', 'Mobile responsive', 'Analytics ready', 'CTA focused', 'A/B testing ready', 'Conversion optimized'],
      deliveryTime: '3-5 days',
      active: true,
      category: 'landing',
    },
    {
      id: '3',
      name: 'Portfolio Website',
      shortDescription: 'Showcase your work, skills, and projects to attract clients and opportunities.',
      description: 'Professional portfolio website with project showcase, blog section, contact form, and mobile optimization.',
      price: '₹6,999',
      image: 'https://images.pexels.com/photos/32342294/pexels-photo-32342294.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      features: ['Project showcase', 'Blog section', 'Contact form', 'Mobile optimized', 'SEO friendly', 'Easy to update'],
      deliveryTime: '5-7 days',
      active: true,
      category: 'portfolio',
    },
    {
      id: '4',
      name: 'E-Commerce Store',
      shortDescription: 'Complete online store with product catalog, cart, and payment integration.',
      price: '₹25,000',
      image: 'https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      description: 'Full-featured e-commerce platform with product management, shopping cart, secure payment gateway, and order tracking system.',
      features: ['Product management', 'Payment gateway', 'Order tracking', 'Admin panel', 'Inventory system', 'Customer accounts', 'Email notifications'],
      deliveryTime: '14-21 days',
      active: true,
      category: 'ecommerce',
    },
  ]);

  // Load services from Firebase
  useEffect(() => {
    const servicesRef = ref(database, 'services');
    const unsubscribe = onValue(servicesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const servicesArray = Object.entries(data).map(([key, value]: [string, any]) => ({
          id: key,
          ...value,
        }));
        setServices(servicesArray);
      }
    }, (error) => {
      console.log('Firebase read error (using defaults):', error);
      // Keep default services if Firebase fails
    });

    return () => unsubscribe();
  }, []);

  const activeServices = services.filter(s => s.active);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('serviceDetail');
  };

  if (adminLoggedIn && currentPage === 'admin') {
    return <AdminPanel setAdminLoggedIn={setAdminLoggedIn} services={services} />;
  }

  if (currentPage === 'serviceDetail' && selectedService) {
    return (
      <>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ServiceDetail service={selectedService} setCurrentPage={setCurrentPage} />
        <WhatsAppButton />
        <Footer setCurrentPage={setCurrentPage} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <Services 
            services={activeServices} 
            setCurrentPage={setCurrentPage}
            onServiceClick={handleServiceClick}
          />
          <Pricing services={activeServices} setCurrentPage={setCurrentPage} />
          <Portfolio />
          <Process />
          <Testimonials />
          <Contact />
        </>
      )}
      
      {currentPage === 'services' && (
        <Services 
          services={activeServices} 
          setCurrentPage={setCurrentPage}
          onServiceClick={handleServiceClick}
        />
      )}
      {currentPage === 'pricing' && <Pricing services={activeServices} setCurrentPage={setCurrentPage} />}
      {currentPage === 'portfolio' && <Portfolio />}
      {currentPage === 'contact' && <Contact />}

      {currentPage === 'admin' && !adminLoggedIn && (
        <AdminPanel setAdminLoggedIn={setAdminLoggedIn} services={services} />
      )}
      
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}
