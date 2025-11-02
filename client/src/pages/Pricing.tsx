import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ParkEntryPricing, GroomingPricing, SpaPricing } from "@/components/PricingTables";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import waterBg from "@assets/fodo mar_1762090487272.jpg";

export default function Pricing() {
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
              Tarifas y Precios
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Consulta todos nuestros precios y servicios disponibles
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="entradas" className="w-full max-w-6xl mx-auto">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto gap-2">
              <TabsTrigger value="entradas" data-testid="tab-entradas">Entradas al Parque</TabsTrigger>
              <TabsTrigger value="peluqueria" data-testid="tab-peluqueria">Peluquería</TabsTrigger>
              <TabsTrigger value="spa" data-testid="tab-spa">Spa</TabsTrigger>
            </TabsList>
            
            <TabsContent value="entradas" className="mt-0">
              <ParkEntryPricing />
            </TabsContent>
            
            <TabsContent value="peluqueria" className="mt-0">
              <GroomingPricing />
            </TabsContent>
            
            <TabsContent value="spa" className="mt-0">
              <SpaPricing />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
