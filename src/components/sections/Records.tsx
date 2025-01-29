export const Records = () => {
  const images = Array(6).fill("/lovable-uploads/f347d5cc-0d13-402a-8eac-9c66857d0a79.png");

  return (
    <section id="records" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Records
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div key={i} className="aspect-square">
              <img
                src={image}
                alt={`Record ${i + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}