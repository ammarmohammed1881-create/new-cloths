import { useEffect, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Eye, Heart, Plus, Scale, ShoppingBag, Sparkles, Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../data/catalog";
import { useStore } from "../context/StoreContext";

const money = (value: number) => `LKR ${value.toLocaleString("en-LK")}`;

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist, notify } = useStore();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quickOpen, setQuickOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const isSaved = wishlist.includes(product.id);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  useEffect(() => {
    if (!previewOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [previewOpen]);

  const tilt = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
    card.style.setProperty("--glow-x", `${x * 100}%`);
    card.style.setProperty("--glow-y", `${y * 100}%`);
  };

  const resetTilt = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  const quickAdd = () => {
    if (adding) return;
    setAdding(true);
    addToCart(product, selectedSize, selectedColor);
    window.setTimeout(() => setAdding(false), 650);
  };

  const compare = () => notify(`${product.name} added to the demo comparison list`);

  return (
    <>
      <motion.article
        ref={cardRef}
        className="product-card interactive-card"
        onPointerMove={tilt}
        onPointerLeave={resetTilt}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.42 }}
      >
        <div className="product-card-surface">
          <div className="product-media">
            <Link className="product-image-link" to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
              <img className="main-image" src={product.image} alt={product.name} loading="lazy" />
              <img className="hover-image" src={product.hoverImage} alt="" loading="lazy" />
            </Link>

            <div className="product-card-badges">
              {product.badge && <span className="product-badge">{product.badge}</span>}
              {discount > 0 && <span className="discount-badge">-{discount}%</span>}
            </div>

            <div className="product-card-floating-actions">
              <button
                className={`heart-btn ${isSaved ? "active" : ""}`}
                onClick={() => toggleWishlist(product.id)}
                aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} fill={isSaved ? "currentColor" : "none"} />
              </button>
              <button className="card-round-btn" onClick={() => setPreviewOpen(true)} aria-label="Quick preview">
                <Eye size={18} />
              </button>
              <button className="card-round-btn" onClick={compare} aria-label="Compare product">
                <Scale size={18} />
              </button>
            </div>

            <div className="product-image-caption">
              <span><Sparkles size={13} /> Verified edit</span>
              <span>{product.stock < 12 ? `Only ${product.stock} left` : "Ready to dispatch"}</span>
            </div>

            <div className={`product-quick-panel ${quickOpen ? "open" : ""}`}>
              <div className="quick-panel-row">
                <span>Colour</span>
                <div className="card-swatches">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={selectedColor === color ? "active" : ""}
                      style={{ background: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select colour ${color}`}
                    />
                  ))}
                </div>
              </div>
              <div className="quick-panel-row">
                <span>Size</span>
                <div className="card-sizes">
                  {product.sizes.slice(0, 5).map((size) => (
                    <button key={size} className={selectedSize === size ? "active" : ""} onClick={() => setSelectedSize(size)}>{size}</button>
                  ))}
                </div>
              </div>
              <button className={`quick-add-btn ${adding ? "added" : ""}`} onClick={quickAdd}>
                {adding ? <><Check size={17} /> Added</> : <><ShoppingBag size={17} /> Add selected</>}
              </button>
            </div>
          </div>

          <div className="product-info">
            <div className="product-kicker"><span>{product.brand}</span><span>{product.provider}</span></div>
            <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
            <Link className="rating" to={`/reviews/${product.id}`} aria-label={`Read ${product.reviews} reviews`}>
              <Star size={15} fill="currentColor" /><strong>{product.rating}</strong><span>({product.reviews})</span>
            </Link>
            <div className="price"><strong>{money(product.price)}</strong>{product.oldPrice && <del>{money(product.oldPrice)}</del>}</div>
            <div className="product-card-bottom">
              <button className="quick-options-toggle" onClick={() => setQuickOpen((value) => !value)} aria-expanded={quickOpen}>
                <Plus size={15} /> {quickOpen ? "Close options" : "Quick options"}
              </button>
              <Link to={`/product/${product.id}`}>Details <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {previewOpen && (
          <motion.div className="quick-view-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setPreviewOpen(false)}>
            <motion.section
              className="quick-view-modal glass"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onMouseDown={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Quick view ${product.name}`}
            >
              <button className="quick-view-close" onClick={() => setPreviewOpen(false)} aria-label="Close quick view"><X /></button>
              <div className="quick-view-image"><img src={product.image} alt={product.name} /></div>
              <div className="quick-view-copy">
                <span className="eyebrow">{product.brand} · {product.provider}</span>
                <h2>{product.name}</h2>
                <Link className="rating" to={`/reviews/${product.id}`} onClick={() => setPreviewOpen(false)}><Star fill="currentColor" /> <strong>{product.rating}</strong><span>{product.reviews} reviews</span></Link>
                <div className="detail-price"><strong>{money(product.price)}</strong>{product.oldPrice && <del>{money(product.oldPrice)}</del>}</div>
                <p>{product.description}</p>
                <div className="quick-view-field"><strong>Colour</strong><div className="card-swatches large">{product.colors.map((color) => <button key={color} className={selectedColor === color ? "active" : ""} style={{ background: color }} onClick={() => setSelectedColor(color)} />)}</div></div>
                <div className="quick-view-field"><strong>Size</strong><div className="card-sizes large">{product.sizes.map((size) => <button key={size} className={selectedSize === size ? "active" : ""} onClick={() => setSelectedSize(size)}>{size}</button>)}</div></div>
                <div className="quick-view-actions">
                  <button className="btn primary" onClick={quickAdd}>{adding ? <><Check /> Added</> : <><ShoppingBag /> Add to cart</>}</button>
                  <Link className="btn secondary" to={`/product/${product.id}`} onClick={() => setPreviewOpen(false)}>Full details <ArrowRight /></Link>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
