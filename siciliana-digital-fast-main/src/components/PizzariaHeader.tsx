import { MapPin } from "lucide-react";

export const PizzariaHeader = () => {
  return (
    <header className="w-full">
      {/* Banner promocional */}
      <div className="bg-gradient-to-r from-pizzaria-red to-pizzaria-red-dark text-primary-foreground py-3 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base font-semibold">
            🍕 LOJAS - PALHOÇA E SÃO JOSÉ 🍕
          </p>
        </div>
      </div>
      
      {/* Header principal */}
      <div className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pizzaria-red rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-pizzaria-red">Siciliana</h1>
                <p className="text-sm text-muted-foreground">Pizzaria & Delivery</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Pedido mínimo R$ 50,00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};