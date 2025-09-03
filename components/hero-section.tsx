"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Zap } from "lucide-react";

export function HeroSection() {
  const [language] = useState<"es" | "en">("es");

  const content = {
    es: {
      title: "Software a medida para impulsar tu negocio",
      subtitle:
        "En FEDC creamos soluciones digitales que transforman tu negocio.",
      cta: "Solicitá una reunión",
      secondary: "Ver proyectos",
      features: [
        { icon: Code, text: "Desarrollo personalizado" },
        { icon: Users, text: "Equipo especializado" },
        { icon: Zap, text: "Resultados rápidos" },
      ],
    },
    en: {
      title: "Custom software to boost your SME",
      subtitle:
        "At FEDC we create digital solutions that transform your business.",
      cta: "Request a meeting",
      secondary: "View projects",
      features: [
        { icon: Code, text: "Custom development" },
        { icon: Users, text: "Specialized team" },
        { icon: Zap, text: "Fast results" },
      ],
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                {content[language].title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {content[language].subtitle}
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6">
              {content[language].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground"
                >
                  <feature.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {content[language].cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                {content[language].secondary}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
              <img
                src="/images/software-team-coding.png"
                alt="FEDC Software Development Team"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
