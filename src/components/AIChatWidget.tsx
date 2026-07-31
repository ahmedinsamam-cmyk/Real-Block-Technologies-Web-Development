import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X, Bot, User } from 'lucide-react'
import { Button } from '@/components/Button'
import { captureLead } from '@/services/leadService'
import { trackEvent } from '@/utils/analytics'
import { sanitizeText, checkRateLimit } from '@/utils/security'

interface ChatMessage {
  id: string
  role: 'assistant' | 'user'
  text: string
}

const KNOWLEDGE: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ['rwa', 'token', 'tokenization', 'real world', 'asset'],
    answer:
      'Real World Asset (RWA) tokenization creates a digital representation of physical assets on blockchain—supporting ownership models, investor access, and lifecycle management. Explore our guide or book a discovery call to assess fit.',
  },
  {
    keywords: ['ai', 'artificial', 'automation', 'agent', 'analytics'],
    answer:
      'Our AI solutions cover strategy, automation, agents, business intelligence, predictive analytics, and document intelligence. We help enterprises move from pilots to scaled operating impact.',
  },
  {
    keywords: ['blockchain', 'web3', 'smart contract'],
    answer:
      'We provide blockchain advisory spanning strategy, architecture, security considerations, and implementation guidance aligned to enterprise controls.',
  },
  {
    keywords: ['consult', 'book', 'meeting', 'call', 'schedule', 'calendly'],
    answer:
      'You can book a 30-minute Discovery Call, 60-minute Strategy Session, or Enterprise Transformation Workshop on our Contact page. Would you like me to capture your details for follow-up?',
  },
  {
    keywords: ['price', 'cost', 'fee', 'pricing'],
    answer:
      'Engagements are proposal-based and scoped to objectives—currency-neutral and tailored for global clients. Share your priorities and we will recommend a suitable approach.',
  },
  {
    keywords: ['service', 'offer', 'help', 'what do you'],
    answer:
      'Real Block Technologies helps enterprises with RWA tokenization, AI business solutions, blockchain advisory, treasury/fintech, enterprise consulting, and custom software development.',
  },
]

const OPENERS: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    text: 'Hello — I am the Real Block Technologies assistant. Ask about AI solutions, RWA tokenization, blockchain consulting, or book a consultation. How can I help?',
  },
]

function matchAnswer(input: string): string {
  const q = input.toLowerCase()
  const hit = KNOWLEDGE.find((item) => item.keywords.some((k) => q.includes(k)))
  if (hit) return hit.answer
  return 'Thanks for your question. Our team specializes in AI, blockchain, and real-world asset consulting. You can browse Services, download resources, or share your email and we will follow up.'
}

type ChatProvider = 'builtin' | 'intercom' | 'crisp' | 'hubspot'

export function AIChatWidget() {
  const provider = (import.meta.env.VITE_CHAT_PROVIDER as ChatProvider | undefined) ?? 'builtin'
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(OPENERS)
  const [input, setInput] = useState('')
  const [leadMode, setLeadMode] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [leadSent, setLeadSent] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const showBuiltin = provider === 'builtin' || !import.meta.env.VITE_CHAT_PROVIDER

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open, leadMode])

  // Placeholder hooks for third-party chat widgets
  useEffect(() => {
    if (provider === 'intercom' && import.meta.env.VITE_INTERCOM_APP_ID) {
      // window.Intercom('boot', { app_id: ... })
    }
    if (provider === 'crisp' && import.meta.env.VITE_CRISP_WEBSITE_ID) {
      // window.$crisp / CRISP_WEBSITE_ID
    }
    if (provider === 'hubspot' && import.meta.env.VITE_HUBSPOT_CHAT_ID) {
      // HubSpot conversations widget
    }
  }, [provider])

  const recommended = useMemo(
    () => [
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'RWA Guide', href: '/resources/rwa-tokenization-guide' },
      { label: 'Book Consultation', href: '/contact#consultation' },
    ],
    [],
  )

  if (!showBuiltin) return null

  const sendMessage = () => {
    const text = sanitizeText(input, 500)
    if (!text) return
    const rate = checkRateLimit('chat_message', 20, 60_000)
    if (!rate.allowed) return

    const userMsg: ChatMessage = { id: `u_${Date.now()}`, role: 'user', text }
    const answer = matchAnswer(text)
    const botMsg: ChatMessage = { id: `a_${Date.now()}`, role: 'assistant', text: answer }
    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput('')

    if (/email|contact|follow|call|consult/i.test(text)) {
      setLeadMode(true)
    }
  }

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  const submitLead = async (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    const result = await captureLead({
      name: name.trim() || undefined,
      email: email.trim(),
      source: 'chat_widget',
      message: 'Lead captured via AI chat assistant',
    })
    if (result.success) {
      setLeadSent(true)
      setLeadMode(false)
      setMessages((prev) => [
        ...prev,
        {
          id: `a_lead_${Date.now()}`,
          role: 'assistant',
          text: 'Thank you — your details were captured. Our team will follow up shortly. You can also book a consultation on the Contact page.',
        },
      ])
      trackEvent({ event: 'chat_lead', label: 'ai_chat_widget' })
    }
  }

  return (
    <div className="fixed right-4 bottom-20 z-[70] flex flex-col items-end gap-3 sm:right-6 sm:bottom-24">
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex h-[min(32rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-navy/20"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
          >
            <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-gold" />
                <div>
                  <p className="font-display text-sm font-bold">RBT Assistant</p>
                  <p className="text-[0.65rem] text-white/60">AI sales & service guidance</p>
                </div>
              </div>
              <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
                <X className="h-5 w-5 text-white/80" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto bg-surface p-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                      <Bot className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-md bg-royal text-white'
                        : 'rounded-bl-md border border-border bg-white text-ink'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
                      <User className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {recommended.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-border bg-white px-2.5 py-1 text-[0.65rem] font-semibold text-navy hover:border-royal hover:text-royal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {leadMode && !leadSent && (
                <form onSubmit={submitLead} className="space-y-2 rounded-xl border border-border bg-white p-3">
                  <p className="text-[0.7rem] font-semibold text-navy">Leave your details for follow-up</p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full rounded-md border border-border px-2.5 py-1.5 text-xs outline-none focus:border-royal"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Business email"
                    type="email"
                    required
                    className="w-full rounded-md border border-border px-2.5 py-1.5 text-xs outline-none focus:border-royal"
                  />
                  <Button type="submit" size="sm" className="w-full">
                    Submit
                  </Button>
                </form>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border bg-white p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Ask about AI, RWA, consulting..."
                  className="flex-1 rounded-lg border border-border px-3 py-2 text-xs outline-none focus:border-royal"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal text-white"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-[0.6rem] text-ink-muted">
                Ready for Intercom, Crisp, or HubSpot Chat via VITE_CHAT_PROVIDER.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-lg shadow-navy/30 transition hover:bg-royal hover:text-white"
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        onClick={() => {
          setOpen((v) => !v)
          if (!open) trackEvent({ event: 'chat_open', label: 'ai_chat_widget' })
        }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
