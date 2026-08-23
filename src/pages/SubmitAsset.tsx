import { useState, type FormEvent } from 'react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { captureLead } from '@/services/leadService'

const STEPS = ['Company', 'Asset', 'Economics', 'Economic rights', 'Capital need']

const empty = {
  company: '', website: '', contact: '', role: '', email: '',
  assetName: '', commodity: '', country: '', stage: '', ownership: '',
  resource: '', production: '', mineLife: '', estimatedValue: '', existingRevenue: '',
  royalty: '', offtake: '', debt: '', streaming: '', jv: '', otherRights: '',
  amount: '', purpose: '', preferredStructure: '', timeline: '',
}

export function SubmitAssetPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(empty)
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const set = (key: keyof typeof empty, value: string) => setForm((prev) => ({ ...prev, [key]: value }))

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (step < STEPS.length - 1) {
      next()
      return
    }
    setSending(true)
    await captureLead({
      name: form.contact,
      email: form.email,
      company: form.company,
      jobTitle: form.role,
      country: form.country,
      source: 'asset_submission',
      message: JSON.stringify(form),
    })
    setSending(false)
    setDone(true)
  }

  const input = (label: string, key: keyof typeof empty, type = 'text') => (
    <label className="block text-sm font-semibold text-navy">
      {label}
      <input
        required={['company','contact','email','assetName','commodity'].includes(key)}
        type={type}
        value={form[key]}
        onChange={(e) => set(key, e.target.value)}
        className="mt-1.5 w-full border border-border px-3.5 py-2.5 text-sm outline-none focus:border-copper"
      />
    </label>
  )

  return (
    <PageTransition>
      <SEO
        title="Submit Your Asset"
        description="Request a Resource Capital assessment. Tell us what you own, produce or are developing — this is not an application for funding."
        path="/submit-asset"
      />
      <PageHero
        eyebrow="B2B assessment"
        title="Submit Your Asset"
        description="Tell us what you own, what you produce or what you're developing. We will help identify potential Resource Capital structures that could be explored around the asset. This is not an application for funding and does not promise financing."
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {done ? (
            <div className="border border-border p-10 text-center">
              <h2 className="font-display text-3xl text-navy">Request received</h2>
              <p className="mt-4 text-ink-muted">
                Thank you. Our team will review the information and follow up regarding a potential Resource Capital assessment. Submitting an asset does not constitute an application for funding.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="border border-border p-6 md:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-copper uppercase">
                Step {step + 1} of {STEPS.length} — {STEPS[step]}
              </p>
              <div className="mt-6 grid gap-4">
                {step === 0 && (
                  <>
                    {input('Company', 'company')}
                    {input('Website', 'website')}
                    {input('Contact name', 'contact')}
                    {input('Role', 'role')}
                    {input('Email', 'email', 'email')}
                  </>
                )}
                {step === 1 && (
                  <>
                    {input('Asset name', 'assetName')}
                    {input('Commodity', 'commodity')}
                    {input('Country', 'country')}
                    {input('Development stage', 'stage')}
                    {input('Ownership', 'ownership')}
                  </>
                )}
                {step === 2 && (
                  <>
                    {input('Resource / reserve', 'resource')}
                    {input('Production', 'production')}
                    {input('Mine life', 'mineLife')}
                    {input('Estimated value', 'estimatedValue')}
                    {input('Existing revenue', 'existingRevenue')}
                  </>
                )}
                {step === 3 && (
                  <>
                    {input('Royalty', 'royalty')}
                    {input('Offtake', 'offtake')}
                    {input('Debt', 'debt')}
                    {input('Streaming', 'streaming')}
                    {input('Joint venture', 'jv')}
                    {input('Other rights / encumbrances', 'otherRights')}
                  </>
                )}
                {step === 4 && (
                  <>
                    {input('Indicative amount', 'amount')}
                    {input('Purpose', 'purpose')}
                    {input('Preferred structure', 'preferredStructure')}
                    {input('Timeline', 'timeline')}
                  </>
                )}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {step > 0 && (
                  <Button type="button" variant="ghost" onClick={back}>
                    Back
                  </Button>
                )}
                <Button type="submit" variant="primary" disabled={sending}>
                  {step === STEPS.length - 1 ? (sending ? 'Sending…' : 'Request Resource Capital Assessment') : 'Continue'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
