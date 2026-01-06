import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Heart, Shield, Lightbulb, Users, Zap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutValuesSection = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'We never forget that behind every lead is a person or family seeking care for a loved one. Our technology is designed with empathy and respect.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'HIPAA compliance and data security aren\'t just requirements—they\'re fundamental to everything we build. Your data and your patients\' privacy are sacred.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We\'re constantly pushing the boundaries of what AI can do for healthcare, but we never innovate for innovation\'s sake—only to solve real problems.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We don\'t just sell software—we partner with facilities to understand their unique challenges and help them succeed. Your success is our success.'
    },
    {
      icon: Zap,
      title: 'Results-Driven',
      description: 'We measure our success by your outcomes: more qualified leads, higher conversion rates, and ultimately, more people receiving the care they need.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do, from our technology to our customer service to our commitment to continuous improvement.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These principles guide every decision we make and every line of code we write
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} ref={addToRefs}>
                <Card className="p-8 h-full bg-background border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="mb-6 p-4 bg-gradient-1 rounded-full inline-block">
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {value.description}
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

export default AboutValuesSection;
