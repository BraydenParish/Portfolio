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
})
