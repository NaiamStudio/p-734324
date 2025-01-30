import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Index from "./pages/Index"
import Spanish from "./pages/Spanish"
import English from "./pages/English"
import NotFound from "./pages/NotFound"
import SocialButtons from "./components/SocialButtons";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Routes>
            <Route path="/" element={<Navigate to="/es" replace />} />
            <Route path="/es" element={<Spanish />} />
            <Route path="/en" element={<English />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SocialButtons />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App