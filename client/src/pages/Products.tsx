import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import waterBg from "@assets/fodo mar_1762090487272.jpg";

// Import product images
import collar1 from "@assets/4bca22f11f614eecb34adfd2ff8d63f2_1762090311520.jpg";
import treats1 from "@assets/4d51117f7a6e4a9f8ea6f800b2be14a0_1762090311521.jpg";
import wipes1 from "@assets/5c5c9a4c7e4f496a9669674ac528b2fd_1762090311522.jpg";
import jacket1 from "@assets/5d5ed0d47a294d8f9e17e469c8bbd47d_1762090311523.jpg";
import tags from "@assets/409f1b3c6b054c69a58669ddef8ba3c6_1762090311524.jpg";
import rope from "@assets/533c23c8897b433da9d556a5b7af3776_1762090311524.jpg";
import sweater from "@assets/834a135e154746deaec979de235ec646_1762090311525.jpg";
import bone from "@assets/a56eb37355cc49e68c36b14cbdc94f23_1762090311526.jpg";
import bed from "@assets/bf97a05de62640cfb12d9071b1fa6f11_1762090311526.jpg";
import bowl1 from "@assets/c889c73401ce4588a0dc5c064ccaccdf_1762090311527.jpg";
import wipes2 from "@assets/c27016cfb65e48a497b6d99b112ce7fa_1762090311528.jpg";
import food from "@assets/c48722f4b67e42ba8d23c4c1c2945659_1762090311528.jpg";
import premios from "@assets/cb29e6bf7414444f8a71d28d305001cb_1762090311529.jpg";
import spray from "@assets/d6e23ffe657a45c3b4674bc0893761c5_1762090311530.jpg";
import collar2 from "@assets/d8de818d96644a43b28fd0b10e71ade3_1762090311530.jpg";
import bowl2 from "@assets/f1fd99c4863a43b595241d9affc638c7_1762090311531.jpg";

const products = [
  { id: "1", name: "Collar Ajustable Azul", price: 18, imageUrl: collar1, category: "accesorios", stock: 15 },
  { id: "2", name: "Premios Naturales Variados", price: 12, imageUrl: treats1, category: "comida", stock: 25 },
  { id: "3", name: "Toallitas Hipoalergénicas", price: 8, imageUrl: wipes1, category: "higiene", stock: 30 },
  { id: "4", name: "Chaqueta Impermeable Verde", price: 42, imageUrl: jacket1, category: "ropa", stock: 8 },
  { id: "5", name: "Placas de Identificación", price: 15, imageUrl: tags, category: "accesorios", stock: 20 },
  { id: "6", name: "Cuerda de Juego Trenzada", price: 10, imageUrl: rope, category: "juguetes", stock: 18 },
  { id: "7", name: "Suéter Colorido de Punto", price: 38, imageUrl: sweater, category: "ropa", stock: 6 },
  { id: "8", name: "Hueso Masticable Turquesa", price: 14, imageUrl: bone, category: "juguetes", stock: 22 },
  { id: "9", name: "Cama Redonda Suave", price: 55, imageUrl: bed, category: "descanso", stock: 10 },
  { id: "10", name: "Plato de Acero Inoxidable", price: 16, imageUrl: bowl1, category: "alimentacion", stock: 16 },
  { id: "11", name: "Toallitas de Limpieza", price: 8, imageUrl: wipes2, category: "higiene", stock: 30 },
  { id: "12", name: "Comida Premium Variada", price: 45, imageUrl: food, category: "comida", stock: 12 },
  { id: "13", name: "Premios Mini Jamón", price: 10, imageUrl: premios, category: "comida", stock: 28 },
  { id: "14", name: "Spray Perfumado Paw-Fumé", price: 12, imageUrl: spray, category: "higiene", stock: 14 },
  { id: "15", name: "Collar Reflectante Negro", price: 22, imageUrl: collar2, category: "accesorios", stock: 11 },
  { id: "16", name: "Plato Azul Antideslizante", price: 14, imageUrl: bowl2, category: "alimentacion", stock: 19 },
];

export default function Products() {
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
              Tienda de Productos
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Todo lo que tu perro necesita para ser feliz y saludable
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto gap-2">
              <TabsTrigger value="todos" data-testid="tab-all">Todos</TabsTrigger>
              <TabsTrigger value="accesorios" data-testid="tab-accessories">Accesorios</TabsTrigger>
              <TabsTrigger value="comida" data-testid="tab-food">Comida y Premios</TabsTrigger>
              <TabsTrigger value="ropa" data-testid="tab-clothing">Ropa</TabsTrigger>
              <TabsTrigger value="juguetes" data-testid="tab-toys">Juguetes</TabsTrigger>
              <TabsTrigger value="higiene" data-testid="tab-hygiene">Higiene</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    {...product} 
                    onAddToCart={() => console.log(`Add to cart: ${product.name}`)} 
                  />
                ))}
              </div>
            </TabsContent>
            
            {["accesorios", "comida", "ropa", "juguetes", "higiene", "descanso", "alimentacion"].map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === cat).map((product) => (
                    <ProductCard 
                      key={product.id} 
                      {...product} 
                      onAddToCart={() => console.log(`Add to cart: ${product.name}`)} 
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
