import heroImage from "@/assets/hero-pizza-new.jpg";
import margheritaImage from "@/assets/pizza-margherita-new.jpg";
import pepperoniImage from "@/assets/pizza-pepperoni-new.jpg";
import quattroFormaggiImage from "@/assets/pizza-quattro-new.jpg";
import sicilianaImage from "@/assets/pizza-siciliana-new.jpg";
import portuguesaImage from "@/assets/pizza-portuguesa-new.jpg";
import comboImage from "@/assets/combo-new.jpg";
import frangoImage from "@/assets/pizza-frango-catupiry.jpg";
import calabresaImage from "@/assets/pizza-calabresa.jpg";
import mussarelaImage from "@/assets/pizza-mussarela.jpg";
import baconImage from "@/assets/pizza-bacon.jpg";
import chocolateImage from "@/assets/pizza-chocolate.jpg";
import atumImage from "@/assets/pizza-atum.jpg";

export interface Pizza {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'destaques' | 'combos' | 'pizza' | 'bebidas';
}

export const pizzas: Pizza[] = [
  // Destaques
  {
    id: 'destaque-1',
    name: 'Pizza Gigante Especial',
    description: '1 Pizza gigante 12 fatias, 1 borda recheada, 1 Guaraná Pureza 1,5L',
    image: heroImage,
    price: 89.90,
    category: 'destaques'
  },
  {
    id: 'destaque-2',
    name: 'Combo Grande Família',
    description: '2 Pizzas grandes 8 fatias, 2 bordas recheadas, 2 Guaraná Pureza 1,5L',
    image: comboImage,
    price: 89.90,
    category: 'destaques'
  },

  // Combos
  {
    id: 'combo-1',
    name: 'COMBO GIGANTE FAMÍLIA',
    description: '2 Pizzas gigantes 12 fatias, 2 Bordas recheadas, 2 guaraná pureza 1,5 litros',
    image: comboImage,
    price: 89.90,
    category: 'combos'
  },
  {
    id: 'combo-2',
    name: 'COMBO GRANDE',
    description: '1 Pizza grande 8 fatias, 1 Borda recheada, 1 Broto doce, 1 guaraná pureza 1,5L',
    image: comboImage,
    price: 89.90,
    category: 'combos'
  },
  {
    id: 'combo-3',
    name: 'COMBO GULOSEIMAS',
    description: '1 Pizza gigante doce 12 fatias, 1 Borda recheada, 1 guaraná pureza 1,5L',
    image: comboImage,
    price: 89.90,
    category: 'combos'
  },
  {
    id: 'combo-4',
    name: 'COMBO SPECIALI',
    description: '1 Pizza gigante 12 fatias, 1 Borda recheada, 1 Broto doce, 1 guaraná pureza 1,5L',
    image: comboImage,
    price: 89.90,
    category: 'combos'
  },

  // Pizzas
  {
    id: 'pizza-1',
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mozzarella, manjericão fresco e azeite extravirgem',
    image: margheritaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-2',
    name: 'Pizza Mussarela',
    description: 'Molho de tomate e queijo mozzarella derretido',
    image: mussarelaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-3',
    name: 'Pizza Calabresa',
    description: 'Molho de tomate, mozzarella, calabresa fatiada e cebola',
    image: calabresaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-4',
    name: 'Pizza Frango com Catupiry',
    description: 'Molho de tomate, frango desfiado temperado e catupiry cremoso',
    image: frangoImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-5',
    name: 'Pizza Portuguesa',
    description: 'Molho de tomate, mozzarella, presunto, ovos, cebola, azeitonas e ervilha',
    image: portuguesaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-6',
    name: 'Pizza Pepperoni',
    description: 'Molho de tomate, mozzarella e fatias generosas de pepperoni',
    image: pepperoniImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-7',
    name: 'Pizza Quattro Formaggi',
    description: 'Molho branco com quatro tipos de queijo: mozzarella, gorgonzola, parmesão e ricota',
    image: quattroFormaggiImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-8',
    name: 'Pizza Siciliana',
    description: 'Molho de tomate, mozzarella, calabresa, cebola roxa, azeitonas e orégano',
    image: sicilianaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-9',
    name: 'Pizza Napolitana',
    description: 'Molho de tomate, mozzarella, tomate em fatias, manjericão e azeite',
    image: margheritaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-10',
    name: 'Pizza Bacon',
    description: 'Molho de tomate, mozzarella e bacon crocante em cubos',
    image: baconImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-11',
    name: 'Pizza Atum',
    description: 'Molho de tomate, mozzarella, atum e cebola',
    image: atumImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-12',
    name: 'Pizza Milho',
    description: 'Molho de tomate, mozzarella e milho doce',
    image: mussarelaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-13',
    name: 'Pizza Palmito',
    description: 'Molho de tomate, mozzarella e palmito em fatias',
    image: margheritaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-14',
    name: 'Pizza Lombo',
    description: 'Molho de tomate, mozzarella e lombo canadense',
    image: baconImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-15',
    name: 'Pizza Quatro Queijos',
    description: 'Molho de tomate, mozzarella, catupiry, gorgonzola e parmesão',
    image: quattroFormaggiImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-16',
    name: 'Pizza Vegetariana',
    description: 'Molho de tomate, mozzarella, palmito, champignon, tomate e cebola',
    image: margheritaImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-17',
    name: 'Pizza Banana com Canela',
    description: 'Mozzarella, banana em fatias, canela e açúcar',
    image: chocolateImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-18',
    name: 'Pizza Chocolate',
    description: 'Chocolate ao leite derretido com granulado',
    image: chocolateImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-19',
    name: 'Pizza Dois Amores',
    description: 'Meio chocolate ao leite, meio chocolate branco',
    image: chocolateImage,
    price: 89.90,
    category: 'pizza'
  },
  {
    id: 'pizza-20',
    name: 'Pizza Brigadeiro',
    description: 'Chocolate, leite condensado e granulado',
    image: chocolateImage,
    price: 89.90,
    category: 'pizza'
  },

  // Bebidas
  {
    id: 'bebida-1',
    name: 'Guaraná Pureza 1,5L',
    description: 'Refrigerante guaraná sabor tradicional brasileiro',
    image: comboImage,
    price: 89.90,
    category: 'bebidas'
  },
  {
    id: 'bebida-2',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante Coca-Cola original',
    image: comboImage,
    price: 89.90,
    category: 'bebidas'
  },
  {
    id: 'bebida-3',
    name: 'Água Mineral 500ml',
    description: 'Água mineral natural sem gás',
    image: comboImage,
    price: 89.90,
    category: 'bebidas'
  },
  {
    id: 'bebida-4',
    name: 'Suco Natural Laranja 300ml',
    description: 'Suco de laranja natural sem conservantes',
    image: comboImage,
    price: 89.90,
    category: 'bebidas'
  }
];