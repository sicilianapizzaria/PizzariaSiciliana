import { MapPin, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const LocationSelector = () => {
  return (
    <div className="bg-gradient-to-br from-pizzaria-red-light to-pizzaria-cream min-h-[400px] flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pizzaria-red mb-2">
            Onde você está?
          </h2>
          <p className="text-muted-foreground mb-8">
            Precisamos da sua localização para conseguirmos te atender melhor!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-pizzaria-red/20">
              <Truck className="w-12 h-12 text-pizzaria-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Para entrega</h3>
              <p className="text-muted-foreground mb-4">
                Nós levamos o seu pedido até sua casa
              </p>
              <Button variant="outline" className="w-full border-pizzaria-red text-pizzaria-red hover:bg-pizzaria-red hover:text-primary-foreground">
                Escolher entrega
              </Button>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-pizzaria-red/20">
              <Store className="w-12 h-12 text-pizzaria-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Para retirada</h3>
              <p className="text-muted-foreground mb-4">
                Você pode retirar na nossa loja!
              </p>
              <Button variant="outline" className="w-full border-pizzaria-red text-pizzaria-red hover:bg-pizzaria-red hover:text-primary-foreground">
                Escolher retirada
              </Button>
            </Card>
          </div>
          
          <Button className="bg-pizzaria-red hover:bg-pizzaria-red-dark text-primary-foreground px-8 py-3">
            <MapPin className="w-4 h-4 mr-2" />
            Liberar localização
          </Button>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-pizzaria-red mb-6">
              Todas as nossas unidades
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-card">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pizzaria-red rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">S</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Siciliana</h4>
                    <p className="text-sm text-muted-foreground">Retirada • Entrega</p>
                    <p className="text-xs text-green-600">Aberto</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pizzaria-red rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">S</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Siciliana - Santo Amaro</h4>
                    <p className="text-sm text-muted-foreground">Retirada • Entrega</p>
                    <p className="text-xs text-red-600">Fechado</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};