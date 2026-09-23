# PT. Veritasindo Citra Abadi - Website

Official website for PT. Veritasindo Citra Abadi, a professional electrical contractor and electrical equipment supplier based in Batam, Indonesia.

🌐 **Live Site:** [vca-batam.id](https://vca-batam.id)

---

## 🏢 About

PT. Veritasindo Citra Abadi specializes in:
- ⚡ Transformer Installation (LV & MV)
- 🔌 Electrical Panel Installation (Cubicle LV & MV, Switchgear)
- 🏗️ Electrical Contracting Services
- 📦 Electrical Equipment Supply
- 🔧 Maintenance & Commissioning

---

## 🚀 Technology Stack

- **Framework:** Next.js 16.3.0 (React 19)
- **Styling:** Custom CSS with design tokens
- **Deployment:** Static HTML Export
- **Server:** Caddy Web Server

---

## 📂 Project Structure

```
├── _next/                  # Next.js JavaScript & CSS bundles
├── about-us/               # About Us page assets
├── contact-2/              # Contact page assets
├── gallery/                # Gallery page assets
├── our-projects/           # Projects page & detail pages
├── work/                   # Project photos (add your own)
├── assets/                 # Site assets & videos (add your own)
├── clients/                # Client logos (add your own)
├── index.html              # Homepage
├── about-us.html           # About Us page
├── our-projects.html       # Projects listing
├── gallery.html            # Photo gallery
├── contact-2.html          # Contact page
├── 404.html                # Custom 404 page
└── contact.vcf             # Company vCard
```

---

## ✨ Features

### 🎨 Design
- Modern, professional corporate design
- Dark navy blue with gold accents
- Fully responsive (mobile, tablet, desktop)
- Custom 404 error page

### 📱 Functionality
- Interactive project carousel on homepage
- Photo gallery with lightbox viewer
- Filterable project gallery
- vCard download for quick contact saving
- Dynamic project detail pages
- Service cards with hover effects

### ⚡ Performance
- Pre-rendered static HTML
- Optimized images
- Gzip compression
- Cache-friendly headers

---

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/veritasindo-website.git
cd veritasindo-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

The static export will be generated in the `out/` directory.

---

## 🌐 Deployment

This project is deployed as static HTML on a VPS using Caddy web server.

### VPS Requirements
- **Minimum:** 1 vCPU, 1GB RAM
- **Web Server:** Caddy, Nginx, or Apache
- **SSL:** Automatic via Caddy or Let's Encrypt

### Deployment Steps

1. **Build locally:**
```bash
npm run build
```

2. **Upload to VPS:**
```bash
rsync -avz --progress out/ user@vps:/var/www/veritasindo/
```

3. **Set permissions:**
```bash
sudo chown -R www-data:www-data /var/www/veritasindo
sudo find /var/www/veritasindo -type d -exec chmod 755 {} \;
sudo find /var/www/veritasindo -type f -exec chmod 644 {} \;
```

4. **Configure Caddy** (see Caddyfile example below)

### Caddy Configuration

```caddy
vca-batam.id {
    root * /var/www/veritasindo
    file_server
    try_files {path} {path}.html {path}/index.html /index.html
    
    handle_errors {
        @404 {
            expression {http.error.status_code} == 404
        }
        rewrite @404 /404.html
        file_server
    }
    
    encode gzip
}

www.vca-batam.id {
    redir https://vca-batam.id{uri} permanent
}
```

---

## 📄 Pages

- **Homepage** (`/`) - Company overview with services and project carousel
- **About Us** (`/about-us`) - Company history, vision & mission
- **Our Projects** (`/our-projects`) - Portfolio of completed projects
  - Project Details (`/our-projects/[slug]`)
- **Gallery** (`/gallery`) - Photo gallery with filtering
- **Contact** (`/contact-2`) - Contact form and information
- **404** (`/404`) - Custom error page

---

## 🎨 Design System

### Color Palette
- **Navy:** `#0e355a` (Primary)
- **Navy Dark:** `#071f33`
- **Navy Deep:** `#05121f`
- **Gold:** `#e0a516` (Accent)
- **Gold Soft:** `#f6c754`
- **Cream:** `#f6f2e9` (Background)

### Typography
- **Headings:** Archivo (600, 700)
- **Body:** Inter (400, 500)

---

## 📝 Content Management

### Adding Images
**Note:** Images are not included in this repository to keep it lightweight. To use:

1. Add images to appropriate folders:
   - `public/assets/` - Site images
   - `public/clients/` - Client logos
   - `public/work/` - Project photos
   - `public/gallery/` - Gallery images

2. Rebuild the site:
```bash
npm run build
```

### Adding Projects

Edit `data/work.ts` to add new projects:

```typescript
{
  id: "work-xxx",
  src: "/work/your-image.jpg",
  alt: "Project description",
  caption: "Project caption",
  tags: ["transformer", "installation"],
  projectId: "project-xxx",
  width: 1600,
  height: 1200,
}
```

---

## 🤝 Contributing

This is a private commercial website. For issues or suggestions, contact the development team.

---

## 📧 Contact

**PT. Veritasindo Citra Abadi**
- 📍 Batam, Kepulauan Riau, Indonesia
- 📞 +62 813 6488 8878
- 📧 veritasindocitraabadi@gmail.com
- 🌐 [vca-batam.id](https://vca-batam.id)

---

## 📜 License

© 2026 PT. Veritasindo Citra Abadi. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, modification, or distribution is prohibited.

---

## 🔧 Technical Notes

### Why Static Export?
- **Low VPS requirements** - Runs on 1GB RAM VPS
- **Fast build locally** - Build on powerful Mac, upload static files
- **Better performance** - Pre-rendered HTML loads instantly
- **Easy deployment** - No Node.js runtime needed on server

### Browser Support
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built with ❤️ for Indonesian electrical industry**
