import { Droplet, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplet className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl">Oasis Canino</span>
            </div>
            <p className="text-sm text-muted-foreground">
              El primer parque acuático diseñado exclusivamente para la diversión y bienestar de tu mejor amigo.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/oasiscanino" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-servicios">
                    Servicios
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/productos">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-productos">
                    Productos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/adopciones">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-adopciones">
                    Adopciones
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/eventos">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-eventos">
                    Eventos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/restaurante">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-restaurant">
                    Restaurante VIPS
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Horarios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lunes - Viernes: 9:00 - 20:00</li>
              <li>Sábados: 10:00 - 21:00</li>
              <li>Domingos: 10:00 - 19:00</li>
              <li className="text-primary font-medium">Abierto todos los días</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  AV. Teifeller, 9 Cancelada<br />
                  Estepona (Málaga)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+34951365365" className="text-muted-foreground hover:text-foreground">
                  951 365 365
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:info@oasiscanino.es" className="text-muted-foreground hover:text-foreground">
                  info@oasiscanino.es
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Oasis Canino. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
