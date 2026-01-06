import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactInfoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      detail: 'hello@avalonlabs.ai',
      link: 'mailto:hello@avalonlabs.ai'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm EST',
      detail: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Calendar,
      title: 'Schedule a Demo',
      description: 'Book a personalized demo',
      detail: 'Choose your time',
      link: '#contact-form'
    }
  ];

  const whyContact = [
    {
      icon: MessageSquare,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Book demos at times that work for you'
    },
    {
      icon: MapPin,
      title: 'Nationwide Service',
      description: 'Supporting healthcare facilities across the US'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-8">
        {/* Contact Methods */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us. We're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} ref={addToRefs}>
                  <a href={method.link}>
                    <Card className="p-8 h-full bg-neutral border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group text-center">
                      <div className="mb-6 inline-block p-4 bg-gradient-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} strokeWidth={1.5} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {method.description}
                      </p>
                      <p className="text-base font-semibold text-accent">
                        {method.detail}
                      </p>
                    </Card>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Contact Us */}
        <div className="bg-neutral rounded-2xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4 text-foreground">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to helping healthcare facilities succeed with AI-powered lead solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyContact.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} ref={addToRefs} className="text-center">
                  <div className="mb-4 inline-block p-3 bg-accent/10 rounded-full">
                    <Icon size={28} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
