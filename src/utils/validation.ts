export interface ContactFormData {
  name: string
  company: string
  email: string
  phone: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!data.company.trim()) {
    errors.company = 'Please enter your company.'
  }

  if (!data.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (data.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!data.message.trim()) {
    errors.message = 'Please share a brief message.'
  } else if (data.message.trim().length < 20) {
    errors.message = 'Please provide a bit more detail (at least 20 characters).'
  }

  return errors
}
