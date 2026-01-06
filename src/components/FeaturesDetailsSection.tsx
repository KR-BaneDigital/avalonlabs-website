import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { 
  Inbox, 
  Zap, 
  Filter, 
  Route, 
  RefreshCw, 
  Database, 
  BarChart3 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesDetailsSection = () => {
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
          delay: index * 0.1,
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

  const features = [
    {
      icon: Inbox,
      title: 'Multi-Channel Lead Capture',
      description: 'Captures all inbound leads from web forms, phone calls, chat, and ads—no lead falls through the cracks.'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Responds to new inquiries within seconds via SMS and email—before your competitors even see the lead.'
    },
    {
      icon: Filter,
      title: 'Smart Qualification',
      description: 'Qualifies leads based on urgency, services needed, and readiness—so your team only handles high-intent prospects.'
    },
    {
      icon: Route,
      title: 'Intelligent Routing',
      description: 'Routes qualified inquiries to the appropriate intake or admissions team based on location, service type, and availability.'
    },
    {
      icon: RefreshCw,
      title: 'Automated Follow-Up',
      description: 'Automates follow-up sequences to reduce drop-off and no-shows—keeping prospects engaged until they book.'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Syncs all activity directly into your CRM or intake system—no manual data entry, no lost information.'
    },
    {
      icon: BarChart3,
      title: 'Performance Reporting',
      description: 'Provides clear reporting on response speed, bookings, and conversions—so you know exactly what\'s working.'
    },
    {
      icon: Zap,
      title: '24/7 Availability',
      description: 'Never miss a lead—our AI works around the clock, responding to inquiries even outside business hours.'
    },
    {
      icon: Filter,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security ensures all patient data is protected and fully compliant with healthcare regulations.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            What the Service Does
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A complete lead management system that works 24/7 to capture, qualify, and convert every inquiry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} ref={addToRefs}>
                <Card className="p-8 h-full bg-neutral border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="mb-6 p-4 bg-gradient-1 rounded-full inline-block">
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailsSection;
