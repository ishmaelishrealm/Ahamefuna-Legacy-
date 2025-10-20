# 🚀 Deployment Guide for Ahamefuna

This guide will help you deploy your African language learning app to Vercel from GitHub.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## 🔧 Local Setup & Testing

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Test the build:**
   ```bash
   npm run build
   npm run preview
   ```

## 🌐 GitHub Setup

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ahamefuna language learning app"
   ```

2. **Create GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `ahamefuna-language-learning`
   - Don't initialize with README (we already have one)

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## ⚡ Vercel Deployment

### Method 1: Vercel Dashboard (Recommended)

1. **Go to [Vercel](https://vercel.com) and sign in**

2. **Import your project:**
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Vercel will auto-detect it's a Vite project

3. **Configure deployment:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## 🔄 Automatic Deployments

Once connected, Vercel will automatically deploy:
- **Production:** Every push to `main` branch
- **Preview:** Every push to other branches (for testing)

## ⚙️ Environment Variables (Optional)

If you need environment variables:

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Environment Variables
   - Add variables like:
     ```
     VITE_APP_NAME=Ahamefuna
     VITE_APP_VERSION=1.0.0
     ```

2. **Redeploy** after adding variables

## 🎯 Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## 📊 Monitoring & Analytics

- **Vercel Analytics:** Built-in performance monitoring
- **Google Analytics:** Add your GA ID to environment variables
- **Error Tracking:** Consider adding Sentry for error monitoring

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version (needs 18+)
   - Verify all dependencies are in package.json
   - Check for TypeScript errors

2. **App Doesn't Load:**
   - Verify vercel.json configuration
   - Check that all routes redirect to index.html
   - Ensure public assets are accessible

3. **Styling Issues:**
   - Verify Tailwind CSS is properly configured
   - Check that globals.css is imported
   - Ensure PostCSS config is correct

### Debug Commands:

```bash
# Check build locally
npm run build

# Test production build
npm run preview

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

## 📈 Performance Optimization

Your app is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting with manual chunks
- ✅ Asset caching headers
- ✅ Tree shaking for smaller bundles

## 🔒 Security Considerations

- No sensitive data in client-side code
- All API calls should be to public endpoints
- Consider adding CSP headers in vercel.json if needed

## 📱 Mobile Optimization

The app is responsive and works on:
- ✅ Desktop browsers
- ✅ Mobile browsers
- ✅ Progressive Web App ready (can add PWA features later)

---

## 🎉 You're Ready!

Your Ahamefuna language learning app should now be live on Vercel! 

**Next Steps:**
1. Test all functionality on the live site
2. Share with users for feedback
3. Monitor performance in Vercel dashboard
4. Consider adding analytics
5. Plan feature updates and improvements

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
