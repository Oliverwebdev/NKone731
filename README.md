# 🎤 NKone7.3.1 - Premium Music Experience

<div align="center">

![NKone731 Banner](https://img.shields.io/badge/NKone7.3.1-Premium%20Rap%20Music-ff0000?style=for-the-badge&logo=music&logoColor=white)

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.17.0-0055FF?style=flat-square&logo=framer&logoColor=white)](https://framer.com/motion)
[![Apple Style](https://img.shields.io/badge/Design-Apple%20Inspired-000000?style=flat-square&logo=apple&logoColor=white)](https://apple.com)

**Ein Premium-Webauftritt für Deutschlands aufstrebende Rap-Crew** 🔥

[🌟 Live Demo](https://nkone731.github.io/website) • [📱 Mobile View](https://nkone731.github.io/website) • [🎵 Music](https://youtube.com/@nkone731)

</div>

---

## ✨ **Features**

### 🎯 **Premium Design System**
- **Apple/Samsung-inspiriertes UI** mit Glasmorphismus-Effekten
- **Vollständig responsive** für alle Geräte (Mobile-First)
- **Dark/Light Mode** Support mit automatischer Erkennung
- **Custom CSS Variables** für konsistente Gestaltung
- **Micro-Interactions** und flüssige Animationen

### 🎵 **Music Integration**
- **YouTube-Integration** mit direkten Video-Links
- **High-Quality Thumbnails** mit Fallback-System
- **Interactive Cards** mit Hover-Effekten
- **Track Statistics** und Performance-Metriken
- **Mobile-optimierte** Wiedergabe-Controls

### 👥 **Crew Showcase**
- **3 detaillierte Artist-Profile** mit individuellen Designs
- **Social Media Integration** (Instagram, TikTok, YouTube)
- **Gradient-Avatars** mit personalisierten Initialen
- **Hover-Biografien** mit erweiterten Informationen
- **Specialties & Stats** für jeden Künstler

### 🚀 **Performance & SEO**
- **Vite-powered** für blitzschnelle Entwicklung
- **Code-Splitting** und optimierte Bundle-Größe
- **Lazy Loading** für Bilder und Komponenten
- **SEO-optimiert** mit Meta-Tags
- **Web Vitals** optimiert

---

## 🛠️ **Tech Stack**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.0 | UI Framework |
| **Vite** | 6.3.5 | Build Tool & Dev Server |
| **Framer Motion** | 12.17.0 | Animationen & Transitions |
| **React Intersection Observer** | 9.16.0 | Scroll-basierte Animationen |
| **ESLint** | 9.25.0 | Code Quality |
| **CSS Variables** | - | Design System |

---

## 🚀 **Quick Start**

### Voraussetzungen
- **Node.js** 18+ 
- **npm** oder **yarn**
- Moderner Browser mit ES6+ Support

### Installation

```bash
# Repository klonen
git clone https://github.com/nkone731/website.git
cd website

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

### Development Commands

```bash
# 🔧 Development Server (Hot Reload)
npm run dev

# 🏗️ Production Build
npm run build

# 👀 Build Preview
npm run preview

# 🧹 Code Linting
npm run lint

# 🚀 Deploy zu GitHub Pages
npm run deploy
```

---

## 📱 **Responsive Breakpoints**

```css
/* Mobile First Approach */
Mobile:     320px - 768px   (1 Column Layout)
Tablet:     768px - 1024px  (2 Column Layout) 
Desktop:    1024px - 1400px (3 Column Layout)
Large:      1400px+         (4 Column Layout)
```

---

## 🎨 **Design System**

### Color Palette
```css
--primary-red:      #ff0000  /* Brand Primary */
--primary-red-light: #ff6b6b  /* Hover States */
--accent-orange:    #ff6400  /* Crew Section */
--accent-green:     #64ff64  /* Success States */
--accent-blue:      #6464ff  /* Info States */
```

### Typography
```css
Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI'
Headings:    900-300 Weight, Clamp Responsive
Body:        400 Weight, 1.6 Line Height
```

### Spacing System
```css
--space-xs:  4px   --space-sm:  8px
--space-md:  16px  --space-lg:  24px
--space-xl:  32px  --space-2xl: 48px
--space-3xl: 64px  --space-4xl: 96px
```

---

## 📁 **Projekt Struktur**

```
src/
├── components/          # React Komponenten
│   ├── Music.jsx       # YouTube Integration
│   ├── Crew.jsx        # Artist Profiles
│   ├── Footer.jsx      # Social Links & Credits
│   ├── Hero.jsx        # Landing Section
│   ├── Navbar.jsx      # Navigation
│   ├── Contact.jsx     # Kontakt Form
│   └── Manifesto.jsx   # About Section
├── styles/             # Global Styles
│   ├── global.css      # Utility Classes
│   └── variables.css   # CSS Custom Properties
├── hooks/              # Custom React Hooks
│   └── useParallax.js  # Scroll Effects
├── assets/             # Static Assets
└── index.css           # Global CSS Reset
```

---

## 🌟 **Unique Features**

### 🎭 **Glassmorphismus UI**
- Backdrop-Filter Effekte
- Transparente Overlays
- Subtle Border Gradients
- Layered Depth System

### ⚡ **Performance Optimiert**
- **Bundle Size:** 41.17 kB CSS, 364.69 kB JS (gzipped)
- **First Contentful Paint:** < 1.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3s

### 🎮 **Interactive Elements**
- 3D Card Transformationen
- Parallax Scroll Effekte
- Magnetic Button Hovers
- Smooth Page Transitions

### 📱 **Mobile Excellence**
- Touch-optimierte Interaktionen
- Swipe-Gesten Support
- Native App-like Feel
- Optimierte Font Sizes

---

## 🎵 **Music Integration**

Die Website integriert nahtlos mit YouTube für eine optimale Music Experience:

```javascript
// YouTube Thumbnail API
const getThumbnailUrl = (videoId) => ({
  maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  hq: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  mq: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
});

// Direkter Link zu YouTube
const handleVideoClick = (url) => {
  window.open(url, '_blank');
};
```

---

## 👥 **Crew Konfiguration**

Einfache Anpassung der Bandmitglieder in `src/components/Crew.jsx`:

```javascript
const members = [
  {
    name: 'Filla23',
    role: 'MC & Producer',
    instagram: 'filla23',
    tiktok: 'filla23',
    youtube: 'nkone731',
    specialty: 'Lyricism & Production'
  }
  // Weitere Members...
];
```

---

## 🚀 **Deployment**

### GitHub Pages (Automatisch)
```bash
npm run deploy
```

### Vercel
```bash
npx vercel --prod
```

### Netlify
```bash
npm run build
# Drag & Drop `dist` folder zu Netlify
```

---

## 🤝 **Contributing**

Contributions sind willkommen! Bitte folge diesen Schritten:

1. **Fork** das Repository
2. **Create** einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** deine Changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Open** einen Pull Request

### Code Style
- **ESLint** Konfiguration beachten
- **Prettier** für Formatierung
- **Conventional Commits** für Git Messages
- **Mobile-First** Responsive Design

---

## 📞 **Contact & Support**

<div align="center">

**NKone7.3.1 Team**

[![Instagram](https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/nkone731)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white)](https://tiktok.com/@nkone731)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@nkone731)

**Entwickelt mit ❤️ von Premium Web Developer**

</div>

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **Apple** für Design-Inspiration
- **Samsung** für UI-Patterns  
- **Framer** für Motion Library
- **Vercel** für Deployment Platform
- **React Team** für das Framework

---

<div align="center">

**Made with 🔥 for the German Rap Scene**

*NKone7.3.1 - Premium Music, Premium Web Presence*

</div>