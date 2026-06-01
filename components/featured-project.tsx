"use client"

import { useRef, useState, useCallback } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FeaturedProject() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -12, y: x * 12 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  return (
    <section className="flex flex-col px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-2xl">
        <ScrollReveal delay={0.1}>
          <a
            href="https://monkeio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              ref={cardRef}
              className="dark group relative overflow-hidden rounded-xl bg-card"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered
                  ? "transform 0.1s ease-out"
                  : "transform 0.5s ease-out",
                cursor: "pointer",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              {/* Video background */}
              <div className="absolute inset-0">
                <video
                  autoPlay
                  muted={true}
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover opacity-40 transition-all duration-500 ease-out group-hover:opacity-60 scale-[1.2]"
                >
                  <source src="/monkeio-preview.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90" />

              {/* Card content */}
              <div className="relative z-10 flex flex-col gap-6 p-8 pt-28 md:p-10 md:pt-36">
                <span className="w-fit rounded-full bg-amber-500/20 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-amber-400 uppercase">
                  Featured Project
                </span>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-card-foreground">
                    Monkeio
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    The hardest part is starting. Monkeio makes it the easiest. Type what you're working on. Hit start. That's it. No system to maintain, no setup before you can focus. Just a record of the work you actually did.
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      SvelteKit
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      shadcn/ui
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      Supabase
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      TypeScript
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-sm font-medium text-card-foreground underline underline-offset-4 transition-colors group-hover:text-primary">
                      Visit monkeio.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
