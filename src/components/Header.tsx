import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const industries = [
    {
      name: 'Senior Living Communities',
      slug: 'senior-living',
      description: 'Independent, Assisted Living & Memory Care'
    },
    {
      name: 'Physical Therapy Clinics',
      slug: 'physical-therapy',
      description: 'Outpatient PT & Sports Medicine'
    },
    {
      name: 'Rehabilitation Centers',
      slug: 'rehabilitation-centers',
      description: 'Substance Abuse, Outpatient, IOP & Mental Health'
    },
    {
      name: 'Occupational Therapy Clinics',
      slug: 'occupational-therapy',
      description: 'Pediatric & Adult OT Services'
    },
    {
      name: 'Behavioral Health Clinics',
      slug: 'behavioral-health',
      description: 'Mental Health & Counseling Services'
    },
    {
      name: 'Home Health Agencies',
      slug: 'home-health',
      description: 'In-Home Care & Support Services'
    },
    {
      name: 'Skilled Nursing Facilities (SNFs)',
      slug: 'skilled-nursing',
      description: 'SNFs & Long-Term Care'
    },
    {
      name: 'Transitional Care & Post-Acute Facilities',
      slug: 'transitional-care',
      description: 'Post-Acute & Transitional Care'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-primary/90 backdrop-blur-sm'
      }`}
      style={{ minHeight: '64px' }}
    >
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white">
              Avalon Labs<span className="text-white">.ai</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/features"
              className="text-white hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Features
            </a>
            <a
              href="/about"
              className="text-white hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:text-accent transition-colors duration-200 cursor-pointer"
            >
              Contact
            </a>

            {/* Desktop Industries Dropdown */}
            <div className="relative">
              <Button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-md font-medium flex items-center gap-2"
              >
                Industries
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                />
              </Button>
              
              {isIndustriesOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsIndustriesOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-[650px] bg-white rounded-lg shadow-2xl border border-gray-200 z-20 max-h-[600px] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {industries.map((industry, index) => (
                        <a
                          key={index}
                          href={`/industry/${industry.slug}`}
                          className="block p-4 rounded-lg hover:bg-accent/10 transition-colors duration-200 border border-transparent hover:border-accent/20"
                          onClick={() => setIsIndustriesOpen(false)}
                        >
                          <div className="font-semibold text-foreground text-base mb-1">
                            {industry.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {industry.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Schedule Demo Button */}
            <a href="/schedule-demo">
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-md font-medium">
                Schedule Demo
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-primary rounded-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="/features"
                className="text-white hover:text-accent transition-colors duration-200 text-left py-3 cursor-pointer block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/about"
                className="text-white hover:text-accent transition-colors duration-200 text-left py-3 cursor-pointer block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="text-white hover:text-accent transition-colors duration-200 text-left py-3 cursor-pointer block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/schedule-demo"
                className="text-white hover:text-accent transition-colors duration-200 text-left py-3 cursor-pointer block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Demo
              </a>
              <div className="border-t border-white/20 pt-4">
                <p className="text-white text-sm mb-3 font-bold">Industries</p>
                {industries.map((industry, index) => (
                  <a
                    key={index}
                    href={`/industry/${industry.slug}`}
                    className="text-white hover:text-accent transition-colors duration-200 text-left py-2 cursor-pointer block text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
