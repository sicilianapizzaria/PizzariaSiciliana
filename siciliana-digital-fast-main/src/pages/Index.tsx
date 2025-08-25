import { useState } from "react";
import { PizzariaHeader } from "@/components/PizzariaHeader";
import { LocationSelector } from "@/components/LocationSelector";
import { Navigation } from "@/components/Navigation";
import { PizzaCard } from "@/components/PizzaCard";
import { Cart } from "@/components/Cart";
import { pizzas } from "@/data/pizzas";
import heroImage from "@/assets/hero-pizza-new.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('destaques');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showLocation, setShowLocation] = useState(true);

  const filteredPizzas = pizzas.filter(pizza => pizza.category === activeSection);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleStartOrder = () => {
    setShowLocation(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <PizzariaHeader />
      
      {showLocation ? (
        <div className="relative">
          <LocationSelector />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleStartOrder}
              className="px-8 py-3 bg-pizzaria-red hover:bg-pizzaria-red-dark text-primary-foreground rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Começar pedido
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img 
              src={heroImage} 
              alt="Pizza deliciosa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Todas as Pizzas por
                  </h2>
                  <div className="text-4xl md:text-6xl font-bold text-pizzaria-gold mb-4">
                    R$ 89,90
                  </div>
                  <p className="text-lg text-white/90">
                    Sabor autêntico italiano direto na sua casa!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Navigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection}
          />

          {/* Menu Section */}
          <main className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                {activeSection === 'destaques' && 'Nossos Destaques'}
                {activeSection === 'combos' && 'Nossos Super Combos'}
                {activeSection === 'pizza' && 'Nossas Pizzas'}
                {activeSection === 'bebidas' && 'Bebidas'}
              </h2>
              <p className="text-muted-foreground text-center">
                Escolha seus sabores favoritos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPizzas.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  description={pizza.description}
                  image={pizza.image}
                  price={pizza.price}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </main>

          <Cart 
            items={cartItems}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
          />
        </>
      )}
    </div>
  );
};

export default Index;
