import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Qualidade garantida",
      description: "Materiais de primeira linha e acabamento impecável em todos os nossos trabalhos"
    },
    {
      icon: Users,
      title: "Equipe especializada",
      description: "Profissionais experientes e qualificados para atender suas necessidades"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cumprimos rigorosamente os prazos estabelecidos para entrega dos projetos"
    },
    {
      icon: CheckCircle,
      title: "Atendimento personalizado",
      description: "Soluções sob medida pensadas especialmente para cada cliente"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="section-title">Sobre a Serralheria LM Soldas</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Serralheria LM Soldas é uma empresa especializada em soluções completas para grades, 
                portões e estruturas metálicas, oferecendo qualidade e segurança para residências e empresas.
              </p>
              <p>
                Nossa missão é proteger o que você mais valoriza através de produtos sob medida, 
                utilizando materiais de primeira qualidade e técnicas modernas de soldagem e fabricação.
              </p>
              <p>
                Com atendimento de segunda a sexta-feira das 8h às 18h, estamos sempre prontos para 
                desenvolver a solução ideal para suas necessidades de segurança e funcionalidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;