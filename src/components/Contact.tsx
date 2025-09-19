import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(21) 5499-1944954",
      action: "tel:02154991944954"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "serralherialmsoldas@yahoo.com",
      action: "mailto:serralherialmsoldas@yahoo.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Mozart Antônio da Silva, 77",
      action: null
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      info: "Segunda a sexta: 8h às 18h",
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Fale conosco</h2>
          <p className="section-subtitle">
            Entre em contato e solicite seu orçamento sem compromisso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-semibold text-primary mb-8">Informações de contato</h3>
            
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{item.title}</h4>
                        {item.action ? (
                          <a
                            href={item.action}
                            className="text-muted-foreground hover:text-accent transition-colors duration-300"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 rounded-xl shadow-elegant">
              <h3 className="text-2xl font-bold mb-4">Pronto para começar seu projeto?</h3>
              <p className="mb-6 opacity-90">
                Solicite agora mesmo seu orçamento personalizado. Nossa equipe está pronta para 
                desenvolver a solução ideal para suas necessidades.
              </p>
              
              <div className="space-y-4">
                <Button asChild className="hero-button-outline w-full bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary">
                  <a href="https://wa.me/5502154991944954" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </a>
                </Button>
                
                <Button asChild className="hero-button-outline w-full bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary">
                  <a href="tel:02154991944954">
                    <Phone className="mr-2 h-5 w-5" />
                    Ligar agora
                  </a>
                </Button>
              </div>
            </div>

            <Card className="shadow-soft">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">CNPJ</h4>
                <p className="text-muted-foreground">28.028.492/0001-42</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;