import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"

vi.mock("next/link", () => ({
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

import MatrixPortfolio from "../app/page"
import { MatrixBackground } from "../components/matrix-background"
import { contactLinks, navItems, upgradeIdeas } from "../lib/portfolio-data"

describe("UI adjustments", () => {
  it("renders a static matrix background without canvas", () => {
    const markup = renderToStaticMarkup(<MatrixBackground />)
    expect(markup).not.toContain("<canvas")
    expect(markup).toContain("bg-[radial-gradient")
  })

  it("keeps navigation buttons opaque (property)", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)
    const buttonMatches = [...markup.matchAll(/<button[^>]+class=\"([^\"]+)\"/g)]

    expect(buttonMatches.length).toBeGreaterThan(0)

    for (const [, className] of buttonMatches) {
      const hasTranslucentAccent = /bg-\[#(?:[0-9a-fA-F]{3,8})]\/[0-9]{1,3}/.test(className)
      expect(hasTranslucentAccent).toBe(false)
    }
  })

  it("uses the darker accent green for highlighted UI", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)
    expect(markup).toContain("#00b33c")
  })

  it("renders navigation commands for every section including home", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)
    const buttonTexts = [...markup.matchAll(/<button[^>]+type=\"button\"[^>]*>(.*?)<\/button>/g)].map(([, content]) =>
      content.replace(/<[^>]+>/g, "").replace(/&gt;/g, ">").trim()
    )

    const expected = ["HOME", ...navItems.map((item) => item.label.toUpperCase())].map(
      (label) => `> ${label}`
    )

    expect(buttonTexts).toEqual(expected)
  })

  it("prints upgrade ideas with titles and descriptions", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)

    for (const idea of upgradeIdeas) {
      expect(markup).toContain(idea.title)
      expect(markup).toContain(idea.description)
    }
  })

  it("avoids duplicate contact forms", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)
    const formCount = [...markup.matchAll(/<form\b/g)].length

    // one form for contacting, no duplicates rendered unintentionally
    expect(formCount).toBe(1)

    const normalizedMarkup = markup.replace(/&amp;/g, "&")

    for (const link of contactLinks) {
      expect(normalizedMarkup).toContain(link.detail)
    }
  })
})
