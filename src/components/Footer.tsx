
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo & About */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold mb-4">
              Michael K. Shelby
              <span className="text-gold-400 ml-1">CPA, LLC</span>
            </h3>
            <p className="text-navy-100 text-sm">
              Professional accounting and tax services in Annapolis, Maryland. Providing expert financial guidance for individuals and businesses.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-navy-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-navy-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-navy-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-navy-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-navy-100 hover:text-white transition-colors">
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-navy-100 hover:text-white transition-colors">
                  Accounting Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-navy-100 hover:text-white transition-colors">
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-navy-100 hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-navy-100 space-y-2">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                1410 Forest Drive, Suite 32<br />
                2nd Floor<br />
                Annapolis, MD 21403
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:4107775359" className="hover:text-white transition-colors">(410) 777-5359</a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contact@mkshelbycpa.com" className="hover:text-white transition-colors">contact@mkshelbycpa.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-navy-600 mt-10 pt-6 text-center text-navy-300 text-sm">
          <p>© {currentYear} Michael K. Shelby, CPA, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
