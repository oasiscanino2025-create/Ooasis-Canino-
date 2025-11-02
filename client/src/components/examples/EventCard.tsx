import EventCard from '../EventCard';
import eventImage from '@assets/generated_images/Birthday_party_event_c6caaeb1.png';

export default function EventCardExample() {
  return (
    <div className="p-8 max-w-md">
      <EventCard
        title="Fiesta de Cumpleaños Canina"
        description="Celebra el cumpleaños de tu perro con una fiesta en la piscina. Incluye decoración, pastel especial para perros y actividades acuáticas."
        date="15 de Junio, 2024"
        time="11:00 - 14:00"
        price={35}
        capacity={20}
        registered={15}
        imageUrl={eventImage}
        category="Eventos Especiales"
        onRegister={() => console.log('Registered for event')}
      />
    </div>
  );
}
