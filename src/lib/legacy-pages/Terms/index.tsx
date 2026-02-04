import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header variant="solid" />
      <main className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-jet-navy mb-8">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-12">Last updated: December 19, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing or using FactoryJet's website and services, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">2. Services Description</h2>
              <p className="mb-4">
                FactoryJet provides web development, e-commerce solutions, and digital transformation services including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Custom website design and development</li>
                <li>E-commerce store development (Shopify, WooCommerce)</li>
                <li>Landing page creation</li>
                <li>Website maintenance and support (AMC)</li>
                <li>SEO optimization</li>
                <li>Digital marketing consultation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">3. Project Terms</h2>
              <h3 className="text-xl font-semibold text-jet-navy mb-3">3.1 Project Timeline</h3>
              <p className="mb-4">
                We commit to delivering projects within the agreed timeline (typically 7-14 business days for standard websites).
                Delays caused by client feedback delays, content provision, or scope changes may extend the timeline.
              </p>

              <h3 className="text-xl font-semibold text-jet-navy mb-3">3.2 Revisions</h3>
              <p className="mb-4">
                Each project package includes a specified number of revision rounds. Additional revisions beyond
                the package scope will be billed at our standard hourly rate.
              </p>

              <h3 className="text-xl font-semibold text-jet-navy mb-3">3.3 Content Responsibility</h3>
              <p className="mb-4">
                Clients are responsible for providing all content (text, images, logos) required for the project.
                FactoryJet may use stock images where appropriate, but custom photography or premium assets
                may incur additional costs.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>A 50% advance payment is required to commence work on any project</li>
                <li>The remaining 50% is due upon project completion, before final delivery</li>
                <li>All payments are non-refundable once work has commenced</li>
                <li>Late payments may result in project suspension and additional fees</li>
                <li>Prices are in Indian Rupees (INR) unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                Upon full payment, the client receives full ownership of the final deliverables. FactoryJet retains
                the right to display completed work in our portfolio unless otherwise agreed in writing.
              </p>
              <p className="mb-4">
                Third-party assets (fonts, plugins, themes) may be subject to their respective licenses,
                which will be communicated to the client.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">6. Warranties and Guarantees</h2>
              <p className="mb-4">
                FactoryJet provides a 30-day warranty on all completed work for bug fixes and technical issues.
                This warranty does not cover:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Changes requested by the client after project completion</li>
                <li>Issues caused by third-party modifications</li>
                <li>Problems arising from client's hosting environment</li>
                <li>Content updates or additions</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                FactoryJet shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of our services. Our total liability shall not exceed the amount paid by you
                for the specific service in question.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">8. Termination</h2>
              <p className="mb-4">
                Either party may terminate the agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Client will be billed for work completed up to the termination date</li>
                <li>Any advance payments for uncompleted work may be partially refunded at FactoryJet's discretion</li>
                <li>All client-owned assets will be returned within 14 days</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of India.
                Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-jet-navy mb-4">10. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us at:
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
