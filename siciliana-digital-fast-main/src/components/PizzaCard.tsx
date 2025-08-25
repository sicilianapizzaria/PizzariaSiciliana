import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface PizzaCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  onAddToCart: (item: CartItem) => void;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const PizzaCard = ({ id, name, description, image, price, onAddToCart }: PizzaCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart({
        id,
        name,
        price,
        quantity,
        image
      });
      setQuantity(0);
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(0, prev - 1));

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-pizzaria-red text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold">
          R$ {price.toFixed(2)}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        {quantity === 0 ? (
          <Button 
            onClick={incrementQuantity}
            className="w-full bg-pizzaria-red hover:bg-pizzaria-red-dark text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-pizzaria-red-light rounded-lg p-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={decrementQuantity}
                className="h-8 w-8 p-0 hover:bg-pizzaria-red hover:text-primary-foreground"
              >
                <Minus className="w-4 h-4" />
              </Button>
              
              <span className="font-semibold text-pizzaria-red">{quantity}</span>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={incrementQuantity}
                className="h-8 w-8 p-0 hover:bg-pizzaria-red hover:text-primary-foreground"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-pizzaria-red hover:bg-pizzaria-red-dark text-primary-foreground"
            >
              Adicionar ao pedido - R$ {(price * quantity).toFixed(2)}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};