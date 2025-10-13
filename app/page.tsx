"use client"

import { useEffect, useMemo, useState } from "react"

import Link from "next/link"

import {
  contactLinks,
  navItems,
  skillCategories,
  statusReadouts,
  upgradeIdeas,
} from "@/lib/portfolio-data"
import { MatrixBackground } from "@/components/matrix-background"

const asciiBanner = `
 ██████╗ ██████╗  █████╗ ██╗   ██╗██████╗ ███████╗███╗   ██╗
 ██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗██╔════╝████╗  ██║
 ██████╔╝██████╔╝███████║ ╚████╔╝ ██║  ██║█████╗  ██╔██╗ ██║
 ██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  ██║  ██║██╔══╝  ██║╚██╗██║
 ██████╔╝██║  ██║██║  ██║   ██║   ██████╔╝███████╗██║ ╚████║
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═══╝
`

const terminalGreeting = "> INITIALIZING SYSTEM... WELCOME TO THE MATRIX"

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
  const [activeSection, setActiveSection] = useState("home")

  const navigationSections = useMemo(
    () => [{ id: "home", label: "Home", command: "./home" }, ...navItems],
    []
  )

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

  return (
    <div className="min-h-screen bg-black font-mono text-[#7dff8c]">
      <MatrixBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 rounded-lg border-2 border-[#00b33c] bg-[#041407] p-6 shadow-lg shadow-[#00b33c]/40">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-[#00b33c]" />
            <span className="ml-4 text-sm text-[#63ff64]">root@portfolio:~$</span>
          </div>
          <div className="text-2xl font-bold text-[#c5ffd2]">
            {terminalText}
            {showCursor ? <span className="ml-1 animate-pulse">█</span> : null}
          </div>
        </div>

        <nav className="mb-8 flex flex-wrap gap-4" aria-label="Primary">
          {navigationSections.map((section) => {
            const isHome = section.id === "home"
            const label = section.label.toUpperCase()
            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`rounded border-2 px-4 py-2 text-sm uppercase tracking-[0.25em] transition-all duration-300 ${
                  isHome
                    ? "border-[#00b33c] bg-[#00b33c] text-black shadow-lg shadow-[#00b33c]/30"
                    : "border-[#004d1f] text-[#c5ffd2] hover:border-[#00b33c] hover:bg-[#0a2d15] hover:text-[#d8ffe2] hover:shadow-md hover:shadow-[#00b33c]/25"
                }`}
              >
                {"> "}
                {label}
              </Link>
            )
          })}
        </nav>

        <section id="home" className="rounded-lg border-2 border-[#00b33c] bg-[#00160a]/95 p-8 shadow-lg shadow-[#00b33c]/30">
          <h2 className="sr-only">Home</h2>
          <pre className="mb-6 overflow-auto text-[0.85rem] leading-tight text-[#7dff8c]">{asciiBanner}</pre>
          <div className="space-y-3 text-lg text-[#c5ffd2]">
            <p>
              &gt; STATUS: <span className="text-[#63ff64]">ONLINE</span>
            </p>
            <p>&gt; ROLE: IT Support Specialist → Cloud Operations</p>
            <p>&gt; LOCATION: Remote / Open to Relocation</p>
            <p className="text-[#63ff64]">&gt; &quot;There is no spoon. Only root cause analysis.&quot;</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {statusReadouts.map((readout) => (
              <div key={readout.label} className="rounded border border-[#004d1f] bg-black/50 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#2cff4b]">{readout.label}</p>
                <p className="mt-2 text-xl font-semibold text-[#c5ffd2]">{readout.value}</p>
                <p className="mt-1 text-sm text-[#63ff64]">{readout.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mt-10 rounded-lg border-2 border-[#00b33c] bg-[#00160a]/95 p-8 shadow-lg shadow-[#00b33c]/30"
        >
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-[#c5ffd2]">
            <span className="animate-pulse">&gt;&gt;</span> ABOUT.exe
          </h2>
          <div className="space-y-4 text-[#c5ffd2]">
            <p>
              <span className="text-[#63ff64]">[INFO]</span> Lifelong tinkerer evolving from Linux curiosity and help desk empathy
              into resilient operations design.
            </p>
            <p>
              <span className="text-[#63ff64]">[INFO]</span> Comfortable translating incidents into action plans, guiding users through
              outages, and automating the repetitive work.
            </p>
            <p>
              <span className="text-[#63ff64]">[INFO]</span> Currently completing WGU Computer Science coursework while scaling home
              lab simulations for Active Directory, osTicket, and AWS.
            </p>
            <div className="mt-6 rounded border border-[#004d1f] p-4 text-sm text-[#7dff8c]">
              <p>&gt; EXPERIENCE: Hands-on with enterprise support workflows</p>
              <p>&gt; EDUCATION: WGU Computer Science (in progress)</p>
              <p>&gt; CLEARANCE: Ready for background checks / compliance onboarding</p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="mt-10 rounded-lg border-2 border-[#00b33c] bg-[#00160a]/95 p-8 shadow-lg shadow-[#00b33c]/30"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#c5ffd2]">
            <span className="animate-pulse">&gt;&gt;</span> SKILLS.sys
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {flattenedSkills.map((skill, index) => {
              const progress = hashProgress(skill, index)
              return (
                <div
                  key={skill}
                  className="group rounded border border-[#004d1f] bg-black/40 p-4 transition-all duration-300 hover:border-[#00b33c] hover:shadow-lg hover:shadow-[#00b33c]/30"
                >
                  <div className="flex items-center justify-between text-[#c5ffd2]">
                    <span className="font-semibold">{skill}</span>
                    <span className="text-[#63ff64] group-hover:animate-pulse">█</span>
                  </div>
                  <div className="mt-3 h-2 rounded bg-[#002310]/80">
                    <div
                      className="h-full rounded bg-[#00b33c] transition-all duration-700 group-hover:w-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section
          id="intel"
          className="mt-10 rounded-lg border-2 border-[#00b33c] bg-[#00160a]/95 p-8 shadow-lg shadow-[#00b33c]/30"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#c5ffd2]">
            <span className="animate-pulse">&gt;&gt;</span> INTEL.queue
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {upgradeIdeas.map((idea) => (
              <article
                key={idea.title}
                className="rounded border border-[#004d1f] bg-black/40 p-4 transition-all duration-300 hover:border-[#00b33c] hover:shadow-lg hover:shadow-[#00b33c]/30"
              >
                <div className="flex items-center justify-between text-[#c5ffd2]">
                  <span className="font-semibold">{idea.title}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#63ff64]">[{idea.impact}]</span>
                </div>
                <p className="mt-3 text-sm text-[#7dff8c]">{idea.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-lg border-2 border-[#00b33c] bg-[#00160a]/95 p-8 shadow-lg shadow-[#00b33c]/30"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#c5ffd2]">
            <span className="animate-pulse">&gt;&gt;</span> CONTACT.init
          </h2>
          <div className="space-y-6">
            <div className="rounded border border-[#004d1f] bg-black/40 p-4 text-[#c5ffd2]">
              <p className="mb-2">&gt; ESTABLISH_CONNECTION:</p>
              <ul className="space-y-2 pl-4 text-[#7dff8c]">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="transition-colors hover:text-[#c5ffd2]"
                    >
                      [{link.label.toUpperCase()}] {link.detail}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded border border-[#004d1f] bg-black/40 p-4 text-[#c5ffd2]">
              <p className="mb-4">&gt; SEND_MESSAGE:</p>
              <form className="space-y-4" aria-label="contact form">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  className="w-full rounded border border-[#004d1f] bg-[#000b05] px-4 py-2 text-[#c5ffd2] focus:border-[#00b33c] focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="w-full rounded border border-[#004d1f] bg-[#000b05] px-4 py-2 text-[#c5ffd2] focus:border-[#00b33c] focus:outline-none"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full resize-none rounded border border-[#004d1f] bg-[#000b05] px-4 py-2 text-[#c5ffd2] focus:border-[#00b33c] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded border-2 border-[#00b33c] bg-[#00260f] py-2 text-[#c5ffd2] transition-all duration-300 hover:bg-[#00b33c] hover:text-black"
                >
                  [TRANSMIT]
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-10 select-none border-t-2 border-[#003b1a] pt-6 text-center text-sm text-[#2cff4b]">
          &copy; {new Date().getFullYear()} Matrix Hacker Portfolio
        </footer>
      </div>
    </div>
  )
}
