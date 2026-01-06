import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Industry } from '../data/industries';

gsap.registerPlugin(ScrollTrigger);

interface IndustryFeaturesSectionProps {
  industry: Industry;
}

const IndustryFeaturesSection = ({ industry }: IndustryFeaturesSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const challengesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      challengesRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: challengesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      solutionsRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    benefitsRef.current.forEach((benefit, index) => {
      gsap.fromTo(
        benefit,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: benefit,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToBenefitsRefs = (el: HTMLDivElement) => {
    if (el && !benefitsRef.current.includes(el)) {
      benefitsRef.current.push(el);
    }
  };

  const addToStatsRefs = (el: HTMLDivElement) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-8">
        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Challenges */}
          <div ref={challengesRef}>
            <div className="flex items-center mb-6">
              <AlertCircle size={32} strokeWidth={1.5} className="text-destructive mr-3" />
              <h2 className="text-h2 font-bold text-foreground">Common Challenges</h2>
            </div>
            <Card className="p-8 bg-neutral border-border">
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Solutions */}
          <div ref={solutionsRef}>
            <div className="flex items-center mb-6">
              <CheckCircle2 size={32} strokeWidth={1.5} className="text-success mr-3" />
              <h2 className="text-h2 font-bold text-foreground">Our Solutions</h2>
            </div>
            <Card className="p-8 bg-primary text-primary-foreground border-0">
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 size={20} strokeWidth={2} className="text-white mt-1 mr-3 flex-shrink-0" />
                    <span className="text-body text-white">{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4 text-foreground">Key Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Avalon Labs .ai transforms lead generation for {industry.name.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} ref={addToBenefitsRefs}>
                  <Card className="p-8 h-full bg-neutral border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6 p-4 bg-gradient-1 rounded-full inline-block">
                      <Icon size={32} strokeWidth={1.5} className="text-white" />
                    </div>
                    <h3 className="text-h3 font-bold mb-4 text-foreground">{benefit.title}</h3>
                    <p className="text-body text-muted-foreground">{benefit.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-1 rounded-2xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-white mb-4">Proven Results</h2>
            <p className="text-lg text-white/90">Real outcomes from facilities like yours</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.stats.map((stat, index) => (
              <div key={index} ref={addToStatsRefs} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{stat.value}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFeaturesSection;
