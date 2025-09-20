"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Hi, I'm Sarah Johnson
            </h1>
            <p className="text-xl sm:text-2xl text-secondary mb-4">Fashion & Lifestyle Model</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
              Passionate about storytelling through fashion, lifestyle, and creative expression. Available for
              collaborations and campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Book Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-card border-2 border-accent flex items-center justify-center shadow-2xl">
                <img
                  src="/fashion-model-professional-headshot.jpg"
                  alt="Sarah Johnson - Fashion Model"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
