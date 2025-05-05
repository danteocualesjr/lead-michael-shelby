
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
    )}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-navy-800">
            Michael K. Shelby
            <span className="text-gold-500 ml-1">CPA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-navy-700 hover:text-navy-900 transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-navy-700 hover:text-navy-900 transition-colors">
            About
          </Link>
          <Link to="/services" className="font-medium text-navy-700 hover:text-navy-900 transition-colors">
            Services
          </Link>
          <Link to="/contact" className="font-medium text-navy-700 hover:text-navy-900 transition-colors">
            Contact
          </Link>
          <Button asChild variant="default" className="bg-navy-800 hover:bg-navy-900 text-white">
            <Link to="/contact">
              Schedule Consultation
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass-nav ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          <Link to="/" className="font-medium text-navy-700 py-2 hover:text-navy-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="font-medium text-navy-700 py-2 hover:text-navy-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" className="font-medium text-navy-700 py-2 hover:text-navy-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="font-medium text-navy-700 py-2 hover:text-navy-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Button asChild variant="default" className="bg-navy-800 hover:bg-navy-900 text-white w-full">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Schedule Consultation
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
