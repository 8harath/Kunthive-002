"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
]

export function LiquidNavbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      let foundActiveSection = false

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id)
            foundActiveSection = true
          }
        }
      })

      // If not in any section (e.g., hero section), clear active state
      if (!foundActiveSection) {
        setActiveSection("")
      }
    }

    handleScroll() // Call once on mount to set initial state
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Calculate offset to center the section in viewport
      // Account for navbar height and add padding to center the section better
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        isScrolled ? "top-4" : "top-6",
      )}
    >
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 shadow-2xl shadow-black/20">
        {/* Glass effect overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        <ul className="flex items-center gap-1 relative z-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-xl font-medium transition-all duration-300",
                  "hover:bg-white/10",
                  activeSection === item.id ? "text-white bg-white/20" : "text-white/70",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-pulse" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
