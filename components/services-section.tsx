const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development with modern technologies and best practices.",
    icon: "",
  },
  {
    title: "Frontend Engineering",
    description: "Beautiful, responsive interfaces built with React, Next.js, and cutting-edge frameworks.",
    icon: "",
  },
  {
    title: "Backend Architecture",
    description: "Scalable server solutions, APIs, and database design for robust applications.",
    icon: "",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "",
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure automation, CI/CD pipelines, and cloud deployment expertise.",
    icon: "",
  },
  {
    title: "Consulting",
    description: "Technical guidance, code reviews, and strategic development planning.",
    icon: "",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Our Services</h2>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">
          Comprehensive development services tailored to your needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
