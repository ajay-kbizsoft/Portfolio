# Portfolio Features

## 🎨 Design Highlights

### AI-Themed Modern Design
- Stunning gradient backgrounds with animated orbs
- Custom grid pattern overlay for futuristic look
- Smooth animations powered by Framer Motion
- Custom scrollbar with gradient styling
- Glass-morphism effects on cards

### Sections

#### 1. **Hero Section**
- Eye-catching animated entrance
- AI-powered badge indicator
- Large gradient heading with "Build The Future" tagline
- Real-time stats display (Projects, Technologies, Experience)
- Pulsing gradient orbs in background
- Animated scroll indicator
- CTA buttons with hover effects

#### 2. **Skills & Expertise**
- 8 skill categories with custom icons
- Beautiful gradient color coding per category
- Responsive grid layout (4 columns on desktop, 2 on tablet, 1 on mobile)
- Animated badge tags for each skill
- Categories include:
  - Frontend Development
  - AI & Machine Learning
  - Backend & Database
  - Cloud & DevOps
  - Mobile Development
  - UI/UX Design
  - Web3 & Blockchain
  - Tools & Workflow

#### 3. **Projects Showcase**
- 6 featured projects with gradient backgrounds
- Hover effects with smooth transitions
- Technology tags for each project
- Live demo and GitHub links
- Responsive 3-column grid (adapts to mobile)
- Projects include AI, analytics, e-commerce, blockchain, and more

#### 4. **Contact Section**
- Working contact form with styled inputs
- Social media links with animated hover effects
- Quick response indicator card
- Email integration ready
- Beautiful gradient icons for each platform

## 🛠 Tech Stack

### Core
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React 19** - Latest React features

### UI Libraries
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **clsx & tailwind-merge** - Dynamic className handling

## 🎯 Key Features

### Animations
- Fade-in on scroll animations
- Hover scale effects
- Button press animations
- Smooth page transitions
- Pulsing gradient backgrounds

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (default), tablet (md), desktop (lg)
- Fluid typography
- Flexible grid layouts

### Component Architecture
- Reusable UI components in `/components/ui`:
  - `Button` - Multi-variant button with animations
  - `Card` - Glass-morphism card component
  - `Badge` - Skill tag component
- Section components in `/components/sections`:
  - `Hero` - Landing section
  - `Skills` - Expertise showcase
  - `Projects` - Portfolio gallery
  - `Contact` - Contact form and social links

### Customization
All content is easily customizable through the section components:
- Update personal info in `Hero.tsx`
- Modify skills in `Skills.tsx`
- Add/edit projects in `Projects.tsx`
- Change contact details in `Contact.tsx`

## 🚀 Getting Started

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

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.ts` to change the color scheme. Current gradients use:
- Blue (`from-blue-400`)
- Purple (`to-purple-400`)
- Pink, Green, Orange, etc. for different sections

### Content
1. **Personal Information**: Edit `components/sections/Hero.tsx`
2. **Skills**: Update the `skillCategories` array in `components/sections/Skills.tsx`
3. **Projects**: Modify the `projects` array in `components/sections/Projects.tsx`
4. **Social Links**: Update the `socialLinks` array in `components/sections/Contact.tsx`

### Fonts
The project uses Inter font from Google Fonts. Change it in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Future Enhancements

Consider adding:
- Blog section with MDX support
- Dark/Light mode toggle
- More interactive animations
- Backend integration for contact form
- Project filtering by technology
- Testimonials section
- Certificate/Awards showcase
- 3D graphics with Three.js or React Three Fiber

## 📄 License

MIT - Feel free to use this template for your own portfolio!
