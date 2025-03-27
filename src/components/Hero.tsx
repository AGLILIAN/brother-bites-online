
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-pizza-dark overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pizza-dark to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-5xl md:text-7xl text-white mb-4 leading-tight">
            A Melhor Pizza de <span className="text-pizza-yellow">Toda a Cidade</span>
          </h1>
          <p className="text-xl text-white opacity-80 mb-8 max-w-lg">
            Mais de 100 sabores diferentes para você escolher e experimentar. 
            Produzida com ingredientes frescos e de alta qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="pizza-button flex items-center justify-center"
            >
              Ver Cardápio
            </a>
            <a
              href="#promotions"
              className="pizza-button-outline flex items-center justify-center"
            >
              Promoções
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </a>

      {/* Decorative Pizza Slices */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pizza-yellow opacity-10 rounded-full"></div>
      <div className="absolute top-20 -left-20 w-40 h-40 bg-pizza-red opacity-10 rounded-full"></div>
    </div>
  );
};

export default Hero;
