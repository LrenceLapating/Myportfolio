# 📖 Step-by-Step Deployment Guide

## 🎯 Complete Beginner-Friendly Guide

Follow these exact steps to deploy your portfolio to Vercel.

---

## 🔰 STEP 1: Prepare Your Code

### 1.1 Open Terminal/Command Prompt

**Windows**: Press `Win + R`, type `cmd`, press Enter
**Mac**: Press `Cmd + Space`, type `terminal`, press Enter

### 1.2 Navigate to Your Project

```bash
cd path/to/your/portfolio
```

Example:
```bash
cd E:\Porrt
```

### 1.3 Test Your Build

```bash
npm run build
```

✅ **Expected**: "Compiled successfully"
❌ **If error**: Run `npm install` first, then try again

---

## 🔰 STEP 2: Create GitHub Account (If You Don't Have One)

### 2.1 Go to GitHub

Open browser → Visit [github.com/signup](https://github.com/signup)

### 2.2 Sign Up

- Enter your email
- Create a password
- Choose a username (example: `techwise-dev`)
- Verify you're human
- Click "Create account"

### 2.3 Verify Email

- Check your email inbox
- Click the verification link
- ✅ Account activated!

---

## 🔰 STEP 3: Create a New Repository

### 3.1 Create Repository

1. Click the **"+"** icon (top right)
2. Select **"New repository"**

### 3.2 Fill Repository Details

```
Repository name: techwise-portfolio
Description: My professional portfolio
Public: ✅ (checked)
Initialize with README: ❌ (unchecked)
```

### 3.3 Create

Click **"Create repository"** button

### 3.4 Copy Repository URL

You'll see a URL like:
```
https://github.com/YOUR_USERNAME/techwise-portfolio.git
```

**Keep this page open!** You'll need this URL.

---

## 🔰 STEP 4: Push Code to GitHub

### 4.1 Initialize Git (In Your Terminal)

```bash
git init
```

✅ **Expected**: "Initialized empty Git repository"

### 4.2 Add All Files

```bash
git add .
```

✅ **Expected**: No output (that's normal!)

### 4.3 Commit Your Code

```bash
git commit -m "Initial commit - Techwise Portfolio"
```

✅ **Expected**: List of files committed

### 4.4 Add Remote Repository

**Replace YOUR_USERNAME with your actual GitHub username!**

```bash
git remote add origin https://github.com/YOUR_USERNAME/techwise-portfolio.git
```

Example:
```bash
git remote add origin https://github.com/techwise-dev/techwise-portfolio.git
```

### 4.5 Set Main Branch

```bash
git branch -M main
```

### 4.6 Push to GitHub

```bash
git push -u origin main
```

**First time?** You'll be asked to login:
- Enter your GitHub username
- Enter your password (or Personal Access Token)

✅ **Expected**: "Branch 'main' set up to track remote branch"

### 4.7 Verify on GitHub

- Go back to your GitHub repository page
- Refresh the page
- ✅ You should see all your files!

---

## 🔰 STEP 5: Create Vercel Account

### 5.1 Go to Vercel

Open browser → Visit [vercel.com/signup](https://vercel.com/signup)

### 5.2 Sign Up with GitHub

1. Click **"Continue with GitHub"**
2. Click **"Authorize Vercel"**
3. ✅ Account created!

---

## 🔰 STEP 6: Deploy Your Portfolio

### 6.1 Add New Project

1. You'll see Vercel Dashboard
2. Click **"Add New..."** button
3. Select **"Project"**

### 6.2 Import Repository

1. You'll see a list of your GitHub repositories
2. Find **"techwise-portfolio"**
3. Click **"Import"** button next to it

### 6.3 Configure Project

**You'll see a configuration screen:**

```
Project Name: techwise-portfolio
Framework Preset: Next.js (auto-detected)
Root Directory: ./ (leave as is)
Build Command: npm run build (auto-filled)
Output Directory: .next (auto-filled)
Install Command: npm install (auto-filled)
```

**Don't change anything!** Vercel auto-detects everything.

### 6.4 Deploy

1. Scroll down
2. Click the big **"Deploy"** button
3. ⏳ Wait 1-3 minutes

### 6.5 Watch the Build

You'll see:
- ⏳ Building...
- ⏳ Deploying...
- ✅ **Congratulations!** 🎉

---

## 🔰 STEP 7: Visit Your Live Site

### 7.1 Get Your URL

After deployment completes, you'll see:

```
🎉 Congratulations!
Your project is live at:
https://techwise-portfolio.vercel.app
```

### 7.2 Click "Visit"

Click the **"Visit"** button or the URL

### 7.3 Test Your Portfolio

✅ Check all sections load
✅ Click all project links
✅ Test social media links
✅ Try on your phone

---

## 🔰 STEP 8: Share Your Portfolio

### 8.1 Copy Your URL

Your portfolio URL:
```
https://techwise-portfolio.vercel.app
```

### 8.2 Share It

- 📱 Post on Facebook
- 💼 Add to LinkedIn
- 📄 Add to your resume
- 📧 Email to potential employers

---

## 🎉 YOU'RE DONE!

Your portfolio is now live and accessible worldwide! 🌍

---

## 🔄 How to Update Your Portfolio Later

### When You Want to Make Changes:

**Step 1: Edit Your Files**
- Make changes to your code
- Test locally: `npm run dev`

**Step 2: Push to GitHub**
```bash
git add .
git commit -m "Updated projects section"
git push
```

**Step 3: Automatic Deployment**
- Vercel automatically detects the push
- Builds and deploys your changes
- ✅ Live in 1-2 minutes!

---

## 🆘 Common Issues & Solutions

### Issue 1: "git: command not found"

**Solution**: Install Git
- Windows: Download from [git-scm.com](https://git-scm.com)
- Mac: Run `xcode-select --install`

### Issue 2: "Permission denied" when pushing

**Solution**: Use Personal Access Token
1. Go to GitHub → Settings → Developer settings
2. Personal access tokens → Generate new token
3. Use token as password when pushing

### Issue 3: Build fails on Vercel

**Solution**: Check build locally first
```bash
npm install
npm run build
```
Fix any errors, then push again.

### Issue 4: Images not loading

**Solution**: 
- Check `public/gg.jpg` exists
- Verify image paths in code
- Push changes to GitHub

---

## 📞 Need More Help?

### Documentation
- 📖 `DEPLOYMENT_GUIDE.md` - Detailed guide
- ⚡ `QUICK_DEPLOY.md` - Quick reference
- ✅ `PRE_DEPLOYMENT_CHECKLIST.md` - Checklist

### Online Resources
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- GitHub Docs: [docs.github.com](https://docs.github.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

## 🎯 Quick Command Reference

### First Time Deployment
```bash
# 1. Build test
npm run build

# 2. Git setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/techwise-portfolio.git
git branch -M main
git push -u origin main

# 3. Go to vercel.com and import
```

### Future Updates
```bash
# Make changes, then:
git add .
git commit -m "Update description"
git push
# Vercel auto-deploys!
```

---

## ✅ Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` works
- [ ] All personal info updated
- [ ] All project links work
- [ ] Social media links correct
- [ ] Photo uploaded (`public/gg.jpg`)
- [ ] Tested on mobile and desktop

---

## 🎊 Congratulations!

You've successfully deployed your portfolio to the internet!

**Your Live Portfolio**: `https://techwise-portfolio.vercel.app`

Share it with pride! 🚀

---

**Built with ❤️ by Techwise**

Need help? Check the other documentation files or contact Vercel support.
