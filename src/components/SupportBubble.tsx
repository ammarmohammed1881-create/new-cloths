import { useState, type FormEvent } from "react";
import { MessageCircle, Send, X } from "lucide-react";
export function SupportBubble(){
 const [open,setOpen]=useState(false); const [messages,setMessages]=useState(["Welcome to New Cloths. I can help with products, orders, sizing, payments, reviews, and returns."]); const [text,setText]=useState("");
 const send=(e:FormEvent)=>{e.preventDefault(); if(!text.trim())return; setMessages(v=>[...v,text,"I found relevant New Cloths options. Open Shop to filter by category, size, colour, rating, price, or provider."]);setText("")};
 return <div className="support-wrap">{open&&<div className="support-panel glass"><div className="support-head"><div><strong>NC Assistant</strong><small>Customer support</small></div><button className="icon-btn" onClick={()=>setOpen(false)}><X size={18}/></button></div><div className="support-messages">{messages.map((m,i)=><p className={i%2?"mine":"bot"} key={i}>{m}</p>)}</div><form onSubmit={send}><input value={text} onChange={e=>setText(e.target.value)} placeholder="Ask about a product..."/><button><Send size={17}/></button></form></div>}<button className="support-button" onClick={()=>setOpen(!open)} aria-label="Open support"><MessageCircle/></button></div>
}
