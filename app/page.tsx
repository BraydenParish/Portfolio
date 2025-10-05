"use client"

import { useEffect, useMemo, useState } from "react"

import Link from "next/link"

import { contactLinks, navItems, projectCards, skillCategories, statusReadouts, upgradeIdeas } from "@/lib/portfolio-data"

type MatrixDrop = {
  id: number
  left: number
  delay: number
  glyphs: string[]
}

const asciiBanner = `
 ██████╗ ██████╗  █████╗ ██╗   ██╗██████╗ ███████╗███╗   ██╗
██╔════╝ ██╔══██╗██╔══██╗██║   ██║██╔══██╗██╔════╝████╗  ██║
██║  ███╗██████╔╝███████║██║   ██║██████╔╝█████╗  ██╔██╗ ██║
██║   ██║██╔══██╗██╔══██║██║   ██║██╔══██╗██╔══╝  ██║╚██╗██║
╚██████╔╝██║  ██║██║  ██║╚██████╔╝██║  ██║███████╗██║ ╚████║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝
`

const terminalGreeting = "> INITIALIZING SYSTEM... WELCOME TO THE MATRIX"

const projectStatuses = ["ACTIVE", "DEPLOYED", "BETA", "SCOPING"] as const

function generateMatrixDrops(count: number): MatrixDrop[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    glyphs: Array.from({ length: 24 }, () => String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96))),
  }))
}

function hashProgress(label: string, index: number) {
  let hash = 0
  for (const char of label) {
    hash = (hash + char.charCodeAt(0)) % 37
  }
  return 70 + ((hash + index * 13) % 30)
}

export default function MatrixPortfolio() {
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [matrixRain, setMatrixRain] = useState<MatrixDrop[]>([])
  const sectionOrder = useMemo(() => ["home", ...navItems.map((item) => item.id)], [])
  const [activeSection, setActiveSection] = useState(sectionOrder[0]!)

  const flattenedSkills = useMemo(() => {
    const highlights = skillCategories.flatMap((category) => category.highlights)
    return Array.from(new Set(highlights))
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= terminalGreeting.length) {
        setTerminalText(terminalGreeting.slice(0, index))
        index += 1
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((previous) => !previous)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    setMatrixRain(generateMatrixDrops(30))
  }, [])

  return (
    <div className="min-h-screen bg-black font-mono text-green-400">
      <div className="pointer-events-none fixed inset-0 opacity-25">
        {matrixRain.map((drop) => (
          <div
            key={drop.id}
            className="absolute top-0 animate-[pulse_3s_infinite]"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
            }}
          >
            {drop.glyphs.map((glyph, index) => (
              <div key={`${drop.id}-${index}`} className="text-xs opacity-70">
                {glyph}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 rounded-lg border-2 border-green-500 bg-black/90 p-6 shadow-lg shadow-green-500/40">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm text-green-300">root@portfolio:~$</span>
          </div>
          <div className="text-2xl font-bold text-green-200">
            {terminalText}
            {showCursor ? <span className="ml-1 animate-pulse">█</span> : null}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          {sectionOrder.map((section) => {
            const label = section === "home" ? "Home" : navItems.find((item) => item.id === section)?.label ?? section
            return (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`rounded border-2 px-4 py-2 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                  activeSection === section
                    ? "border-green-400 bg-green-500/20 shadow-lg shadow-green-500/40"
                    : "border-green-700 hover:border-green-400 hover:shadow-md hover:shadow-green-500/30"
                }`}
              >
                {"> "}
                {label.toUpperCase()}
              </button>
            )
          })}
        </div>

        {activeSection === "home" ? (
          <div className="animate-[pulse_4s_infinite] rounded-lg border-2 border-green-500 bg-black/90 p-8 shadow-lg shadow-green-500/40">
            <pre className="mb-6 overflow-auto text-[0.85rem] leading-tight text-green-300">{asciiBanner}</pre>
            <div className="space-y-3 text-lg text-green-200">
              <p>
                &gt; STATUS: <span className="text-green-400">ONLINE</span>
              </p>
              <p>&gt; ROLE: IT Support Specialist → Cloud Operations</p>
              <p>&gt; LOCATION: Remote / Open to Relocation</p>
              <p className="text-green-400">&gt; &quot;There is no spoon. Only root cause analysis.&quot;</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {statusReadouts.map((readout) => (
                <div key={readout.label} className="rounded border border-green-600/60 bg-black/60 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-green-500">{readout.label}</p>
                  <p className="mt-2 text-xl font-semibold text-green-200">{readout.value}</p>
                  <p className="mt-1 text-sm text-green-400">{readout.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeSection === "about" ? (
          <section className="rounded-lg border-2 border-green-500 bg-black/90 p-8 shadow-lg shadow-green-500/40">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-200">
              <span className="animate-pulse">&gt;&gt;</span> ABOUT.exe
            </h2>
            <div className="space-y-4 text-green-200">
              <p>
                <span className="text-green-400">[INFO]</span> Lifelong tinkerer evolving from Linux curiosity and
                help desk empathy into resilient operations design.
              </p>
              <p>
                <span className="text-green-400">[INFO]</span> Comfortable translating incidents into action plans,
                guiding users through outages, and automating the repetitive work.
              </p>
              <p>
                <span className="text-green-400">[INFO]</span> Currently completing WGU Computer Science coursework
                while scaling home lab simulations for Active Directory, osTicket, and AWS.
              </p>
              <div className="mt-6 rounded border border-green-700 p-4 text-sm text-green-300">
                <p>&gt; EXPERIENCE: Hands-on with enterprise support workflows</p>
                <p>&gt; EDUCATION: WGU Computer Science (in progress)</p>
                <p>&gt; CLEARANCE: Ready for background checks / compliance onboarding</p>
              </div>
            </div>
          </section>
        ) : null}

        {activeSection === "skills" ? (
          <section className="rounded-lg border-2 border-green-500 bg-black/90 p-8 shadow-lg shadow-green-500/40">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-green-200">
              <span className="animate-pulse">&gt;&gt;</span> SKILLS.sys
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {flattenedSkills.map((skill, index) => {
                const progress = hashProgress(skill, index)
                return (
                  <div
                    key={skill}
                    className="group rounded border border-green-700 p-4 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30"
                  >
                    <div className="flex items-center justify-between text-green-100">
                      <span className="font-semibold">{skill}</span>
                      <span className="text-green-400 group-hover:animate-pulse">█</span>
                    </div>
                    <div className="mt-3 h-2 rounded bg-green-950/60">
                      <div
                        className="h-full rounded bg-green-400 transition-all duration-700 group-hover:w-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ) : null}

        {activeSection === "projects" ? (
          <section className="rounded-lg border-2 border-green-500 bg-black/90 p-8 shadow-lg shadow-green-500/40">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-green-200">
              <span className="animate-pulse">&gt;&gt;</span> PROJECTS.db
            </h2>
            <div className="space-y-4">
              {projectCards.map((project, index) => (
                <article
                  key={project.title}
                  className="rounded border border-green-700 p-6 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-green-200">&gt; {project.title}</h3>
                    <span className="rounded border border-green-400 px-3 py-1 text-xs tracking-[0.3em] text-green-300">
                      {projectStatuses[index % projectStatuses.length]}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-green-500">{project.subtitle}</p>
                  <p className="mt-3 text-green-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-green-400">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded border border-green-600 px-2 py-1">
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-green-300">
                    <button type="button" className="transition-colors hover:text-green-200">
                      [VIEW_CODE]
                    </button>
                    <button type="button" className="transition-colors hover:text-green-200">
                      [DEMO]
                    </button>
                    <button type="button" className="transition-colors hover:text-green-200">
                      [DOCS]
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeSection === "intel" ? (
          <section className="rounded-lg border-2 border-green-500 bg-black/90 p-8 shadow-lg shadow-green-500/40">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-green-200">
              <span className="animate-pulse">&gt;&gt;</span> INTEL.queue
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {upgradeIdeas.map((idea) => (
                <article
                  key={idea.title}
                  className="rounded border border-green-700 p-4 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-green-500">Impact: {idea.impact}</p>
                  <h3 className="mt-2 text-lg font-semibold text-green-200">{idea.title}</h3>
                  <p className="mt-2 text-green-300">{idea.description}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeSection === "contact" ? (
          <section className="rounded-lg border-2 border-green-500 bg-black/90 p-8 shadow-lg shadow-green-500/40">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-green-200">
              <span className="animate-pulse">&gt;&gt;</span> CONTACT.init
            </h2>
            <div className="space-y-6">
              <div className="rounded border border-green-700 p-4 text-green-200">
                <p className="mb-2">&gt; ESTABLISH_CONNECTION:</p>
                <ul className="space-y-2 pl-4 text-green-300">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="transition-colors hover:text-green-200"
                      >
                        [{link.label.toUpperCase()}] {link.detail}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded border border-green-700 p-4 text-green-200">
                <p className="mb-4">&gt; SEND_MESSAGE:</p>
                <form className="space-y-4" aria-label="contact form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    className="w-full rounded border border-green-700 bg-black px-4 py-2 text-green-200 focus:border-green-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    className="w-full rounded border border-green-700 bg-black px-4 py-2 text-green-200 focus:border-green-400 focus:outline-none"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full resize-none rounded border border-green-700 bg-black px-4 py-2 text-green-200 focus:border-green-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded border-2 border-green-500 py-2 text-green-200 transition-all duration-300 hover:bg-green-500/20"
                  >
                    [TRANSMIT]
                  </button>
                </form>
              </div>
            </div>
          </section>
        ) : null}

        <footer className="mt-10 border-t-2 border-green-900 pt-6 text-center text-sm text-green-600 select-none">
          &copy; {new Date().getFullYear()} Matrix Hacker Portfolio
        </footer>
      </div>
    </div>
  )
}
