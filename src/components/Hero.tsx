import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Serralheria LM Soldas
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light max-w-3xl mx-auto">
            Especialistas em grades, portões e estruturas metálicas com qualidade e segurança garantidas para proteger o que você mais valoriza
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="hero-button-primary">
              <a href="https://wa.me/5502154991944954" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar orçamento
              </a>
            </Button>
            
            <Button asChild className="hero-button-outline">
              <a href="#servicos">
                Ver nossos serviços
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center md:justify-start space-x-3 text-primary-foreground/80">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base">(21) 5499-1944954</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-center space-x-3 text-primary-foreground/80">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base">Seg-Sex: 8h às 18h</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-end space-x-3 text-primary-foreground/80">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm md:text-base">Rua Mozart Antônio da Silva, 77</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;