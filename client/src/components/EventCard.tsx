import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  price: number;
  capacity: number;
  registered: number;
  imageUrl: string;
  category: string;
  onRegister?: () => void;
}

export default function EventCard({ 
  title, 
  description, 
  date, 
  time, 
  price, 
  capacity, 
  registered, 
  imageUrl, 
  category,
  onRegister 
}: EventCardProps) {
  const spotsLeft = capacity - registered;
  const isFilling = spotsLeft <= capacity * 0.3;
  
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-event-${title}`}>
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
        {isFilling && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive">
              ¡Últimas plazas!
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{registered}/{capacity} inscritos</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">{price === 0 ? 'Gratis' : `${price}€`}</p>
          {spotsLeft > 0 && (
            <p className="text-sm text-muted-foreground">{spotsLeft} plazas disponibles</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          onClick={onRegister}
          disabled={spotsLeft === 0}
          data-testid={`button-register-${title}`}
        >
          {spotsLeft === 0 ? 'Evento Completo' : 'Inscribirse'}
        </Button>
      </CardFooter>
    </Card>
  );
}
