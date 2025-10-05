import Link from "next/link"
import {
  ArrowUpRight,
  BadgeCheck,
  Cloud,
  Code,
  Cpu,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
  Terminal,
  User,
} from "lucide-react"

import { MatrixBackground } from "@/components/matrix-background"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  contactLinks,
  navItems,
  projectCards,
  skillCategories,
  statusReadouts,
  upgradeIdeas,
} from "@/lib/portfolio-data"

const skillIconMap = {
  User,
  Server,
  Shield,
  Cloud,
  Code,
  Terminal,
} as const

const contactIconMap = {
  Mail,
  Github,
  Linkedin,
  Phone,
} as const

const heroCommands = [
  {
    prompt: "whoami",
    output: "Brayden Parish — IT Professional & Help Desk Specialist",
  },
  {
    prompt: "focus",
    output: "Translating complex technical issues into fast, clear resolutions",
  },
  {
    prompt: "target --next",
    output: "Cloud engineering, automation, and resilient support operations",
  },
]

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-emerald-200">
      <MatrixBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 border-b border-emerald-500/20 bg-black/60 backdrop-blur-xl">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-emerald-300/80">
              <Terminal className="h-5 w-5 text-emerald-400" aria-hidden />
              <span>~/portfolio</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-emerald-300/80 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative transition hover:text-emerald-200"
                >
                  <span className="opacity-60">{item.command}</span>
                </Link>
              ))}
            </nav>
            <Button
              asChild
              variant="outline"
              className="hidden border-emerald-500/50 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-400/20 md:inline-flex"
            >
              <Link href="#contact">
                Initiate Contact
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        <main className="container mx-auto flex w-full flex-1 flex-col gap-24 px-4 py-20">
          <section className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <div className="space-y-10">
              <Badge
                variant="secondary"
                className="border border-emerald-400/30 bg-emerald-500/10 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.25)]"
              >
                Access Granted · System Online
              </Badge>
              <div>
                <h1
                  className="glitch text-balance text-4xl font-bold text-emerald-100 sm:text-5xl lg:text-6xl"
                  data-text="Brayden Parish"
                >
                  Brayden Parish
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-emerald-200/80 sm:text-xl">
                  IT professional with a security-first mindset, translating Linux curiosity and help desk empathy into
                  automation-ready cloud foundations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-emerald-400 text-emerald-950 shadow-[0_0_45px_rgba(52,211,153,0.35)] hover:bg-emerald-300"
                >
                  <Link href="mailto:brayden.parish@email.com">Launch Message</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-emerald-400/60 bg-transparent text-emerald-200 hover:bg-emerald-500/20"
                >
                  <Link href="https://github.com/your-profile" target="_blank" rel="noreferrer">
                    GitHub Feed
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-emerald-400/60 bg-transparent text-emerald-200 hover:bg-emerald-500/20"
                >
                  <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
                    LinkedIn Signal
                  </Link>
                </Button>
              </div>

              <Card className="border-emerald-500/30 bg-black/60 shadow-[0_0_35px_rgba(16,185,129,0.15)]">
                <CardHeader className="border-b border-emerald-500/20 bg-emerald-500/10">
                  <CardTitle className="flex items-center gap-2 text-sm text-emerald-300">
                    <Terminal className="h-4 w-4" aria-hidden />
                    Terminal feed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 py-6 text-sm text-emerald-200/80">
                  {heroCommands.map((entry) => (
                    <div key={entry.prompt}>
                      <p className="font-semibold text-emerald-300">$ {entry.prompt}</p>
                      <p className="mt-1 leading-relaxed text-emerald-100/80">{entry.output}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-emerald-500/30 bg-black/70 p-6 shadow-[0_0_40px_rgba(16,185,129,0.18)]">
                <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.35em] text-emerald-300/70">
                  <Cpu className="h-5 w-5" aria-hidden />
                  live-signal
                </div>
                <div className="grid gap-4">
                  {statusReadouts.map((readout) => (
                    <div
                      key={readout.label}
                      className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 backdrop-blur-sm transition hover:border-emerald-400/60"
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">{readout.label}</div>
                      <div className="mt-2 text-2xl font-semibold text-emerald-100">{readout.value}</div>
                      <p className="mt-2 text-sm text-emerald-200/70">{readout.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-sm text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                <div className="flex items-center gap-2 text-emerald-200">
                  <BadgeCheck className="h-4 w-4" aria-hidden />
                  <span>Currently calibrating for cloud engineering roles.</span>
                </div>
                <p className="mt-3 text-emerald-100/80">
                  Open to contract or full-time engagements that blend support operations, infrastructure, and secure
                  automation.
                </p>
              </div>
            </div>
          </section>

          <section id="about" className="space-y-8">
            <div className="flex flex-col gap-3">
              <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-100">./about</Badge>
              <h2 className="text-3xl font-semibold text-emerald-100">Curious by default, calm under pressure</h2>
              <p className="max-w-3xl text-lg text-emerald-200/80">
                Years of personal tinkering with Linux, Windows, and networks taught me how to trace issues from kernel logs
                to misconfigured policies. That same curiosity and empathy powers my help desk approach today.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-emerald-500/25 bg-black/70">
                <CardContent className="space-y-4 p-6 text-emerald-100/80">
                  <p>
                    Navigating terminal environments, managing packages, and reverse-engineering errors pushed me to
                    understand how technology behaves beneath the interface.
                  </p>
                  <p>
                    I am currently pursuing a Computer Science degree at WGU to reinforce that practical mindset with theory
                    in algorithms, data structures, and cloud architecture.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-500/25 bg-black/70">
                <CardContent className="space-y-4 p-6 text-emerald-100/80">
                  <p>
                    The most rewarding part of support work is translating complex failure modes into calm, confident
                    responses for users. That means fast diagnostics, clear communication, and follow-through.
                  </p>
                  <p>
                    My current focus is building lab environments that mimic production pressure so I can practise escalation,
                    documentation, and automation in realistic conditions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <div className="flex flex-col gap-3">
              <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-100">./skills</Badge>
              <h2 className="text-3xl font-semibold text-emerald-100">Technical stack in active rotation</h2>
              <p className="max-w-3xl text-lg text-emerald-200/80">
                Built for operational resilience: from rapid triage and documentation to infrastructure hardening and cloud
                security experiments.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category) => {
                const Icon = skillIconMap[category.icon]
                return (
                  <Card
                    key={category.title}
                    className="group border-emerald-500/20 bg-black/70 shadow-[0_0_30px_rgba(16,185,129,0.12)] transition hover:border-emerald-400/60 hover:shadow-[0_0_45px_rgba(16,185,129,0.25)]"
                  >
                    <CardHeader className="flex items-center gap-3">
                      <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-2 text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <CardTitle className="text-lg text-emerald-100">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-emerald-200/80">
                        {category.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="flex flex-col gap-3">
              <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-100">./projects</Badge>
              <h2 className="text-3xl font-semibold text-emerald-100">Labs, builds, and documented drills</h2>
              <p className="max-w-3xl text-lg text-emerald-200/80">
                Each project simulates the realities of production support—policies, permissions, ticket workflows, and
                post-incident reporting.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {projectCards.map((project) => (
                <Card
                  key={project.title}
                  className="border-emerald-500/20 bg-black/70 transition hover:border-emerald-400/60 hover:shadow-[0_0_45px_rgba(16,185,129,0.22)]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between gap-4 text-emerald-100">
                      <span>{project.title}</span>
                      <Badge variant="outline" className="border-emerald-400/40 text-emerald-200">
                        {project.subtitle}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-emerald-200/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="border border-emerald-400/40 bg-emerald-500/15 text-emerald-100">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="intel" className="space-y-8">
            <div className="flex flex-col gap-3">
              <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-100">./intel</Badge>
              <h2 className="text-3xl font-semibold text-emerald-100">Roadmap: amplifying the signal</h2>
              <p className="max-w-3xl text-lg text-emerald-200/80">
                Ideas queued for the next iteration of this portfolio and my professional brand.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {upgradeIdeas.map((idea) => (
                <Card
                  key={idea.title}
                  className="border-emerald-500/20 bg-black/70 transition hover:border-emerald-400/60 hover:shadow-[0_0_45px_rgba(16,185,129,0.22)]"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-emerald-100">
                      <span>{idea.title}</span>
                      <Badge variant="secondary" className="border border-emerald-400/40 bg-emerald-500/10 text-emerald-200">
                        {idea.impact}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-emerald-200/80">
                    {idea.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8">
            <div className="flex flex-col gap-3">
              <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-100">./contact</Badge>
              <h2 className="text-3xl font-semibold text-emerald-100">Deploy the first conversation</h2>
              <p className="max-w-3xl text-lg text-emerald-200/80">
                Whether you need rapid incident response, structured help desk documentation, or a teammate learning cloud on
                the job, I&apos;m ready to contribute.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <Card className="border-emerald-500/25 bg-black/70">
                <CardContent className="space-y-6 p-6">
                  <div className="flex flex-col gap-4 text-sm text-emerald-200/80">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-emerald-400" aria-hidden />
                      <span>brayden.parish@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-400" aria-hidden />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-emerald-400" aria-hidden />
                      <span>Your City, State</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                    Let&apos;s collaborate on modernising service desks, scaling cloud operations, or building resilient support
                    runbooks.
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-500/25 bg-black/70">
                <CardContent className="space-y-4 p-6">
                  {contactLinks.map((link) => {
                    const Icon = contactIconMap[link.icon]
                    return (
                      <Button
                        key={link.label}
                        asChild
                        variant="outline"
                        className="group flex w-full items-center justify-between border-emerald-400/40 bg-emerald-500/10 text-emerald-100 transition hover:bg-emerald-500/20"
                      >
                        <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          <span className="flex items-center gap-3">
                            <Icon className="h-4 w-4" aria-hidden />
                            {link.label}
                          </span>
                          <span className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">{link.detail}</span>
                        </Link>
                      </Button>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <footer className="border-t border-emerald-500/20 bg-black/60">
          <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center text-sm text-emerald-300/70">
            <div className="text-xs uppercase tracking-[0.35em] text-emerald-400/60">user@portfolio:~$</div>
            <p>© {new Date().getFullYear()} Brayden Parish — Always debugging the future.</p>
            <p className="text-xs text-emerald-300/60">
              Rendered with a terminal-first mindset, tuned for hiring managers who appreciate signal over noise.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
