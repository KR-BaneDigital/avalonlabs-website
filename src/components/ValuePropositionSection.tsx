import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, MessageSquare, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ValuePropositionSection = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Instant Response',
      description:
        'Respond to every inquiry within seconds via SMS and email—never lose a lead to slow follow-up again.',
    },
    {
      icon: MessageSquare,
      title: 'Smart Qualification',
      description:
        'AI qualifies leads based on urgency, services needed, and readiness—routing the right inquiries to your team.',
    },
    {
      icon: Shield,
      title: 'Automated Follow-Up',
      description:
        'Reduce drop-off and no-shows with intelligent follow-up sequences that keep prospects engaged.',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-16 md:py-20 bg-neutral text-neutral-foreground"
    >
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capture, qualify, and convert every lead automatically—while your team focuses on care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                ref={addToRefs}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 p-6 bg-gradient-1 rounded-full">
                  <Icon size={48} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-h3 font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
