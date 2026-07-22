# GitHub Pages Deployment Checklist

1. Extract the project.
2. Create a public GitHub repository.
3. Push every file, including `.github/workflows/deploy-pages.yml`.
4. In repository Settings, open Pages.
5. Select **GitHub Actions** as the source.
6. Open the Actions tab and wait for **Deploy New Cloths Demo** to complete.
7. Copy the Pages URL and send it to the customer.

No repository name needs to be written into `vite.config.ts`. The build detects it automatically during GitHub Actions deployment.
