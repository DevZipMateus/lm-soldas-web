import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

// Import gallery images
import coberturaCarros from "@/assets/gallery/cobertura-carros.jpg";
import gradeCasa from "@/assets/gallery/grade-casa.jpg";
import gradeJanelas from "@/assets/gallery/grade-janelas.jpg";
import gradeResidencial from "@/assets/gallery/grade-residencial.jpg";
import lixeiraResidencial from "@/assets/gallery/lixeira-residencial.jpg";
import lixeiraResidencialAberta from "@/assets/gallery/lixeira-residencial-aberta.jpg";
import portao1 from "@/assets/gallery/portao-1.jpg";
import portao2 from "@/assets/gallery/portao-2.jpg";
import portao3 from "@/assets/gallery/portao-3.jpg";
import guardaCorpo from "@/assets/gallery/guarda-corpo.jpg";
import lixeiraPreta from "@/assets/gallery/lixeira-preta.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: coberturaCarros, alt: "Cobertura para carros", title: "Cobertura metálica para carros" },
    { src: gradeCasa, alt: "Grade de segurança para casa", title: "Grade residencial" },
    { src: gradeJanelas, alt: "Grade para janelas", title: "Grade de proteção para janelas" },
    { src: gradeResidencial, alt: "Grade residencial decorativa", title: "Grade residencial com design" },
    { src: lixeiraResidencial, alt: "Lixeira residencial fechada", title: "Lixeira metálica residencial" },
    { src: lixeiraResidencialAberta, alt: "Lixeira residencial aberta", title: "Lixeira residencial com compartimentos" },
    { src: portao1, alt: "Portão residencial", title: "Portão automático residencial" },
    { src: portao2, alt: "Portão com tela", title: "Portão com proteção em tela" },
    { src: portao3, alt: "Portão de entrada", title: "Portão de entrada em ferro" },
    { src: guardaCorpo, alt: "Guarda-corpo para escada", title: "Guarda-corpo metálico" },
    { src: lixeiraPreta, alt: "Lixeira preta", title: "Lixeira metálica preta" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title">Nossa galeria</h2>
          <p className="section-subtitle">
            Confira alguns dos nossos trabalhos realizados com qualidade e precisão
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel 
            className="w-full max-w-4xl"
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                          <CardContent className="p-0">
                            <div className="aspect-square relative group">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                                  <p className="text-sm font-medium">{image.title}</p>
                                  <p className="text-xs mt-1 opacity-80">Clique para ampliar</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 bg-black/90 border-none">
                        <div className="relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto max-h-[90vh] object-contain"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                            <p className="text-white/80 text-sm">{image.alt}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>

        {/* Videos Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Portões em funcionamento</h3>
            <p className="text-muted-foreground">Veja nossos portões automáticos em ação</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/portao_abrindo_1..mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/portao_abrindo_2..mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;