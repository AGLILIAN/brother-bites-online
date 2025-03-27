
import React from "react";
import { CakeSlice, PizzaIcon, PhoneCall } from "lucide-react";

const Promotions = () => {
  return (
    <section id="promotions" className="section-container bg-pizza-grad">
      <h2 className="section-title">Promoções</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Promotion 1 */}
        <div className="glass-card p-6 transition-all duration-300 hover:shadow-pizza transform hover:-translate-y-2">
          <div className="mb-4 w-16 h-16 rounded-full bg-pizza-red/10 flex items-center justify-center text-pizza-red mx-auto">
            <PizzaIcon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bebas text-center mb-2">Terça de Tradicionais</h3>
          <p className="text-center mb-3">Todas as pizzas tradicionais com 20% de desconto às terças-feiras.</p>
          <p className="text-xl font-bebas text-pizza-red text-center">R$ 28,00</p>
        </div>

        {/* Promotion 2 */}
        <div className="glass-card p-6 transition-all duration-300 hover:shadow-pizza transform hover:-translate-y-2">
          <div className="mb-4 w-16 h-16 rounded-full bg-pizza-red/10 flex items-center justify-center text-pizza-red mx-auto">
            <CakeSlice className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bebas text-center mb-2">Combo Família</h3>
          <p className="text-center mb-3">1 Pizza família + 1 Refrigerante 2L + 1 Borda recheada grátis.</p>
          <p className="text-xl font-bebas text-pizza-red text-center">R$ 69,90</p>
        </div>

        {/* Promotion 3 */}
        <div className="glass-card p-6 transition-all duration-300 hover:shadow-pizza transform hover:-translate-y-2">
          <div className="mb-4 w-16 h-16 rounded-full bg-pizza-red/10 flex items-center justify-center text-pizza-red mx-auto">
            <PhoneCall className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bebas text-center mb-2">Fidelidade</h3>
          <p className="text-center mb-3">A cada 5 pizzas compradas, ganhe uma pizza tradicional média.</p>
          <p className="text-xl font-bebas text-pizza-red text-center">Grátis</p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
