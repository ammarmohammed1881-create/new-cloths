import { CheckCircle2 } from "lucide-react";
import { useStore } from "../context/StoreContext";
export function Toasts(){const {toasts}=useStore();return <div className="toast-stack">{toasts.map(t=><div className="toast glass" key={t.id}><CheckCircle2 size={19}/>{t.message}</div>)}</div>}
