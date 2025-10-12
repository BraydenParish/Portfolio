import { describe, expect, it } from "vitest"
import {
  contactLinks,
  navItems,
  projectCards,
  skillCategories,
  statusReadouts,
  upgradeIdeas,
} from "../lib/portfolio-data"

describe("portfolio data", () => {
  it("maps navigation commands to section ids", () => {
    const ids = new Set(navItems.map((item) => item.id))
    expect(ids.size).toBe(navItems.length)
    for (const item of navItems) {
      expect(item.command.startsWith("./")).toBe(true)
      expect(item.command.replace("./", "")).toBe(item.id)
    }
  })

  it("orders nav items to match interactive sections", () => {
    const expectedOrder = ["about", "skills", "intel", "contact"]
    expect(navItems.map((item) => item.id)).toEqual(expectedOrder)
  })

  it("keeps contact channels actionable", () => {
    const protocols = contactLinks.map((link) => link.href.split(":")[0])
    expect(protocols).toEqual(["mailto", "https", "https", "tel"])
  })

  it("omits project cards when none are available", () => {
    expect(projectCards).toHaveLength(0)
  })

  it("status readouts reinforce positioning", () => {
    expect(statusReadouts.length).toBeGreaterThanOrEqual(3)
    const labelSet = new Set(statusReadouts.map((readout) => readout.label))
    expect(labelSet.size).toBe(statusReadouts.length)
  })

  it("offers actionable upgrade ideas", () => {
    const impacts = new Set(upgradeIdeas.map((idea) => idea.impact))
    expect(impacts.size).toBe(upgradeIdeas.length)
    expect(upgradeIdeas.every((idea) => idea.description.split(" ").length >= 10)).toBe(true)
  })

  it("skill highlight lists remain duplicate-free (property)", () => {
    for (const category of skillCategories) {
      const unique = new Set(category.highlights.map((entry) => entry.toLowerCase()))
      expect(unique.size).toBe(category.highlights.length)
      expect(category.highlights.length).toBeGreaterThanOrEqual(4)
    }

    const sectionsFromNav = navItems.map((item) => item.id)
    expect(new Set(sectionsFromNav).size).toBe(sectionsFromNav.length)
    expect(sectionsFromNav.includes("projects")).toBe(false)
  })
})
