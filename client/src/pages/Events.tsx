import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import birthdayEvent from "@assets/generated_images/Birthday_party_event_c6caaeb1.png";
import swimEvent from "@assets/generated_images/Swimming_lesson_event_db28e24e.png";
import agilityEvent from "@assets/generated_images/Agility_training_event_92dac26b.png";
import waterBg from "@assets/fodo mar_1762090487272.jpg";

const upcomingEvents = [
  {
    id: "1",
    title: "Fiesta de Cumpleaños Canina",
    description: "Celebra el cumpleaños de tu perro con una fiesta en la piscina. Incluye decoración, pastel especial para perros y actividades acuáticas.",
    date: "15 de Junio, 2024",
    time: "11:00 - 14:00",
    price: 35,
    capacity: 20,
    registered: 15,
    imageUrl: birthdayEvent,
    category: "Eventos Especiales"
  },
  {
    id: "2",
    title: "Clase de Natación para Principiantes",
    description: "Enseña a tu perro a nadar con seguridad. Instructor certificado y chalecos salvavidas incluidos.",
    date: "18 de Junio, 2024",
    time: "10:00 - 11:30",
    price: 25,
    capacity: 15,
    registered: 8,
    imageUrl: swimEvent,
    category: "Clases"
  },
  {
    id: "3",
    title: "Competencia de Agilidad Acuática",
    description: "Circuito de obstáculos en y alrededor del agua. Premios para los ganadores en diferentes categorías.",
    date: "22 de Junio, 2024",
    time: "16:00 - 19:00",
    price: 20,
    capacity: 30,
    registered: 18,
    imageUrl: agilityEvent,
    category: "Competencias"
  },
  {
    id: "4",
    title: "Día de Adopción Abierto",
    description: "Conoce a todos nuestros perros disponibles para adopción. Evento gratuito con actividades para toda la familia.",
    date: "25 de Junio, 2024",
    time: "12:00 - 18:00",
    price: 0,
    capacity: 100,
    registered: 45,
    imageUrl: birthdayEvent,
    category: "Adopción"
  },
  {
    id: "5",
    title: "Noche de Cine Canino",
    description: "Proyección al aire libre de películas de perros. Trae tu manta y disfruta con tu mascota.",
    date: "28 de Junio, 2024",
    time: "20:00 - 22:30",
    price: 15,
    capacity: 50,
    registered: 32,
    imageUrl: birthdayEvent,
    category: "Entretenimiento"
  },
  {
    id: "6",
    title: "Entrenamiento Avanzado de Natación",
    description: "Para perros que ya saben nadar. Técnicas avanzadas y ejercicios de resistencia en el agua.",
    date: "1 de Julio, 2024",
    time: "09:00 - 10:30",
    price: 30,
    capacity: 12,
    registered: 10,
    imageUrl: swimEvent,
    category: "Clases"
  }
];

const pastEvents = [
  {
    id: "p1",
    title: "Gran Inauguración del Parque",
    description: "Celebramos la apertura de Oasis Canino con más de 200 perros felices. Fue un día inolvidable con juegos, premios y mucha diversión.",
    date: "15 de Marzo, 2024",
    imageUrl: birthdayEvent,
    attendees: 200
  },
  {
    id: "p2",
    title: "Campeonato de Natación Canina",
    description: "Max, un labrador de 4 años, ganó el primer lugar en velocidad. El evento contó con 50 participantes y fue todo un éxito.",
    date: "22 de Abril, 2024",
    imageUrl: swimEvent,
    attendees: 50
  },
  {
    id: "p3",
    title: "Día de la Familia Canina",
    description: "Jornada especial donde las familias disfrutaron de actividades acuáticas, concursos de disfraces y sesiones de fotos. Se adoptaron 8 perros ese día.",
    date: "10 de Mayo, 2024",
    imageUrl: agilityEvent,
    attendees: 150
  },
  {
    id: "p4",
    title: "Workshop de Cuidado Canino",
    description: "Veterinarios profesionales enseñaron técnicas de primeros auxilios, nutrición y cuidado dental. Gran participación de dueños interesados.",
    date: "5 de Abril, 2024",
    imageUrl: birthdayEvent,
    attendees: 75
  }
];

export default function Events() {
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
              Eventos y Actividades
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Actividades especiales, clases y eventos para toda la comunidad canina
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Próximos Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event) => (
              <EventCard 
                key={event.id} 
                {...event} 
                onRegister={() => console.log(`Register for ${event.title}`)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Eventos Pasados</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Revive los mejores momentos de nuestros eventos anteriores
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-background rounded-lg overflow-hidden hover-elevate" data-testid={`past-event-${event.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-medium">{event.attendees} asistentes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
