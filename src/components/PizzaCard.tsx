
import React from "react";
import { Pizza } from "@/utils/pizzaData";
import { PlusCircle } from "lucide-react";

interface PizzaCardProps {
  pizza: Pizza;
  onSelect: (pizza: Pizza) => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, onSelect }) => {
  return (
    <div className="pizza-card group h-full flex flex-col">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden">
        <img
          src={`${pizza.image}?q=80&w=300`}
          alt={pizza.name}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
          loading="lazy"
          width="300"
          height="300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider font-medium bg-pizza-yellow/10 text-pizza-red rounded-full px-2 py-1">
            {pizza.category === "tradicional" ? "Tradicional" : 
             pizza.category === "especial" ? "Especial" : 
             pizza.category === "premium" ? "Premium" : 
             pizza.category === "vegetariana" ? "Vegetariana" : "Doce"}
          </span>
        </div>
        <h3 className="text-xl font-bebas tracking-wide text-pizza-dark mb-1">{pizza.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3 flex-grow">{pizza.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-pizza-red font-bold">R$ {pizza.price.toFixed(2).replace(".", ",")}</span>
          <button 
            onClick={() => onSelect(pizza)}
            className="text-pizza-red hover:text-white hover:bg-pizza-red rounded-full p-1 transition-colors duration-300"
            aria-label={`Adicionar ${pizza.name} ao pedido`}
          >
            <PlusCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
