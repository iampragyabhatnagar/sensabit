# Dozemate Landing Page

A modern, responsive React landing page for dozemate - bio-sense for smart beds.

## Features

- 🎨 Modern, glossy hero section with image overlay
- 📱 Fully responsive design
- 🎬 Video integration with custom player
- ✨ Smooth animations and transitions
- 🌊 Gradient effects and glassmorphism
- 🎯 Interactive navigation with smooth scrolling.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── dozemate_1.png    # Hero section image
│   └── vdo_3.mp4         # Introduction video
├── src/
│   ├── components/
│   │   ├── Hero.jsx      # Hero section with image overlay
│   │   ├── Navigation.jsx # Navigation bar
│   │   ├── Technology.jsx # Technology section
│   │   ├── Experience.jsx # Experience section with video
│   │   ├── Features.jsx   # Features section
│   │   └── Footer.jsx     # Footer component
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## Technologies Used

- React 18
- Vite
- CSS3 (with animations and gradients)
- Modern ES6+ JavaScript

## Sections

1. **Hero Section** - Full-screen image with glossy text overlay
2. **Technology** - Information about ballistocardiography
3. **Experience** - Video introduction and setup steps
4. **Features** - Personal and Hospital dozemate features
5. **Footer** - Contact information and links

## Customization

You can customize colors, fonts, and styling by modifying the CSS files in the `src/components/` directory. The main color scheme uses cyan/blue gradients (`#00d4ff` to `#5b9fff`).








