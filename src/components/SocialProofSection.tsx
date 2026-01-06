import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SocialProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      logosRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: logosRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: testimonial,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !testimonialsRef.current.includes(el)) {
      testimonialsRef.current.push(el);
    }
  };

  const logos = [
    'Senior Care Network',
    'Rehabilitation Partners',
    'HealthBridge Solutions',
    'CareConnect Group',
    'Wellness Facilities Inc',
  ];

  const testimonials = [
    {
      quote:
        'Avalon Labs .ai transformed our lead generation process. We saw a 300% increase in qualified leads within the first month.',
      author: 'Sarah Johnson',
      role: 'Director of Marketing, Senior Care Network',
    },
    {
      quote:
        'The AI-powered conversations feel natural and engaging. Our conversion rate improved by 45% after implementing their solution.',
      author: 'Michael Chen',
      role: 'Operations Manager, Rehabilitation Partners',
    },
    {
      quote:
        'HIPAA compliance was our biggest concern, and Avalon Labs exceeded our expectations. The analytics dashboard is incredibly insightful.',
      author: 'Emily Rodriguez',
      role: 'CEO, HealthBridge Solutions',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            Trusted by Leading Healthcare Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of senior care and rehabilitation facilities that trust Avalon Labs .ai
          </p>
        </div>

        {/* Logos */}
        <div
          ref={logosRef}
          className="flex flex-wrap justify-center items-center gap-12 mb-24"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-xl font-bold text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} ref={addToRefs}>
              <Card className="p-8 h-full bg-neutral border-border hover:shadow-lg transition-shadow duration-300">
                <Quote size={40} strokeWidth={1.5} className="text-accent mb-6" />
                <p className="text-body text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
