import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Agreement to Terms</h2>
              <p>
                By accessing or using the website of Pamela D. ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Use of the Website</h2>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates any applicable laws or regulations</li>
                <li>Interfere with or disrupt the website or servers connected to the website</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
                <li>Use automated systems to access the website without permission</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to poetry, text, graphics, logos, images, and software, is the property of Pamela D. and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from this website without our prior written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Workshop Enrollment</h2>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enrollment Process</h3>
                <p>When you enroll in a workshop through our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must provide accurate and complete information</li>
                  <li>You will receive a confirmation email with enrollment details</li>
                  <li>You will receive calendar links to add the workshop to your calendar</li>
                  <li>Your enrollment information will be shared with the workshop administrator</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Workshop Cancellation and Refunds</h3>
                <p>
                  Workshop schedules, content, and availability are subject to change. We reserve the right to cancel or reschedule workshops at any time. In the event of cancellation, we will notify enrolled participants via email.
                </p>
                <p className="mt-2">
                  Refund policies, if applicable, will be communicated at the time of enrollment or in separate workshop-specific terms.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">User Accounts and Information</h2>
              <p>
                When you provide information to us (such as when enrolling in a workshop), you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as necessary</li>
                <li>Accept responsibility for all activities that occur using your information</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Email Communications</h2>
              <p>
                By enrolling in a workshop or contacting us, you consent to receive emails from us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Workshop enrollment confirmations</li>
                <li>Calendar invitations</li>
                <li>Administrative communications</li>
                <li>Updates about workshops and events</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Third-Party Links and Services</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of any third-party website or service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Disclaimer of Warranties</h2>
              <p>
                The website and its content are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The website will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The website or server are free of viruses or other harmful components</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Pamela D. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Pamela D. from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising out of or relating to your use of the website, violation of these Terms, or infringement of any rights of another.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Pamela D. operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mt-2">
                By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-2">
                <li><strong>Email:</strong> pameladpoetry@yahoo.com</li>
                <li><strong>Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Page</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

