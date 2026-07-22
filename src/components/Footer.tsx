import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-brand"><Logo/><p>Curated fashion, trusted providers, verified reviews, secure shopping, and clear order management in one premium marketplace.</p><div className="socials"><button type="button" aria-label="Instagram"><Instagram/></button><button type="button" aria-label="YouTube"><Youtube/></button><button type="button" aria-label="LinkedIn"><Linkedin/></button></div></div>
        <div><h4>Shop</h4><Link to="/shop?category=Women">Women</Link><Link to="/shop?category=Men">Men</Link><Link to="/shop?category=Kids">Kids</Link><Link to="/shop?category=Footwear">Footwear</Link></div>
        <div><h4>Support</h4><Link to="/faq">FAQ</Link><Link to="/track">Track Order</Link><Link to="/account">Returns</Link><Link to="/messages">Contact</Link></div>
        <div><h4>Platform</h4><Link to="/provider">Provider Portal</Link><Link to="/admin">Admin Demo</Link><Link to="/staff">Staff Demo</Link><Link to="/appearance">Appearance</Link></div>
        <div className="newsletter"><h4>Private Edit</h4><p>New collections and private offers, thoughtfully delivered.</p><form onSubmit={e => e.preventDefault()}><Mail size={18}/><input aria-label="Email address" placeholder="Email address"/><button>Join</button></form></div>
      </div>
      <div className="footer-bottom container"><span>© New Cloths. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div>
    </footer>
  );
}
