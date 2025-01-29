import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Spanish from "./pages/Spanish"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/es" element={<Spanish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App