import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Target, Eye, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutMissionSection = () => {
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
          delay: index * 0.2,
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

  const pillars = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower healthcare providers with AI-driven solutions that connect them with patients who need their services most, making quality care more accessible to everyone.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A future where every senior care and rehabilitation facility can focus on providing exceptional care, while AI handles the complexity of lead generation and conversion.'
    },
    {
      icon: Compass,
      title: 'Our Purpose',
      description: 'We believe technology should enhance human connection, not replace it. Our AI tools streamline operations while preserving the personal touch that matters in healthcare.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            What Drives Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Avalon Labs .ai, we're driven by a simple belief: healthcare providers should spend their time caring for patients, not chasing leads. Our AI-powered platform makes that possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} ref={addToRefs}>
                <Card className="p-8 h-full bg-neutral border-border hover:shadow-xl transition-all duration-300">
                  <div className="mb-6 p-4 bg-gradient-1 rounded-full inline-block">
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                  <h3 className="text-h3 font-bold mb-4 text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {pillar.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-accent/20">
            <h3 className="text-h3 font-bold mb-6 text-foreground text-center">
              Our Story
            </h3>
            <div className="space-y-4 text-body text-muted-foreground">
              <p>
                Avalon Labs .ai was founded in 2021 by a team of healthcare technology veterans who saw firsthand the challenges facing senior care and rehabilitation facilities. Despite providing exceptional care, many facilities struggled to attract and convert qualified leads in an increasingly digital world.
              </p>
              <p>
                We recognized that traditional marketing and lead generation approaches weren't designed for the unique needs of healthcare providers. Families seeking care for loved ones need personalized guidance, not generic sales pitches. Facilities need qualified leads, not just high volumes of unvetted inquiries.
              </p>
              <p>
                That's why we built Avalon Labs .ai—an AI-powered platform specifically designed for the senior care and rehabilitation industries. Our technology understands the nuances of healthcare decision-making, respects the sensitivity of these conversations, and maintains the highest standards of data security and HIPAA compliance.
              </p>
              <p>
                Today, we're proud to serve over 500 facilities across the United States, helping them connect with families in need while maintaining the personal touch that makes healthcare special. Our AI doesn't replace human compassion—it amplifies it by handling the complexity so providers can focus on what they do best: caring for people.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
