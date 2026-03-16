import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  buttonUrl?: string
  variant?: 'hero' | 'models' | 'sub' | 'payments' | 'promo' | 'reviews' | 'seo' | 'contacts'
}

export interface SectionProps extends Section {
  isActive: boolean
}
