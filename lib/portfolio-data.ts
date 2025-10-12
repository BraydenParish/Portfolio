export type NavItem = {
  id: string
  label: string
  command: string
}

export type StatusReadout = {
  label: string
  value: string
  detail: string
}

export type SkillCategory = {
  title: string
  icon: "User" | "Server" | "Shield" | "Cloud" | "Code" | "Terminal"
  highlights: string[]
}

export type ProjectCard = {
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export type ContactLink = {
  label: string
  icon: "Mail" | "Github" | "Linkedin" | "Phone"
  href: string
  detail: string
}

export type UpgradeIdea = {
  title: string
  impact: "engagement" | "credibility" | "automation" | "reach"
  description: string
}

export const navItems: NavItem[] = [
  { id: "about", label: "About", command: "./about" },
  { id: "skills", label: "Skills", command: "./skills" },
  { id: "intel", label: "Intel", command: "./intel" },
  { id: "contact", label: "Contact", command: "./contact" },
]

export const statusReadouts: StatusReadout[] = [
  { label: "Signal", value: "Online", detail: "Actively seeking help desk & cloud roles" },
  { label: "Uptime", value: "5 yrs", detail: "Hands-on with Linux, Windows, and support tooling" },
  { label: "Focus", value: "CloudOps", detail: "Building automation & incident response skills" },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Support & Operations",
    icon: "User",
    highlights: [
      "Tier 1/2 troubleshooting",
      "Customer-first communication",
      "Ticket triage & escalation",
      "Remote support tooling",
    ],
  },
  {
    title: "Systems Engineering",
    icon: "Server",
    highlights: [
      "Windows & Linux administration",
      "Active Directory & Group Policy",
      "Endpoint hardening",
      "PowerShell automation",
    ],
  },
  {
    title: "Networking & Security",
    icon: "Shield",
    highlights: [
      "TCP/IP diagnostics",
      "DNS/DHCP management",
      "VPN configuration",
      "Security incident playbooks",
    ],
  },
  {
    title: "Cloud Foundations",
    icon: "Cloud",
    highlights: [
      "AWS & Azure fundamentals",
      "Identity and access management",
      "S3 storage security",
      "Resilient architecture patterns",
    ],
  },
  {
    title: "Automation & Scripting",
    icon: "Code",
    highlights: [
      "Python tooling",
      "Bash workflows",
      "Infrastructure as code basics",
      "Git-driven collaboration",
    ],
  },
  {
    title: "Tooling Stack",
    icon: "Terminal",
    highlights: [
      "osTicket configuration",
      "Observability dashboards",
      "Endpoint monitoring",
      "Knowledge base authoring",
    ],
  },
]

export const projectCards: ProjectCard[] = []

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    icon: "Mail",
    href: "mailto:brayden.parish@email.com",
    detail: "Primary inbox — response within 24h",
  },
  {
    label: "GitHub",
    icon: "Github",
    href: "https://github.com/your-profile",
    detail: "Code experiments & automation snippets",
  },
  {
    label: "LinkedIn",
    icon: "Linkedin",
    href: "https://linkedin.com/in/your-profile",
    detail: "Professional updates & connections",
  },
  {
    label: "Phone",
    icon: "Phone",
    href: "tel:+15551234567",
    detail: "Direct line for urgent collaboration",
  },
]

export const upgradeIdeas: UpgradeIdea[] = [
  {
    title: "Launch an incident response case study",
    impact: "credibility",
    description: "Publish a breakdown of a challenging outage simulation with logs, root cause analysis, and remediation timeline.",
  },
  {
    title: "Embed a live status dashboard",
    impact: "engagement",
    description: "Expose uptime from a personal homelab or cloud sandbox to reinforce the operations mindset.",
  },
  {
    title: "Automate resume + portfolio sync",
    impact: "automation",
    description: "Use CI pipelines to update downloadable resumes and project metadata whenever content changes.",
  },
  {
    title: "Record short terminal walkthroughs",
    impact: "reach",
    description: "Create 60-second clips demonstrating troubleshooting flows to share on LinkedIn and GitHub READMEs.",
  },
]
