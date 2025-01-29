export const Records = () => {
  return (
    <section id="records" className="py-20 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Registros
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/13d6480f3faa3fd2bfdff03eb2f62b8e00003c91e147e92163ad397db90b92ad?placeholderIfAbsent=true"
                alt="Record"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}