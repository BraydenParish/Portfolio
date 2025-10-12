import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import RootLayout from "../app/layout"

describe("Root layout", () => {
  it("renders body with monospace fallback classes", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <div>content</div>
      </RootLayout>
    )

    expect(markup).toContain("<body")
    expect(markup).toContain("font-mono")
  })
})
