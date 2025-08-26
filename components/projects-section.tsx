"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const [language] = useState<"es" | "en">("es")

  const content = {
    es: {
      title: "Casos de éxito",
      subtitle: "Lo que hicimos para otros",
      viewMore: "Ver más detalles",
      projects: [
        {
          name: "Sistema de Gestión Comercial",
          description:
            "Plataforma integral para gestión de ventas, inventario y clientes para una PyME del sector retail.",
          result: "Aumento del 40% en eficiencia operativa",
          technologies: ["React", "Node.js", "PostgreSQL"],
          image: "/modern-business-dashboard.png",
        },
        {
          name: "App de Delivery",
          description: "Aplicación móvil y web para restaurante local con sistema de pedidos en tiempo real.",
          result: "Incremento del 60% en pedidos online",
          technologies: ["React Native", "Firebase", "Stripe"],
          image: "/food-delivery-app.png",
        },
        {
          name: "Portal de Servicios",
          description: "Sitio web corporativo con sistema de reservas y gestión de clientes para empresa de servicios.",
          result: "Reducción del 50% en tiempo de gestión",
          technologies: ["Next.js", "Supabase", "Tailwind"],
          image: "/professional-services-website-booking.png",
        },
      ],
    },
    en: {
      title: "Success Stories",
      subtitle: "What we did for others",
      viewMore: "View more details",
      projects: [
        {
          name: "Commercial Management System",
          description: "Comprehensive platform for sales, inventory and customer management for a retail SME.",
          result: "40% increase in operational efficiency",
          technologies: ["React", "Node.js", "PostgreSQL"],
          image: "/modern-business-dashboard.png",
        },
        {
          name: "Delivery App",
          description: "Mobile and web application for local restaurant with real-time ordering system.",
          result: "60% increase in online orders",
          technologies: ["React Native", "Firebase", "Stripe"],
          image: "/food-delivery-app.png",
        },
        {
          name: "Services Portal",
          description: "Corporate website with booking system and customer management for service company.",
          result: "50% reduction in management time",
          technologies: ["Next.js", "Supabase", "Tailwind"],
          image: "/professional-services-website-booking.png",
        },
      ],
    },
  }

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">{content[language].title}</h2>
          <p className="text-lg text-muted-foreground">{content[language].subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-serif">{project.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium text-primary">{project.result}</p>
                </div>
                <Button variant="outline" className="w-full group/btn bg-transparent">
                  {content[language].viewMore}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
