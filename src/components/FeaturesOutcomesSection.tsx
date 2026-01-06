import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  Calendar, 
  Users, 
  Target, 
  Eye 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesOutcomesSection = () => {
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

  const outcomes = [
    {
      icon: TrendingUp,
      title: 'Faster Response Times',
      description: 'Respond to time-sensitive inquiries in seconds, not hours—capturing leads before they move on to competitors.',
      stat: '90% faster'
    },
    {
      icon: Calendar,
      title: 'Increased Bookings',
      description: 'More booked evaluations, tours, and admissions through intelligent follow-up and engagement.',
      stat: '3x more bookings'
    },
    {
      icon: Users,
      title: 'Reduced Admin Burden',
      description: 'Free your intake staff from repetitive tasks so they can focus on high-value conversations and care coordination.',
      stat: '60% time saved'
    },
    {
      icon: Target,
      title: 'Fewer Missed Opportunities',
      description: 'Never lose a lead to slow follow-up, missed calls, or lost capacity—every inquiry gets handled.',
      stat: '95% capture rate'
    },
    {
      icon: Eye,
      title: 'Clear Performance Visibility',
      description: 'Real-time dashboards show exactly how leads are being handled, where they\'re converting, and what needs attention.',
      stat: 'Full transparency'
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversion Rates',
      description: 'Convert more inquiries into admissions with personalized engagement and timely follow-up at every stage.',
      stat: '45% increase'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            Business Outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real, measurable results that impact your bottom line and operational efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div key={index} ref={addToRefs}>
                <Card className="p-8 h-full bg-background border-border hover:shadow-xl transition-all duration-300">
                  <div className="mb-6 p-4 bg-gradient-1 rounded-full inline-block">
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full text-sm">
                      {outcome.stat}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {outcome.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {outcome.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-1 rounded-2xl p-12 md:p-16">
          <div className="text-center mb-8">
            <h3 className="text-h3 font-bold text-white mb-4">Proven Results Across Facilities</h3>
            <p className="text-lg text-white/90">Real outcomes from healthcare providers using Avalon Labs .ai</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">90%</div>
              <div className="text-lg text-white/90">Faster Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">3x</div>
              <div className="text-lg text-white/90">More Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">60%</div>
              <div className="text-lg text-white/90">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">95%</div>
              <div className="text-lg text-white/90">Lead Capture Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOutcomesSection;
