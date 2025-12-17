export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 text-balance">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-white/80 leading-relaxed">
              We are a premier developer marketplace connecting visionary companies with exceptional engineering talent.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Our platform brings together the most skilled developers, designers, and engineers who are passionate
              about building innovative solutions that drive growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To revolutionize how businesses find and collaborate with world-class developers, creating partnerships
                that fuel innovation and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
