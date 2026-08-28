# PT. Veritasindo Citra Abadi - Website

Modern, responsive website for PT. Veritasindo Citra Abadi, an electrical contractor and supplier company based in Batam, Indonesia.

## Tech Stack

- **Framework**: Next.js 16.3.0 (React 19)
- **Styling**: CSS (Custom styling with CSS variables)
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern UI with smooth animations
- ✅ Infinite carousel for project showcase
- ✅ WhatsApp integration for contact form
- ✅ SEO optimized with metadata
- ✅ Fast loading with Next.js Image optimization
- ✅ Auto-playing hero video background

## Pages

- **Home** (`/`) - Hero section, services overview, projects carousel, contact
- **About Us** (`/about-us`) - Company information and values
- **Our Services** (`/our-service`) - Detailed service offerings
- **Projects** (`/our-projects`) - Portfolio of completed projects
- **Gallery** (`/gallery`) - Photo gallery of work
- **Contact** (`/contact-2`) - Contact form with WhatsApp integration

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd js_Github_share
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about-us/          # About page
│   ├── articles/          # Articles (reserved)
│   ├── contact-2/         # Contact page with form
│   ├── gallery/           # Gallery page
│   ├── our-projects/      # Projects page
│   ├── our-service/       # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   └── ProjectCarousel.tsx # Animated project carousel
├── public/               # Static assets
│   ├── assets/          # Images, videos, logos
│   ├── gallery/         # Gallery images
│   └── our-projects/    # Project images
└── package.json         # Dependencies

```

## Key Components

### ProjectCarousel
- Auto-scrolling infinite carousel
- Drag-to-scroll functionality
- Smooth animations with Framer Motion
- Maintains image aspect ratios

### Contact Form
- WhatsApp integration
- Real-time validation
- Character counter
- Mobile-friendly

### Header & Footer
- Responsive navigation
- Social media links
- Contact information
- Sticky header on scroll

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --navy-dark: #071f33;
  --navy-mid: #0e355a;
  --gold-bright: #ffc850;
  --gold-dark: #e0a516;
  --white: #FFFFFF;
  --cream: #eee6d5;
}
```

### Contact Information
Update in:
- `components/Footer.tsx` - Footer contact details
- `app/contact-2/page.tsx` - WhatsApp number constant

### Images
Replace images in `public/assets/`, `public/gallery/`, and `public/our-projects/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 PT. Veritasindo Citra Abadi. All rights reserved.

## Contact

- **Website**: https://veritasindocitraabadi.co.id/
- **Phone**: 0778-5515083
- **WhatsApp**: +62 812-7528-236, +62 811-7570-898
- **Email**: veritasindo_marketing@yahoo.com
- **Location**: Ruko Nicco Residence Blok A2 No.06, Pasir Putih, Kota Batam
