import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Bell, Heart, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { Logo } from "./Logo";
import { useStore } from "../context/StoreContext";

const categoryHref = (category: string) => `/shop?category=${encodeURIComponent(category)}`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, wishlist } = useStore();
  const searchParams = new URLSearchParams(location.search);
  const activeCategory = searchParams.get("category");

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, searchOpen]);

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/shop?q=${encodeURIComponent(value)}` : "/shop");
  };

  const shopClass = (category?: string) => {
    if (location.pathname !== "/shop") return "";
    return category ? (activeCategory === category ? "active" : "") : (!activeCategory ? "active" : "");
  };

  const mobileLinks = [
    ["Home", "/"], ["New Arrivals", "/shop"], ["Women", categoryHref("Women")],
    ["Men", categoryHref("Men")], ["Kids", categoryHref("Kids")], ["Footwear", categoryHref("Footwear")],
    ["About", "/about"], ["FAQ", "/faq"]
  ];

  return (
    <>
      <div className="announcement"><span>Complimentary island-wide delivery over LKR 25,000</span><Link to="/shop">Explore the new edit</Link></div>
      <header className={`site-header glass ${scrolled ? "scrolled" : ""}`}>
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLink end to="/">Home</NavLink>
          <Link className={shopClass()} to="/shop">New Arrivals</Link>
          <Link className={shopClass("Women")} to={categoryHref("Women")}>Women</Link>
          <Link className={shopClass("Men")} to={categoryHref("Men")}>Men</Link>
          <Link className={shopClass("Kids")} to={categoryHref("Kids")}>Kids</Link>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search"><Search size={20}/></button>
          <Link className="icon-btn count-wrap" to="/wishlist" aria-label="Wishlist"><Heart size={20}/>{wishlist.length > 0 && <b>{wishlist.length}</b>}</Link>
          <Link className="icon-btn" to="/notifications" aria-label="Notifications"><Bell size={20}/></Link>
          <Link className="icon-btn count-wrap" to="/cart" aria-label="Cart"><ShoppingBag size={20}/>{cartCount > 0 && <b>{cartCount}</b>}</Link>
          <Link className="icon-btn" to="/account" aria-label="Account"><UserRound size={20}/></Link>
          <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <AnimatePresence>
        {open && <>
          <motion.button className="mobile-menu-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}/>
          <motion.nav id="mobile-navigation" className="mobile-menu glass" aria-label="Mobile navigation" initial={{ opacity: 0, y: -18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} transition={{ duration: .24 }}>
            {mobileLinks.map(([label, path], index) => <motion.div key={label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .025 }}><Link className={label === "Home" ? (location.pathname === "/" ? "active" : "") : label === "New Arrivals" ? shopClass() : ["Women","Men","Kids","Footwear"].includes(label) ? shopClass(label) : location.pathname === path ? "active" : ""} to={path}>{label}</Link></motion.div>)}
          </motion.nav>
        </>}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && <motion.div className="modal-backdrop" onMouseDown={() => setSearchOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.form className="search-modal glass" onSubmit={submitSearch} onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }}>
            <Search size={24}/><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dresses, shirts, brands..."/><button type="submit">Search</button><button type="button" className="icon-btn" onClick={() => setSearchOpen(false)} aria-label="Close search"><X/></button>
          </motion.form>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
