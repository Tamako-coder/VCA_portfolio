# PT. Veritasindo Citra Abadi - Website Summary

## Project Overview
Corporate website for PT. Veritasindo Citra Abadi, an electrical contractor and supplier based in Batam, Indonesia. The company specializes in transformer installation, cubicle LV & MV, electrical contracting, and equipment procurement.

## Technology Stack

### Framework & Runtime
- **Next.js**: 16.3.0 (with Turbopack)
- **React**: 19.2.8
- **TypeScript**: 5.x
- **Node.js**: 20.x

### Styling
- **Tailwind CSS**: 4.x
- **Custom CSS**: `app/globals.css` with CSS custom properties
- **Design System**: Custom tonal palette with navy/cream/gold color scheme

### Animation & Interaction
- **Framer Motion**: 13.1.1 (carousel animations, scroll effects)
- **Motion Plus**: Additional animation utilities

### Build Tools
- **Turbopack**: Next.js 16 default bundler
- **PostCSS**: 4.x with Tailwind
- **ESLint**: 9.x with Next.js config

## Project Structure

```
verita-nextjs/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── about-us/                 # About Us page
│   ├── our-service/              # Services page
│   ├── our-projects/             # Projects page
│   ├── gallery/                  # Gallery page
│   └── contact-2/                # Contact page
├── components/                   # React components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Site footer
│   ├── ClientCarousel.tsx        # Client logos carousel
│   ├── ProjectCarousel.tsx       # Project images carousel
│   ├── SummaryStats.tsx          # Statistics cards
│   └── Icons.tsx                 # SVG icon components
├── public/                       # Static assets
│   ├── assets/                   # General images
│   ├── clients/                  # Client logos
│   ├── gallery/                  # Gallery images
│   └── our-projects/             # Project images
├── package.json                  # Dependencies
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── .npmrc                        # NPM configuration
```

## Pages & Routes

### 1. Home Page (`/`)
- **Hero Section**: Company introduction with CTA buttons
- **Summary Stats**: 4 key statistics (years, projects, clients, satisfaction)
- **Services Overview**: 4 main service offerings
- **Client Carousel**: Auto-scrolling client logos (13 clients)
- **Project Carousel**: Auto-scrolling project images (9 images)
- **Contact CTA**: Quick contact section with vCard and WhatsApp

### 2. About Us (`/about-us`)
- **Page Hero**: Company tagline and description
- **Company Profile**: History, capabilities, and values
- **Vision & Mission**: 3-card layout with icons
  - Visi (Vision)
  - Misi (Mission)
  - Nilai (Values)

### 3. Services (`/our-service`)
- **Page Hero**: Service overview
- **Service Cards**: 4 main services
  - Jasa Pemasangan Trafo (Transformer Installation)
  - Kontraktor (Electrical Contracting)
  - Pengadaan Barang (Equipment Procurement)
  - Pekerjaan Jasa (Service Work)
- **Advantages**: 3 value propositions
  - Cepat (Fast)
  - Tanggap (Responsive)
  - Penuh Tanggung Jawab (Responsible)

### 4. Projects (`/our-projects`)
- **Page Hero**: Project portfolio introduction
- **Project Gallery**: Grid layout of 6 project images
- **CTA Button**: Link to full gallery

### 5. Gallery (`/gallery`)
- **Page Hero**: Photo documentation introduction
- **Gallery Grid**: 4-column responsive grid of project photos
- **Image Optimization**: Next.js Image component with lazy loading

### 6. Contact (`/contact-2`)
- **Contact Form**: WhatsApp integration
  - Name field
  - Phone field (formatted: +62)
  - Message textarea
  - Direct WhatsApp redirect (no popup)
- **Contact Information**: Office address, phone, WhatsApp, email

## Key Components

### Header (Navigation)
- **Logo**: PT. Veritasindo Citra Abadi branding
- **Desktop Menu**: Horizontal navigation
- **Mobile Menu**: Hamburger with slide-out panel
- **Features**:
  - Active route highlighting
  - Smooth close-before-navigate on mobile
  - Escape key and click-outside close
  - Body scroll lock when open

### Footer
- **Brand Section**: Logo and tagline
- **Articles**: Blog/article links
- **Contact Info**: Full contact details
- **Social Media**: Instagram, Facebook, LinkedIn, YouTube
- **Copyright**: Legal text

### ClientCarousel
- **Auto-scroll**: Infinite horizontal scroll
- **Drag Support**: Touch/mouse interaction
- **Client Logos**: 13 company logos
- **Light Background**: Original brand colors displayed

### ProjectCarousel
- **Auto-scroll**: Continuous animation
- **Drag Support**: Touch/mouse interaction
- **Project Images**: 9 project photos
- **Mobile Optimized**: Single centered image with peek effect

### SummaryStats
- **4 Statistics Cards**:
  - Years of operation
  - Completed projects
  - Satisfied clients
  - Client satisfaction rate
- **Mobile Layout**: 2×2 grid

### Icons
- **Custom SVG Components**:
  - TargetIcon (Vision)
  - RocketIcon (Mission)
  - ShieldIcon (Values)
  - ZapIcon (Speed)
  - HandshakeIcon (Trust)
- **Consistent Styling**: Gold color, 30px size

## Styling & Design

### Color Palette
```css
--navy-deep: #05070C
--navy-dark: #0A0D12
--navy: #0F131C
--navy-mid: #161D2B
--navy-light: #1E2636
--cream: #EEE6D5
--gold: #D4AF37
--white: #FFFFFF
```

### Typography
- **Headings**: Responsive clamp() sizing
- **Body**: 16px base with 1.6 line-height
- **Eyebrow**: Small caps, gold color, letter-spacing

### Layout Patterns
- **Grid-first**: CSS Grid for page structure
- **Responsive Breakpoints**:
  - Desktop: 960px+
  - Tablet: 620px - 960px
  - Mobile: ≤620px
  - Narrow: ≤360px

### Mobile Optimizations
- **Compact Spacing**: Reduced padding and gaps
- **2-Column Grids**: Vision cards, service cards, contact cards
- **Single-Column**: Hero sections, about content
- **Touch Targets**: Minimum 44px for buttons
- **Responsive Typography**: clamp() for fluid scaling

## Assets

### Images
- **Project Images**: 9 WebP images in `/public/our-projects/`
- **Gallery Images**: 7 WebP images in `/public/gallery/`
- **Client Logos**: 13 PNG images in `/public/clients/`
- **Portfolio Assets**: 2 WebP images in `/public/assets/`

### Optimization
- **Next.js Image**: Automatic optimization and lazy loading
- **WebP Format**: Modern image compression
- **Responsive Sizes**: Multiple breakpoint support
- **Lazy Loading**: Below-fold images deferred

## Contact Information

### Office
Komplek Ruko Taman Niaga Sekupang Blok B No.3  
Sekupang, Batam 29422  
Kepulauan Riau, Indonesia

### Contact
- **Phone**: 0778-321999
- **WhatsApp**: 
  - 0812-7018-4888
  - 0812-7697-4688
- **Email**: veritasindo.id@gmail.com

### Social Media
- Instagram: @veritasindo
- Facebook: PT. Veritasindo Citra Abadi
- LinkedIn: PT. Veritasindo Citra Abadi
- YouTube: PT. Veritasindo Citra Abadi

## Features

### WhatsApp Integration
- Direct message sending via WhatsApp Business
- Pre-filled message template
- Phone number formatting (+62)
- Same-tab navigation (no popup blocker issues)

### vCard Download
- Downloadable contact card
- All company contact information
- Works on mobile and desktop

### SEO Optimization
- Metadata on every page
- Descriptive titles and descriptions
- Semantic HTML structure
- Alt text on all images

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all controls
- Screen reader friendly
- Reduced motion support

### Performance
- Static page generation (SSG)
- Image optimization
- Code splitting
- Turbopack for fast builds
- Minimal JavaScript

## Development

### Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Configuration
- **next.config.ts**: `allowedDevOrigins: ['https://claude.ai']`
- **.npmrc**: npm configuration
- **tsconfig.json**: Strict TypeScript settings
- **eslint.config.mjs**: Next.js ESLint rules

### Environment
- **No environment variables required**
- **No API keys needed**
- **Static site generation**
- **Client-side only interactions**

## Deployment

### Requirements
- Node.js 20.x or higher
- npm or compatible package manager
- Static hosting or Next.js hosting (Vercel, Netlify)

### Build Output
- 7 static routes prerendered
- Optimized production bundle
- All assets automatically optimized

### Vercel Deployment
Ready for zero-configuration deployment on Vercel with automatic SSL, CDN, and Next.js optimizations.

## Business Information

### Company
PT. Veritasindo Citra Abadi (2024)

### Industry
Electrical contracting, transformer installation, equipment supply

### Services
1. Transformer and cubicle installation (LV & MV)
2. Electrical contracting and infrastructure
3. Equipment procurement and supply
4. Specialized electrical services

### Values
- **Cepat** (Fast): Quick response and efficient mobilization
- **Tanggap** (Responsive): Expert solutions for project challenges
- **Penuh Tanggung Jawab** (Responsible): Professional execution with safety standards

### Target Market
- Private companies
- Government projects
- Industrial facilities
- Commercial developments

## Recent Updates

### Mobile Responsive Optimization
- Comprehensive mobile layout improvements (≤640px)
- 2-column vision card grids on About and Services pages
- Optimized contact section with strategic card layout
- Compact footer with reduced vertical spacing
- Centered carousel with edge peek effect
- Touch-optimized button layouts

### Navigation Enhancements
- Fixed hamburger menu close-before-navigate behavior
- Added escape key and click-outside close
- Improved mobile menu accessibility

### Contact Form Updates
- Removed popup blocker issues
- Direct WhatsApp navigation
- Improved phone number formatting

### Visual Improvements
- Replaced emoji icons with professional SVG components
- Updated client logo display (original colors)
- Optimized carousel edge fades
- Improved mobile typography scaling

---

**Last Updated**: August 29, 2026  
**Version**: 0.1.0  
**Status**: Production Ready
