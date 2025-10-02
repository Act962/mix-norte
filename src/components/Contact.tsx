import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Av. Noé Mendes, 6694",
        "São Sebastião, Teresina - PI",
        "CEP: 64084-015"
      ]
    },
    {
      icon: Phone,
      title: "Telefones",
      details: [
        "(86) 9519-1513"
      ]
    },
    {
      icon: Mail,
      title: "E-mail",
      details: [
        "sabordonortepiaui@gmail.com"
      ]
    },
    {
      icon: Clock,
      title: "Horário",
      details: [
        "Segunda a Sexta: 7h às 18h",
        "Sábado: 7h às 12h"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Entre em Contato
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Vamos <span className="text-primary">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você e descobrir como podemos ser parceiros no seu sucesso. 
            Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Envie sua Mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Sua cidade" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input id="subject" placeholder="Como podemos ajudar?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa Política de Privacidade
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-white shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="border-0 bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-semibold mb-4">Atendimento Personalizado</h4>
                <p className="opacity-90 mb-6">
                  Nossos consultores estão prontos para entender suas necessidades e 
                  oferecer a melhor solução para seu negócio.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  WhatsApp: (86) 9519-1513
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}