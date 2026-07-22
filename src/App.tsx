import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DashboardShell } from "./components/DashboardShell";
import { AccountPage, AboutPage, AppearancePage, AuthPage, CartPage, CheckoutPage, FAQPage, HomePage, MessagesPage, NotificationsPage, ProductPage, ReviewsPage, ShopPage, TrackPage, WishlistPage } from "./pages/StorePages";
import { AdminOverview, DashboardModulePage, ProviderOverview, StaffOverview } from "./pages/DashboardPages";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/reviews/:id" element={<ReviewsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/appearance" element={<AppearancePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/provider" element={<DashboardShell type="provider" />}>
          <Route index element={<ProviderOverview />} />
          <Route path=":module" element={<DashboardModulePage />} />
        </Route>
        <Route path="/admin" element={<DashboardShell type="admin" />}>
          <Route index element={<AdminOverview />} />
          <Route path=":module" element={<DashboardModulePage />} />
        </Route>
        <Route path="/staff" element={<DashboardShell type="staff" />}>
          <Route index element={<StaffOverview />} />
          <Route path=":module" element={<DashboardModulePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
