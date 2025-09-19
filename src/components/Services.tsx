import { Shield, Home, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Grades de segurança",
      description: "Grades personalizadas para janelas, portas e fachadas, oferecendo máxima proteção sem comprometer a estética do seu imóvel.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Home,
      title: "Portões residenciais e comerciais",
      description: "Portões sob medida em diversos estilos e materiais, com sistemas de abertura manual ou automatizada para sua comodidade.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Wrench,
      title: "Estruturas metálicas",
      description: "Desenvolvimento de estruturas metálicas personalizadas para construção civil, reformas e projetos industriais.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-subtitle">
            Soluções completas em serralheria com qualidade profissional e atendimento personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group card-service animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <Button asChild className="hero-button-outline w-full">
                  <a href="https://wa.me/5502154991944954" target="_blank" rel="noopener noreferrer">
                    Solicitar orçamento
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;