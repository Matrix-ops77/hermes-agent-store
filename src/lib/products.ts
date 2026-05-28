// Product data store
export const PRODUCTS = [
  {
    id: 'soul-pack-essentials',
    name: 'SOUL Pack: Essentials',
    tagline: 'The foundation every Hermes agent needs',
    price: 29,
    price_note: 'one-time',
    badge: 'Most Popular',
    description: 'The core SOUL.md templates that define how your agent thinks, acts, and evolves. 12 battle-tested configurations used by 500+ Hermes power users.',
    features: [
      '12 SOUL.md template configurations',
      'Mission & identity framework',
      'Memory architecture patterns',
      'Tool use philosophy docs',
      'Agent evolution tracking template',
      'Discord community access',
    ],
    color: '#8b5cf6',
    href: '/products/soul-pack-essentials',
  },
  {
    id: 'soul-pack-pro',
    name: 'SOUL Pack: Pro',
    tagline: 'Everything + advanced agent architectures',
    price: 79,
    price_note: 'one-time',
    badge: 'Best Value',
    description: 'The complete toolkit. Includes every Essentials template plus 8 advanced multi-agent architectures, custom skill frameworks, and priority support.',
    features: [
      'Everything in Essentials',
      '8 advanced multi-agent templates',
      'Custom skill authoring framework',
      'SOC 2 compliance templates',
      'Team collaboration patterns',
      'Private Slack channel access',
    ],
    color: '#06b6d4',
    href: '/products/soul-pack-pro',
    featured: true,
  },
  {
    id: 'premium-dashboard',
    name: 'Premium Dashboard',
    tagline: 'Full observability for your agent fleet',
    price: 29,
    price_note: '/month',
    badge: 'New',
    description: 'The monitoring dashboard Hermes was missing. Multi-agent traces, cost tracking, SOUL evolution history, and session diffs in one unified view.',
    features: [
      'Multi-agent trace visualization',
      'Cost tracking per session & agent',
      'SOUL evolution history',
      'Session diff comparison',
      'Real-time overview dashboard',
      'API access included',
    ],
    color: '#f59e0b',
    href: '/products/premium-dashboard',
    monthly: true,
  },
]

export const STATS = [
  { value: '83K+', label: 'Hermes GitHub Stars' },
  { value: '500+', label: 'Active Users' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '<4hr', label: 'Avg Setup Time' },
]

export const TESTIMONIALS = [
  {
    quote: "I went from confused to productive with Hermes in under an hour. The SOUL Pack turned my agent from generic to genuinely useful.",
    name: "Marcus T.",
    role: "Solo Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
  },
  {
    quote: "The dashboard alone is worth the subscription. I finally understand what my agents are actually doing.",
    name: "Sarah K.",
    role: "AI Engineering Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    quote: "I've tried every AI agent framework. Hermes + these SOUL packs is the first setup that actually sticks.",
    name: "David R.",
    role: "CTO, Startup",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
]

export const FAQS = [
  {
    q: "What is SOUL.md?",
    a: "SOUL.md is the configuration file that defines your Hermes Agent's identity, memory architecture, tool philosophy, and behavioral patterns. It's what makes an agent feel like YOUR agent, not a generic chatbot.",
  },
  {
    q: "Do I need technical skills?",
    a: "Basic familiarity with AI agents helps, but our templates are designed to be drop-in ready. If you can edit a text file, you can use SOUL packs.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You can upgrade from Essentials to Pro at any time and only pay the difference.",
  },
  {
    q: "What's the refund policy?",
    a: "Full refund within 30 days, no questions asked. We want you to be certain.",
  },
]