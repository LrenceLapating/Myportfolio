# 🚀 Complete Vercel Deployment Guide

This guide will walk you through deploying your Techwise portfolio to Vercel step-by-step.

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ A GitHub account ([Sign up here](https://github.com/signup))
- ✅ A Vercel account ([Sign up here](https://vercel.com/signup))
- ✅ Git installed on your computer
- ✅ Your portfolio code ready

---

## 🎯 Method 1: Deploy via GitHub (Recommended)

This is the easiest method with automatic deployments on every code change.

### Step 1: Create a GitHub Repository

1. **Go to GitHub**
   - Visit [github.com](https://github.com)
   - Click the **"+"** icon in the top right
   - Select **"New repository"**

2. **Repository Settings**
   - Repository name: `techwise-portfolio` (or any name you like)
   - Description: "Professional full-stack developer portfolio"
   - Choose **Public** (recommended) or Private
   - **DO NOT** check "Initialize with README" (we already have one)
   - Click **"Create repository"**

3. **Copy the Repository URL**
   - You'll see a URL like: `https://github.com/YOUR_USERNAME/techwise-portfolio.git`
   - Keep this page open

### Step 2: Push Your Code to GitHub

Open your terminal in your portfolio folder and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Techwise Portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/techwise-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

If you get an authentication error, you may need to:
- Use a Personal Access Token instead of password
- Or use GitHub Desktop app

### Step 3: Connect to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click **"Sign Up"** or **"Log In"**
   - Choose **"Continue with GitHub"**
   - Authorize Vercel to access your GitHub account

2. **Import Your Project**
   - Click **"Add New..."** button
   - Select **"Project"**
   - You'll see a list of your GitHub repositories
   - Find **"techwise-portfolio"** (or your repo name)
   - Click **"Import"**

3. **Configure Project**
   - **Project Name**: `techwise-portfolio` (or customize)
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables** (Optional)
   - Skip this for now (not needed for basic portfolio)
   - Click **"Deploy"**

### Step 4: Wait for Deployment

- Vercel will now build and deploy your site
- This takes about 1-3 minutes
- You'll see a progress screen with build logs
- ✅ When done, you'll see **"Congratulations!"**

### Step 5: Visit Your Live Site

- Click **"Visit"** or the domain name shown
- Your portfolio is now live at: `https://techwise-portfolio.vercel.app`
- Share this URL with anyone!

### Step 6: Custom Domain (Optional)

1. **Buy a Domain** (optional)
   - From Namecheap, GoDaddy, or any registrar
   - Example: `techwise.dev`

2. **Add to Vercel**
   - Go to your project in Vercel
   - Click **"Settings"** → **"Domains"**
   - Enter your domain name
   - Follow the DNS configuration instructions

---

## 🎯 Method 2: Deploy via Vercel CLI

For developers who prefer the command line.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

- Choose your login method (GitHub, Email, etc.)
- Follow the authentication steps

### Step 3: Deploy

```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Deploy to preview
vercel

# Or deploy directly to production
vercel --prod
```

### Step 4: Follow Prompts

```
? Set up and deploy "~/portfolio"? [Y/n] Y
? Which scope do you want to deploy to? Your Name
? Link to existing project? [y/N] N
? What's your project's name? techwise-portfolio
? In which directory is your code located? ./
```

### Step 5: Done!

- Your site is now live
- Vercel will show you the URL
- Example: `https://techwise-portfolio.vercel.app`

---

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel automatically:

- ✅ Deploys every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs build checks before deploying
- ✅ Rolls back if build fails

### How to Update Your Site

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update projects section"
   git push
   ```
3. Vercel automatically deploys the changes
4. Check your live site in 1-2 minutes

---

## 🎨 Customizing Your Deployment

### Change Project Name

1. Go to Vercel Dashboard
2. Select your project
3. Click **"Settings"**
4. Under **"General"**, change the name
5. Click **"Save"**

### Add Environment Variables

1. Go to **"Settings"** → **"Environment Variables"**
2. Click **"Add"**
3. Enter key and value
4. Select environments (Production, Preview, Development)
5. Click **"Save"**

### Custom Build Settings

1. Go to **"Settings"** → **"General"**
2. Scroll to **"Build & Development Settings"**
3. Customize:
   - Build Command
   - Output Directory
   - Install Command
   - Development Command

---

## 🐛 Troubleshooting

### Build Failed

**Error**: `Module not found` or `Cannot find module`

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Then push to GitHub again**

---

### Images Not Loading

**Error**: Images show broken icon

**Solution**:
1. Check `public/gg.jpg` exists
2. Verify image paths in code
3. Check `next.config.ts` has correct image domains

---

### Deployment Timeout

**Error**: Build takes too long

**Solution**:
1. Check for large dependencies
2. Remove unused packages
3. Optimize images before uploading

---

### Domain Not Working

**Error**: Custom domain shows error

**Solution**:
1. Wait 24-48 hours for DNS propagation
2. Check DNS settings in your domain registrar
3. Verify nameservers are correct
4. Contact Vercel support if needed

---

## 📊 Monitoring Your Site

### Analytics

1. Go to your project in Vercel
2. Click **"Analytics"** tab
3. View:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### Logs

1. Click **"Deployments"** tab
2. Select a deployment
3. Click **"View Function Logs"**
4. See real-time logs and errors

---

## 🔒 Security Best Practices

1. **Never commit sensitive data**
   - Use environment variables for API keys
   - Add `.env.local` to `.gitignore`

2. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

3. **Enable Vercel Security Headers**
   - Go to Settings → Headers
   - Add security headers

---

## 💡 Pro Tips

### 1. Preview Deployments

- Every branch gets its own preview URL
- Test changes before merging to main
- Share preview links with clients

### 2. Instant Rollback

- Go to **"Deployments"**
- Find a previous working deployment
- Click **"..."** → **"Promote to Production"**

### 3. Performance Monitoring

- Check Lighthouse scores in Vercel
- Monitor Core Web Vitals
- Optimize based on metrics

### 4. Collaboration

- Invite team members to your project
- Set different access levels
- Collaborate on deployments

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

## ✅ Deployment Checklist

Before deploying, make sure:

- [ ] All personal info updated (name, links, email)
- [ ] All project links working
- [ ] Character photo uploaded (`public/gg.jpg`)
- [ ] Build successful locally (`npm run build`)
- [ ] No console errors in browser
- [ ] Tested on mobile and desktop
- [ ] Social media links correct
- [ ] Contact email working
- [ ] All images loading
- [ ] Animations smooth

---

## 🎉 You're Done!

Your portfolio is now live and accessible worldwide!

**Next Steps**:
1. Share your portfolio URL on social media
2. Add it to your resume and LinkedIn
3. Keep updating with new projects
4. Monitor analytics and performance

**Your Live URL**: `https://your-project.vercel.app`

---

**Happy Deploying! 🚀**

Built with ❤️ by Techwise
