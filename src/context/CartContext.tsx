
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

interface Pizza {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface CartItem {
  id: string;
  size: "media" | "grande" | "familia";
  flavors: Pizza[];
  border: string | null;
  extras: string[];
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  calculateTotal: () => number;
  generateWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems([...items, item]);
    toast.success("Item adicionado ao carrinho!");
  };

  const removeFromCart = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    toast.info("Item removido do carrinho");
  };

  const updateQuantity = (index: number, quantity: number) => {
    const newItems = [...items];
    newItems[index].quantity = quantity;
    setItems(newItems);
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Carrinho limpo");
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      // Base price depends on size
      let basePrice = 0;
      switch (item.size) {
        case "media":
          basePrice = 35;
          break;
        case "grande":
          basePrice = 45;
          break;
        case "familia":
          basePrice = 55;
          break;
        default:
          basePrice = 35;
      }

      // Add border price
      let borderPrice = 0;
      if (item.border === "catupiry") borderPrice = 8;
      if (item.border === "cheddar") borderPrice = 8;
      if (item.border === "chocolate") borderPrice = 10;

      // Add extras price
      const extrasPrice = item.extras.length * 5;

      return total + (basePrice + borderPrice + extrasPrice) * item.quantity;
    }, 0);
  };

  const generateWhatsAppMessage = () => {
    const total = calculateTotal().toFixed(2).replace(".", ",");
    
    const message = `🍕 *Pedido - Brother's Pizzaria*\n\n${items
      .map((item) => {
        const sizeText = 
          item.size === "media" ? "MÉDIA" : 
          item.size === "grande" ? "GRANDE" : "FAMÍLIA";
        
        const flavorsText = item.flavors.map(flavor => flavor.name).join(", ");
        const borderText = item.border ? item.border.charAt(0).toUpperCase() + item.border.slice(1) : "Sem borda";
        const extrasText = item.extras.length > 0 ? item.extras.join(", ") : "Nenhum";
        
        return `Quantidade: ${item.quantity}x\nTamanho: ${sizeText}\nSabores: ${flavorsText}\nBorda: ${borderText}\nExtras: ${extrasText}\n`;
      })
      .join("\n")}\nTotal: R$ ${total}`;
    
    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        calculateTotal,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
