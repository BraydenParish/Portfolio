const columnCount = 24

export function MatrixBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0,_rgba(6,95,70,0.2)_1px,_transparent_2px)] bg-[length:100%_2px] opacity-20" />
      <div className="absolute inset-0">
        {Array.from({ length: columnCount }).map((_, index) => (
          <div
            key={index}
            className="absolute top-[-50%] h-[200%] w-px origin-top scale-y-110 bg-emerald-400/30 blur-[1px] animate-matrix-fall"
            style={{
              left: `${(index / columnCount) * 100}%`,
              animationDelay: `${index * 0.35}s`,
              animationDuration: `${6 + (index % 5)}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[length:100%_24px] mix-blend-screen" />
      <div className="absolute inset-0 animate-scanline bg-[linear-gradient(to_bottom,transparent_0,rgba(16,185,129,0.08)_15%,transparent_30%)]" />
    </div>
  )
}
