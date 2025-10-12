"use client"

export function MatrixBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,60,0.2),_transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0,_rgba(0,179,60,0.14)_1px,_transparent_2px)] bg-[length:100%_2px] opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,179,60,0.08)_1px,transparent_1px)] bg-[length:100%_24px] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,179,60,0.12),_transparent_55%)]" />
    </div>
  )
}
