import { Home, Droplet, ShoppingBag, Heart, Calendar, MapPin, UtensilsCrossed } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", icon: Home, label: "Inicio" },
  { path: "/servicios", icon: Droplet, label: "Servicios" },
  { path: "/productos", icon: ShoppingBag, label: "Productos" },
  { path: "/adopciones", icon: Heart, label: "Adopciones" },
  { path: "/eventos", icon: Calendar, label: "Eventos" },
  { path: "/restaurante", icon: UtensilsCrossed, label: "Restaurante" },
  { path: "/ubicacion", icon: MapPin, label: "Ubicación" },
];

export default function Navigation() {
  const [location] = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary" data-testid="link-home">
            <Droplet className="w-6 h-6" />
            Oasis Canino
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="gap-2"
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-menu-mobile">
              <Home className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
