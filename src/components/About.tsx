import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Award } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Missão",
      description:
        "Levar o verdadeiro sabor do açaí paraense para mais perto das pessoas, oferecendo produtos de qualidade e parceria de verdade.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser a referência em distribuição de açaí no Norte e Nordeste, transformando a vida de empreendedores.",
    },
    {
      icon: Award,
      title: "Valores",
      description:
        "Qualidade, confiança, parceria e compromisso com o desenvolvimento dos nossos clientes.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Nossa História
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Conhece a <span className="text-primary">Mix Norte</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Uma jornada que começou com um propósito claro: conectar o
              autêntico açaí amazônico aos empreendedores brasileiros.
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  De Teresina para o Norte e Nordeste
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Mix Norte nasceu em 2017, em Local, com um propósito claro:
                  levar o verdadeiro sabor do açaí paraense para mais perto das
                  pessoas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Logo enxergamos algo além da oportunidade de mercado — vimos a
                  chance de transformar a vida de empreendedores, oferecendo não
                  só produtos de qualidade, mas também suporte, incentivo e
                  parceria de verdade.
                </p>
              </div>

              <div className="bg-gradient-accent/10 p-6 rounded-2xl border-l-4 border-accent">
                <p className="text-foreground font-medium italic">
                  "Porque acreditamos que, quando o cliente cresce, a gente
                  cresce junto."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Expansão e Crescimento
                </h4>
                <p className="text-muted-foreground mb-6">
                  Com esse compromisso, conquistamos confiança e espaço. Hoje,
                  além de Teresina, estamos presentes em Parnaíba (PI) e São
                  Luís (MA)
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-2xl font-bold text-primary">2017</div>
                    <div className="text-sm text-muted-foreground">
                      Fundação
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-xl">
                    <div className="text-2xl font-bold text-secondary">2</div>
                    <div className="text-sm text-muted-foreground">Cidades</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary p-8 rounded-2xl text-white">
                <h4 className="text-xl font-semibold mb-2">
                  Nossa Missão Continua
                </h4>
                <p className="opacity-90">
                  Seguimos firmes na missão de distribuir mais do que açaí:
                  entregamos valor, confiança e o verdadeiro Mix Norte.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="hero" size="lg">
              Seja Nosso Parceiro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
