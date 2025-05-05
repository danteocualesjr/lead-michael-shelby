
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="relative pt-24 pb-16 bg-navy-50">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-100/40 to-transparent rounded-bl-[5rem] blur-3xl transform -translate-y-12 translate-x-12"></div>
        </div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our Services</h1>
            <p className="text-lg text-navy-700">
              Our firm offers a wide variety of tax advisory and tax return preparation services designed to help meet your tax obligations in a timely and professional manner.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Category 1 */}
            <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Tax Services</h3>
              <p className="text-navy-700 mb-4">
                Comprehensive tax services for individuals and businesses, including tax preparation, planning, and compliance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Individual Tax Returns
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business Tax Returns
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tax Planning
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tax Compliance
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-navy-300 text-navy-800 hover:bg-navy-50">
                <Link to="/contact">Inquire About Tax Services</Link>
              </Button>
            </div>

            {/* Service Category 2 */}
            <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Accounting Services</h3>
              <p className="text-navy-700 mb-4">
                Complete accounting solutions to help you manage your finances efficiently and make informed business decisions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bookkeeping
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Financial Statements
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Payroll Services
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Account Reconciliation
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-navy-300 text-navy-800 hover:bg-navy-50">
                <Link to="/contact">Inquire About Accounting</Link>
              </Button>
            </div>

            {/* Service Category 3 */}
            <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Advisory Services</h3>
              <p className="text-navy-700 mb-4">
                Strategic advisory services to help individuals and businesses achieve their financial goals and overcome challenges.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Financial Planning
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business Consulting
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Retirement Planning
                </li>
                <li className="flex items-center text-navy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gold-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Estate Planning
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full border-navy-300 text-navy-800 hover:bg-navy-50">
                <Link to="/contact">Inquire About Advisory</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details with FAQ */}
      <section className="section-padding bg-navy-50/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Detailed Service Information</h2>
            <p className="text-navy-700">
              Learn more about our specific service offerings and how they can benefit you or your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-6">For Individuals</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Personal Tax Preparation</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    Our personal tax preparation services include comprehensive federal and state tax return preparation, tax planning strategies to minimize liabilities, and representation in case of audits. We ensure accurate filing while maximizing your eligible deductions and credits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Estate & Trust Planning</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    We provide estate and trust planning services to help you protect your assets and ensure they are distributed according to your wishes. Our services include estate tax planning, trust administration, and coordination with attorneys for comprehensive estate plans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Retirement Planning</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    Our retirement planning services help you prepare for a financially secure future. We analyze your current financial situation, identify goals, and develop strategies to achieve them through tax-advantaged retirement accounts, investment planning, and Social Security optimization.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Investment & Tax Strategy</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    We provide investment and tax strategy services to help you make informed decisions about your investments. Our approach considers tax implications of various investment options and develops strategies to minimize tax burdens while maximizing returns.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-6">For Businesses</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Business Tax Preparation</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    Our business tax preparation services include comprehensive federal and state tax filings for all business entities, including corporations, partnerships, and LLCs. We ensure compliance with tax laws while identifying opportunities to minimize tax liabilities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Business Accounting</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    Our business accounting services include bookkeeping, financial statement preparation, and analysis to provide you with clear insights into your business's financial health. We help you understand your numbers and make informed business decisions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Payroll Services</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    Our comprehensive payroll services handle all aspects of employee compensation, including paycheck processing, tax withholdings, quarterly tax filings, and year-end W-2 preparation. We ensure compliance with all payroll tax laws and regulations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-navy-200">
                  <AccordionTrigger className="text-navy-800 hover:text-navy-900">Business Consulting</AccordionTrigger>
                  <AccordionContent className="text-navy-700">
                    Our business consulting services provide strategic guidance for growth and profitability. We analyze your business operations, identify opportunities for improvement, and develop actionable strategies to achieve your business goals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-navy-100 mb-8">
              Contact us today to schedule a consultation and learn how our services can benefit you or your business.
            </p>
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
