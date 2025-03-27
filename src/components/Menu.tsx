
import React, { useState, useEffect } from "react";
import PizzaCard from "./PizzaCard";
import { pizzas, Pizza, borders, extras, sizes } from "@/utils/pizzaData";
import { useCart } from "@/context/CartContext";
import { Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [isPizzaDialogOpen, setIsPizzaDialogOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("media");
  const [selectedBorder, setSelectedBorder] = useState<string>("tradicional");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<Pizza[]>([]);

  const { addToCart } = useCart();

  // Filter pizzas by category
  const filteredPizzas = selectedCategory === "all"
    ? pizzas
    : pizzas.filter(pizza => pizza.category === selectedCategory);

  // Handle pizza selection
  const handlePizzaSelect = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setIsPizzaDialogOpen(true);
    setSelectedFlavors([pizza]);
  };

  // Handle flavor selection
  const handleFlavorSelect = (pizza: Pizza) => {
    const selectedSizeObj = sizes.find(s => s.value === selectedSize);
    
    if (!selectedSizeObj) return;
    
    // Check if pizza is already selected
    if (selectedFlavors.some(flavor => flavor.id === pizza.id)) {
      setSelectedFlavors(selectedFlavors.filter(flavor => flavor.id !== pizza.id));
      return;
    }
    
    // Check if maximum number of flavors is reached
    if (selectedFlavors.length >= selectedSizeObj.maxFlavors) {
      toast.error(`Você atingiu o limite de ${selectedSizeObj.maxFlavors} sabores para este tamanho`);
      return;
    }
    
    setSelectedFlavors([...selectedFlavors, pizza]);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    const selectedSizeObj = sizes.find(s => s.value === selectedSize);
    
    if (!selectedSizeObj) {
      toast.error("Por favor, selecione um tamanho");
      return;
    }
    
    if (selectedFlavors.length === 0) {
      toast.error("Por favor, selecione pelo menos um sabor");
      return;
    }

    if (selectedFlavors.length > selectedSizeObj.maxFlavors) {
      toast.error(`Você selecionou mais sabores do que o permitido (${selectedSizeObj.maxFlavors})`);
      return;
    }

    // Create cart item
    addToCart({
      id: Date.now().toString(),
      size: selectedSize as "media" | "grande" | "familia",
      flavors: selectedFlavors,
      border: selectedBorder,
      extras: selectedExtras,
      quantity: 1
    });

    // Close dialog and reset selections
    setIsPizzaDialogOpen(false);
    setSelectedSize("media");
    setSelectedBorder("tradicional");
    setSelectedExtras([]);
    setSelectedFlavors([]);
  };

  // Handle extras selection
  const handleExtraToggle = (extra: string) => {
    if (selectedExtras.includes(extra)) {
      setSelectedExtras(selectedExtras.filter(item => item !== extra));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  // Calculate current pizza price
  const calculatePrice = () => {
    const sizePrice = sizes.find(s => s.value === selectedSize)?.price || 0;
    const borderPrice = borders.find(b => b.value === selectedBorder)?.price || 0;
    const extrasPrice = selectedExtras.length * 5;

    return sizePrice + borderPrice + extrasPrice;
  };

  // Effect to reset selections when dialog is closed
  useEffect(() => {
    if (!isPizzaDialogOpen) {
      setSelectedPizza(null);
      setSelectedSize("media");
      setSelectedBorder("tradicional");
      setSelectedExtras([]);
      setSelectedFlavors([]);
    }
  }, [isPizzaDialogOpen]);

  return (
    <section id="menu" className="section-container bg-white">
      <h2 className="section-title">Nosso Cardápio</h2>
      
      {/* Category Tabs */}
      <div className="mb-10">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
            <TabsTrigger 
              value="all" 
              onClick={() => setSelectedCategory("all")}
              className="data-[state=active]:bg-pizza-red data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger 
              value="tradicional" 
              onClick={() => setSelectedCategory("tradicional")}
              className="data-[state=active]:bg-pizza-red data-[state=active]:text-white"
            >
              Tradicionais
            </TabsTrigger>
            <TabsTrigger 
              value="especial" 
              onClick={() => setSelectedCategory("especial")}
              className="data-[state=active]:bg-pizza-red data-[state=active]:text-white"
            >
              Especiais
            </TabsTrigger>
            <TabsTrigger 
              value="premium" 
              onClick={() => setSelectedCategory("premium")}
              className="data-[state=active]:bg-pizza-red data-[state=active]:text-white"
            >
              Premium
            </TabsTrigger>
            <TabsTrigger 
              value="vegetariana" 
              onClick={() => setSelectedCategory("vegetariana")}
              className="data-[state=active]:bg-pizza-red data-[state=active]:text-white"
            >
              Vegetarianas
            </TabsTrigger>
            <TabsTrigger 
              value="doce" 
              onClick={() => setSelectedCategory("doce")}
              className="data-[state=active]:bg-pizza-red data-[state=active]:text-white"
            >
              Doces
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} onSelect={handlePizzaSelect} />
        ))}
      </div>

      {/* Pizza Selection Dialog */}
      <Dialog open={isPizzaDialogOpen} onOpenChange={setIsPizzaDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bebas text-pizza-dark">
              Monte sua Pizza
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Escolha o Tamanho:</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedSize === size.value
                        ? "border-pizza-red bg-pizza-red text-white"
                        : "border-gray-300 hover:border-pizza-red"
                    }`}
                  >
                    {size.label} - R$ {size.price.toFixed(2).replace(".", ",")}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavors Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Escolha os Sabores: 
                <span className="text-sm font-normal ml-2">
                  ({selectedFlavors.length}/
                  {sizes.find(s => s.value === selectedSize)?.maxFlavors || 2})
                </span>
              </h3>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto">
                  <TabsTrigger value="all" className="text-xs data-[state=active]:bg-pizza-red data-[state=active]:text-white">
                    Todos
                  </TabsTrigger>
                  <TabsTrigger value="tradicional" className="text-xs data-[state=active]:bg-pizza-red data-[state=active]:text-white">
                    Tradicionais
                  </TabsTrigger>
                  <TabsTrigger value="especial" className="text-xs data-[state=active]:bg-pizza-red data-[state=active]:text-white">
                    Especiais
                  </TabsTrigger>
                  <TabsTrigger value="premium" className="text-xs data-[state=active]:bg-pizza-red data-[state=active]:text-white">
                    Premium
                  </TabsTrigger>
                  <TabsTrigger value="vegetariana" className="text-xs data-[state=active]:bg-pizza-red data-[state=active]:text-white">
                    Vegetarianas
                  </TabsTrigger>
                  <TabsTrigger value="doce" className="text-xs data-[state=active]:bg-pizza-red data-[state=active]:text-white">
                    Doces
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {pizzas.map((pizza) => (
                      <div
                        key={pizza.id}
                        onClick={() => handleFlavorSelect(pizza)}
                        className={`p-2 rounded-lg border cursor-pointer transition-all ${
                          selectedFlavors.some(f => f.id === pizza.id)
                            ? "border-pizza-red bg-pizza-red/10"
                            : "border-gray-200 hover:border-pizza-red/50"
                        }`}
                      >
                        <div className="flex items-center">
                          {selectedFlavors.some(f => f.id === pizza.id) && (
                            <Check className="w-4 h-4 text-pizza-red mr-1 flex-shrink-0" />
                          )}
                          <span className="text-sm font-medium">{pizza.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {["tradicional", "especial", "premium", "vegetariana", "doce"].map((category) => (
                  <TabsContent key={category} value={category} className="mt-4">
                    <div className="grid grid-cols-2 gap-2">
                      {pizzas
                        .filter((pizza) => pizza.category === category)
                        .map((pizza) => (
                          <div
                            key={pizza.id}
                            onClick={() => handleFlavorSelect(pizza)}
                            className={`p-2 rounded-lg border cursor-pointer transition-all ${
                              selectedFlavors.some(f => f.id === pizza.id)
                                ? "border-pizza-red bg-pizza-red/10"
                                : "border-gray-200 hover:border-pizza-red/50"
                            }`}
                          >
                            <div className="flex items-center">
                              {selectedFlavors.some(f => f.id === pizza.id) && (
                                <Check className="w-4 h-4 text-pizza-red mr-1 flex-shrink-0" />
                              )}
                              <span className="text-sm font-medium">{pizza.name}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Border Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Escolha a Borda:</h3>
              <div className="flex flex-wrap gap-3">
                {borders.map((border) => (
                  <button
                    key={border.value}
                    onClick={() => setSelectedBorder(border.value)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedBorder === border.value
                        ? "border-pizza-red bg-pizza-red text-white"
                        : "border-gray-300 hover:border-pizza-red"
                    }`}
                  >
                    {border.label}
                    {border.price > 0 && ` (+R$ ${border.price.toFixed(2).replace(".", ",")})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Extras:</h3>
              <div className="grid grid-cols-2 gap-2">
                {extras.map((extra) => (
                  <button
                    key={extra.value}
                    onClick={() => handleExtraToggle(extra.value)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedExtras.includes(extra.value)
                        ? "border-pizza-red bg-pizza-red text-white"
                        : "border-gray-300 hover:border-pizza-red"
                    }`}
                  >
                    {extra.label} (+R$ {extra.price.toFixed(2).replace(".", ",")})
                  </button>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Total:</h3>
                <span className="text-2xl font-bold text-pizza-red">
                  R$ {calculatePrice().toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setIsPizzaDialogOpen(false)}>
              Cancelar
            </Button>
            <Button 
              className="bg-pizza-red hover:bg-pizza-red/90 text-white" 
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Menu;
