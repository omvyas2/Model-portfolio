export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating modern, responsive websites
              that not only look great but also deliver exceptional user experiences. My journey started with a
              curiosity about how websites work, and it has evolved into a passion for crafting digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding,
              you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver websites that exceed
              expectations and drive real business results.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-card-foreground mb-6">What I Enjoy</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">☕</span>
                <span className="text-lg text-card-foreground">Coffee</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📸</span>
                <span className="text-lg text-card-foreground">Photography</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✈️</span>
                <span className="text-lg text-card-foreground">Travel</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <span className="text-lg text-card-foreground">Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
