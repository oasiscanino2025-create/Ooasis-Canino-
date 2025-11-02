import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import DogCard from "@/components/DogCard";
import EventCard from "@/components/EventCard";
import { Droplet, Heart, Calendar, Shield, Users, Star, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_dog_water_park_6571ae90.png";
import groomingImage from "@assets/generated_images/Grooming_spa_service_5f1b1263.png";
import dogLuna from "@assets/generated_images/Adoptable_puppy_Luna_39bedba5.png";
import eventImage from "@assets/generated_images/Birthday_party_event_c6caaeb1.png";
import collarImage from "@assets/4bca22f11f614eecb34adfd2ff8d63f2_1762090311520.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-primary/90 text-primary-foreground text-sm px-4 py-2">
              Primer Parque Acuático Canino de España
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Donde tu Perro Encuentra su Paraíso
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
              Diversión acuática, servicios premium y una comunidad que ama a los perros tanto como tú
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tarifas">
                <Button size="lg" className="text-lg px-8 py-6" data-testid="button-hero-pricing">
                  Ver Tarifas
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border-2 hover:bg-background/30" data-testid="button-hero-services">
                  Explorar Servicios
                </Button>
              </Link>
              <Link href="/adopciones">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border-2 hover:bg-background/30"
                  data-testid="button-hero-adopt"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Adoptar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Por qué Oasis Canino?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más que un parque, somos una familia dedicada al bienestar de tu mejor amigo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover-elevate" data-testid="card-feature-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">100% Seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Instalaciones certificadas con personal veterinario disponible
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-feature-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Profesionales Expertos</h3>
                <p className="text-sm text-muted-foreground">
                  Equipo certificado en cuidado y adiestramiento canino
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-feature-3">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Droplet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Agua Purificada</h3>
                <p className="text-sm text-muted-foreground">
                  Sistema de filtración de última generación para agua cristalina
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-feature-4">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Premiados</h3>
                <p className="text-sm text-muted-foreground">
                  Reconocidos como el mejor parque canino de la región
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Servicios Premium</h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que tu perro necesita en un solo lugar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              name="Baño y Peluquería Premium"
              description="Servicio completo de baño, corte de pelo, limpieza de oídos y uñas para tu perro."
              price={45}
              duration="2 horas"
              imageUrl={groomingImage}
              onBook={() => console.log('Service booked')}
            />
            <ServiceCard
              name="Día Completo en el Parque"
              description="Acceso ilimitado a todas las piscinas y zonas de juego acuático durante todo el día."
              price={25}
              duration="Todo el día"
              imageUrl={heroImage}
              onBook={() => console.log('Service booked')}
            />
            <ServiceCard
              name="Spa Relajante"
              description="Masaje canino, aromaterapia y tratamiento hidratante para el bienestar total."
              price={55}
              duration="1.5 horas"
              imageUrl={groomingImage}
              onBook={() => console.log('Service booked')}
            />
          </div>
          
          <div className="text-center mt-8">
            <Link href="/servicios">
              <Button size="lg" variant="outline" data-testid="button-view-all-services">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Productos Destacados</h2>
            <p className="text-xl text-muted-foreground">
              Todo lo esencial para tu compañero
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ProductCard
              name="Collar Ajustable Azul"
              price={18}
              imageUrl={collarImage}
              category="Accesorios"
              onAddToCart={() => console.log('Added to cart')}
            />
          </div>
          
          <div className="text-center mt-8">
            <Link href="/productos">
              <Button size="lg" variant="outline" data-testid="button-view-all-products">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Encuentra tu Nuevo Mejor Amigo</h2>
            <p className="text-xl text-muted-foreground">
              Perros rescatados buscando un hogar lleno de amor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <DogCard
              name="Luna"
              breed="Golden Retriever Mix"
              age="8 meses"
              size="Mediano"
              personality="Juguetona, cariñosa y muy activa. Le encanta el agua y jugar con otros perros."
              imageUrl={dogLuna}
              onLearnMore={() => console.log('Learn more')}
            />
          </div>
          
          <div className="text-center mt-8">
            <Link href="/adopciones">
              <a>
                <Button size="lg" data-testid="button-view-all-adoptions">
                  <Heart className="w-5 h-5 mr-2" />
                  Ver Todos los Perros
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Próximos Eventos</h2>
            <p className="text-xl text-muted-foreground">
              Actividades especiales para tu perro y toda la familia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EventCard
              title="Fiesta de Cumpleaños Canina"
              description="Celebra el cumpleaños de tu perro con una fiesta en la piscina."
              date="15 de Junio, 2024"
              time="11:00 - 14:00"
              price={35}
              capacity={20}
              registered={15}
              imageUrl={eventImage}
              category="Eventos Especiales"
              onRegister={() => console.log('Registered')}
            />
          </div>
          
          <div className="text-center mt-8">
            <Link href="/eventos">
              <a>
                <Button size="lg" variant="outline" data-testid="button-view-all-events">
                  <Calendar className="w-5 h-5 mr-2" />
                  Ver Todos los Eventos
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para la Aventura?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visítanos hoy y descubre por qué somos el lugar favorito de miles de perros felices
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/ubicacion">
              <a>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-cta-location">
                  Cómo Llegar
                </Button>
              </a>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-cta-contact">
              Contactar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
