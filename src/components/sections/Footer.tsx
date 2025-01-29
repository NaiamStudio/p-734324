export const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-primary">
              ESPAÑOL
            </button>
            <button className="text-sm font-medium hover:text-primary">
              ENGLISH
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Giletta Promotions LLC</p>
            <p>Desarrollado por Naiam Studio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}