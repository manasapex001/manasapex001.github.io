# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## 📋 Prerequisites

- A GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer ([Download here](https://git-scm.com/downloads))
- Node.js and pnpm installed

---

## 🎯 Method 1: Automatic Deployment (Recommended)

This method uses GitHub Actions to automatically build and deploy your site whenever you push changes.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Visibility**: Public
   - **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

### Step 2: Push Your Code

Open your terminal/command prompt in the project folder and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as the remote
# Replace YOUR-USERNAME and YOUR-REPO with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Rename the branch to main
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/abhinavr11/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click the **"Settings"** tab
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. That's it! No need to click save - it's automatic.

### Step 4: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark ✓)
4. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

**Example URL:**
```
https://abhinavr11.github.io/portfolio/
```

### Step 5: Update Your Site

Whenever you want to update your website:

```bash
# Make your changes to the code
# Then commit and push:
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and deploy!

---

## 🔧 Method 2: Manual Deployment (Alternative)

If you prefer to deploy manually using a command:

### Step 1: Install gh-pages

```bash
pnpm install --save-dev gh-pages
```

### Step 2: Deploy

After pushing your code to GitHub (follow steps 1-2 from Method 1), run:

```bash
pnpm deploy
```

This will build your site and deploy it to the `gh-pages` branch.

### Step 3: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **"Build and deployment"**:
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages` and `/root`
3. Click **Save**

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## 🎨 Customization Tips

### Change Your Information

Edit these files to customize your portfolio:

- **`/src/app/components/Hero.tsx`** - Your name, title, and social links
- **`/src/app/components/About.tsx`** - Your bio and interests
- **`/src/app/components/Publications.tsx`** - Your research papers
- **`/src/app/components/Projects.tsx`** - Your projects
- **`/src/app/components/Awards.tsx`** - Your achievements
- **`/src/app/components/Contact.tsx`** - Your contact information

### Change Colors or Styling

- Edit **`/src/styles/theme.css`** for color schemes
- Tailwind classes in component files for individual styling

---

## 🐛 Troubleshooting

### Issue: Site shows 404 error
**Solution:** 
- Make sure GitHub Pages is enabled in Settings → Pages
- Check that the deployment workflow completed successfully
- Wait 1-2 minutes after deployment

### Issue: Images not showing
**Solution:** 
- Ensure image imports use `figma:asset` for raster images
- Check that images are in the correct paths

### Issue: Workflow failing
**Solution:**
- Go to Actions tab and check the error logs
- Make sure all files are committed and pushed
- Verify package.json has no syntax errors

---

## 📱 Custom Domain (Optional)

Want to use your own domain like `www.yourname.com`?

1. Buy a domain from providers like [Namecheap](https://www.namecheap.com/) or [Google Domains](https://domains.google/)
2. In your repository:
   - Go to **Settings** → **Pages**
   - Under "Custom domain", enter your domain
3. Configure DNS settings (follow GitHub's guide)

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## ✅ Quick Checklist

- [ ] Created GitHub account
- [ ] Created new repository on GitHub
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages in Settings
- [ ] Waited for deployment to complete
- [ ] Visited your live site!

---

## 🎉 Success!

Once deployed, share your portfolio link with:
- Potential employers
- Academic advisors
- Professional networks (LinkedIn, Twitter)
- Your resume/CV

**Your live site:** `https://YOUR-USERNAME.github.io/YOUR-REPO/`

Congratulations on deploying your portfolio! 🚀
