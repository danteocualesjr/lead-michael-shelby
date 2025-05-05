
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = '0s' }) => (
  <Card className="glass-card overflow-hidden border-none transition-all duration-300 hover:shadow-xl" style={{ animationDelay: delay }}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-navy-50/50 rounded-bl-full -z-10 transform translate-x-10 -translate-y-10"></div>
    <CardHeader className="pb-2">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-navy-50 text-navy-800 mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-navy-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-navy-600 mb-4">{description}</CardDescription>
      <Link to="/services" className="text-navy-700 font-medium hover:text-navy-900 inline-flex items-center">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </CardContent>
  </Card>
);

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  const services = [
    {
      title: 'Tax Preparation',
      description: 'Expert tax return preparation for individuals and businesses, ensuring compliance with tax laws while maximizing deductions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      delay: '0.1s'
    },
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting solutions including bookkeeping, financial statement preparation, and account reconciliation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: '0.2s'
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning services to help you achieve your short and long-term financial goals with confidence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      delay: '0.3s'
    },
    {
      title: 'Business Consulting',
      description: 'Expert business advice to optimize operations, improve profitability, and achieve sustainable growth for your business.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      delay: '0.4s'
    }
  ];

  return (
    <section className={cn("section-padding bg-gradient-to-b from-white to-navy-50/40", className)}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-navy-600">We offer a wide variety of tax advisory and accounting services designed to help meet your financial obligations in a timely and professional manner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
