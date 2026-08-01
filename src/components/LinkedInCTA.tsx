import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { LinkedInIcon } from '@/components/icons/SocialIcons'
import { Button } from '@/components/Button'
import { SOCIAL_LINKS } from '@/utils/constants'
import { trackEvent } from '@/utils/analytics'

export function LinkedInCTA() {
  return (
    <section className="bg-surface py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden bg-navy px-6 py-16 md:px-14 md:py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 section-photo-b opacity-30" />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-white/20 text-white">
              <LinkedInIcon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-4xl font-medium text-white md:text-5xl">
              Follow our technology insights
            </h2>
            <p className="mt-5 text-base text-white/65 md:text-lg">
              Stay updated on AI, blockchain, real-world assets, and enterprise transformation.
            </p>
            <div className="mt-9 flex justify-center">
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
