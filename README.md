# NC — New Cloths GitHub Pages Frontend

A complete responsive frontend demo for the New Cloths multi-vendor fashion platform. It includes the customer storefront, provider portal, admin panel, and authorized staff dashboard using local demo state. No backend or MySQL service is required for this preview build.

## Included

- Responsive customer storefront
- Home, shop, category filtering, search, product details, reviews, wishlist, cart, checkout, tracking, messages, notifications, account, FAQ, about, appearance, and authentication screens
- Provider, admin, and staff dashboard interfaces
- Interactive product cards on Home, Shop, Product Recommendations, and Wishlist
- Quick product preview modal
- Size and colour selection directly from product cards
- Quick add-to-cart, wishlist, and comparison interactions
- Light, dark, and premium green themes
- Smooth route transitions and scroll restoration
- Mobile menus and responsive dashboard sidebars
- GitHub Pages–safe `HashRouter`
- Automatic GitHub repository base-path detection
- GitHub Actions deployment workflow

## Local preview

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Build locally

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Deploy to GitHub Pages

### 1. Create a GitHub repository

Create an empty public repository, for example:

```text
new-cloths-demo
```

### 2. Upload this project

Open a terminal in this project folder:

```bash
git init
git add .
git commit -m "Add New Cloths frontend demo"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/new-cloths-demo.git
git push -u origin main
```

### 3. Enable GitHub Pages

Open the repository on GitHub:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

The included workflow automatically installs dependencies, builds the Vite app, and publishes `dist/`.

### 4. Open the demo

After the workflow succeeds, the preview link will be:

```text
https://YOUR-USERNAME.github.io/new-cloths-demo/
```

The internal pages use hash-based routes, for example:

```text
https://YOUR-USERNAME.github.io/new-cloths-demo/#/shop
https://YOUR-USERNAME.github.io/new-cloths-demo/#/provider
https://YOUR-USERNAME.github.io/new-cloths-demo/#/admin
https://YOUR-USERNAME.github.io/new-cloths-demo/#/staff
```

## Important demo limitation

GitHub Pages serves static frontend files only. The cart, wishlist, themes, forms, dashboards, and interactions use local demo state. Real authentication, MySQL data, payments, email, SMS, server-side orders, and permanent shared customer data require a separately hosted backend.

## Customer preview message

```text
New Cloths responsive e-commerce demo:
https://YOUR-USERNAME.github.io/new-cloths-demo/
```
