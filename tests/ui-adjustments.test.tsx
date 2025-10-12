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

describe("UI adjustments", () => {
  it("renders a static matrix background without canvas", () => {
    const markup = renderToStaticMarkup(<MatrixBackground />)
    expect(markup).not.toContain("<canvas")
    expect(markup).toContain("bg-[radial-gradient")
  })

  it("renders all primary sections concurrently", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)

    expect(markup).toContain("ABOUT.exe")
    expect(markup).toContain("SKILLS.sys")
    expect(markup).toContain("INTEL.queue")
    expect(markup).toContain("CONTACT.init")
  })

  it("keeps navigation controls opaque (property)", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)
    const controlMatches = [...markup.matchAll(/<(?:button|a)[^>]+class=\"([^\"]+)\"/g)]

    expect(controlMatches.length).toBeGreaterThan(0)

    for (const [, className] of controlMatches) {
      const hasTranslucentAccent = /bg-\[#(?:[0-9a-fA-F]{3,8})]\/[0-9]{1,3}/.test(className)
      expect(hasTranslucentAccent).toBe(false)
    }
  })

  it("exposes section anchors for scrolling (property)", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)

    const anchorMatches = [...markup.matchAll(/<a[^>]+href=\"#([^\"]+)\"/g)]
    expect(anchorMatches.length).toBeGreaterThan(0)

    const ids = new Set([...markup.matchAll(/id=\"([^\"]+)\"/g)].map(([, id]) => id))

    for (const [, target] of anchorMatches) {
      expect(ids.has(target)).toBe(true)
    }
  })

  it("uses the darker accent green for highlighted UI", () => {
    const markup = renderToStaticMarkup(<MatrixPortfolio />)
    expect(markup).toContain("#00b33c")
  })
})
