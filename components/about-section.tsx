"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, Heart, Lightbulb, Target, TrendingUp } from "lucide-react"

export function AboutSection() {
  const [language] = useState<"es" | "en">("es")

  const content = {
    es: {
      title: "Nosotros",
      description:
        "En FEDC contamos con años de experiencia en el mundo IT. Nuestro equipo multidisciplinario acompaña a las PYMEs en su transformación digital con soluciones 100% personalizadas.",
      values: [
        { icon: Heart, title: "Cercanía", description: "Trabajamos codo a codo con nuestros clientes" },
        { icon: Lightbulb, title: "Innovación", description: "Utilizamos las últimas tecnologías" },
        { icon: TrendingUp, title: "Eficiencia", description: "Optimizamos procesos para mejores resultados" },
        { icon: Target, title: "Resultados medibles", description: "Cada proyecto tiene objetivos claros" },
      ],
    },
    en: {
      title: "About Us",
      description:
        "At FEDC we have years of experience in the IT world. Our multidisciplinary team accompanies SMEs in their digital transformation with 100% personalized solutions.",
      values: [
        { icon: Heart, title: "Closeness", description: "We work side by side with our clients" },
        { icon: Lightbulb, title: "Innovation", description: "We use the latest technologies" },
        { icon: TrendingUp, title: "Efficiency", description: "We optimize processes for better results" },
        { icon: Target, title: "Measurable results", description: "Every project has clear objectives" },
      ],
    },
  }

  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">{content[language].title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{content[language].description}</p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {content[language].values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-2 gap-4">
            {content[language].values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
