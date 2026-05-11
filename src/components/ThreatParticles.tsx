import { useEffect, useRef } from 'react'

const threats = [
  'RANSOMWARE', 'PHISHING', 'DDoS', 'SQL INJECTION', 'XSS',
  'ZERO-DAY', 'MITM', 'BRUTE FORCE', 'SOCIAL ENGINEERING', 'MALWARE',
  'SPYWARE', 'KEYLOGGER', 'ROOTKIT', 'TROJAN', 'WORM',
  'BOTNET', 'APT', 'DNS SPOOFING', 'ARP POISONING', 'SESSION HIJACK',
  'CSRF', 'SSRF', 'RCE', 'LFI', 'BUFFER OVERFLOW',
  'PRIVILEGE ESCALATION', 'PASS-THE-HASH', 'KERBEROASTING', 'DCSYNC', 'GOLDEN TICKET',
  'FILELESS MALWARE', 'LOLBINS', 'DLL HIJACKING', 'LLMNR POISONING', 'SMB RELAY',
  'NTLM RELAY', 'CREDENTIAL DUMPING', 'RACE CONDITION', 'DCSHADOW', 'SILVER TICKET',
]

interface VariedParticle {
  id: number
  text: string
  size: number
  x: number
  y: number
  dur: number
  del: number
  color: string
  glow: string
  driftX: number
  driftY: number
  animIndex: number
}

export default function ThreatParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const w = window.innerWidth
    const h = window.innerHeight
    const particles: VariedParticle[] = []

    threats.forEach((text, i) => {
      particles.push({
        id: i,
        text,
        size: 9 + Math.random() * 7,
        x: Math.random() * w,
        y: Math.random() * h,
        dur: 30 + Math.random() * 40,
        del: Math.random() * -60,
        color: ['#ec4899', '#8b5cf6', '#06b6d4', '#f472b6'][i % 4],
        glow: ['rgba(236,72,153,0.25)', 'rgba(139,92,246,0.25)', 'rgba(6,182,212,0.25)', 'rgba(244,114,182,0.2)'][i % 4],
        driftX: (Math.random() - 0.5) * 400,
        driftY: (Math.random() - 0.5) * 250,
        animIndex: i % 5,
      })
    })

    particles.forEach((p) => {
      const el = document.createElement('div')
      el.className = 'absolute font-mono font-bold select-none pointer-events-none'
      el.textContent = p.text
      const aIndex = p.animIndex
      el.style.cssText = `
        left: ${p.x}px;
        top: ${p.y}px;
        font-size: ${p.size}px;
        letter-spacing: 0.12em;
        color: ${p.color};
        opacity: 0;
        text-shadow: 0 0 14px ${p.glow};
        animation: tf-${aIndex} ${p.dur}s ${p.del}s infinite linear;
        -webkit-font-smoothing: antialiased;
        will-change: transform, opacity;
      `
      container.appendChild(el)
    })

    return () => { container.innerHTML = '' }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <style>{`
        @keyframes tf-0 {
          0%   { opacity: 0; transform: translate(0,0) rotate(0deg); }
          8%   { opacity: 0.12; }
          25%  { transform: translate(80px,-40px) rotate(3deg); opacity: 0.18; }
          50%  { transform: translate(-50px,60px) rotate(-2deg); opacity: 0.10; }
          75%  { transform: translate(30px,-80px) rotate(4deg); opacity: 0.16; }
          92%  { opacity: 0.12; }
          100% { opacity: 0; transform: translate(-20px,20px) rotate(0deg); }
        }
        @keyframes tf-1 {
          0%   { opacity: 0; transform: translate(0,0); }
          10%  { opacity: 0.10; }
          33%  { transform: translate(-70px,-30px) scale(1.05); opacity: 0.16; }
          66%  { transform: translate(60px,50px) scale(0.95); opacity: 0.12; }
          90%  { opacity: 0.10; }
          100% { opacity: 0; transform: translate(-30px,-10px) scale(1); }
        }
        @keyframes tf-2 {
          0%   { opacity: 0; transform: translate(0,0) skewX(0deg); }
          12%  { opacity: 0.14; }
          40%  { transform: translate(50px,70px) skewX(3deg); opacity: 0.20; }
          70%  { transform: translate(-80px,-20px) skewX(-2deg); opacity: 0.10; }
          88%  { opacity: 0.14; }
          100% { opacity: 0; transform: translate(40px,-50px) skewX(0deg); }
        }
        @keyframes tf-3 {
          0%   { opacity: 0; transform: translate(0,0) rotateX(0deg); }
          6%   { opacity: 0.08; }
          30%  { transform: translate(-40px,-60px) rotateX(8deg); opacity: 0.15; }
          60%  { transform: translate(70px,40px) rotateX(-5deg); opacity: 0.12; }
          94%  { opacity: 0.08; }
          100% { opacity: 0; transform: translate(-10px,30px) rotateX(0deg); }
        }
        @keyframes tf-4 {
          0%   { opacity: 0; transform: translate(0,0); }
          15%  { opacity: 0.11; }
          35%  { transform: translate(90px,30px); opacity: 0.17; }
          65%  { transform: translate(-30px,-70px); opacity: 0.09; }
          85%  { opacity: 0.11; }
          100% { opacity: 0; transform: translate(60px,10px); }
        }
      `}</style>
    </div>
  )
}
