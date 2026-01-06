import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Main content animation
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );

      // Floating cards animation
      floatingCardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: 0.5 + index * 0.2,
            ease: 'back.out(1.7)',
          }
        );

        // Continuous floating animation
        gsap.to(card, {
          y: -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Background gradient animation
      gsap.to('.gradient-orb-1', {
        x: 50,
        y: -50,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.gradient-orb-2', {
        x: -50,
        y: 50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToFloatingRefs = (el: HTMLDivElement) => {
    if (el && !floatingCardsRef.current.includes(el)) {
      floatingCardsRef.current.push(el);
    }
  };

  const scrollToDualCTA = () => {
    const element = document.getElementById('dual-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-orb-1 absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="gradient-orb-2 absolute bottom-20 -right-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20">
              <Zap size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">
                AI-Powered Lead Generation
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight"
              style={{ opacity: 0 }}
            >
              Never Miss
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Another Lead
              </span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed"
              style={{ opacity: 0 }}
            >
              Instant response, smart qualification, and automated follow-up for
              senior care and rehab facilities. Convert more leads while your
              team focuses on care.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 mb-12"
              style={{ opacity: 0 }}
            >
              <Button
                size="lg"
                onClick={scrollToDualCTA}
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Get Started Free
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                onClick={() => (window.location.href = '/schedule-demo')}
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-8"
              style={{ opacity: 0 }}
            >
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  90%
                </div>
                <div className="text-sm text-muted-foreground">
                  Faster Response
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">3x</div>
                <div className="text-sm text-muted-foreground">
                  More Bookings
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Facilities Trust Us
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Card 1 - Lead Capture */}
            <div
              ref={addToFloatingRefs}
              className="absolute top-0 right-0 w-80 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">New Lead</div>
                  <div className="text-sm text-muted-foreground">
                    2 seconds ago
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-success">Instant</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Qualification</span>
                  <span className="font-semibold text-primary">High Intent</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-semibold text-accent">Engaged</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    AI responding...
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 - Conversion Stats */}
            <div
              ref={addToFloatingRefs}
              className="absolute bottom-20 right-20 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">This Month</div>
                  <div className="text-sm text-success">↑ 45% increase</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Leads Captured</span>
                    <span className="font-semibold">847</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Qualified</span>
                    <span className="font-semibold">623</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full w-[73%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Converted</span>
                    <span className="font-semibold">412</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full w-[66%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - AI Automation */}
            <div
              ref={addToFloatingRefs}
              className="absolute top-40 left-0 w-64 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">AI Automation</div>
                  <div className="text-sm text-muted-foreground">
                    Working 24/7
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">
                      Auto-Responses
                    </span>
                  </div>
                  <span className="text-xs font-bold text-success">847</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">
                      Qualified Today
                    </span>
                  </div>
                  <span className="text-xs font-bold text-primary">623</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-foreground">
                      Booked Tours
                    </span>
                  </div>
                  <span className="text-xs font-bold text-accent">412</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
