
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn(
      "relative min-h-screen flex items-center pt-16", 
      className
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-4/5 bg-gradient-to-br from-navy-50/80 via-navy-100/40 to-transparent rounded-bl-[5rem] blur-3xl transform -translate-y-24 translate-x-24"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-100/50 to-transparent rounded-tr-[5rem] blur-3xl transform translate-y-20 -translate-x-20"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-3/4 lg:block hidden">
            <div className="relative w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="Professional accounting services" 
                className="object-cover w-full h-full rounded-l-3xl shadow-2xl"
                style={{
                  clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  objectPosition: "center"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 to-transparent rounded-l-3xl mix-blend-multiply"></div>
              <div className="absolute inset-0 rounded-l-3xl border-l border-t border-b border-white/10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900">
            Expert Accounting & Tax Services in Annapolis
          </h1>
          <p className="text-lg md:text-xl text-navy-700 max-w-xl">
            Michael K. Shelby, CPA, LLC offers professional tax preparation, accounting, and planning services for both individuals and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-navy-800 hover:bg-navy-900 text-white">
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-navy-300 text-navy-800 hover:bg-navy-50">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 mx-auto max-w-md animate-fade-in lg:z-10" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-bold text-navy-800 mb-6">Get Financial Clarity</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-navy-700 text-sm font-medium block mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-navy-700 text-sm font-medium block mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="text-navy-700 text-sm font-medium block mb-1">Service Needed</label>
              <select
                id="service"
                className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
              >
                <option value="">Select a service</option>
                <option value="tax">Tax Preparation</option>
                <option value="accounting">Accounting Services</option>
                <option value="planning">Financial Planning</option>
                <option value="business">Business Consulting</option>
              </select>
            </div>
            <Button type="submit" className="w-full bg-navy-800 hover:bg-navy-900 text-white">
              Request Information
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
