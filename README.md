# Surya Adhikari - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS featuring a glassmorphism design aesthetic with a forest/greenery theme.

## Features

- **Modern Glass Design**: Sleek glassmorphism UI with smooth transitions
- **Forest Theme**: Emerald and green color palette reflecting forestry expertise
- **Fully Responsive**: Optimized for all device sizes
- **Clean & Minimal**: Focused content without clutter
- **Smooth Navigation**: Fixed header with smooth scrolling
- **Professional Sections**:
  - Hero section with profile photo and call-to-action
  - About with key highlights
  - Experience timeline
  - Skills categorized by domain
  - Publications & Certifications
  - Contact form with real-time notifications (via ntfy.sh)

## Technologies

- **React 18.2.0** - Frontend framework
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
surya-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### Colors

The color scheme uses a forest-inspired theme with emerald and green accents throughout. The gradient background is defined in `src/index.css` with emerald-900 and green-950 tones. Modify the Tailwind classes to change colors.

### Content

Update the content in each component file under `src/components/` to reflect your personal information.

### Glass Effect

The glassmorphism effect is defined in `src/index.css` under the `.glass` class. Adjust backdrop blur and opacity to customize the effect.

## License

All rights reserved © 2025 Surya Adhikari

## Contact

- **Location**: Conway, Arkansas, USA
- **LinkedIn**: [Connect on LinkedIn](https://www.linkedin.com/in/surya-adhikari)
- **Position**: Senior Carbon Analyst at NativState

