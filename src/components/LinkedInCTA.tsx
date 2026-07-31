import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { LinkedInIcon } from '@/components/icons/SocialIcons'
import { Button } from '@/components/Button'
import { SOCIAL_LINKS } from '@/utils/constants'
import { trackEvent } from '@/utils/analytics'

export function LinkedInCTA() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border bg-navy px-6 py-12 md:px-12 md:py-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 grid-tech opacity-30" />
          <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-royal/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#0A66C2]">
              <LinkedInIcon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Follow Our Technology Insights
            </h2>
            <p className="mt-4 text-base text-white/70 md:text-lg">
              Stay updated with our latest insights on AI, Blockchain, Real World Assets, and enterprise
              transformation.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                variant="gold"
                size="lg"
                onClick={() => trackEvent({ event: 'linkedin_follow', label: 'linkedin_cta_section' })}
              >
                Follow Us on LinkedIn
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
