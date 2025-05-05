
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square max-w-md mx-auto lg:ml-0 glass-card rounded-2xl overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-800 mb-4">Our Promise</h3>
                  <p className="text-navy-700 mb-6">We are committed to providing exceptional service with integrity, accuracy, and personal attention to every client.</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Personalized Solutions</span>
                    </div>
                    <div className="flex items-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Accuracy & Timeliness</span>
                    </div>
                    <div className="flex items-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Professional Expertise</span>
                    </div>
                    <div className="flex items-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gold-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-navy-100 rounded-full -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">About Our Firm</h2>
            <p className="text-navy-700 mb-4">
              Michael K. Shelby, CPA, LLC is an Annapolis-based accounting firm dedicated to providing a full range of accounting, consulting, and tax services to both individuals and business owners.
            </p>
            <p className="text-navy-700 mb-6">
              With years of experience and a commitment to excellence, we pride ourselves on delivering personalized financial solutions tailored to each client's unique needs and goals.
            </p>
            <p className="text-navy-700 mb-8">
              Our approach combines technical expertise with practical business knowledge to provide valuable insights and guidance for all your financial decisions.
            </p>
            <Button asChild className="bg-navy-800 hover:bg-navy-900 text-white">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
