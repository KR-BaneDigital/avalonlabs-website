import { Building2, Heart, Brain, Home, Stethoscope, Users, Hospital, Activity } from 'lucide-react';

export interface Industry {
  slug: string;
  name: string;
  icon: any;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  challenges: string[];
  solutions: string[];
  benefits: {
    title: string;
    description: string;
    icon: any;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const industries: Industry[] = [
  {
    slug: 'senior-living',
    name: 'Senior Living Communities',
    icon: Building2,
    shortDescription: 'Independent, Assisted Living & Memory Care',
    heroTitle: 'Transform Lead Generation for Senior Living Communities',
    heroDescription: 'AI-powered solutions designed specifically for independent living, assisted living, and memory care facilities to attract and convert more qualified residents.',
    heroImage: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&h=600&fit=crop',
    challenges: [
      'Long sales cycles with multiple family decision-makers',
      'High cost per lead with low conversion rates',
      'Difficulty qualifying leads based on care needs and budget',
      'Managing inquiries across multiple care levels',
      'Tracking family engagement throughout the decision process'
    ],
    solutions: [
      'AI-powered lead qualification based on care level needs',
      'Automated family engagement workflows',
      'Predictive scoring for move-in likelihood',
      'Multi-touchpoint conversation tracking',
      'Real-time availability and pricing intelligence'
    ],
    benefits: [
      {
        title: 'Faster Occupancy',
        description: 'Reduce time-to-occupancy by 40% with intelligent lead prioritization and automated follow-ups.',
        icon: Activity
      },
      {
        title: 'Better Qualified Leads',
        description: 'AI filters leads based on care needs, budget, and timeline to focus on high-intent prospects.',
        icon: Users
      },
      {
        title: 'Family Engagement',
        description: 'Track and nurture multiple family members throughout the decision-making journey.',
        icon: Heart
      }
    ],
    stats: [
      { label: 'Increase in Qualified Leads', value: '65%' },
      { label: 'Reduction in Sales Cycle', value: '40%' },
      { label: 'Improvement in Conversion', value: '55%' }
    ]
  },
  {
    slug: 'physical-therapy',
    name: 'Physical Therapy Clinics',
    icon: Activity,
    shortDescription: 'Outpatient PT & Sports Medicine',
    heroTitle: 'Grow Your Physical Therapy Practice with Smart Lead Generation',
    heroDescription: 'Attract more patients and fill your schedule with AI-driven lead generation and conversion optimization for physical therapy clinics.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    challenges: [
      'High no-show rates for initial consultations',
      'Insurance verification delays',
      'Difficulty communicating treatment value',
      'Competition from hospital-based PT',
      'Managing referral relationships'
    ],
    solutions: [
      'Automated appointment confirmation and reminders',
      'Insurance pre-qualification workflows',
      'Educational content delivery based on condition',
      'Referral source tracking and optimization',
      'Real-time scheduling integration'
    ],
    benefits: [
      {
        title: 'Reduced No-Shows',
        description: 'Decrease no-show rates by 50% with intelligent reminder sequences and engagement.',
        icon: Activity
      },
      {
        title: 'Faster Scheduling',
        description: 'Convert inquiries to appointments 3x faster with automated scheduling and follow-up.',
        icon: Hospital
      },
      {
        title: 'Better Patient Education',
        description: 'Deliver personalized treatment information that builds trust and commitment.',
        icon: Brain
      }
    ],
    stats: [
      { label: 'Reduction in No-Shows', value: '50%' },
      { label: 'Faster Appointment Booking', value: '3x' },
      { label: 'Increase in Patient Volume', value: '45%' }
    ]
  },
  {
    slug: 'rehabilitation-centers',
    name: 'Rehabilitation Centers',
    icon: Heart,
    shortDescription: 'Substance Abuse, Outpatient, IOP & Mental Health',
    heroTitle: 'Compassionate Lead Solutions for Rehabilitation Centers',
    heroDescription: 'HIPAA-compliant AI technology that helps substance abuse, outpatient, IOP, and mental health facilities connect with those who need care most.',
    heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop',
    challenges: [
      'Sensitive, time-critical inquiries requiring immediate response',
      'Insurance verification and authorization complexity',
      'High emotional stakes in decision-making',
      'Maintaining HIPAA compliance throughout intake',
      'Managing crisis situations and urgent admissions'
    ],
    solutions: [
      '24/7 AI-powered crisis response and triage',
      'Automated insurance verification and VOB',
      'Compassionate conversation flows for sensitive topics',
      'HIPAA-compliant data handling and storage',
      'Urgent admission prioritization and routing'
    ],
    benefits: [
      {
        title: '24/7 Availability',
        description: 'Never miss a critical inquiry with round-the-clock AI-powered response and triage.',
        icon: Activity
      },
      {
        title: 'Faster Admissions',
        description: 'Reduce time-to-admission by 60% with automated verification and intake workflows.',
        icon: Hospital
      },
      {
        title: 'HIPAA Compliance',
        description: 'Enterprise-grade security ensures all patient data is protected and compliant.',
        icon: Heart
      }
    ],
    stats: [
      { label: 'Reduction in Response Time', value: '90%' },
      { label: 'Faster Admissions Process', value: '60%' },
      { label: 'Increase in Admission Rate', value: '70%' }
    ]
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy Clinics',
    icon: Stethoscope,
    shortDescription: 'Pediatric & Adult OT Services',
    heroTitle: 'Fill Your OT Schedule with Qualified Patients',
    heroDescription: 'Specialized lead generation for occupational therapy clinics serving pediatric and adult populations.',
    heroImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&h=600&fit=crop',
    challenges: [
      'Educating families on OT benefits and process',
      'Long waitlists and scheduling complexity',
      'Insurance authorization requirements',
      'Specialized equipment and space constraints',
      'Coordinating with schools and other providers'
    ],
    solutions: [
      'Educational content automation for OT services',
      'Intelligent waitlist management and prioritization',
      'Insurance pre-authorization tracking',
      'Capacity-based scheduling optimization',
      'Multi-provider coordination workflows'
    ],
    benefits: [
      {
        title: 'Better Patient Education',
        description: 'Automated educational content helps families understand OT value and process.',
        icon: Brain
      },
      {
        title: 'Optimized Scheduling',
        description: 'Fill cancellations and manage waitlists efficiently with AI-powered scheduling.',
        icon: Activity
      },
      {
        title: 'Streamlined Authorization',
        description: 'Track and manage insurance authorizations to reduce administrative burden.',
        icon: Stethoscope
      }
    ],
    stats: [
      { label: 'Reduction in Scheduling Gaps', value: '55%' },
      { label: 'Faster Authorization Process', value: '45%' },
      { label: 'Increase in Patient Retention', value: '60%' }
    ]
  },
  {
    slug: 'behavioral-health',
    name: 'Behavioral Health Clinics',
    icon: Brain,
    shortDescription: 'Mental Health & Counseling Services',
    heroTitle: 'Connect More Patients with Mental Health Care',
    heroDescription: 'Sensitive, HIPAA-compliant lead generation for behavioral health clinics and counseling services.',
    heroImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop',
    challenges: [
      'Stigma and privacy concerns affecting outreach',
      'High demand with limited provider availability',
      'Insurance network and coverage complexity',
      'Crisis situations requiring immediate response',
      'Matching patients with appropriate therapists'
    ],
    solutions: [
      'Privacy-first communication and data handling',
      'AI-powered therapist matching based on needs',
      'Automated insurance verification and coverage checks',
      'Crisis detection and priority routing',
      'Waitlist management with regular engagement'
    ],
    benefits: [
      {
        title: 'Better Patient Matching',
        description: 'AI matches patients with therapists based on specialization, availability, and preferences.',
        icon: Users
      },
      {
        title: 'Crisis Response',
        description: 'Intelligent triage identifies urgent situations and routes to appropriate resources.',
        icon: Heart
      },
      {
        title: 'Privacy Protection',
        description: 'HIPAA-compliant systems protect sensitive mental health information.',
        icon: Brain
      }
    ],
    stats: [
      { label: 'Improvement in Patient Matching', value: '75%' },
      { label: 'Reduction in Wait Times', value: '40%' },
      { label: 'Increase in Appointment Attendance', value: '50%' }
    ]
  },
  {
    slug: 'home-health',
    name: 'Home Health Agencies',
    icon: Home,
    shortDescription: 'In-Home Care & Support Services',
    heroTitle: 'Scale Your Home Health Agency with Smart Lead Generation',
    heroDescription: 'AI-powered solutions to help home health agencies attract, qualify, and convert more patients needing in-home care.',
    heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=600&fit=crop',
    challenges: [
      'Geographic service area limitations',
      'Caregiver availability and scheduling',
      'Complex insurance and Medicare requirements',
      'Family decision-maker coordination',
      'Urgent care needs requiring fast response'
    ],
    solutions: [
      'Geographic qualification and routing',
      'Caregiver availability matching',
      'Automated insurance and Medicare verification',
      'Family communication coordination',
      'Urgent care prioritization and dispatch'
    ],
    benefits: [
      {
        title: 'Geographic Optimization',
        description: 'Automatically qualify leads based on service area and caregiver availability.',
        icon: Home
      },
      {
        title: 'Faster Care Starts',
        description: 'Reduce time from inquiry to first visit by 50% with automated workflows.',
        icon: Activity
      },
      {
        title: 'Better Caregiver Matching',
        description: 'Match patients with caregivers based on needs, schedule, and preferences.',
        icon: Users
      }
    ],
    stats: [
      { label: 'Reduction in Time-to-Care', value: '50%' },
      { label: 'Increase in Service Area Coverage', value: '35%' },
      { label: 'Improvement in Caregiver Utilization', value: '45%' }
    ]
  },
  {
    slug: 'skilled-nursing',
    name: 'Skilled Nursing Facilities',
    icon: Hospital,
    shortDescription: 'SNFs & Long-Term Care',
    heroTitle: 'Increase Admissions for Skilled Nursing Facilities',
    heroDescription: 'Specialized lead generation for SNFs to connect with hospital discharge planners and families seeking post-acute care.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop',
    challenges: [
      'Hospital discharge planner relationships',
      'Bed availability and census management',
      'Medicare and insurance authorization',
      'Family concerns about quality and cost',
      'Competition from other SNFs'
    ],
    solutions: [
      'Discharge planner relationship tracking',
      'Real-time bed availability updates',
      'Automated authorization and verification',
      'Family education and engagement workflows',
      'Competitive positioning and differentiation'
    ],
    benefits: [
      {
        title: 'Stronger Referral Relationships',
        description: 'Track and nurture relationships with hospital discharge planners and case managers.',
        icon: Users
      },
      {
        title: 'Optimized Census',
        description: 'Maintain higher census with intelligent bed management and admission prioritization.',
        icon: Hospital
      },
      {
        title: 'Faster Authorizations',
        description: 'Streamline Medicare and insurance authorization process to reduce delays.',
        icon: Activity
      }
    ],
    stats: [
      { label: 'Increase in Census', value: '30%' },
      { label: 'Reduction in Authorization Time', value: '55%' },
      { label: 'Improvement in Referral Relationships', value: '65%' }
    ]
  },
  {
    slug: 'transitional-care',
    name: 'Transitional Care Facilities',
    icon: Activity,
    shortDescription: 'Post-Acute & Transitional Care',
    heroTitle: 'Bridge the Gap with Transitional Care Lead Solutions',
    heroDescription: 'Connect with patients and families seeking post-acute and transitional care services with AI-powered lead generation.',
    heroImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop',
    challenges: [
      'Short length of stay requiring quick admissions',
      'Coordination with hospitals and SNFs',
      'Insurance coverage and authorization complexity',
      'Family education on transitional care benefits',
      'Discharge planning and next-level placement'
    ],
    solutions: [
      'Rapid admission workflows and prioritization',
      'Multi-facility coordination and communication',
      'Automated insurance verification and authorization',
      'Educational content for families and patients',
      'Discharge planning and placement assistance'
    ],
    benefits: [
      {
        title: 'Faster Admissions',
        description: 'Reduce admission time by 65% with streamlined workflows and automation.',
        icon: Activity
      },
      {
        title: 'Better Coordination',
        description: 'Seamlessly coordinate with hospitals, SNFs, and other care providers.',
        icon: Hospital
      },
      {
        title: 'Improved Outcomes',
        description: 'Better patient education and engagement leads to improved recovery outcomes.',
        icon: Heart
      }
    ],
    stats: [
      { label: 'Reduction in Admission Time', value: '65%' },
      { label: 'Increase in Bed Utilization', value: '40%' },
      { label: 'Improvement in Patient Satisfaction', value: '55%' }
    ]
  }
];
