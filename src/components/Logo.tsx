import { Link } from "react-router-dom";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="New Cloths home">
      <span className="brand-mark">NC</span>
      {!compact && <span className="brand-copy"><strong>New Cloths</strong><small>PREMIUM FASHION</small></span>}
    </Link>
  );
}
