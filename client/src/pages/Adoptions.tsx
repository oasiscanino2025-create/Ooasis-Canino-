import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DogCard from "@/components/DogCard";
import dogLuna from "@assets/generated_images/Adoptable_puppy_Luna_39bedba5.png";
import dogMax from "@assets/generated_images/Adoptable_dog_Max_b3f525ee.png";
import dogBella from "@assets/generated_images/Adoptable_dog_Bella_6c33a1a7.png";
import waterBg from "@assets/fodo mar_1762090487272.jpg";

const dogs = [
  {
    id: "1",
    name: "Luna",
    breed: "Golden Retriever Mix",
    age: "8 meses",
    size: "Mediano",
    personality: "Juguetona, cariñosa y muy activa. Le encanta el agua y jugar con otros perros. Perfecta para familias con niños.",
    imageUrl: dogLuna,
    available: 1
  },
  {
    id: "2",
    name: "Max",
    breed: "Labrador Retriever",
    age: "3 años",
    size: "Grande",
    personality: "Tranquilo, leal y obediente. Entrenado en comandos básicos. Ideal para familias o personas mayores.",
    imageUrl: dogMax,
    available: 1
  },
  {
    id: "3",
    name: "Bella",
    breed: "Border Collie Mix",
    age: "2 años",
    size: "Mediano",
    personality: "Inteligente, enérgica y muy cariñosa. Necesita actividad diaria. Excelente para personas activas.",
    imageUrl: dogBella,
    available: 1
  },
  {
    id: "4",
    name: "Rocky",
    breed: "Pastor Alemán",
    age: "4 años",
    size: "Grande",
    personality: "Protector, inteligente y leal. Bien entrenado. Busca un hogar con experiencia en perros grandes.",
    imageUrl: dogMax,
    available: 1
  },
  {
    id: "5",
    name: "Coco",
    breed: "Beagle",
    age: "1 año",
    size: "Pequeño",
    personality: "Alegre, curioso y sociable. Le encanta explorar y jugar. Perfecto para apartamentos.",
    imageUrl: dogLuna,
    available: 1
  },
  {
    id: "6",
    name: "Toby",
    breed: "Mestizo",
    age: "6 meses",
    size: "Mediano",
    personality: "Cachorro energético buscando su primer hogar. Juguetón y en proceso de entrenamiento.",
    imageUrl: dogBella,
    available: 1
  }
];

const recentAdoptions = [
  {
    id: "a1",
    name: "Charlie",
    adopter: "Familia García",
    imageUrl: dogMax,
    story: "Después de 6 meses en el refugio, Charlie encontró su hogar perfecto. La familia tenía dos niños que siempre soñaron con un perro. Ahora Charlie los acompaña en el parque todos los días."
  },
  {
    id: "a2",
    name: "Nina",
    adopter: "Laura Martínez",
    imageUrl: dogBella,
    story: "Nina era muy tímida cuando llegó, pero Laura, una maestra de yoga, le dio todo el amor y paciencia que necesitaba. Ahora Nina la acompaña a sus clases y es la más cariñosa."
  },
  {
    id: "a3",
    name: "Thor",
    adopter: "Carlos y Ana",
    imageUrl: dogMax,
    story: "Esta pareja de jubilados buscaba un compañero tranquilo. Thor resultó ser perfecto - le encanta pasear por la playa y descansar en el jardín. Dicen que ha llenado sus vidas de alegría."
  },
  {
    id: "a4",
    name: "Mia",
    adopter: "Familia Rodríguez",
    imageUrl: dogLuna,
    story: "Mia llegó siendo una cachorra asustada. Los Rodríguez la vieron en nuestra página y fue amor a primera vista. Ahora es la reina de la casa y tiene su propia cama junto a la ventana."
  },
  {
    id: "a5",
    name: "Bruno",
    adopter: "Miguel Sánchez",
    imageUrl: dogMax,
    story: "Miguel buscaba un compañero para correr por las mañanas. Bruno, un border collie energético, era justo lo que necesitaba. Juntos han corrido más de 500 km este año."
  },
  {
    id: "a6",
    name: "Lola",
    adopter: "Carmen y José",
    imageUrl: dogBella,
    story: "Lola pasó 8 meses esperando su hogar. Carmen y José la conocieron en un evento de adopción y supieron inmediatamente que era para ellos. Ahora es inseparable de su nueva familia."
  }
];

export default function Adoptions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${waterBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Encuentra tu Nuevo Mejor Amigo
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Todos nuestros perros rescatados están buscando un hogar lleno de amor
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">¿Por qué Adoptar?</h2>
            <p className="text-lg text-muted-foreground">
              Cada perro que adoptas salva dos vidas: la del perro que llevas a casa y la del que ocupa su lugar en el refugio. Todos nuestros perros están vacunados, esterilizados y listos para formar parte de tu familia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Vacunados</h3>
                <p className="text-sm text-muted-foreground">Todas las vacunas al día</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Esterilizados</h3>
                <p className="text-sm text-muted-foreground">Listos para adopción</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Socializados</h3>
                <p className="text-sm text-muted-foreground">Acostumbrados a convivir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dogs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Perros Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dogs.map((dog) => (
              <DogCard 
                key={dog.id} 
                {...dog} 
                onLearnMore={() => console.log(`Learn more about ${dog.name}`)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Adoptions Wall */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Historias de Éxito</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a algunos de nuestros amigos que ya encontraron su hogar para siempre
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentAdoptions.map((adoption) => (
              <div key={adoption.id} className="bg-background rounded-lg overflow-hidden hover-elevate" data-testid={`adoption-${adoption.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={adoption.imageUrl} 
                    alt={adoption.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">{adoption.name}</h3>
                    <p className="text-sm text-primary">Adoptado por {adoption.adopter}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {adoption.story}
                  </p>
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
