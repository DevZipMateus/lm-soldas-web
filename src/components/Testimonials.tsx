import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente residencial",
      content: "Excelente trabalho! As grades ficaram perfeitas e o atendimento foi muito profissional. Recomendo a todos.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Empresa de construção",
      content: "Parceria de confiança há anos. Sempre entregam no prazo e com qualidade excepcional. Profissionais competentes.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Proprietária de comércio",
      content: "O portão automático superou nossas expectativas. Trabalho impecável e preço justo. Muito satisfeita!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é o nosso maior reconhecimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 relative animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="h-8 w-8 text-accent mb-4 opacity-60" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;