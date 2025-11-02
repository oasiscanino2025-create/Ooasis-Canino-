import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function ParkEntryPricing() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Venta Online */}
        <Card>
          <CardHeader className="bg-primary/10">
            <CardTitle className="text-2xl text-center">Venta Online</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg border-b pb-2">Tarifas</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">General</div>
                    <div className="text-sm text-muted-foreground">15€ Solo incluye entrada</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Golden</div>
                    <div className="text-sm text-muted-foreground">25€ Entrada al centro más sesión de spa 20 min para el can</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Premium</div>
                    <div className="text-sm text-muted-foreground">
                      50€ Entrada al centro más sesión de spa 1 hora más sesión de peluquería básico para el can más un regalo
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg border-b pb-2">Descuentos Especiales</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Discapacitados:</strong> 25% DTO Según tarifa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Familias Numerosas:</strong> 10% DTO Según tarifa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Menores de 3 años entrada gratuita</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>4-12 años pagan el 15% de la entrada general</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Venta en Taquilla */}
        <Card>
          <CardHeader className="bg-secondary/10">
            <CardTitle className="text-2xl text-center">Venta en Taquilla</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg border-b pb-2">Tarifas</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">General</div>
                    <div className="text-sm text-muted-foreground">18€ Solo incluye entrada</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Golden</div>
                    <div className="text-sm text-muted-foreground">28€ Entrada al centro más sesión de spa 20 min para el can</div>
                  </div>
                  
                  <div>
                    <div className="font-medium">Premium</div>
                    <div className="text-sm text-muted-foreground">
                      50€ Entrada al centro más sesión de spa 1 hora más sesión de peluquería básico para el can
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg border-b pb-2">Descuentos Especiales</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Discapacitados:</strong> 25% DTO Según tarifa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Familias Numerosas:</strong> 10% DTO Según tarifa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Menores de 3 años entrada gratuita</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>4-12 años pagan el 15% de la entrada general</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <span className="font-semibold">ℹ️</span>
              <span>El descuento se aplica directamente a cualquier tarifa a la hora de comprar la entrada.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold">ℹ️</span>
              <span>Los menores de tres años no pagan entrada.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="font-semibold">ℹ️</span>
              <span>Los menores de 4 a 12 años solo pagan la entrada en año 15%, este solo incluye la entrada al centro y utilizar las instalaciones acuáticas, que sean posible debido a la edad estar.</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function GroomingPricing() {
  const sizes = [
    { name: "Perro pequeño / pelo corto", col: 0 },
    { name: "Perro mediano / pelo medio", col: 1 },
    { name: "Perro grande / pelo largo o raza especial", col: 2 }
  ];

  const services = [
    { name: "Baño básico", prices: ["15€ - 20€", "20€ - 27€", "25€ - 40€"] },
    { name: "Baño + Corte completo", prices: ["25€ - 30€", "30€ - 45€", "40€ - 60€+"] },
    { name: "Stripping / Deslanado", prices: ["—", "—", "45€ - 90€"] },
    { name: "Cepillado / Desenredado", prices: ["6€ - 12€", "9€ - 15€", "15€ - 25€"] },
    { name: "Retoques / Mantenimiento", prices: ["5€ - 10€", "8€ - 15€", "10€ - 20€"] },
    { name: "Corte de uñas", prices: ["5€", "5€", "5€"] },
    { name: "Limpieza de oídos / glándulas", prices: ["5€ - 8€", "5€ - 10€", "8€ - 12€"] },
    { name: "Tratamiento antiparasitario o mascarilla nutritiva", prices: ["8€ - 12€", "10€ - 15€", "15€ - 20€"] }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Servicios de Peluquería Canina</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2">
                <th className="text-left p-3 font-semibold">Servicio</th>
                <th className="text-center p-3 font-semibold text-sm">Perro pequeño / pelo corto</th>
                <th className="text-center p-3 font-semibold text-sm">Perro mediano / pelo medio</th>
                <th className="text-center p-3 font-semibold text-sm">Perro grande / pelo largo</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, idx) => (
                <tr key={idx} className="border-b hover:bg-muted/50">
                  <td className="p-3 font-medium">{service.name}</td>
                  <td className="p-3 text-center text-sm">{service.prices[0]}</td>
                  <td className="p-3 text-center text-sm">{service.prices[1]}</td>
                  <td className="p-3 text-center text-sm">{service.prices[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export function SpaPricing() {
  const services = [
    { 
      name: "Masaje relajante canino", 
      description: "Terapia manual para relajar músculos y reducir el estrés.",
      price: "15€ - 25€" 
    },
    { 
      name: "Aromaterapia / Fragancias naturales", 
      description: "Aplicación de aceites esenciales y perfumes suaves para perros.",
      price: "10€ - 15€" 
    },
    { 
      name: "Baño con ozono (Ozonoterapia)", 
      description: "Baño desinfectante con agua ozonizada, ideal para pieles sensibles.",
      price: "20€ - 35€" 
    },
    { 
      name: "Baño terapeútico / Shampoo especializado", 
      description: "Uso de productos dermatológicos, hipoalergénicos o hidratantes.",
      price: "15€ - 25€" 
    },
    { 
      name: "Mascarilla hidratante / Acondicionador profundo", 
      description: "Tratamiento nutritivo para pelo seco o dañado.",
      price: "10€ - 20€" 
    },
    { 
      name: "Envoltura de algas o barro mineral", 
      description: "Limpieza profunda, remineralización y brillo del manto.",
      price: "25€ - 40€" 
    },
    { 
      name: "Spa completo 'Deluxe'", 
      description: "Incluye baño, corte, masaje, ozono, mascarilla y perfume",
      price: "45€ - 70€" 
    }
  ];

  const extras = [
    { name: "Perfume y accesorios finales", description: "Fragancia + lazo o pañoleta decorativa al finalizar el servicio.", price: "5€ - 10€" },
    { name: "Fotos o sesión post-spa", description: "Mini sesión de fotos del perro después del tratamiento.", price: "10€ - 15€" }
  ];

  const products = [
    { name: "Collar de nylon simple", price: "3,99€ - 6,99€", allergyFriendly: "Sí" },
    { name: "Collar reflectante / acolchado", price: "9€ - 16€", allergyFriendly: "Sí" },
    { name: "Juguetes de felpa / peluche con sonido", price: "8,99€ - 10,99€", allergyFriendly: "Sí (revisar relleno)" },
    { name: "Pelota / juguete de cuerda", price: "5,29€ - 9€", allergyFriendly: "Sí" },
    { name: "Toallitas higiénicas / perfumadas", price: "6,99€", allergyFriendly: "Depende del perro (algunos perfumes)" },
    { name: "Agua de colonia / fragancia", price: "4,79€", allergyFriendly: "No" },
    { name: "Ropa / abrigo / jersey", price: "12€ - 30€", allergyFriendly: "Sí (revisar composición)" }
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Servicios de Spa</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {services.map((service, idx) => (
              <div key={idx} className="pb-4 border-b last:border-b-0">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Perfume y Accesorios Finales</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {extras.map((extra, idx) => (
              <div key={idx} className="pb-4 border-b last:border-b-0">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="font-semibold">{extra.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{extra.description}</p>
                  </div>
                  <div className="font-semibold text-primary">{extra.price}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Tienda de Souvenir - Productos Disponibles</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-3 font-semibold">Nombre del Producto</th>
                  <th className="text-center p-3 font-semibold">Precio</th>
                  <th className="text-center p-3 font-semibold">Apto para mascotas con alergias</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={idx} className="border-b hover:bg-muted/50">
                    <td className="p-3">{product.name}</td>
                    <td className="p-3 text-center font-medium">{product.price}</td>
                    <td className="p-3 text-center text-sm">{product.allergyFriendly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
