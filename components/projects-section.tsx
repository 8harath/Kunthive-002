"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description: "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    image: "/modern-ecommerce-dashboard.png",
    link: "#",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    category: "Frontend",
    description: "Real-time analytics platform with AI-powered insights and beautiful data visualizations.",
    image: "/ai-analytics-dashboard-dark.jpg",
    link: "#",
    tags: ["React", "D3.js", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Healthcare App",
    category: "Mobile",
    description: "HIPAA-compliant telemedicine application connecting patients with healthcare providers.",
    image: "/healthcare-mobile-app.jpg",
    link: "#",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Fintech Solution",
    category: "Backend",
    description: "Secure payment processing system handling millions of transactions daily.",
    image: "/fintech-payment-system.jpg",
    link: "#",
    tags: ["Python", "PostgreSQL", "Redis"],
  },
  {
    id: 5,
    title: "Social Network",
    category: "Full-Stack",
    description: "Community platform with real-time messaging, feeds, and content recommendations.",
    image: "/social-media-platform.png",
    link: "#",
    tags: ["Next.js", "GraphQL", "Supabase"],
  },
  {
    id: 6,
    title: "IoT Dashboard",
    category: "Full-Stack",
    description: "Industrial IoT monitoring system with predictive maintenance capabilities.",
    image: "/iot-industrial-dashboard.jpg",
    link: "#",
    tags: ["Vue.js", "Python", "TimescaleDB"],
  },
]

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0, width: 0, height: 0 })

  const handleCardClick = (projectId: number, event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    setCardPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })

    setExpandedProject(projectId)
    document.body.style.overflow = "hidden"
  }

  const handleClose = () => {
    setExpandedProject(null)
    document.body.style.overflow = "auto"
  }

  const expandedProjectData = projects.find((p) => p.id === expandedProject)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Featured Projects</h2>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">Showcasing our best work and successful collaborations</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={(e) => handleCardClick(project.id, e)}
              className="group cursor-pointer backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-white/70 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Project View */}
      {expandedProject && expandedProjectData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={handleClose}>
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Expanded Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-5xl backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl",
              "animate-in zoom-in-95 duration-500",
            )}
            style={{
              maxHeight: "90vh",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 relative">
                <img
                  src={expandedProjectData.image || "/placeholder.svg"}
                  alt={expandedProjectData.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12">
                <div className="text-sm text-white/70 font-medium mb-3">{expandedProjectData.category}</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{expandedProjectData.title}</h3>
                <p className="text-xl text-white/80 leading-relaxed mb-8">{expandedProjectData.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {expandedProjectData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Link Button */}
                <a
                  href={expandedProjectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-white/90"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>

                {/* Additional Project Information */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h4 className="text-2xl font-semibold text-white mb-4">Project Details</h4>
                  <p className="text-white/70 leading-relaxed">
                    This project showcases our expertise in building scalable, modern applications. We worked closely
                    with the client to deliver a solution that exceeded expectations and provided measurable business
                    value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
