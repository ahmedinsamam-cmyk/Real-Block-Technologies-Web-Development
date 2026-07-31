/**
 * Internal lead dashboard architecture (future admin app).
 * Data can be sourced from HubSpot + analytics + local lead store via API.
 */

export interface DashboardKpi {
  id: string
  label: string
  value: number
  deltaLabel?: string
}

export interface DashboardLeadRow {
  id: string
  name: string
  email: string
  company: string
  source: string
  priority: 'high' | 'medium' | 'low'
  createdAt: string
}

export interface LeadDashboardSnapshot {
  generatedAt: string
  kpis: DashboardKpi[]
  recentLeads: DashboardLeadRow[]
  trafficSources: Array<{ source: string; sessions: number }>
  notes: string[]
}

export function buildDashboardScaffold(): LeadDashboardSnapshot {
  return {
    generatedAt: new Date().toISOString(),
    kpis: [
      { id: 'leads', label: 'Leads received', value: 0 },
      { id: 'consultations', label: 'Consultations booked', value: 0 },
      { id: 'downloads', label: 'Resource downloads', value: 0 },
      { id: 'subscribers', label: 'Newsletter subscribers', value: 0 },
    ],
    recentLeads: [],
    trafficSources: [
      { source: 'Direct', sessions: 0 },
      { source: 'Organic Search', sessions: 0 },
      { source: 'LinkedIn', sessions: 0 },
      { source: 'Referral', sessions: 0 },
    ],
    notes: [
      'Connect HubSpot + GA4 APIs to populate live KPIs.',
      'Deploy as an authenticated internal route or separate admin app.',
      'Enforce role-based access and audit logging before production use.',
    ],
  }
}
