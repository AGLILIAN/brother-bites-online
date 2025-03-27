
import React from "react";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, calculateTotal, generateWhatsAppMessage } = useCart();

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(index, newQuantity);
  };

  const phoneNumber = "5575991662591";

  return (
    <section id="cart" className="section-container bg-pizza-grad">
      <h2 className="section-title">Seu Pedido</h2>

      {items.length === 0 ? (
        <div className="text-center py-10">
          <div className="w-20 h-20 mx-auto mb-4 opacity-50">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300" 
              alt="Empty cart" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-xl font-bebas mb-2">Seu carrinho está vazio</h3>
          <p className="text-gray-600 mb-6">Adicione algumas pizzas deliciosas do nosso cardápio!</p>
          <a href="#menu" className="pizza-button inline-block">
            Ver Cardápio
          </a>
        </div>
      ) : (
        <div>
          <div className="glass-card overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white bg-opacity-30">
                    <th className="py-3 px-4 text-left">Pizza</th>
                    <th className="py-3 px-4 text-left">Detalhes</th>
                    <th className="py-3 px-4 text-center">Quantidade</th>
                    <th className="py-3 px-4 text-right">Preço</th>
                    <th className="py-3 px-4 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    // Calculate item price
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

                    const totalItemPrice = (basePrice + borderPrice + extrasPrice) * item.quantity;

                    return (
                      <tr key={item.id} className="border-t border-white border-opacity-20">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded-lg overflow-hidden mr-3">
                              <img
                                src={item.flavors[0]?.image || "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300"}
                                alt={item.flavors[0]?.name || "Pizza"}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">
                                {item.flavors.map(f => f.name).join(", ")}
                              </p>
                              <span className="text-sm text-gray-600 capitalize">
                                {item.size}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-sm">
                            <span className="font-medium">Borda:</span>{" "}
                            {item.border.charAt(0).toUpperCase() + item.border.slice(1)}
                          </p>
                          {item.extras.length > 0 && (
                            <p className="text-sm">
                              <span className="font-medium">Extras:</span>{" "}
                              {item.extras.join(", ")}
                            </p>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => handleQuantityChange(index, item.quantity - 1)}
                              className="p-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="mx-3 min-w-[30px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(index, item.quantity + 1)}
                              className="p-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="font-medium">
                            R$ {totalItemPrice.toFixed(2).replace(".", ",")}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={() => removeFromCart(index)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            aria-label="Remover item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-white border-opacity-30 font-bold">
                    <td colSpan={3} className="py-4 px-4 text-right">
                      Total:
                    </td>
                    <td className="py-4 px-4 text-right text-pizza-red text-xl">
                      R$ {calculateTotal().toFixed(2).replace(".", ",")}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button
              variant="outline"
              onClick={clearCart}
              className="border-pizza-red text-pizza-red hover:bg-pizza-red hover:text-white"
            >
              Limpar Carrinho
            </Button>

            <a
              href={`https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pizza-button flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Finalizar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
