import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  connections: number
}

export default function CyberWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = -9999
    let mouseY = -9999

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const nodeCount = 32
    const nodes: Node[] = []
    const connectDist = 220
    const mouseRadius = 180
    const repelStrength = 0.8

    resize()

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1.5 + Math.random() * 2.5,
        connections: 0,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        node.connections = 0

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        const dx = node.x - mouseX
        const dy = node.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius * repelStrength
          node.vx += (dx / dist) * force * 0.05
          node.vy += (dy / dist) * force * 0.05
        }

        node.vx *= 0.98
        node.vy *= 0.98
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.25
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            grad.addColorStop(0, `rgba(139,92,246,${alpha})`)
            grad.addColorStop(0.5, `rgba(6,182,212,${alpha})`)
            grad.addColorStop(1, `rgba(236,72,153,${alpha})`)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
            nodes[i].connections++
            nodes[j].connections++
          }
        }
      }

      for (const node of nodes) {
        const pulse = 0.5 + Math.sin(Date.now() * 0.002 + node.x * 0.01 + node.y * 0.01) * 0.5
        const glowSize = node.r * (2 + pulse * 2)
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize)
        grad.addColorStop(0, `rgba(139,92,246,${0.3 + pulse * 0.3})`)
        grad.addColorStop(0.4, `rgba(6,182,212,${0.15 + pulse * 0.15})`)
        grad.addColorStop(1, 'rgba(139,92,246,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        const coreAlpha = 0.4 + pulse * 0.4
        ctx.fillStyle = `rgba(139,92,246,${coreAlpha})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = `rgba(6,182,212,${coreAlpha * 0.5})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r * 0.5, 0, Math.PI * 2)
        ctx.fill()
      }

      const mdx = mouseX - canvas.width / 2
      const mdy = mouseY - canvas.height / 2
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
      if (mDist > 50) {
        const mAlpha = Math.min(1, (mDist - 50) / 300) * 0.12
        ctx.strokeStyle = `rgba(6,182,212,${mAlpha})`
        ctx.lineWidth = 0.5
        for (const node of nodes) {
          const dx = node.x - mouseX
          const dy = node.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouseRadius * 1.5 && dist > 10) {
            const a = (1 - dist / (mouseRadius * 1.5)) * 0.06
            ctx.strokeStyle = `rgba(139,92,246,${a})`
            ctx.beginPath()
            ctx.moveTo(mouseX, mouseY)
            ctx.lineTo(node.x, node.y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onLeave = () => {
      mouseX = -9999
      mouseY = -9999
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseleave', onLeave)

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -2 }}
    />
  )
}
