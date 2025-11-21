import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
              <p>
                Pamela D. ("we," "our," or "us") operates this poetry website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, enroll in workshops, or interact with our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                <p>When you enroll in a workshop or contact us, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>First name and last name</li>
                  <li>Email address</li>
                  <li>Any additional information you voluntarily provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                <p>We may automatically collect certain information about your device and how you interact with our website, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages you visit and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process workshop enrollments and send confirmation emails</li>
                <li>Send calendar invitations for enrolled workshops</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send administrative information, such as updates to our terms and policies</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Email Communications</h2>
              <p>
                When you enroll in a workshop, we will send you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A confirmation email with your enrollment details</li>
                <li>Calendar links (Google Calendar and Apple Calendar) to add the workshop to your calendar</li>
              </ul>
              <p className="mt-4">
                We may also send you administrative emails related to your enrollment or our services. You cannot opt out of these communications as they are necessary for the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We use third-party services (such as email service providers) to operate our website and send emails. These providers have access to your information only to perform specific tasks on our behalf.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the Contact section below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but this may limit some functionality of the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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

