# TurnKey Pros - Project Structure

## 📁 Directory Structure

```
turnkeypros/
├── app/
│   ├── components/
│   │   ├── layout/           # Layout components (Navigation, Footer)
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── sections/         # Page sections (Hero, Services, etc.)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AudienceSelector.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   └── index.ts
│   │   ├── ui/               # Reusable UI components (future)
│   │   └── index.ts          # Main component exports
│   ├── globals.css           # Global styles & Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── README.md
└── STRUCTURE.md              # This file
```

## 🎯 Component Organization

### Layout Components (`/components/layout`)
Components that provide the overall page structure and navigation:
- **Navigation.tsx** - Sticky header with menu and CTA button
- **Footer.tsx** - Footer with contact info and links

### Section Components (`/components/sections`)
Main content sections for the landing page:
- **HeroSection.tsx** - Hero banner with headline and CTAs
- **AudienceSelector.tsx** - Split cards for Property Managers & Homeowners
- **ServicesGrid.tsx** - 6 service offerings grid
- **TrustSection.tsx** - Trust signals & service area coverage map

### UI Components (`/components/ui`)
Reusable UI elements (future additions):
- Buttons
- Cards
- Icons
- Forms

## 📦 Import Patterns

### Standard Import (Current)
```typescript
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
```

### Barrel Import (Using index files)
```typescript
import { Navigation, Footer } from './components/layout';
import { HeroSection, ServicesGrid } from './components/sections';
```

### Global Import
```typescript
import { Navigation, Footer, HeroSection, ServicesGrid } from './components';
```

## 🎨 Styling Structure

### Global Styles (`app/globals.css`)
- Tailwind CSS imports
- CSS custom properties (colors, fonts)
- `.bg-concrete` utility class for texture
- Smooth scrolling

### Component Styles
- Inline Tailwind classes
- Framer Motion animations
- Responsive breakpoints (sm, md, lg)

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 📝 Naming Conventions

- **Files**: PascalCase for components (`HeroSection.tsx`)
- **Folders**: lowercase/kebab-case (`layout`, `sections`)
- **Components**: PascalCase (`HeroSection`)
- **Functions**: camelCase (`handleClick`)
- **CSS Classes**: Tailwind utility classes

## 🚀 Adding New Components

### 1. Create Component File
```bash
# For a new section
touch app/components/sections/NewSection.tsx

# For a new UI component
touch app/components/ui/Button.tsx
```

### 2. Add Export to Index
```typescript
// app/components/sections/index.ts
export { default as NewSection } from './NewSection';
```

### 3. Import in Page
```typescript
import NewSection from './components/sections/NewSection';
```

## 📄 Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page |
| `app/layout.tsx` | Root layout with metadata |
| `app/globals.css` | Global styles and Tailwind config |
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `README.md` | Project overview and setup |
| `STRUCTURE.md` | This file - project structure guide |

## 🔗 Quick Navigation

- [Main Page](app/page.tsx)
- [Layout Components](app/components/layout/)
- [Section Components](app/components/sections/)
- [Global Styles](app/globals.css)
- [README](README.md)
