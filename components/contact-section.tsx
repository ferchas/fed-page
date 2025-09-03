"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [language] = useState<"es" | "en">("es");
  const phoneNumber = "5491162747066";
  const message = encodeURIComponent(
    "Hola! Me interesa conocer más sobre cómo hacer crecer mi negocio."
  );

  const content = {
    es: {
      title: "¿Listo para potenciar tu negocio?",
      subtitle: "Contános tu idea, nosotros hacemos el resto.",
      form: {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        submit: "Enviar mensaje",
      },
      contact: {
        phone: "Contáctanos por whatsapp",
        location: "Buenos Aires, Argentina",
      },
    },
    en: {
      title: "Ready to boost your SME?",
      subtitle: "Tell us your idea, we do the rest.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send message",
      },
      contact: {
        phone: "Chat with us on whatsapp",
        location: "Buenos Aires, Argentina",
      },
    },
  };

  return (
    <section id="contacto" className="py-20 bg-[#ee9733]">
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content[language].subtitle}
          </p>
          <div className="flex justify-center items-center pt-10">
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 flex items-center text-white hover:text-gray-400  w-auto px-2 gap-2 h-10 rounded justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 .06 11.91 11.91 0 0 0 .06 12a11.8 11.8 0 0 0 1.6 6L.06 24l6.32-1.66A11.91 11.91 0 0 0 12 23.94h.01A11.91 11.91 0 0 0 24 12.02a11.86 11.86 0 0 0-3.48-8.54zM12 21.18h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.21-3.75.99 1-3.65-.23-.38A9.52 9.52 0 1 1 12 21.18zm5.26-7.14c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43a8.7 8.7 0 0 1-1.61-1.99c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.46c0 1.44 1.07 2.84 1.22 3.04.15.2 2.1 3.21 5.1 4.5.71.31 1.26.5 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.1-.26-.17-.54-.31z" />
              </svg>
              {content[language].contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
