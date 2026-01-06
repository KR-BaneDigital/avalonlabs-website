import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Clock, Users, Zap, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ScheduleDemoInfoSection = () => {
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

  const demoHighlights = [
    {
      icon: Clock,
      title: '30-Minute Session',
      description: 'Quick, focused demo tailored to your facility type and specific needs'
    },
    {
      icon: Users,
      title: 'Personalized Walkthrough',
      description: 'See exactly how Avalon Labs .ai works for your industry and use case'
    },
    {
      icon: Zap,
      title: 'Live Q&A',
      description: 'Get all your questions answered by our healthcare technology experts'
    }
  ];

  const whatYouWillSee = [
    'Live demonstration of multi-channel lead capture',
    'Real-time lead qualification and routing in action',
    'Automated follow-up sequences and engagement workflows',
    'CRM integration and data synchronization',
    'Performance dashboards and reporting tools',
    'HIPAA compliance and security features',
    'Custom configuration options for your facility',
    'Pricing and implementation timeline discussion'
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-8">
        {/* Demo Highlights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4 text-foreground">
              What to Expect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A personalized, no-pressure demo designed to show you exactly how we can help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {demoHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} ref={addToRefs}>
                  <Card className="p-8 h-full bg-neutral border-border hover:shadow-xl transition-all duration-300 text-center">
                    <div className="mb-6 inline-block p-4 bg-gradient-1 rounded-full">
                      <Icon size={32} strokeWidth={1.5} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-body text-muted-foreground">
                      {highlight.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You'll See */}
        <div className="bg-neutral rounded-2xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4 text-foreground">
              What You'll See in the Demo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive walkthrough of our platform's key features and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatYouWillSee.map((item, index) => (
              <div key={index} ref={addToRefs} className="flex items-start gap-3">
                <CheckCircle2 size={24} strokeWidth={2} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemoInfoSection;
