
import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bebas text-pizza-red tracking-wider">
            Brother's Pizzaria
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-pizza-red transition-colors duration-300">
            Home
          </a>
          <a href="#menu" className="font-medium hover:text-pizza-red transition-colors duration-300">
            Cardápio
          </a>
          <a href="#promotions" className="font-medium hover:text-pizza-red transition-colors duration-300">
            Promoções
          </a>
          <a href="#testimonials" className="font-medium hover:text-pizza-red transition-colors duration-300">
            Depoimentos
          </a>
          <a href="#cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-pizza-red" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pizza-yellow text-pizza-dark font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {items.length}
              </span>
            )}
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-pizza-red focus:outline-none"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden pt-20`}
      >
        <div className="flex flex-col items-center space-y-8 mt-10">
          <a
            href="#home"
            className="text-2xl font-medium hover:text-pizza-red transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-2xl font-medium hover:text-pizza-red transition-colors duration-300"
            onClick={toggleMenu}
          >
            Cardápio
          </a>
          <a
            href="#promotions"
            className="text-2xl font-medium hover:text-pizza-red transition-colors duration-300"
            onClick={toggleMenu}
          >
            Promoções
          </a>
          <a
            href="#testimonials"
            className="text-2xl font-medium hover:text-pizza-red transition-colors duration-300"
            onClick={toggleMenu}
          >
            Depoimentos
          </a>
          <a
            href="#cart"
            className="text-2xl font-medium hover:text-pizza-red transition-colors duration-300 flex items-center"
            onClick={toggleMenu}
          >
            Carrinho
            <ShoppingCart className="w-6 h-6 ml-2" />
            {items.length > 0 && (
              <span className="ml-1 bg-pizza-yellow text-pizza-dark font-bold text-sm px-2 rounded-full">
                {items.length}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
