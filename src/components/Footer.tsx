import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-lm-soldas.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Logo Serralheria LM Soldas" className="h-16 w-auto" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Especialistas em grades, portões e estruturas metálicas com qualidade 
              e segurança garantidas para proteger o que você mais valoriza.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links rápidos</h3>
            <div className="space-y-2">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#servicos", label: "Serviços" },
                { href: "#sobre", label: "Sobre" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:02154991944954"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  (21) 5499-1944954
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:serralherialmsoldas@yahoo.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  serralherialmsoldas@yahoo.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Rua Mozart Antônio da Silva, 77
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Serralheria LM Soldas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;