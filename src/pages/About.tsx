
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="relative pt-24 pb-16 bg-navy-50">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-100/40 to-transparent rounded-bl-[5rem] blur-3xl transform -translate-y-12 translate-x-12"></div>
        </div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">About Our Firm</h1>
            <p className="text-lg text-navy-700">
              Michael K. Shelby, CPA, LLC provides a full range of Accounting, Consulting and Tax Services to both individuals and business owners.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-navy-700 mb-4">
                At Michael K. Shelby, CPA, LLC, our mission is to provide professional, personalized services and guidance in a wide range of financial and business needs. We are committed to high standards of excellence and professionalism in the accounting industry.
              </p>
              <p className="text-navy-700 mb-4">
                Our firm's reputation reflects the high standards we demand of ourselves. Our primary goal as trusted advisors is to be available to provide insightful advice to enable our clients to make informed financial decisions.
              </p>
              <p className="text-navy-700 mb-4">
                We feel it is extremely important to continually professionally educate ourselves to improve our technical expertise, financial knowledge, and service to our clients.
              </p>
              <Button asChild className="mt-4 bg-navy-800 hover:bg-navy-900 text-white">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="glass-card rounded-2xl p-8 relative z-10">
                <h3 className="text-xl font-bold text-navy-800 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800">Integrity</h4>
                      <p className="text-navy-600 text-sm mt-1">We adhere to the highest professional standards and provide reliable, honest services.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800">Excellence</h4>
                      <p className="text-navy-600 text-sm mt-1">We are committed to delivering the highest quality services and exceeding expectations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800">Responsiveness</h4>
                      <p className="text-navy-600 text-sm mt-1">We understand the importance of timely service and communication with our clients.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy-800">Personalized Service</h4>
                      <p className="text-navy-600 text-sm mt-1">We provide tailored solutions that address each client's unique financial situation and goals.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute top-6 -right-6 h-32 w-32 bg-gold-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-navy-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Meet Our Team</h2>
            <p className="text-navy-700">Our experienced team of professionals is dedicated to providing exceptional service and personalized financial solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="h-32 w-32 rounded-full bg-navy-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-navy-800">MKS</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800">Michael K. Shelby</h3>
                <p className="text-navy-600 mb-4">Certified Public Accountant</p>
                <p className="text-navy-700 text-sm">
                  With over 25 years of experience in accounting and tax services, Michael leads our team with expertise and dedication to client success.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="h-32 w-32 rounded-full bg-navy-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-navy-800">DM</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800">Diana Martinez</h3>
                <p className="text-navy-600 mb-4">Senior Accountant</p>
                <p className="text-navy-700 text-sm">
                  Diana specializes in business accounting and tax planning, helping clients optimize their financial strategies and achieve their goals.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="h-32 w-32 rounded-full bg-navy-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-navy-800">JR</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800">Jason Roberts</h3>
                <p className="text-navy-600 mb-4">Tax Specialist</p>
                <p className="text-navy-700 text-sm">
                  Jason brings deep knowledge of tax law and regulations, ensuring clients receive maximum benefits while maintaining compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </Layout>
  );
};

export default About;
