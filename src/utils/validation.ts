export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  industry: string
  country: string
  phone: string
  serviceInterest: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.firstName.trim()) errors.firstName = 'Please enter your first name.'
  if (!data.lastName.trim()) errors.lastName = 'Please enter your last name.'
  if (!data.company.trim()) errors.company = 'Please enter your company.'

  if (!data.email.trim()) {
    errors.email = 'Please enter your business email.'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.jobTitle.trim()) errors.jobTitle = 'Please enter your job title.'
  if (!data.industry.trim()) errors.industry = 'Please select an industry.'
  if (!data.country.trim()) errors.country = 'Please select a country.'
  if (!data.serviceInterest.trim()) errors.serviceInterest = 'Please select a service interest.'

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
