import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@assets/generated_images/Hero_dog_water_park_6571ae90.png";
import groomingImage from "@assets/generated_images/Grooming_spa_service_5f1b1263.png";
import swimImage from "@assets/generated_images/Swimming_lesson_event_db28e24e.png";
import agilityImage from "@assets/generated_images/Agility_training_event_92dac26b.png";

const services = [
  {
    id: "1",
    name: "Día Completo en el Parque",
    description: "Acceso ilimitado a todas las piscinas y zonas de juego acuático durante todo el día. Incluye supervisión profesional.",
    price: 25,
    duration: "Todo el día",
    imageUrl: heroImage,
    category: "pase"
  },
  {
    id: "2",
    name: "Medio Día de Diversión",
    description: "4 horas de acceso a todas las instalaciones acuáticas con supervisión incluida.",
    price: 15,
    duration: "4 horas",
    imageUrl: heroImage,
    category: "pase"
  },
  {
    id: "3",
    name: "Baño y Peluquería Premium",
    description: "Servicio completo de baño, corte de pelo profesional, limpieza de oídos, corte de uñas y secado.",
    price: 45,
    duration: "2 horas",
    imageUrl: groomingImage,
    category: "peluqueria"
  },
  {
    id: "4",
    name: "Baño Express",
    description: "Baño rápido con champú premium, secado y cepillado. Perfecto para refrescar a tu perro.",
    price: 25,
    duration: "45 minutos",
    imageUrl: groomingImage,
    category: "peluqueria"
  },
  {
    id: "5",
    name: "Corte de Pelo Estilizado",
    description: "Corte profesional según raza o preferencia del dueño. Incluye baño y acabado.",
    price: 50,
    duration: "2.5 horas",
    imageUrl: groomingImage,
    category: "peluqueria"
  },
  {
    id: "6",
    name: "Spa Relajante Completo",
    description: "Masaje canino terapéutico, aromaterapia, tratamiento hidratante y baño relajante con sales especiales.",
    price: 55,
    duration: "1.5 horas",
    imageUrl: groomingImage,
    category: "spa"
  },
  {
    id: "7",
    name: "Tratamiento Anti-Estrés",
    description: "Sesión de masaje y aromaterapia para reducir la ansiedad y el estrés de tu perro.",
    price: 40,
    duration: "1 hora",
    imageUrl: groomingImage,
    category: "spa"
  },
  {
    id: "8",
    name: "Hidroterapia Terapéutica",
    description: "Sesión de hidroterapia para rehabilitación muscular y articular. Ideal para perros mayores o en recuperación.",
    price: 60,
    duration: "45 minutos",
    imageUrl: swimImage,
    category: "spa"
  },
  {
    id: "9",
    name: "Clase de Natación Grupal",
    description: "Enseña a tu perro a nadar con seguridad en grupo. Incluye instructor certificado y chaleco salvavidas.",
    price: 30,
    duration: "1 hora",
    imageUrl: swimImage,
    category: "especial"
  },
  {
    id: "10",
    name: "Entrenamiento de Agilidad",
    description: "Sesión de obstáculos y ejercicios para mejorar la agilidad, coordinación y obediencia.",
    price: 35,
    duration: "1 hora",
    imageUrl: agilityImage,
    category: "especial"
  },
  {
    id: "11",
    name: "Fiesta de Cumpleaños",
    description: "Celebración completa con decoración, pastel para perros, actividades acuáticas y área privada para hasta 10 perros.",
    price: 120,
    duration: "3 horas",
    imageUrl: heroImage,
    category: "especial"
  },
  {
    id: "12",
    name: "Sesión Fotográfica Acuática",
    description: "Sesión profesional de fotos de tu perro en el agua. Incluye 20 fotos editadas digitales.",
    price: 65,
    duration: "1 hora",
    imageUrl: heroImage,
    category: "especial"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Desde pases de día hasta spa de lujo, todo para el bienestar de tu perro
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto gap-2">
              <TabsTrigger value="todos" data-testid="tab-todos">Todos</TabsTrigger>
              <TabsTrigger value="pase" data-testid="tab-pase">Pases de Día</TabsTrigger>
              <TabsTrigger value="peluqueria" data-testid="tab-peluqueria">Peluquería</TabsTrigger>
              <TabsTrigger value="spa" data-testid="tab-spa">Spa</TabsTrigger>
              <TabsTrigger value="especial" data-testid="tab-especial">Servicios Especiales</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} {...service} onBook={() => console.log(`Book ${service.name}`)} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pase" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.category === "pase").map((service) => (
                  <ServiceCard key={service.id} {...service} onBook={() => console.log(`Book ${service.name}`)} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="peluqueria" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.category === "peluqueria").map((service) => (
                  <ServiceCard key={service.id} {...service} onBook={() => console.log(`Book ${service.name}`)} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="spa" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.category === "spa").map((service) => (
                  <ServiceCard key={service.id} {...service} onBook={() => console.log(`Book ${service.name}`)} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="especial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.category === "especial").map((service) => (
                  <ServiceCard key={service.id} {...service} onBook={() => console.log(`Book ${service.name}`)} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
