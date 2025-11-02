import DogCard from '../DogCard';
import dogImage from '@assets/generated_images/Adoptable_puppy_Luna_39bedba5.png';

export default function DogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <DogCard
        name="Luna"
        breed="Golden Retriever Mix"
        age="8 meses"
        size="Mediano"
        personality="Juguetona, cariñosa y muy activa. Le encanta el agua y jugar con otros perros."
        imageUrl={dogImage}
        onLearnMore={() => console.log('Learn more clicked')}
      />
    </div>
  );
}
