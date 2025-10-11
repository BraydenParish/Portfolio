"use client"

import { useEffect, useRef } from "react"

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ"

const FONT_SIZE = 18
const MIN_TRAIL = 8
const MAX_TRAIL = 22

type Column = {
  x: number
  y: number
  speed: number
  trail: number
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    let width = 0
    let height = 0
    const deviceRatio = Math.min(window.devicePixelRatio || 1, 2)
    let columns: Column[] = []
    let animationFrame = 0

    const initialiseColumns = () => {
      const count = Math.floor(width / FONT_SIZE)
      columns = Array.from({ length: count }, (_, index) => ({
        x: index * FONT_SIZE,
        y: Math.random() * height * 1.2 - height,
        speed: (Math.random() * 0.8 + 0.45) * FONT_SIZE,
        trail: Math.floor(Math.random() * (MAX_TRAIL - MIN_TRAIL + 1)) + MIN_TRAIL,
      }))
    }

    const configureCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * deviceRatio
      canvas.height = height * deviceRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      if ("resetTransform" in context) {
        context.resetTransform()
      } else {
        context.setTransform(1, 0, 0, 1, 0, 0)
      }

      context.scale(deviceRatio, deviceRatio)
      context.font = `${FONT_SIZE}px "Share Tech Mono", "Fira Code", monospace`
      context.textBaseline = "top"
      context.shadowBlur = 0
      context.shadowColor = "transparent"

      initialiseColumns()
    }

    const draw = () => {
      context.shadowBlur = 0
      context.fillStyle = "rgba(0, 8, 2, 0.25)"
      context.fillRect(0, 0, width, height)

      columns.forEach((column) => {
        for (let index = 0; index < column.trail; index += 1) {
          const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          const opacity = 1 - index / column.trail
          const y = column.y - index * FONT_SIZE

          if (y < -FONT_SIZE || y > height + FONT_SIZE) {
            continue
          }

          if (index === 0) {
            context.shadowBlur = 16
            context.shadowColor = "rgba(0, 255, 65, 0.85)"
            context.fillStyle = "rgba(233, 255, 235, 0.95)"
          } else {
            context.shadowBlur = 10
            context.shadowColor = "rgba(0, 255, 65, 0.55)"
            context.fillStyle = `rgba(0, 255, 65, ${0.15 + opacity * 0.55})`
          }

          context.fillText(glyph, column.x, y)
        }

        column.y += column.speed

        if (column.y - column.trail * FONT_SIZE > height + FONT_SIZE) {
          column.y = -Math.random() * height * 0.5
          column.speed = (Math.random() * 0.8 + 0.45) * FONT_SIZE
          column.trail = Math.floor(Math.random() * (MAX_TRAIL - MIN_TRAIL + 1)) + MIN_TRAIL
        }
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    configureCanvas()
    animationFrame = window.requestAnimationFrame(draw)

    const handleResize = () => {
      configureCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.18),_transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0,_rgba(0,255,65,0.16)_1px,_transparent_2px)] bg-[length:100%_2px] mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.06)_1px,transparent_1px)] bg-[length:100%_24px] opacity-30" />
      <div className="absolute inset-0 animate-scanline bg-[linear-gradient(to_bottom,transparent_0,rgba(0,255,65,0.25)_15%,transparent_30%)]" />
    </div>
  )
}
