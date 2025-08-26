"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const content = {
    es: {
      home: "Inicio",
      about: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "Solicitá una reunión",
    },
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cta: "Request a meeting",
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/fedc-logo.png"
              alt="FEDC - Software Development Company"
              width={120}
              height={40}
              className="h-14 w-[94px] rounded-lg bg-gray-100"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-primary-foreground hover:text-secondary transition-colors duration-200"
            >
              {content[language].home}
            </a>
            <a
              href="#nosotros"
              className="text-primary-foreground hover:text-secondary transition-colors duration-200"
            >
              {content[language].about}
            </a>
            <a
              href="#proyectos"
              className="text-primary-foreground hover:text-secondary transition-colors duration-200"
            >
              {content[language].projects}
            </a>
            <a
              href="#contacto"
              className="text-primary-foreground hover:text-secondary transition-colors duration-200"
            >
              {content[language].contact}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              {language === "es" ? "EN" : "ES"}
            </Button>
            <Button variant="secondary" size="sm">
              {content[language].cta}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              {language === "es" ? "EN" : "ES"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
              <a
                href="#inicio"
                className="block px-3 py-2 text-primary-foreground hover:text-secondary transition-colors duration-200"
              >
                {content[language].home}
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 text-primary-foreground hover:text-secondary transition-colors duration-200"
              >
                {content[language].about}
              </a>
              <a
                href="#proyectos"
                className="block px-3 py-2 text-primary-foreground hover:text-secondary transition-colors duration-200"
              >
                {content[language].projects}
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-primary-foreground hover:text-secondary transition-colors duration-200"
              >
                {content[language].contact}
              </a>
              <div className="px-3 py-2">
                <Button variant="secondary" size="sm" className="w-full">
                  {content[language].cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
