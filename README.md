# TurnKey Pros Website

A modern, professional website for TurnKey Pros - a property management services company specializing in make-ready solutions, handyman services, and property maintenance across Texas.

## 🎨 Design Philosophy

**"Inviting Efficiency"** - Clean lines, subtle motion, professional typography, and tactile stone/concrete textures used sparingly.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 🎨 Brand Colors

- **Primary Action**: Orange `#F59E0B`
- **Hover State**: Dark Orange `#D97706`
- **Headings**: Slate-900 `#111827`
- **Background**: White `#FFFFFF`

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📋 Features

### Components

- **Navigation**: Sticky header with smooth scrolling, mobile-responsive hamburger menu
- **Hero Section**: Full-screen hero with concrete texture background and animated CTAs
- **Audience Selector**: Split cards targeting Property Managers and Homeowners
- **Services Grid**: 6 service offerings with icon-based cards
- **Trust Section**: Trust signals and professional credentials
- **Coverage Map**: Service areas across Texas (Dallas, Houston, San Antonio)
- **Footer**: Contact information with concrete texture background

### Sections

1. **Hero** - "Less Hassle, More Efficiency"
2. **Audience Split** - Separate value propositions for managers vs homeowners
3. **Services** - 6 core services with clean icons
4. **Trust Signals** - Rapid Response, Professional Team, TurnKey Experience
5. **Coverage** - Service areas with visual map representation
6. **Footer** - Contact info and quick links

## 🎯 Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Subtle Framer Motion animations
- ✅ Clean "low-graphics" professional aesthetic
- ✅ Stone/concrete texture backgrounds
- ✅ Accessible and semantic HTML
- ✅ SEO optimized with proper metadata

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Colors

Edit the CSS variables in [app/globals.css](app/globals.css):

```css
:root {
  --brand-orange: #f59e0b;
  --brand-orange-dark: #d97706;
}
```

### Update Content

Component files are located in [app/components/](app/components/):
- Navigation links and branding
- Hero headlines and CTAs
- Service descriptions
- Contact information

### Add Logo

Place your logo in the `/public` folder and update the Navigation component to use it:

```tsx
<Image src="/logo.png" alt="TurnKey Pros" width={150} height={40} />
```

## 📞 Contact Information

Update contact details in [app/components/Footer.tsx](app/components/Footer.tsx):
- Phone: `(866) 989-6587`
- Email: `hello@turnkeypros.com`

## 🌐 Deployment

Deploy to Vercel (recommended):

```bash
npm run build
```

Or use the Vercel CLI:

```bash
vercel
```

## 📄 License

© 2025 TurnKey Pro Solution. All rights reserved.
