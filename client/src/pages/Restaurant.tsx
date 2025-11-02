import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UtensilsCrossed, Clock, Users, Phone, MapPin } from "lucide-react";
import waterBg from "@assets/fodo mar_1762090487272.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Restaurant() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    comments: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Reserva Recibida!",
      description: "Te confirmaremos tu reserva por email o teléfono en breve.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      people: "",
      comments: ""
    });
  };

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
              Restaurante VIPS
            </h1>
            <p className="text-xl text-white/90 drop-shadow-md">
              Disfruta de una comida deliciosa mientras tu perro se divierte
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Bienvenidos a Nuestro VIPS</h2>
            <p className="text-lg text-muted-foreground">
              Contamos con un restaurante VIPS oficial dentro de nuestras instalaciones. 
              Mientras tu perro disfruta del parque acuático, tú puedes relajarte con una comida o merienda 
              en un ambiente familiar y cómodo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <UtensilsCrossed className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Menú Completo</h3>
                <p className="text-sm text-muted-foreground">
                  Desayunos, comidas, cenas y menú infantil disponibles
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Horario Amplio</h3>
                <p className="text-sm text-muted-foreground">
                  Abierto de 9:00 a 22:00 todos los días
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Para Toda la Familia</h3>
                <p className="text-sm text-muted-foreground">
                  Terraza con vistas al parque acuático
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Menu Highlights */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Lo Más Destacado del Menú</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Desayunos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Desayuno Continental - 6.95€</p>
                  <p>• Tostadas VIPS - 5.50€</p>
                  <p>• Croissant con jamón y queso - 4.95€</p>
                  <p>• Zumos naturales - 3.50€</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Comidas y Cenas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Hamburguesas VIPS - desde 9.95€</p>
                  <p>• Ensaladas variadas - desde 8.50€</p>
                  <p>• Platos combinados - desde 10.95€</p>
                  <p>• Menú del día - 12.95€</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Postres y Café</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Tartas caseras - 4.50€</p>
                  <p>• Helados - desde 3.95€</p>
                  <p>• Café y capuchinos - 2.50€</p>
                  <p>• Batidos y smoothies - 4.95€</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Menú Infantil</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Mini hamburguesa con patatas - 7.95€</p>
                  <p>• Fingers de pollo - 7.50€</p>
                  <p>• Pasta con tomate - 6.95€</p>
                  <p>• Incluye bebida y postre</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Reserva tu Mesa</h2>
              <p className="text-muted-foreground">
                Asegura tu mesa en el restaurante VIPS
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        data-testid="input-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Fecha *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                        data-testid="input-date"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Hora *</Label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                        <SelectTrigger id="time" data-testid="select-time">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="20:00">20:00</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="people">Personas *</Label>
                      <Select value={formData.people} onValueChange={(value) => setFormData({ ...formData, people: value })}>
                        <SelectTrigger id="people" data-testid="select-people">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 persona</SelectItem>
                          <SelectItem value="2">2 personas</SelectItem>
                          <SelectItem value="3">3 personas</SelectItem>
                          <SelectItem value="4">4 personas</SelectItem>
                          <SelectItem value="5">5 personas</SelectItem>
                          <SelectItem value="6">6 personas</SelectItem>
                          <SelectItem value="7">7 personas</SelectItem>
                          <SelectItem value="8">8 personas</SelectItem>
                          <SelectItem value="9+">9+ personas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Comentarios adicionales</Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      placeholder="Alergias, preferencias de mesa, etc."
                      rows={4}
                      data-testid="textarea-comments"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" data-testid="button-submit-reservation">
                    Confirmar Reserva
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-background rounded-lg">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">¿Prefieres reservar por teléfono?</h3>
                  <p className="text-sm text-muted-foreground">
                    Llámanos al <a href="tel:+34951365365" className="text-primary hover:underline">951 365 365</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
