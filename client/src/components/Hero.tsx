import { Button } from "@/components/ui/button";
import logoImage from "@assets/LOGOTIPO_1762090473463.png";
import waterBg from "@assets/fodo mar_1762090487272.jpg";

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${waterBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <button
          onClick={onEnter}
          className="group relative transition-transform duration-300 hover:scale-105 cursor-pointer"
          data-testid="button-enter-app"
        >
          <img 
            src={logoImage} 
            alt="Oasis Canino - Haz clic para entrar" 
            className="w-80 md:w-[500px] h-auto drop-shadow-2xl"
          />
        </button>
      </div>
    </div>
  );
}
