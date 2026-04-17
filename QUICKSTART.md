# Quick Start Guide

Get your stunning portfolio running in 3 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15 (React framework)
- Framer Motion (animations)
- Tailwind CSS (styling)
- Lucide React (icons)
- TypeScript (type safety)

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Customize Your Portfolio

### Update Personal Information

**Hero Section** (`components/Hero.tsx`):
```typescript
// Change your name and title
<h1>Your Name</h1>
<p>Your professional title and description</p>
```

**Projects** (`components/Projects.tsx`):
```typescript
// Replace with your actual projects
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "your-image-url",
    tags: ["Tech", "Stack"],
    github: "github-url",
    live: "live-demo-url",
  },
  // Add more projects...
];
```

**Contact** (`components/Contact.tsx`):
```typescript
// Update your social links
const socialLinks = [
  { icon: Github, href: "your-github-url", label: "GitHub" },
  { icon: Linkedin, href: "your-linkedin-url", label: "LinkedIn" },
  // Update email
  href="mailto:your-email@example.com"
];
```

## Step 4: Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live in ~2 minutes.

## Design System Reference

### Colors
```css
Primary: #18181B (Dark)
Accent: #2563EB (Blue)
Background: #FAFAFA (Light Gray)
```

### Typography
- Headings: Archivo (Bold, Clean)
- Body: Space Grotesk (Modern, Readable)

### Breakpoints
- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px
- Large: 1440px

## Tips for Best Results

1. **Images**: Use high-quality project screenshots (1200x800px recommended)
2. **Projects**: Showcase 4-6 of your best work
3. **About**: Keep it concise and highlight your unique skills
4. **Contact**: Make it easy to reach you

## Need Help?

- Check `README.md` for detailed documentation
- Review component files for inline comments
- All animations use Framer Motion - see [framer.com/motion](https://www.framer.com/motion/)

Happy building! 🚀
