import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-neutral text-neutral-foreground"
    >
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-h2 font-bold mb-6 text-foreground">
              Smart AI for Compassionate Industries
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              At Avalon Labs .ai, we believe that technology should enhance human connection, not replace it. Our mission is to empower senior care and rehabilitation providers with intelligent tools that streamline operations while preserving the personal touch that matters most.
            </p>
            <p className="text-body text-muted-foreground mb-6">
              Founded by healthcare technology veterans, we understand the unique challenges facing care providers today. Our AI-powered platform is built specifically for the nuances of senior care, combining cutting-edge machine learning with deep industry expertise.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              We're committed to helping you focus on what you do best—providing exceptional care—while we handle the complexity of lead generation, qualification, and conversion optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Facilities Served</div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="text-4xl font-bold text-accent mb-2">2.5M+</div>
                <div className="text-sm text-muted-foreground">Leads Processed</div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <img
              src="https://c.animaapp.com/mk2w2yof0u073X/img/ai_4.png"
              alt="avalon team collaboration scene"
              className="w-full h-auto rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
