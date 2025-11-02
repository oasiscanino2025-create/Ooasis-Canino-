import ServiceCard from '../ServiceCard';
import groomingImage from '@assets/generated_images/Grooming_spa_service_5f1b1263.png';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        name="Baño y Peluquería Premium"
        description="Servicio completo de baño, corte de pelo, limpieza de oídos y uñas para tu perro."
        price={45}
        duration="2 horas"
        imageUrl={groomingImage}
        onBook={() => console.log('Service booked')}
      />
    </div>
  );
}
