export function ProjectsSection() {
  const portfolioPhotos = [
    {
      title: "Editorial Fashion",
      category: "Editorial",
      image: "/editorial-fashion-model-photo.jpg",
      description:
        "High-fashion editorial shoot for Vogue Magazine featuring avant-garde styling and dramatic lighting.",
    },
    {
      title: "Runway Collection",
      category: "Runway",
      image: "/runway-model-walking.jpg",
      description: "Walking for Milan Fashion Week showcasing the latest collection from renowned designer brands.",
    },
    {
      title: "Commercial Beauty",
      category: "Commercial",
      image: "/commercial-beauty-model-shot.jpg",
      description: "Beauty campaign for luxury skincare brand emphasizing natural radiance and timeless elegance.",
    },
    {
      title: "Street Style",
      category: "Lifestyle",
      image: "/street-style-model-photo.jpg",
      description: "Urban lifestyle shoot capturing contemporary fashion trends in authentic city environments.",
    },
    {
      title: "Haute Couture",
      category: "Editorial",
      image: "/haute-couture-model-dress.jpg",
      description: "Exclusive haute couture editorial featuring handcrafted designer pieces and artistic composition.",
    },
    {
      title: "Brand Campaign",
      category: "Commercial",
      image: "/brand-campaign-model-photo.jpg",
      description: "International brand campaign showcasing versatile modeling range and professional expertise.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A curated selection of my modeling work spanning editorial, runway, and commercial photography.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioPhotos.map((photo, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={photo.image || "/placeholder.svg?height=400&width=300&query=fashion model photo"}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">{photo.title}</h3>
                    <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {photo.category}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
