export type Product = {
  id: number;
  name: string;
  brand: string;
  provider: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  hoverImage: string;
  colors: string[];
  sizes: string[];
  stock: number;
  description: string;
  material: string;
  fit: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Ivory Sculpted Blazer",
    brand: "NC Atelier",
    provider: "Maison Serene",
    category: "Women",
    price: 18900,
    oldPrice: 22900,
    rating: 4.8,
    reviews: 326,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
    colors: ["#efe7dc", "#111111", "#8b5e3c"],
    sizes: ["XS", "S", "M", "L"],
    stock: 18,
    description: "A softly structured blazer designed for polished everyday layering, finished with sculpted shoulders and a clean single-button closure.",
    material: "Premium crepe blend",
    fit: "Tailored",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Midnight Relaxed Shirt",
    brand: "Noir Studio",
    provider: "Urban Loom",
    category: "Men",
    price: 7900,
    oldPrice: 9900,
    rating: 4.6,
    reviews: 188,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    colors: ["#12151a", "#f5f5f0", "#36536f"],
    sizes: ["S", "M", "L", "XL"],
    stock: 42,
    description: "A contemporary relaxed shirt cut from breathable cotton with understated detailing and an easy drape.",
    material: "100% cotton",
    fit: "Relaxed",
    badge: "New"
  },
  {
    id: 3,
    name: "Sage Draped Midi Dress",
    brand: "Auréline",
    provider: "Velvet Route",
    category: "Women",
    price: 14900,
    oldPrice: 17900,
    rating: 4.9,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    colors: ["#7c8f7b", "#ad786b", "#1f2630"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 11,
    description: "An elegant midi dress with a softly draped neckline and fluid movement for evening or occasion wear.",
    material: "Satin-touch viscose",
    fit: "Regular",
    badge: "Trending"
  },
  {
    id: 4,
    name: "Essential Heavyweight Tee",
    brand: "NC Core",
    provider: "Thread Theory",
    category: "Men",
    price: 4900,
    rating: 4.7,
    reviews: 251,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85",
    colors: ["#f3f0e8", "#151515", "#5f7668"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 79,
    description: "A premium heavyweight tee with a clean neckline, relaxed body, and smooth compact cotton finish.",
    material: "240gsm cotton jersey",
    fit: "Relaxed",
  },
  {
    id: 5,
    name: "Stone Wide-Leg Trousers",
    brand: "Forme",
    provider: "Maison Serene",
    category: "Women",
    price: 10900,
    oldPrice: 12900,
    rating: 4.5,
    reviews: 119,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=85",
    colors: ["#c7bdab", "#2c2c2b", "#8a7760"],
    sizes: ["26", "28", "30", "32", "34"],
    stock: 24,
    description: "High-waisted wide-leg trousers with a precise front crease and fluid tailored drape.",
    material: "Viscose twill",
    fit: "Wide leg",
  },
  {
    id: 6,
    name: "Forest Utility Jacket",
    brand: "Northline",
    provider: "Urban Loom",
    category: "Men",
    price: 15900,
    oldPrice: 18900,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=85",
    colors: ["#374c3c", "#181818", "#786b58"],
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
    description: "A refined utility jacket with practical pocketing, tonal hardware, and a clean urban silhouette.",
    material: "Cotton canvas",
    fit: "Regular",
    badge: "Low Stock"
  },
  {
    id: 7,
    name: "Cloud Knit Co-ord",
    brand: "Sunday Form",
    provider: "Velvet Route",
    category: "Women",
    price: 16900,
    rating: 4.7,
    reviews: 144,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=85",
    colors: ["#e6e0d4", "#9a8f84", "#2c2f34"],
    sizes: ["XS", "S", "M", "L"],
    stock: 15,
    description: "A softly textured knit set designed for elevated comfort and effortless styling.",
    material: "Cotton-modal knit",
    fit: "Relaxed",
  },
  {
    id: 8,
    name: "Minimal Leather Sneakers",
    brand: "Step One",
    provider: "Sole District",
    category: "Footwear",
    price: 12900,
    oldPrice: 14900,
    rating: 4.6,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    colors: ["#f4f0e8", "#111111", "#b7a487"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    stock: 37,
    description: "Minimal low-profile sneakers made for clean everyday styling and lasting comfort.",
    material: "Leather upper",
    fit: "True to size",
  }
];

export const categories = [
  { name: "Women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85", count: 426 },
  { name: "Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85", count: 318 },
  { name: "Kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85", count: 184 },
  { name: "Footwear", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85", count: 207 }
];

export const reviews = [
  { id: 1, productId: 3, name: "Maya Fernando", rating: 5, title: "Looks even better in person", text: "The drape is beautiful and the colour is exactly as shown. I uploaded two photos because the fit deserves to be seen.", verified: true, helpful: 48, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=500&q=80" },
  { id: 2, productId: 1, name: "Nadeesha Perera", rating: 5, title: "Perfect workwear piece", text: "Structured without feeling stiff. The size guide was accurate and delivery was earlier than expected.", verified: true, helpful: 36, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80" },
  { id: 3, productId: 2, name: "Ravindu Silva", rating: 4, title: "Premium fabric", text: "The fabric has a soft finish and the relaxed fit works well. I would recommend sizing down for a cleaner silhouette.", verified: true, helpful: 21 },
  { id: 4, productId: 6, name: "Ahamed Rizwan", rating: 5, title: "Solid everyday jacket", text: "Great pockets and a premium finish. It feels durable while staying lightweight.", verified: true, helpful: 18 }
];

export const analytics = [
  { month: "Period 1", sales: 780000, profit: 214000 },
  { month: "Period 2", sales: 920000, profit: 271000 },
  { month: "Period 3", sales: 880000, profit: 249000 },
  { month: "Period 4", sales: 1130000, profit: 338000 },
  { month: "Period 5", sales: 1260000, profit: 391000 },
  { month: "Period 6", sales: 1470000, profit: 466000 }
];
