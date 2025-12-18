const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your goals, challenges, and requirements to create a clear project roadmap.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our team crafts detailed designs and technical specifications aligned with your vision.",
  },
  {
    step: "03",
    title: "Development",
    description: "Expert developers bring your project to life using cutting-edge technologies and best practices.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Rigorous testing ensures quality, performance, and reliability across all platforms.",
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Our Process</h2>
        <p className="text-xl text-white/60 mb-16 max-w-3xl">A proven methodology for delivering exceptional results</p>

        <div className="space-y-6">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
