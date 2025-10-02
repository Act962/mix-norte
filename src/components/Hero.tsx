import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";
import heroImage from "@/assets/acai-hero.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mt-8 lg:mt-0">
                <MapPin className="w-4 h-4 mr-2" />
                Presente em PI e MA
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                O Verdadeiro
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}
                  Mix Norte
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Distribuidora especializada em açaí paraense de qualidade
                premium. Desde 2017, conectando empreendedores ao autêntico
                sabor amazônico em Teresina, Parnaíba, São Luís e Imperatriz.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">
                  Cidades Atendidas
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Conheça Nossos Serviços
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Nossa História
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">
                  Parceria de Verdade
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">
                  Qualidade Garantida
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={heroImage}
                alt="Açaí premium da Belo Norte"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🫐</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    100% Natural
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Açaí Amazônico
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
