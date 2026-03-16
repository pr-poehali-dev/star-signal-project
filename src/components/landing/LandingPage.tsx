import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'

const NAV_LABELS = ['Главная', 'Модели', 'Суб-партнёрство', 'Выплаты', 'Акции', 'Отзывы', 'SEO', 'Контакты']

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [hoveredNav, setHoveredNav] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4 gap-0">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredNav(index)}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {hoveredNav === index && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute right-8 text-xs text-white bg-black/60 border border-white/10 backdrop-blur-sm rounded-full px-2.5 py-1 whitespace-nowrap"
              >
                {NAV_LABELS[index]}
              </motion.span>
            )}
            <button
              className={`w-2.5 h-2.5 rounded-full my-2 transition-all duration-300 ${
                index === activeSection
                  ? 'bg-[#FFD700] scale-150 shadow-[0_0_8px_#FFD700]'
                  : 'bg-neutral-700 hover:bg-neutral-400'
              }`}
              onClick={() => handleNavClick(index)}
            />
          </div>
        ))}
      </nav>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#FFD700] origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}
