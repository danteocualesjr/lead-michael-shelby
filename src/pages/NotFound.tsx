
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative mb-8 inline-block">
              <h1 className="text-9xl font-bold text-navy-900">404</h1>
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-gold-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 h-16 w-16 bg-navy-100 rounded-full -z-10"></div>
            </div>
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Page Not Found</h2>
            <p className="text-xl text-navy-700 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button asChild size="lg" className="bg-navy-800 hover:bg-navy-900 text-white">
              <Link to="/">Return to Home Page</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
