import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "../data/catalog";

export type ThemeName = "light" | "dark" | "green";
export type CartItem = { product: Product; quantity: number; size: string; color: string };

type Toast = { id: number; message: string };

type StoreContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  cart: CartItem[];
  wishlist: number[];
  addToCart: (product: Product, size?: string, color?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleWishlist: (productId: number) => void;
  cartCount: number;
  cartTotal: number;
  toasts: Toast[];
  notify: (message: string) => void;
  userRole: "customer" | "provider" | "admin" | "staff";
  setUserRole: (role: "customer" | "provider" | "admin" | "staff") => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

const getStored = <T,>(key: string, fallback: T): T => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => getStored("nc-theme", "light"));
  const [cart, setCart] = useState<CartItem[]>(() => getStored("nc-cart", []));
  const [wishlist, setWishlist] = useState<number[]>(() => getStored("nc-wishlist", [3, 6]));
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [userRole, setUserRole] = useState<"customer" | "provider" | "admin" | "staff">("customer");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nc-theme", JSON.stringify(theme));
  }, [theme]);
  useEffect(() => localStorage.setItem("nc-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("nc-wishlist", JSON.stringify(wishlist)), [wishlist]);

  const notify = (message: string) => {
    const id = Math.floor(Math.random() * 1_000_000_000);
    setToasts(items => [...items, { id, message }]);
    window.setTimeout(() => setToasts(items => items.filter(item => item.id !== id)), 2600);
  };

  const addToCart = (product: Product, size = product.sizes[0], color = product.colors[0]) => {
    setCart(items => {
      const existing = items.find(item => item.product.id === product.id && item.size === size && item.color === color);
      if (existing) return items.map(item => item === existing ? { ...item, quantity: item.quantity + 1 } : item);
      return [...items, { product, quantity: 1, size, color }];
    });
    notify(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: number) => setCart(items => items.filter(item => item.product.id !== productId));
  const updateQuantity = (productId: number, quantity: number) => setCart(items => items.map(item => item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item));
  const toggleWishlist = (productId: number) => {
    setWishlist(ids => ids.includes(productId) ? ids.filter(id => id !== productId) : [...ids, productId]);
    const product = products.find(item => item.id === productId);
    notify(wishlist.includes(productId) ? `${product?.name ?? "Product"} removed from wishlist` : `${product?.name ?? "Product"} saved to wishlist`);
  };

  const value = useMemo(() => ({
    theme,
    setTheme: setThemeState,
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    toasts,
    notify,
    userRole,
    setUserRole
  }), [theme, cart, wishlist, toasts, userRole]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("useStore must be used within StoreProvider");
  return value;
}
