# Mellou Next.js Application

This is a Next.js version of the Mellou pudding website, converted from the original HTML/CSS/JS application while preserving the exact design and functionality.

## Features

- ✅ **Exact Design Preservation**: All visual elements, animations, and interactions match the original
- ✅ **Static Data**: All content is stored in centralized data files
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ✅ **ScrollReveal Animations**: Smooth scroll-triggered animations
- ✅ **Interactive Components**: Accordions, mobile menu, contact form
- ✅ **Next.js App Router**: Modern Next.js 13 architecture
- ✅ **Component-Based**: Modular, reusable components

## Project Structure

```
mellou-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with fonts and scripts
│   │   ├── page.js             # Main page component
│   │   └── globals.css         # Global styles (from original style.css)
│   ├── components/
│   │   ├── Preloader.js        # Loading animation
│   │   ├── Header.js           # Navigation header
│   │   ├── HeroSection.js      # Hero section with CTA
│   │   ├── AboutSection.js     # About section with accordion
│   │   ├── ProductsSection.js  # Products showcase
│   │   ├── FAQSection.js       # FAQ accordion
│   │   ├── ContactSection.js   # Contact form and info
│   │   ├── Footer.js           # Footer component
│   │   ├── BackToTop.js        # Back to top button
│   │   └── ScrollRevealInit.js # ScrollReveal initialization
│   └── data/
│       └── staticData.js       # All static content
└── public/
    ├── img/                    # Images from original
    ├── assets/                 # Assets from original
    ├── css/                    # Bootstrap CSS
    └── js/                     # Bootstrap & Popper JS
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher (Node 18+ recommended for latest Next.js)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd mellou-nextjs
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

### Static Export

To generate a static HTML export:

```bash
npm run build
```

The static files will be in the `.next` directory.

## Components Overview

### Preloader
- Ice cream cone animation
- Fades out after page load
- Matches original design exactly

### Header
- Responsive navigation
- Mobile hamburger menu
- Instagram social link
- Smooth scroll navigation

### HeroSection
- Product showcase images
- "Where to Buy" CTA button
- Fully responsive layout

### AboutSection
- Wave background images
- "Why Mellou" content
- Interactive accordion for features

### ProductsSection
- Signature product display
- Flavor grid (4 flavors)
- Scroll reveal animations

### FAQSection
- 9 frequently asked questions
- Accordion functionality
- Clean, accessible design

### ContactSection
- Contact information display
- Working contact form
- Social media links
- Form validation

### Footer
- "The End" image
- Scroll reveal animation

## Static Data

All content is centralized in `src/data/staticData.js`:

- Navigation links
- About section features
- FAQ items
- Contact information
- Product information

To update content, simply edit this file.

## Styling

The application uses the original `style.css` file, now located at `src/app/globals.css`. All styles are preserved exactly as they were, including:

- Custom animations
- Responsive breakpoints
- Color scheme
- Typography
- Hover effects

## Scripts and Libraries

- **Next.js 13.5.6**: React framework
- **React 18**: UI library
- **ScrollReveal**: Scroll animations
- **Bootstrap 5**: Grid system and utilities
- **Font Awesome 6.4.2**: Icons
- **Google Fonts**: Poppins, Heebo, Cedarville Cursive

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- The application uses Next.js 13 with the App Router
- All images are optimized using Next.js Image component
- ScrollReveal is loaded via CDN for compatibility
- Bootstrap is included for grid system compatibility

## Original vs Next.js

The Next.js version maintains 100% design fidelity with the original HTML version while providing:

- Better performance through React optimization
- Component reusability
- Easier content management through static data
- Modern development experience
- Better SEO capabilities
- Improved code organization

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Node Version Issues

If you encounter Node version warnings, upgrade to Node 18 or higher:

```bash
nvm install 18
nvm use 18
```

## License

This project maintains the same license as the original Mellou website.

## Support

For issues or questions, please contact the development team.
