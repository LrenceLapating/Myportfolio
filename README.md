# Techwise Portfolio

A **professional full-stack developer portfolio** showcasing real-world projects with stunning animations and modern web technologies.

## ✨ Features

🎨 **Modern Design** - Clean, professional interface with smooth animations
🎭 **Interactive Elements** - Animated character with manga-style speech bubbles
🌌 **Animated Background** - Dynamic gradient orbs and floating particles
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
♿ **Accessible** - WCAG compliant with keyboard navigation
⚡ **Performance Optimized** - Fast load times and smooth 60fps animations

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 18** - Modern React with hooks
- **Framer Motion** - Production-ready animations
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

## � Real Projects Featured

1. **EUNOIA** - Mental health assessment platform with AI
2. **NURSESCRIPT** - Nursing documentation skills evaluation
3. **BEING SUITES** - Hospitality landing page
4. **ASA KA GO** - Jeepney navigation system

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects showcase
│   ├── Services.tsx        # Services offered
│   ├── TechStack.tsx       # Technologies
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact section
│   ├── Navigation.tsx      # Navigation bar
│   ├── PhotoCharacter.tsx  # Animated character
│   ├── AnimatedBackground.tsx
│   └── ScrollProgress.tsx
├── public/
│   └── gg.jpg             # Character photo
└── package.json
```

## 🎨 Customization

### Update Your Information

**1. Personal Info** (`components/Hero.tsx`):
```typescript
// Change name and title
Hello, I'm Techwise
Full Stack Developer
```

**2. Projects** (`components/Projects.tsx`):
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "image-url",
    tags: ["Tech", "Stack"],
    live: "project-url",
  },
];
```

**3. Social Links** (`components/Hero.tsx` & `components/Contact.tsx`):
```typescript
{ icon: Github, href: "your-github-url" }
{ icon: Facebook, href: "your-facebook-url" }
```

**4. Character Photo** (`public/gg.jpg`):
- Replace with your own photo
- Recommended: Square image, 500x500px minimum

## 🌐 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In" with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** 🎉
   - Your site will be live at `your-project.vercel.app`
   - Automatic deployments on every push

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Pre-Deployment Checklist

- [x] All personal information updated
- [x] Project links working
- [x] Social media links correct
- [x] Character photo uploaded
- [x] Build successful (`npm run build`)
- [x] No console errors
- [x] Responsive on all devices
- [x] Fast load times
- [x] SEO optimized

## 🔧 Environment Variables

No environment variables needed for basic deployment!

If you add features that need API keys:

1. Create `.env.local` file:
   ```env
   NEXT_PUBLIC_API_KEY=your_key_here
   ```

2. Add to Vercel:
   - Go to Project Settings
   - Navigate to Environment Variables
   - Add your variables

## 🚀 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Image Not Loading

- Check image path in `public/` folder
- Verify image format (jpg, png, webp)
- Check Next.js Image configuration

### Deployment Issues

- Ensure `package.json` has correct scripts
- Check Node.js version (18+)
- Verify all dependencies installed

## 📄 License

MIT License - Free to use for personal and commercial projects

## 🙏 Credits

- **Design System**: ui-ux-pro-max
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Framework**: Next.js

---

**Built with ❤️ by Techwise**

Need help? Open an issue or contact me through the portfolio!
