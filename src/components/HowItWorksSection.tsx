import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Filter, TrendingUp, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  const steps = [
    {
      icon: Database,
      title: 'Connect Existing CRM',
      description: 'Seamlessly integrate with your current systems and data sources.',
    },
    {
      icon: Filter,
      title: 'AI Filters Leads',
      description: 'Our intelligent algorithms identify and prioritize the most promising prospects.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Automated workflows and personalized engagement increase conversion rates.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard Insights',
      description: 'Real-time analytics and reporting help you make data-driven decisions.',
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
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your lead generation and conversion process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                ref={addToRefs}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-6 relative">
                  <div className="absolute -top-4 -left-4 text-6xl font-bold text-accent/20">
                    {index + 1}
                  </div>
                  <div className="relative z-10 p-6 bg-gradient-2 rounded-full">
                    <Icon size={40} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
