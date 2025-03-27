
import React from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pizza-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bebas mb-4 text-pizza-yellow">Brother's Pizzaria</h3>
            <p className="text-gray-400 mb-4">
              Servindo as melhores pizzas da cidade desde 2010. Nosso segredo está na massa artesanal e ingredientes de primeira qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pizza-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pizza-yellow transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pizza-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bebas mb-4 text-pizza-yellow">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                <span>Av. Principal, 123, Centro, Sua Cidade - UF</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>(75) 99166-2591</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p>Segunda a Sábado: 18h às 23h</p>
                  <p>Domingo: 18h às 22h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-bebas mb-4 text-pizza-yellow">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-pizza-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-pizza-yellow transition-colors">Cardápio</a>
              </li>
              <li>
                <a href="#promotions" className="hover:text-pizza-yellow transition-colors">Promoções</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-pizza-yellow transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#cart" className="hover:text-pizza-yellow transition-colors">Carrinho</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Brother's Pizzaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
