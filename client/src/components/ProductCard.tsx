import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  onAddToCart?: () => void;
}

export default function ProductCard({ name, price, imageUrl, category, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-product-${name}`}>
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{category}</p>
        <h3 className="font-semibold text-lg line-clamp-2">{name}</h3>
        <p className="text-2xl font-bold text-primary">{price}€</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2" 
          onClick={onAddToCart}
          data-testid={`button-add-cart-${name}`}
        >
          <ShoppingCart className="w-4 h-4" />
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
