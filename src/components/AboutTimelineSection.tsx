import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const AboutTimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    timelineRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !timelineRef.current.includes(el)) {
      timelineRef.current.push(el);
    }
  };

  const milestones = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Avalon Labs .ai was founded by healthcare technology veterans with a vision to transform lead generation for senior care facilities.'
    },
    {
      year: '2022',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone, serving 100 senior living and rehabilitation facilities across 15 states.'
    },
    {
      year: '2022',
      title: 'AI Platform Launch',
      description: 'Launched our proprietary AI-powered lead qualification and conversation platform, achieving 95% accuracy in lead scoring.'
    },
    {
      year: '2023',
      title: 'HIPAA Certification',
      description: 'Achieved full HIPAA compliance certification and SOC 2 Type II attestation, setting new standards for healthcare data security.'
    },
    {
      year: '2023',
      title: 'Industry Expansion',
      description: 'Expanded our services to cover 8 specialized healthcare verticals, including behavioral health and home health agencies.'
    },
    {
      year: '2024',
      title: '500+ Facilities',
      description: 'Surpassed 500 facilities served and processed over 2.5 million leads, helping thousands of families find the care they need.'
    },
    {
      year: '2024',
      title: 'Innovation Award',
      description: 'Recognized as "Best AI Solution for Healthcare" by the National Healthcare Technology Association.'
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Continuing to innovate with advanced predictive analytics, multi-language support, and expanded integrations to serve even more facilities.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-bold mb-4 text-foreground">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a small startup to a trusted partner for hundreds of healthcare facilities
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card className={`p-8 bg-neutral border-border hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className="inline-block px-4 py-2 bg-gradient-1 rounded-full mb-4">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="text-body text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimelineSection;
