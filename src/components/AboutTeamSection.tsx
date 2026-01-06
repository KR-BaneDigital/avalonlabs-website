import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutTeamSection = () => {
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

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Co-Founder',
      bio: '15+ years in healthcare technology. Former VP of Product at a leading EHR company.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. James Chen',
      role: 'Chief Medical Officer',
      bio: 'Board-certified physician with expertise in geriatric care and healthcare operations.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'AI/ML expert with 20+ years building enterprise healthcare software solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Emily Thompson',
      role: 'VP of Customer Success',
      bio: 'Former senior living operator with deep understanding of facility operations and challenges.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
      name: 'David Park',
      role: 'Head of AI Research',
      bio: 'PhD in Machine Learning. Published researcher in healthcare AI and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    },
    {
      name: 'Lisa Anderson',
      role: 'VP of Compliance',
      bio: 'Healthcare compliance expert ensuring HIPAA adherence and data security across all operations.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-neutral text-neutral-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse team of healthcare veterans, technologists, and AI experts united by a common mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} ref={addToRefs}>
              <Card className="p-6 h-full bg-background border-border hover:shadow-xl transition-all duration-300 group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <a
                      href="#"
                      className="p-2 bg-white rounded-full hover:bg-accent transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={20} className="text-primary" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-body text-muted-foreground">
                  {member.bio}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-accent/20">
            <h3 className="text-h3 font-bold mb-6 text-foreground text-center">
              Join Our Team
            </h3>
            <p className="text-body text-muted-foreground text-center mb-8">
              We're always looking for talented individuals who share our passion for using technology to improve healthcare. If you're excited about AI, healthcare, and making a real difference in people's lives, we'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 font-semibold"
              >
                View Open Positions
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
