import ProductCard from '../ProductCard';
import collarImage from '@assets/4bca22f11f614eecb34adfd2ff8d63f2_1762090311520.jpg';

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        name="Collar Ajustable Azul"
        price={18}
        imageUrl={collarImage}
        category="Accesorios"
        onAddToCart={() => console.log('Added to cart')}
      />
    </div>
  );
}
