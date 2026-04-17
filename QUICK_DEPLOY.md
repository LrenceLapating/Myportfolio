# ⚡ Quick Deploy to Vercel

## 🚀 5-Minute Deployment

### Option A: GitHub + Vercel (Easiest)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 2. Go to vercel.com
# 3. Click "Import Project"
# 4. Select your GitHub repo
# 5. Click "Deploy"
# ✅ Done!
```

### Option B: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# ✅ Done!
```

---

## 📝 Before You Deploy

Make sure you've updated:

- [ ] Your name in `components/Hero.tsx`
- [ ] Your projects in `components/Projects.tsx`
- [ ] Your social links in `components/Hero.tsx` and `components/Contact.tsx`
- [ ] Your photo in `public/gg.jpg`
- [ ] Your email in `components/Contact.tsx`

---

## 🔗 Important Links

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub**: [github.com](https://github.com)
- **Full Guide**: See `DEPLOYMENT_GUIDE.md`

---

## 🆘 Quick Fixes

### Build Failed?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Need to Update?
```bash
git add .
git commit -m "Update"
git push
# Vercel auto-deploys!
```

### Rollback?
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find previous version
4. Click "Promote to Production"

---

## 🎯 Your Live URL

After deployment, your site will be at:

`https://your-project-name.vercel.app`

**Share it everywhere!** 🎉

---

Need detailed help? Check `DEPLOYMENT_GUIDE.md`
