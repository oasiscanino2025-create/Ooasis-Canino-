import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  onBook?: () => void;
}

export default function ServiceCard({ name, description, price, duration, imageUrl, onBook }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-service-${name}`}>
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-2xl font-bold text-primary whitespace-nowrap">{price}€</p>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          onClick={onBook}
          data-testid={`button-book-${name}`}
        >
          Reservar Ahora
        </Button>
      </CardFooter>
    </Card>
  );
}
