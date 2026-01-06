import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
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
              Privacy Policy
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
              <h2>1. Introduction</h2>
              <p>
                Avalon Labs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our AI-powered
                lead generation services for healthcare providers.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Business information for healthcare providers</li>
                <li>Account credentials and usage data</li>
                <li>Payment information (processed securely by third parties)</li>
              </ul>

              <h3>Usage Data</h3>
              <p>We automatically collect certain information when you use our services:</p>
              <ul>
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Device information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process transactions and manage accounts</li>
                <li>Improve our AI algorithms and service quality</li>
                <li>Communicate with you about our services</li>
                <li>Ensure compliance with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information:</p>
              <ul>
                <li>With service providers who assist our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With your explicit consent</li>
              </ul>

              <h2>5. Data Security and HIPAA Compliance</h2>
              <p>
                We implement robust security measures to protect your data, including encryption, access controls,
                and regular security assessments. As a healthcare-focused company, we are committed to HIPAA compliance
                and handle protected health information according to applicable regulations.
              </p>

              <h2>6. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability requests</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns,
                and improve our services. You can control cookie preferences through your browser settings.
              </p>

              <h2>8. Third-Party Services</h2>
              <p>
                Our services may integrate with third-party platforms. We are not responsible for the privacy
                practices of these external services. Please review their privacy policies separately.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect personal
                information from children under 13. If we become aware of such collection, we will delete
                the information promptly.
              </p>

              <h2>10. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary for the purposes outlined in this
                policy, unless a longer retention period is required by law.
              </p>

              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own.
                We ensure appropriate safeguards are in place for international data transfers.
              </p>

              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of material changes
                via email or through our platform. Continued use of our services constitutes acceptance
                of the updated policy.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li>Email: hello@avalonlabs.ai</li>
                <li>Phone: Contact us through our website</li>
                <li>Address: Available upon request</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
