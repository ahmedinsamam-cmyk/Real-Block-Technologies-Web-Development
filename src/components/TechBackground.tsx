import { useState } from 'react'
import { motion } from 'framer-motion'

/** Subtle animated tech canvas for hero backgrounds */
export function TechBackground() {
  const [nodes] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 37) % 100,
      y: (i * 53) % 100,
      size: 2 + (i % 3),
      delay: (i % 6) * 0.35,
    })),
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 gradient-hero-mesh" />
      <div className="absolute inset-0 grid-tech opacity-50" />
      <svg className="absolute inset-0 h-full w-full opacity-40">
        {nodes.map((node, i) => {
          const next = nodes[(i + 3) % nodes.length]
          return (
            <line
              key={`line-${node.id}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke="rgba(21,94,239,0.25)"
              strokeWidth="1"
            />
          )
        })}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="rgba(212,175,55,0.55)"
            animate={{ opacity: [0.25, 0.85, 0.25], r: [node.size, node.size + 1.5, node.size] }}
            transition={{ duration: 3.5, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
      <motion.div
        className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-royal/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
