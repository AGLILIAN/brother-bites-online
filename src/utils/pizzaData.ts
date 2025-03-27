
export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "tradicional" | "especial" | "premium" | "vegetariana" | "doce";
  image: string;
}

export const pizzas: Pizza[] = [
  // Tradicional Category (20 pizzas)
  {
    id: "t1",
    name: "Margherita",
    description: "Molho de tomate, mussarela e manjericão fresco",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1920"
  },
  {
    id: "t2",
    name: "Calabresa",
    description: "Molho de tomate, mussarela e calabresa fatiada",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920"
  },
  {
    id: "t3",
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, ovos, cebola e azeitonas",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1920"
  },
  {
    id: "t4",
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, provolone, gorgonzola e parmesão",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1920"
  },
  {
    id: "t5",
    name: "Frango",
    description: "Molho de tomate, mussarela e frango desfiado",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1920"
  },
  {
    id: "t6",
    name: "Pepperoni",
    description: "Molho de tomate, mussarela e pepperoni",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1920"
  },
  {
    id: "t7",
    name: "Bacon",
    description: "Molho de tomate, mussarela e bacon crocante",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=1920"
  },
  {
    id: "t8",
    name: "Napolitana",
    description: "Molho de tomate, mussarela, tomate em rodelas e alho",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?q=80&w=1920"
  },
  {
    id: "t9",
    name: "Atum",
    description: "Molho de tomate, mussarela e atum",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1920"
  },
  {
    id: "t10",
    name: "Siciliana",
    description: "Molho de tomate, mussarela, bacon, champignon e cebola",
    price: 35,
    category: "tradicional",
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?q=80&w=1920"
  },
  
  // Especial Category (20 examples)
  {
    id: "e1",
    name: "Camarão ao Alho",
    description: "Molho de tomate, mussarela, camarão, alho e salsinha",
    price: 45,
    category: "especial",
    image: "https://images.unsplash.com/photo-1559608568-9f061731a8e9?q=80&w=1920"
  },
  {
    id: "e2",
    name: "Tomate Seco",
    description: "Molho de tomate, mussarela, tomate seco, rúcula e parmesão",
    price: 45,
    category: "especial",
    image: "https://images.unsplash.com/photo-1595854341625-f33e596b7a5d?q=80&w=1920"
  },
  {
    id: "e3",
    name: "Carne Seca",
    description: "Molho de tomate, mussarela, carne seca, cebola e catupiry",
    price: 45,
    category: "especial",
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=1920"
  },
  {
    id: "e4",
    name: "Filé com Cheddar",
    description: "Molho de tomate, mussarela, filé mignon, cheddar e bacon",
    price: 45,
    category: "especial",
    image: "https://images.unsplash.com/photo-1595854341056-e8bf9515e98b?q=80&w=1920"
  },
  {
    id: "e5",
    name: "Brócolis Especial",
    description: "Molho de tomate, mussarela, brócolis, bacon e catupiry",
    price: 45,
    category: "especial",
    image: "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?q=80&w=1920"
  },
  
  // Premium Category (5 examples)
  {
    id: "p1",
    name: "Trufada",
    description: "Molho de tomate, mussarela, cogumelos, azeite trufado e parmesão",
    price: 55,
    category: "premium",
    image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1920"
  },
  {
    id: "p2",
    name: "Salmão Premium",
    description: "Molho de tomate, mussarela, salmão defumado, alcaparras e cream cheese",
    price: 55,
    category: "premium",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1920"
  },
  {
    id: "p3",
    name: "Picanha",
    description: "Molho de tomate, mussarela, picanha fatiada, cebola caramelizada e chimichurri",
    price: 55,
    category: "premium",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1920"
  },
  
  // Vegetariana Category (5 examples)
  {
    id: "v1",
    name: "Veggie Supreme",
    description: "Molho de tomate, mussarela, berinjela, abobrinha, pimentão e champignon",
    price: 45,
    category: "vegetariana",
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1920"
  },
  {
    id: "v2",
    name: "Garden Fresh",
    description: "Molho de tomate, mussarela, espinafre, tomate, cebola roxa e milho",
    price: 45,
    category: "vegetariana",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1920"
  },
  
  // Doce Category (5 examples)
  {
    id: "d1",
    name: "Chocolate com Morango",
    description: "Chocolate ao leite, morango e granulado",
    price: 45,
    category: "doce",
    image: "https://images.unsplash.com/photo-1644301828135-3e297958e02c?q=80&w=1920"
  },
  {
    id: "d2",
    name: "Banana com Canela",
    description: "Banana, canela, leite condensado e chocolate",
    price: 45,
    category: "doce",
    image: "https://images.unsplash.com/photo-1628840046099-65fc3111f0cd?q=80&w=1920"
  },
];

export const borders = [
  { value: "tradicional", label: "Tradicional", price: 0 },
  { value: "catupiry", label: "Catupiry", price: 8 },
  { value: "cheddar", label: "Cheddar", price: 8 },
  { value: "chocolate", label: "Chocolate", price: 10 },
];

export const extras = [
  { value: "catupiry_extra", label: "Catupiry Extra", price: 5 },
  { value: "cheddar_extra", label: "Cheddar Extra", price: 5 },
  { value: "bacon_extra", label: "Bacon Extra", price: 5 },
  { value: "calabresa_extra", label: "Calabresa Extra", price: 5 },
  { value: "parmesao_extra", label: "Parmesão Extra", price: 5 },
];

export const sizes = [
  { value: "media", label: "Média (2 sabores)", price: 35, maxFlavors: 2 },
  { value: "grande", label: "Grande (3 sabores)", price: 45, maxFlavors: 3 },
  { value: "familia", label: "Família (4 sabores)", price: 55, maxFlavors: 4 },
];
