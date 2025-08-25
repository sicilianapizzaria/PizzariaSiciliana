import { ShoppingCart, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const Cart = ({ items, onRemoveItem, onClearCart }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      `🍕 *PEDIDO PIZZARIA SICILIANA* 🍕\n\n` +
      `*Itens do pedido:*\n` +
      items.map(item => 
        `• ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toFixed(2)}`
      ).join('\n') +
      `\n\n*Total: R$ ${total.toFixed(2)}*\n\n` +
      `Gostaria de finalizar este pedido!`
    );
    
    const whatsappNumber = "5548996223990";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-pizzaria-red hover:bg-pizzaria-red-dark text-primary-foreground shadow-lg relative"
        >
          <ShoppingCart className="w-6 h-6" />
          {itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-pizzaria-gold text-foreground min-w-[24px] h-6 flex items-center justify-center p-0">
              {itemCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Modal do carrinho */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-4">
          <Card className="w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b bg-pizzaria-red text-primary-foreground">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Seu Pedido</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-pizzaria-red-dark"
                >
                  ✕
                </Button>
              </div>
            </div>
            
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 bg-secondary/50 p-3 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {item.quantity}x R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="h-6 w-6 p-0 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t space-y-3">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-pizzaria-red">R$ {total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button
                  onClick={sendToWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Finalizar no WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  onClick={onClearCart}
                  className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Limpar carrinho
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};