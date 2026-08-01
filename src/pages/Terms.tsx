import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { COMPANY } from '@/utils/constants'

const sections = [
  {
    title: '1. Agreement to Terms',
    body: `By accessing or using the ${COMPANY.name} website, you agree to these Terms of Use. If you do not agree, please discontinue use of the site. This page is a professional placeholder and should be reviewed by legal counsel prior to production reliance.`,
  },
  {
    title: '2. Informational Purpose',
    body: 'Content on this website is provided for general informational purposes about our services and capabilities. It does not constitute legal, financial, investment, tax, or other professional advice. Engagements are governed by separate written agreements.',
  },
  {
    title: '3. Intellectual Property',
    body: `All trademarks, logos, text, graphics, and other materials on this website are owned by ${COMPANY.name} or its licensors and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or exploit site content without prior written permission.`,
  },
  {
    title: '4. Acceptable Use',
    body: 'You agree not to misuse the website, attempt unauthorized access, interfere with site operations, submit malicious content, or use the site in any manner that violates applicable laws.',
  },
  {
    title: '5. Third-Party Links',
    body: 'The website may contain links to third-party sites. We are not responsible for the content, policies, or practices of third-party websites.',
  },
  {
    title: '6. Disclaimer of Warranties',
    body: 'The website and its content are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.',
  },
  {
    title: '7. Limitation of Liability',
    body: `To the fullest extent permitted by law, ${COMPANY.name} shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the website.`,
  },
  {
    title: '8. Indemnification',
    body: `You agree to indemnify and hold harmless ${COMPANY.name} from claims arising out of your misuse of the website or violation of these Terms.`,
  },
  {
    title: '9. Changes to Terms',
    body: 'We may update these Terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.',
  },
  {
    title: '10. Contact',
    body: `For questions regarding these Terms, contact ${COMPANY.email}.`,
  },
]

export function TermsPage() {
  return (
    <PageTransition>
      <SEO
        title="Terms of Use"
        description="Terms of Use for the Real Block Technologies website."
        path="/terms"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Effective date: July 31, 2026. This is a professional placeholder agreement for website launch."
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
