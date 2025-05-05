
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container-custom">
        <div className="glass-card rounded-2xl overflow-hidden shadow-xl animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 bg-navy-800 text-white">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions or need assistance? Contact us today to schedule a consultation with our expert team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Our Office</h3>
                    <address className="not-italic mt-2">
                      1410 Forest Drive, Suite 32<br />
                      2nd Floor<br />
                      Annapolis, MD 21403
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="mt-2">
                      <a href="tel:4107775359" className="hover:text-gold-300 transition-colors">(410) 777-5359</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-2">
                      <a href="mailto:contact@mkshelbycpa.com" className="hover:text-gold-300 transition-colors">contact@mkshelbycpa.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <p className="mt-2">
                      Monday - Friday: 9AM - 5PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-white">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-navy-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-navy-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="(123) 456-7890" 
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="How can we help you?" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-navy-800 hover:bg-navy-900 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
