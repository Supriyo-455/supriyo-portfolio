# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Repository Settings**: You need admin access to the repository
3. **GitHub Pages**: Must be enabled in repository settings

## 🔧 Step-by-Step Deployment

### 1. **Push Your Code to GitHub**

First, make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Add portfolio website with GitHub Actions workflow"
git push origin main
```

### 2. **Enable GitHub Pages**

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 3. **Configure Repository Settings**

1. In **Settings** → **Pages**
2. Make sure **Source** is set to **GitHub Actions**
3. The workflow will automatically deploy when you push to main branch

### 4. **Verify Deployment**

After pushing your code:

1. Go to **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, go to **Settings** → **Pages**
5. Your site URL will be displayed (usually `https://yourusername.github.io/repository-name`)

## 🔄 Automatic Deployment

The GitHub Actions workflow will automatically:

- ✅ Build your React app
- ✅ Run tests (if configured)
- ✅ Deploy to GitHub Pages
- ✅ Update on every push to main branch

## 🛠 Troubleshooting

### PowerShell Execution Policy Issue

If you're getting PowerShell execution policy errors locally:

```powershell
# Run this in PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Build Failures

If the GitHub Actions build fails:

1. Check the **Actions** tab for error details
2. Common issues:
   - Missing dependencies
   - TypeScript errors
   - Path alias issues

### Deployment Issues

If deployment fails:

1. Check repository permissions
2. Ensure GitHub Pages is enabled
3. Verify the workflow file is in `.github/workflows/deploy.yml`

## 📱 Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Add a `CNAME` file in your `public/` folder with your domain
4. Configure DNS settings with your domain provider

## 🔍 Monitoring

- **Actions Tab**: Monitor build and deployment status
- **Pages Tab**: View deployment history and settings
- **Repository Insights**: Track deployment frequency

## 📞 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all files are committed
3. Ensure the workflow file is properly formatted
4. Check repository permissions

---

Your portfolio will be live at: `https://yourusername.github.io/repository-name`
