import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

interface DogCardProps {
  name: string;
  breed: string;
  age: string;
  size: string;
  personality: string;
  imageUrl: string;
  onLearnMore?: () => void;
}

export default function DogCard({ name, breed, age, size, personality, imageUrl, onLearnMore }: DogCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-dog-${name}`}>
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            Disponible
          </Badge>
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-sm text-muted-foreground">{breed}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline">{age}</Badge>
          <Badge variant="outline">{size}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{personality}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button 
          className="flex-1 gap-2" 
          onClick={onLearnMore}
          data-testid={`button-adopt-${name}`}
        >
          <Heart className="w-4 h-4" />
          Conocer más
        </Button>
      </CardFooter>
    </Card>
  );
}
