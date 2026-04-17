# 📸 Photo Character Portfolio Guide

## 🎉 What You Got

A **stunning portfolio** with:
1. ✨ **Your actual photo** as a living character
2. 💬 **Manga-style speech bubbles** with cloud design
3. ⬅️➡️ **Left-Right alternating movement** per section
4. 🌌 **Animated background** with moving gradients, particles, and lines

## 🎬 How It Works

### Character Movement Pattern

```
Hero Section (0-20% scroll)    → LEFT side  → "Welcome to my portfolio!"
Projects Section (20-40%)      → RIGHT side → "Check out my work!"
About Section (40-70%)         → LEFT side  → "About Me"
Contact Section (70-100%)      → RIGHT side → "Let's Connect!"
```

### Speech Bubble Features

- **Manga-style cloud design** with thick black borders
- **Smooth transitions** when changing sections
- **Alternating position** (left/right of character)
- **Speed lines effect** for manga authenticity
- **Custom messages** per section

## 🎨 Animated Background Features

1. **Moving Gradient Orbs**
   - 3 large colored orbs that float around
   - Blue, purple, and pink themes
   - Smooth 20-25 second animations

2. **Floating Particles**
   - 20 small white particles
   - Random positions and timing
   - Gentle up-down movement

3. **Animated Lines**
   - 5 horizontal lines moving across screen
   - Blue gradient effect
   - Staggered timing for depth

4. **Grid Pattern**
   - Subtle background grid
   - Low opacity for texture
   - Doesn't distract from content

## 🔧 Customization

### Change Speech Bubble Messages

Edit `components/PhotoCharacter.tsx`:

```typescript
const sectionMessages = {
  hero: {
    text: "Your main message",
    subtext: "Your subtitle",
    position: "left",
  },
  projects: {
    text: "Your projects message",
    subtext: "Your subtitle",
    position: "right",
  },
  // ... etc
};
```

### Adjust Character Size

```typescript
// In PhotoCharacter.tsx, find:
<div className="relative w-40 h-40 ...">
// Change to w-48 h-48 for larger, w-32 h-32 for smaller
```

### Change Movement Speed

```typescript
const springConfig = { 
  stiffness: 80,  // Higher = faster (try 100)
  damping: 25,    // Higher = less bounce (try 30)
  restDelta: 0.001 
};
```

### Modify Background Colors

Edit `components/AnimatedBackground.tsx`:

```typescript
// Change orb colors:
background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)"
// Replace rgba values with your colors
```

### Add More Sections

1. Update scroll thresholds in `PhotoCharacter.tsx`:
```typescript
if (latest < 0.15) setCurrentSection("hero");
else if (latest < 0.3) setCurrentSection("projects");
else if (latest < 0.5) setCurrentSection("skills");  // NEW
else if (latest < 0.7) setCurrentSection("about");
else setCurrentSection("contact");
```

2. Add new message:
```typescript
const sectionMessages = {
  // ... existing
  skills: {
    text: "My Skills",
    subtext: "What I can do",
    position: "left",  // or "right"
  },
};
```

3. Update position array:
```typescript
const rawX = useTransform(
  scrollYProgress,
  [0, 0.15, 0.3, 0.5, 0.7, 1],  // Add more points
  [5, 85, 5, 85, 5, 85]          // Left, Right pattern
);
```

## 🎯 Character Features

### Visual Effects

1. **Floating Animation**
   - Gentle up-down movement (15px range)
   - 3-second cycle
   - Continuous loop

2. **Glow Effect**
   - Blue radial gradient
   - Pulsing animation
   - Follows character

3. **Manga Action Lines**
   - 8 rotating lines around character
   - 20-second rotation
   - Subtle blue gradient

4. **Photo Border**
   - Double border (white + black)
   - Manga-style thick outline
   - Circular frame

5. **Shine Effect**
   - Diagonal white gradient
   - Pulsing animation
   - Adds depth

6. **Shadow**
   - Elliptical shadow below
   - Pulsing with float animation
   - Adds realism

## 📝 Speech Bubble Anatomy

```
┌─────────────────────────┐
│  Bold Main Text         │ ← Large, bold heading
│  Smaller subtext        │ ← Description
└─────────────────────────┘
         ▶                  ← Manga-style tail
```

- **Outer border**: 4px black (manga style)
- **Inner border**: 2px white (depth effect)
- **Tail**: Double-layered triangle
- **Speed lines**: 3 lines for motion effect

## 🚀 Performance

- **GPU Accelerated**: All animations use CSS transforms
- **Optimized Images**: Next.js Image component
- **Smooth 60fps**: Spring physics for natural motion
- **Lazy Loading**: Background effects don't block content

## 💡 Tips

1. **Photo Quality**: Use a high-quality, well-lit photo for best results
2. **Background**: Photos with simple backgrounds work best
3. **Crop**: Square crop (1:1 ratio) looks best in circular frame
4. **File Size**: Optimize your image (< 500KB recommended)

## 🎨 Design Principles

✅ **Left-Right Pattern**: Clear visual rhythm  
✅ **Manga Aesthetics**: Authentic comic book style  
✅ **Smooth Transitions**: Spring physics (80 stiffness, 25 damping)  
✅ **Visual Hierarchy**: Character doesn't block content  
✅ **Performance**: GPU-accelerated animations only  

## 🖼️ Replacing Your Photo

1. Replace `public/gg.jpg` with your new photo
2. Keep the filename as `gg.jpg` OR
3. Update the path in `PhotoCharacter.tsx`:
   ```typescript
   <Image src="/your-photo.jpg" ... />
   ```

## 🐛 Troubleshooting

**Photo not showing?**
- Check that `gg.jpg` is in the `public` folder
- Verify the image path in PhotoCharacter.tsx
- Clear browser cache and refresh

**Character moving too fast?**
- Reduce `stiffness` in springConfig (try 60)
- Increase `damping` (try 30)

**Speech bubble cut off on mobile?**
- Reduce bubble width from `w-64` to `w-48`
- Adjust margin (`mr-6` / `ml-6`) to `mr-4` / `ml-4`

**Background too busy?**
- Reduce particle count from 20 to 10
- Increase blur on gradient orbs
- Reduce opacity of grid pattern

---

**Enjoy your stunning manga-style portfolio!** 🎨✨
