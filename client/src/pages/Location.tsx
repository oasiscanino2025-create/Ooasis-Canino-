import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Calendar, Car, Instagram } from "lucide-react";
import waterBg from "@assets/fodo mar_1762090487272.jpg";

export default function Location() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${waterBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Visítanos
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Te esperamos en el mejor parque acuático para perros de España
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="hover-elevate" data-testid="card-address">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                  <p className="text-sm text-muted-foreground">
                    AV. Teifeller, 9 Cancelada<br />
                    Estepona (Málaga)
                  </p>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=AV.+Teifeller+9+Cancelada+Estepona+Málaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full" data-testid="button-directions">
                    <Car className="w-4 h-4 mr-2" />
                    Cómo Llegar
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-hours">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Lunes - Viernes: 9:00 - 20:00</p>
                    <p>Sábados: 10:00 - 21:00</p>
                    <p>Domingos: 10:00 - 19:00</p>
                    <p className="text-primary font-medium mt-2">Abierto todos los días</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-contact">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contacto</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      <a href="tel:+34951365365" className="hover:text-foreground">
                        951 365 365
                      </a>
                    </p>
                    <p>
                      <a href="mailto:info@oasiscanino.es" className="hover:text-foreground">
                        info@oasiscanino.es
                      </a>
                    </p>
                    <p>
                      <a href="https://www.instagram.com/oasiscanino" target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex items-center gap-2 justify-center">
                        <Instagram className="w-4 h-4" />
                        @oasiscanino
                      </a>
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" data-testid="button-contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4251712501404!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287a7b3c3e3d%3A0x7b7e9b3e7b7e9b3e!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Parking & Access Info */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg">Parking y Acceso</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Parking gratuito para clientes</li>
                    <li>• Más de 100 plazas disponibles</li>
                    <li>• Acceso adaptado para movilidad reducida</li>
                    <li>• Zona de carga y descarga</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg">Reservas</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Recomendamos reserva previa</li>
                    <li>• Descuentos por reserva anticipada</li>
                    <li>• Paquetes mensuales disponibles</li>
                    <li>• Eventos especiales con inscripción</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
