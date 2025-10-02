import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Users,
  HeadphonesIcon,
  Package,
  Clock,
  Shield,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Package,
      title: "Distribuição de Açaí",
      description:
        "Açaí paraense 100% natural, com qualidade garantida e sabor autêntico da Amazônia.",
    },
    {
      icon: Truck,
      title: "Logística Especializada",
      description:
        "Entrega rápida e segura para Teresina, Parnaíba e São Luís.",
    },
    {
      icon: Users,
      title: "Parceria Empresarial",
      description:
        "Suporte completo para empreendedores que querem crescer no mercado de açaí.",
    },
    {
      icon: HeadphonesIcon,
      title: "Consultoria Especializada",
      description:
        "Orientação técnica e comercial para maximizar o sucesso do seu negócio.",
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description:
        "Resposta rápida às suas necessidades com equipe dedicada e experiente.",
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description:
        "Controle rigoroso de qualidade desde a origem até a entrega final.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Package className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            O que <span className="text-primary">Fazemos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para empreendedores que desejam
            trabalhar com açaí de qualidade premium, desde a distribuição até o
            suporte comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/20"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Crescer com o Mix Norte?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Junte-se aos nossos parceiros e descubra como podemos impulsionar
              seu negócio com açaí de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
                Solicitar Orçamento
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Falar com Consultor
              </button>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
