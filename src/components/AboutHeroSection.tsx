import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutHeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      )
      .fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.5'
      );
  }, []);

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center bg-gradient-to-br from-secondary via-primary to-secondary">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-24 md:py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                ref={headlineRef}
                className="text-h1 font-bold mb-6 text-white"
              >
                Transforming Healthcare Lead Generation with AI
              </h1>
              <p
                ref={subheadlineRef}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                We're on a mission to help senior care and rehabilitation facilities connect with the people who need them most—using the power of artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80">Facilities Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">2.5M+</div>
                  <div className="text-white/80">Leads Processed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div ref={imageRef}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Avalon Labs team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
