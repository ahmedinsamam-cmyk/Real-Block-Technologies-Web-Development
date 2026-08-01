import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { COMPANY } from '@/utils/constants'

const sections = [
  {
    title: '1. Introduction',
    body: `This Privacy Policy describes how ${COMPANY.name} ("we", "us", or "our") collects, uses, and protects information when you visit our website or communicate with our team. This page is a professional placeholder intended for launch and should be reviewed by legal counsel before production use.`,
  },
  {
    title: '2. Information We Collect',
    body: 'We may collect information you voluntarily provide through contact forms, consultation requests, career inquiries, and email correspondence. This may include your name, company, email address, phone number, and message content. We may also collect limited technical data such as browser type, device information, and anonymized usage analytics.',
  },
  {
    title: '3. How We Use Information',
    body: 'We use collected information to respond to inquiries, schedule consultations, improve website experience, communicate about services, and support legitimate business operations. We do not sell personal information.',
  },
  {
    title: '4. Sharing of Information',
    body: 'We may share information with trusted service providers who support website hosting, analytics, communications, or CRM systems, subject to appropriate confidentiality and security obligations. We may also disclose information when required by law or to protect our rights and users.',
  },
  {
    title: '5. Data Security',
    body: 'We implement reasonable administrative, technical, and organizational measures designed to protect information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.',
  },
  {
    title: '7. Your Rights',
    body: 'Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict certain processing of your personal information. To submit a request, contact us using the details below.',
  },
  {
    title: '8. International Visitors',
    body: 'Our services may be accessed globally. If you contact us from outside our primary operating region, your information may be processed in jurisdictions with different data protection laws.',
  },
  {
    title: '9. Updates to This Policy',
    body: 'We may update this Privacy Policy from time to time. Revised versions will be posted on this page with an updated effective date.',
  },
  {
    title: '10. Contact',
    body: `For privacy-related questions, contact ${COMPANY.email}.`,
  },
]

export function PrivacyPage() {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Real Block Technologies. Learn how we collect, use, and protect information."
        path="/privacy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective date: July 31, 2026. This is a professional placeholder policy for website launch."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-display text-xl font-bold text-navy">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
