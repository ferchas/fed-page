"use client";

import { useState } from "react";
import { Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [language] = useState<"es" | "en">("es");
  const phoneNumber = "5491162747066";
  const message = encodeURIComponent(
    "Hola! Me interesa conocer más sobre cómo hacer crecer mi negocio."
  );

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
                src="/images/logo.jpeg"
                alt="FEDC - Software Development Company"
                width={120}
                height={40}
                className="h-14 w-[110px]  rounded-lg bg-gray-100"
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
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white hover:text-gray-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12 .06 11.91 11.91 0 0 0 .06 12a11.8 11.8 0 0 0 1.6 6L.06 24l6.32-1.66A11.91 11.91 0 0 0 12 23.94h.01A11.91 11.91 0 0 0 24 12.02a11.86 11.86 0 0 0-3.48-8.54zM12 21.18h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.21-3.75.99 1-3.65-.23-.38A9.52 9.52 0 1 1 12 21.18zm5.26-7.14c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43a8.7 8.7 0 0 1-1.61-1.99c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.46c0 1.44 1.07 2.84 1.22 3.04.15.2 2.1 3.21 5.1 4.5.71.31 1.26.5 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.1-.26-.17-.54-.31z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/fedc-tech/"
                target="_blank"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MapPin className="h-5 w-5" />
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
