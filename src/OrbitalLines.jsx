import { useEffect, useRef } from 'react'

const canvasStyle = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1,
})

const RINGS = [
  { radius: 70,  lineCount: 5, lineLength: 28, speed: 0.0022,  dir: 1  },
  { radius: 155, lineCount: 6, lineLength: 36, speed: 0.0016,  dir: -1 },
  { radius: 265, lineCount: 6, lineLength: 46, speed: 0.0012,  dir: 1  },
  { radius: 405, lineCount: 7, lineLength: 58, speed: 0.00088, dir: -1 },
  { radius: 580, lineCount: 7, lineLength: 70, speed: 0.00064, dir: 1  },
]

const COLOR = 'rgba(30, 47, 41, 0.75)'

export default function OrbitalLines() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const el = canvasRef.current
    const ctx = el.getContext('2d')
    let rafId

    const resize = () => {
      el.width = el.offsetWidth
      el.height = el.offsetHeight
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, el.width, el.height)
      const cx = el.width / 2
      const cy = el.height / 2

      for (const ring of RINGS) {
        const step = (2 * Math.PI) / ring.lineCount
        const baseAngle = t * ring.speed * ring.dir

        for (let i = 0; i < ring.lineCount; i++) {
          const angle = baseAngle + step * i
          const ox = cx + Math.cos(angle) * ring.radius
          const oy = cy + Math.sin(angle) * ring.radius
          const tx = Math.cos(angle + Math.PI / 2) * ring.lineLength / 2
          const ty = Math.sin(angle + Math.PI / 2) * ring.lineLength / 2

          ctx.beginPath()
          ctx.moveTo(ox - tx, oy - ty)
          ctx.lineTo(ox + tx, oy + ty)
          ctx.strokeStyle = COLOR
          ctx.lineWidth = 1.4
          ctx.stroke()
        }
      }

      rafId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} style={canvasStyle()} />
}

