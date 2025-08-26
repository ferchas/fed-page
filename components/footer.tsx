"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [language] = useState<"es" | "en">("es");

  const content = {
    es: {
      tagline: "Soluciones tecnológicas para hacer crecer tu negocio.",
      links: {
        home: "Inicio",
        about: "Nosotros",
        projects: "Proyectos",
        contact: "Contacto",
      },
      copyright: `© ${new Date().getFullYear()} FEDC. Todos los derechos reservados.`,
    },
    en: {
      tagline: "Technology solutions to grow your business.",
      links: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      copyright: `© ${new Date().getFullYear()} FEDC. All rights reserved.`,
    },
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid md:grid-cols-3 pb-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/fedc-logo.png"
                alt="FEDC - Software Development Company"
                width={120}
                height={40}
                className="h-14 w-[94px]  rounded-lg bg-gray-100"
                priority
              />
            </div>

            <p className="text-background/80 max-w-sm text-base">
              {content[language].tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Enlaces rápidos</h4>
            <nav className="flex flex-col text-[10px] space-y-2">
              <a
                href="#inicio"
                className="text-background/80 hover:text-background transition-colors"
              >
                {content[language].links.home}
              </a>
              <a
                href="#nosotros"
                className="text-background/80 hover:text-background transition-colors"
              >
                {content[language].links.about}
              </a>
              <a
                href="#proyectos"
                className="text-background/80 hover:text-background transition-colors"
              >
                {content[language].links.projects}
              </a>
              <a
                href="#contacto"
                className="text-background/80 hover:text-background transition-colors"
              >
                {content[language].links.contact}
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 py-2 text-center">
          <p className="text-background/60 text-[10px]">
            {content[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
