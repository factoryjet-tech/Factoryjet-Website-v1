import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header variant="solid" />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">Last updated: December 19, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">1. Introduction</h2>
              <p className="mb-4">
                FactoryJet Digital Solutions ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-jet-navy mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Billing and payment information</li>
                <li>Project requirements and preferences</li>
                <li>Communication history with our team</li>
              </ul>

              <h3 className="text-xl font-semibold text-jet-navy mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide and improve our web development and e-commerce services</li>
                <li>Communicate with you about projects and inquiries</li>
                <li>Send promotional materials and updates (with your consent)</li>
                <li>Process payments and manage billing</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">4. Information Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (hosting, payment processing, analytics)</li>
                <li><strong>Business Partners:</strong> With your consent, for collaborative projects</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p className="mb-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">5. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience. These include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (Google Ads)</li>
              </ul>
              <p className="mb-4">
                You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
              </ul>
              <p className="mb-4">
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law. Project-related data is typically retained for 3 years
                after project completion.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">8. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request data portability</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">9. Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to review the privacy policies of any websites you visit.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">10. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect
                personal information from children. If we become aware that we have collected personal information
                from a child, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">11. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">12. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> connect@factoryjet.com</li>
                <li><strong>Phone:</strong> +91 96999 77699</li>
                <li><strong>Address:</strong> FactoryJet Digital Solutions, India</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
