import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container mx-auto px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Avalon Labs' services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                Avalon Labs provides AI-powered lead generation solutions for senior care and rehabilitation industries.
                Our services include lead qualification, data analytics, and marketing automation tools designed to
                help healthcare providers connect with potential patients.
              </p>

              <h2>3. User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account credentials and for all
                activities that occur under their account. You agree to provide accurate and complete information
                when creating your account and to update this information as necessary.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by Avalon Labs and are protected
                by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute,
                or create derivative works without our express written permission.
              </p>

              <h2>5. Payment Terms</h2>
              <p>
                Payment terms for our services will be specified in separate agreements or invoices. All fees are
                non-refundable unless otherwise stated. We reserve the right to change pricing with 30 days notice.
              </p>

              <h2>6. Data Privacy and HIPAA Compliance</h2>
              <p>
                We are committed to protecting sensitive healthcare data and maintaining HIPAA compliance.
                Our data handling practices are detailed in our Privacy Policy, which is incorporated into these terms.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                In no event shall Avalon Labs be liable for any indirect, incidental, special, or consequential
                damages arising out of or in connection with your use of our services.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate this agreement at any time. Upon termination, your right to use our
                services will cease immediately.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction
                in which Avalon Labs operates, without regard to conflict of law principles.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul>
                <li>Email: hello@avalonlabs.ai</li>
                <li>Phone: Contact us through our website</li>
              </ul>

              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of significant
                changes via email or through our platform.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
