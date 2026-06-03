// src/design-system/icons.ts
// DERMA.M Icon Registry — single source of truth
// All components import from here, never directly from lucide-react

export {
  // Navigation & UI
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  X,
  Menu,
  ExternalLink,

  // Actions
  Check,
  Plus,
  Minus,

  // Contact & Booking
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  MessageCircle,

  // Trust & Safety
  ShieldCheck,
  Award,
  BadgeCheck,
  Star,
  Info,

  // Treatment & Medical
  Sparkles,
  Droplets,
  Zap,
  Activity,
  Eye,
  Heart,
  Leaf,
  FlaskConical,
  Syringe,
  Microscope,

  // Media
  Play,
  Image,
  Camera,

  // Social
  Instagram,
  Facebook,


  // Extended UI semantics used across DERMA.M
  Globe,
  Target,
  Users,
  BarChart,
  Languages,
  ParkingCircle,
  AlertCircle,
  Layers,
  Maximize,
  Palette,
  QrCode,
  Download,
  Stethoscope,
  Cpu,
  Shield,
  Circle,
} from 'lucide-react'

// Semantic aliases — use these names in components, not the raw Lucide names
export { Check as IconCheck } from 'lucide-react'
export { ShieldCheck as IconSafety } from 'lucide-react'
export { Clock as IconDuration } from 'lucide-react'
export { Award as IconCertified } from 'lucide-react'
export { MapPin as IconLocation } from 'lucide-react'
export { MessageCircle as IconWhatsApp } from 'lucide-react'
export { Calendar as IconBooking } from 'lucide-react'
export { ChevronDown as IconAccordion } from 'lucide-react'
export { ArrowRight as IconLink } from 'lucide-react'
export { Star as IconRating } from 'lucide-react'
export { Sparkles as IconTreatment } from 'lucide-react'
export { Activity as IconResults } from 'lucide-react'
export { Droplets as IconHydration } from 'lucide-react'
export { Zap as IconEnergy } from 'lucide-react'
export { Leaf as IconNatural } from 'lucide-react'
export { FlaskConical as IconFormula } from 'lucide-react'
export { Syringe as IconInjection } from 'lucide-react'
export { Eye as IconGlow } from 'lucide-react'
export { Heart as IconWellbeing } from 'lucide-react'
export { BadgeCheck as IconVerified } from 'lucide-react'
export { Info as IconDisclaimer } from 'lucide-react'
export { Play as IconPlay } from 'lucide-react'

export type { LucideIcon, LucideProps } from 'lucide-react'
