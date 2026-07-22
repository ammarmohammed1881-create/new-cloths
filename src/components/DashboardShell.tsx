import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Bell, Boxes, ChevronLeft, ClipboardList, LayoutDashboard, LogOut, Megaphone, Menu, MessageSquare, PackageCheck, Settings, ShieldCheck, ShoppingBag, Star, Store, Users, WalletCards, X } from "lucide-react";
import { Logo } from "./Logo";
import { useEffect, useState, type ComponentType } from "react";

const navMap = {
 provider: [
  ["Overview","/provider",LayoutDashboard],["Products","/provider/products",ShoppingBag],["Orders","/provider/orders",ClipboardList],["Inventory","/provider/inventory",Boxes],["Analytics","/provider/analytics",BarChart3],["Reviews","/provider/reviews",Star],["Messages","/provider/messages",MessageSquare],["Promotions","/provider/promotions",Megaphone],["Finance","/provider/finance",WalletCards],["Settings","/provider/settings",Settings]
 ],
 admin: [
  ["Overview","/admin",LayoutDashboard],["Customers","/admin/customers",Users],["Providers","/admin/providers",Store],["Staff","/admin/staff",ShieldCheck],["Products","/admin/products",ShoppingBag],["Orders","/admin/orders",PackageCheck],["Reviews","/admin/reviews",Star],["Campaigns","/admin/campaigns",Megaphone],["Finance","/admin/finance",WalletCards],["System Settings","/admin/settings",Settings]
 ],
 staff: [
  ["Overview","/staff",LayoutDashboard],["Assigned Orders","/staff/orders",ClipboardList],["Products","/staff/products",ShoppingBag],["Support","/staff/support",MessageSquare],["Review Queue","/staff/reviews",Star],["Notifications","/staff/notifications",Bell]
 ]
} as const;

export function DashboardShell({type}:{type:keyof typeof navMap}){
 const [collapsed,setCollapsed]=useState(false); const [mobileOpen,setMobileOpen]=useState(false); const location=useLocation();
 useEffect(()=>{setMobileOpen(false);window.scrollTo({top:0,left:0,behavior:"auto"})},[location.pathname]);
 useEffect(()=>{document.body.style.overflow=mobileOpen?"hidden":"";return()=>{document.body.style.overflow=""}},[mobileOpen]);
 return <div className={`dashboard-shell ${collapsed?"collapsed":""} ${mobileOpen?"mobile-nav-open":""}`}>
  {mobileOpen&&<button className="dash-nav-backdrop" aria-label="Close dashboard navigation" onClick={()=>setMobileOpen(false)}/>} 
  <aside className={`dash-sidebar ${mobileOpen?"open":""}`}><div className="dash-brand"><Logo compact={collapsed}/><button onClick={()=>setCollapsed(!collapsed)} aria-label="Collapse sidebar"><ChevronLeft/></button><button className="dash-close-mobile" onClick={()=>setMobileOpen(false)} aria-label="Close sidebar"><X/></button></div><nav>{navMap[type].map(([label,path,Icon])=><NavLink end={path===`/${type}`} to={path} key={label}><Icon size={20}/><span>{label}</span></NavLink>)}</nav><NavLink className="logout" to="/auth"><LogOut size={20}/><span>Sign out</span></NavLink></aside>
  <section className="dash-main"><header className="dash-top glass"><button className="dash-mobile-menu" onClick={()=>setMobileOpen(true)} aria-label="Open dashboard navigation"><Menu/></button><div><small>{type.toUpperCase()} WORKSPACE</small><strong>{type==="provider"?"Maison Serene":type==="admin"?"New Cloths Control":"Authorized Staff"}</strong></div><div className="dash-top-actions"><button className="icon-btn"><Bell size={20}/></button><div className="avatar">{type==="provider"?"MS":type==="admin"?"AD":"ST"}</div></div></header><AnimatePresence mode="wait" initial={false}><motion.div key={location.pathname} className="dash-route-transition" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-7}} transition={{duration:.24}}><Outlet/></motion.div></AnimatePresence></section>
 </div>
}

export function MetricCard({label,value,change,icon:Icon}:{label:string;value:string;change:string;icon:ComponentType<{size?:number}>}){return <div className="metric-card glass"><div className="metric-icon"><Icon size={20}/></div><div><span>{label}</span><strong>{value}</strong><small>{change}</small></div></div>}
