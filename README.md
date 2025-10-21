# Ōmha - Alta Cocina en Tijuana

A sophisticated, single-page website for Ōmha, a fine dining restaurant in Tijuana featuring Chef Erick Sáenz's haute cuisine.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

- **Elegant Design**: Dark luxury aesthetic inspired by high-end dining experiences
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Performance Optimized**: Fast loading times with lazy-loaded images
- **Accessibility Compliant**: WCAG AA standards with semantic HTML
- **SEO Optimized**: Structured data and meta tags for search engines

## 🎨 Design

The website features a sophisticated color palette:
- **Pure Black** (#000000) - Primary backgrounds
- **Platinum** (#E5E4E2) - Primary text and headlines
- **Metallic Gold** (#C9A961) - Call-to-action buttons and accents
- **Warm Silver** (#C0C0C0) - Body text

Typography combines **Cormorant Garamond** (elegant serif) with **Inter** (clean sans-serif) for a luxurious yet readable experience.

## 📋 Sections

1. **Hero** - Full-screen introduction with background image and call-to-action
2. **Filosofía** - Restaurant's philosophy and culinary approach
3. **Chef** - Biography of Chef Erick Sáenz with credentials
4. **Contacto** - Location, phone, hours, and reservation button
5. **Footer** - Copyright and legal information

## 🚀 Quick Start

### View Locally

1. Clone the repository:
```bash
git clone https://github.com/Asotoj06/Oma.git
cd Oma
```

2. Open `index.html` in your browser or start a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using Live Server (VS Code):**
- Install Live Server extension
- Right-click `index.html` → "Open with Live Server"

3. Navigate to `http://localhost:8000`

## 📁 Project Structure

```
Ōmha/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Smooth scroll & animations
├── images/             # Image assets (add your photos here)
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## 🖼 Images

Currently using stock images from Unsplash. Replace with professional photos:

### Required Images:
1. `images/hero-background.jpg` - Restaurant interior or ambiance (1920px+ wide)
2. `images/dish-1.jpg` - Food photography (1200px+ wide, 3:2 ratio)
3. `images/dish-2.jpg` - Food photography (1200px+ wide, 3:2 ratio)
4. `images/chef-erick-saenz.jpg` - Chef portrait (800px+ wide, 3:4 ratio)

### To Replace Images:

**Hero Background** (styles.css line 259):
```css
background-image: url('../images/hero-background.jpg');
```

**Food Images** (index.html lines 116-123):
```html
<img src="images/dish-1.jpg" alt="..." loading="lazy">
<img src="images/dish-2.jpg" alt="..." loading="lazy">
```

**Chef Portrait** (index.html lines 133-136):
```html
<img src="images/chef-erick-saenz.jpg" alt="..." loading="lazy">
```

## 🛠 Customization

### Update Contact Information

Edit `index.html` (lines 160-185):
- Restaurant address
- Phone number: `664 546 8978`
- Operating hours
- Instagram handle

### Change Colors

Edit CSS variables in `styles.css` (lines 4-17):
```css
:root {
    --black-primary: #000000;
    --platinum: #E5E4E2;
    --metallic-gold: #C9A961;
    /* ... more colors */
}
```

### Adjust Overlay Darkness

Edit `styles.css` (line 277) to adjust hero image overlay:
```css
background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),  /* Top: 0.7 = 70% dark */
    rgba(0, 0, 0, 0.6),  /* Middle */
    rgba(0, 0, 0, 0.8)   /* Bottom */
);
```

## 🌐 Deployment

### Netlify (Recommended)
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Get instant URL: `omha-tijuana.netlify.app`

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch → Deploy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Load time: < 2 seconds
- Lighthouse score: 90+
- Mobile-optimized
- Lazy-loaded images
- Smooth 60fps animations

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Chef

**Chef Erick Sáenz**
- 20 years gastronomy experience
- 8 years in Michelin-starred restaurants
- San Francisco Culinary Academy (honors)
- American Culinary Federation
- Specialization: Haute cuisine with Baja California ingredients

## 📞 Contact

**Ōmha**
- Location: Tijuana, Baja California, México
- Phone: 664 546 8978
- Instagram: @omhatijuana

---

© 2025 Ōmha Tijuana. Todos los derechos reservados.
