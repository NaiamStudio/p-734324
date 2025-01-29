import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-foreground">404</h1>
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-foreground">¡Oops! Página no encontrada</p>
          <p className="text-muted-foreground">
            La página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        <Button asChild className="mt-4">
          <a href="/">Volver al Inicio</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;