
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="relative pt-24 pb-16 bg-navy-50">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-100/40 to-transparent rounded-bl-[5rem] blur-3xl transform -translate-y-12 translate-x-12"></div>
        </div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Contact Us</h1>
            <p className="text-lg text-navy-700">
              We're here to help with all your accounting and tax needs. Reach out to schedule a consultation or ask any questions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="glass-card rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-navy-800">Office Address</h3>
                      <address className="not-italic mt-2 text-navy-700">
                        1410 Forest Drive, Suite 32<br />
                        2nd Floor<br />
                        Annapolis, MD 21403
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-navy-800">Phone</h3>
                      <p className="mt-2 text-navy-700">
                        <a href="tel:4107775359" className="hover:text-navy-900 transition-colors">(410) 777-5359</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-navy-800">Email</h3>
                      <p className="mt-2 text-navy-700">
                        <a href="mailto:contact@mkshelbycpa.com" className="hover:text-navy-900 transition-colors">contact@mkshelbycpa.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-navy-800">Business Hours</h3>
                      <div className="mt-2 text-navy-700">
                        <p>Monday - Friday: 9AM - 5PM</p>
                        <p>Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden mt-8">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.4048370284697!2d-76.5395653!3d38.9782238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f6e28af3ec57%3A0x2737a28238c3d604!2s1410%20Forest%20Dr%2C%20Annapolis%2C%20MD%2021403!5e0!3m2!1sen!2sus!4v1652884234332!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-navy-700 mb-1">First Name *</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                        placeholder="John" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-navy-700 mb-1">Last Name *</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                        placeholder="Doe" 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="john@example.com" 
                      required
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
                    <label htmlFor="service" className="block text-sm font-medium text-navy-700 mb-1">Service of Interest</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                    >
                      <option value="">Please select a service</option>
                      <option value="individual-tax">Individual Tax Services</option>
                      <option value="business-tax">Business Tax Services</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="planning">Financial Planning</option>
                      <option value="consulting">Business Consulting</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Message *</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 rounded-md border border-navy-200 focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="How can we help you?" 
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-navy-300 text-navy-800 focus:ring-navy-600"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-navy-600">
                        I agree to the privacy policy and consent to being contacted regarding my inquiry.
                      </label>
                    </div>
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

      {/* FAQ Section */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-navy-700">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-navy-800 mb-2">What should I bring to my first appointment?</h3>
              <p className="text-navy-700">
                For your first appointment, please bring your prior year tax returns (if available), government-issued ID, Social Security cards for you and any dependents, income statements (W-2s, 1099s), and any receipts or documentation related to deductions or credits you plan to claim.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-navy-800 mb-2">How far in advance should I schedule my tax preparation appointment?</h3>
              <p className="text-navy-700">
                We recommend scheduling your tax preparation appointment at least 2-3 weeks before the filing deadline to ensure sufficient time for preparation and review. During peak tax season (February-April), it's best to schedule even earlier.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-navy-800 mb-2">Do you offer virtual or remote services?</h3>
              <p className="text-navy-700">
                Yes, we offer virtual consultations and remote services for clients who prefer not to meet in person. Documents can be securely shared electronically, and meetings can be conducted via video conference or phone.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-navy-800 mb-2">What accounting software do you recommend for small businesses?</h3>
              <p className="text-navy-700">
                We work with various accounting software platforms including QuickBooks, Xero, and FreshBooks. The best choice depends on your specific business needs, industry, and size. We can provide guidance on selecting and implementing the most appropriate solution for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
