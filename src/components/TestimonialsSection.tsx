
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, delay = '0s' }) => (
  <div 
    className="glass-card p-6 rounded-xl animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <svg className="h-8 w-8 text-gold-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
    <p className="text-navy-700 mb-4">{quote}</p>
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 font-medium">
        {author.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="ml-3">
        <h4 className="font-medium text-navy-800">{author}</h4>
        <p className="text-sm text-navy-600">{role}</p>
      </div>
    </div>
  </div>
);

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const testimonials = [
    {
      quote: "Michael has been handling my personal and business taxes for years. His attention to detail and knowledge of tax law has saved me thousands of dollars.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      delay: "0.1s"
    },
    {
      quote: "The team at Michael K. Shelby CPA provided excellent accounting services for our company. They are responsive, professional, and extremely thorough.",
      author: "Robert Chen",
      role: "CEO, Tech Innovations",
      delay: "0.2s"
    },
    {
      quote: "I was overwhelmed with my financial situation until I started working with Michael. His guidance has put me on a path to financial security.",
      author: "Jennifer Davis",
      role: "Healthcare Professional",
      delay: "0.3s"
    }
  ];

  return (
    <section className={cn("section-padding bg-navy-50/30", className)}>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
          <p className="text-navy-600">We take pride in providing exceptional service and building lasting relationships with our clients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
