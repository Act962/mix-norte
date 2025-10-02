import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function SuccessCases() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      title: "Açaí Express - Teresina",
      description: "Parceria que resultou em 300% de aumento nas vendas em 6 meses, tornando-se referência no centro da cidade.",
      image: "/src/assets/acai-hero.jpg",
      results: ["300% aumento vendas", "50+ novos clientes/dia", "Expansão para 2ª loja"]
    },
    {
      id: 2,
      title: "Rede Sabor Tropical - Parnaíba",
      description: "Expansão bem-sucedida com nosso açaí premium, alcançando 5 pontos de venda na região litorânea.",
      image: "/src/assets/acai-hero.jpg", 
      results: ["5 lojas abertas", "200+ pedidos/dia", "Marca líder da região"]
    },
    {
      id: 3,
      title: "Açaí do Norte - São Luís",
      description: "Transformação digital completa com nossos produtos, delivery e presença forte nas redes sociais.",
      image: "/src/assets/acai-hero.jpg",
      results: ["40k seguidores", "Delivery em toda cidade", "Top 3 no iFood"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="success" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Casos de <span className="text-primary">Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça histórias reais de empreendedores que transformaram seus negócios 
            com nossos produtos e suporte especializado.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-elegant">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((case_) => (
                <div key={case_.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {case_.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                          {case_.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Principais Resultados:</h4>
                          <ul className="space-y-1">
                            {case_.results.map((result, index) => (
                              <li key={index} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={case_.image} 
                          alt={case_.title}
                          className="w-full h-80 object-cover rounded-lg shadow-soft"
                        />
                        <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-soft"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-border'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}