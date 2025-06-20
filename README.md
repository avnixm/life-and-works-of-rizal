# 📚 Life and Works of Dr. José Rizal

<div align="center">
  <img src="public/jose-pic.svg" alt="Dr. José Rizal" width="200" height="200" style="border-radius: 50%; margin: 20px 0;">
  
  **An Interactive Educational Platform**
  
  *Explore the life, works, and enduring legacy of the Philippines' national hero*
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-teal?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 🌟 About

This comprehensive web application serves as an educational resource dedicated to Dr. José Rizal (1861-1896), the national hero of the Philippines. Through an intuitive and beautifully designed interface, users can explore Rizal's extraordinary life journey, literary masterpieces, and lasting impact on Philippine history and culture.

> *"The youth is the hope of our future."* - Dr. José Rizal

## ✨ Features

> **Latest Updates (2025)**: 
> - **Typography Enhancement**: José Rizal's name now features elegant Allura script font on the landing page
> - **Cost Analysis Integration**: Major works section includes comprehensive historical cost analysis with modern PHP equivalents for Noli Me Tangere and El Filibusterismo
> - **Design Consistency**: Complete UI/UX overhaul with unified amber/vintage theme across all components
> - **Spanish Colonial Taxation**: Added detailed taxation system coverage in 19th Century Philippines section
> - **Enhanced Resources**: Redesigned External Resources Library with improved academic sources and modern styling
> - **Mobile Optimization**: Improved responsive design with better mobile readability and navigation
> - **Accessibility Improvements**: Increased font sizes following web accessibility guidelines (16-18px desktop, 18-20px mobile)

### 📖 **Comprehensive Biography Sections**
- **Early Life**: Discover Rizal's childhood, family background, and formative years with detailed genealogy
- **Education**: Follow his academic journey from Ateneo to European universities with curriculum details
- **19th Century Philippines**: Explore Spanish colonial rule, social stratification, church power, education system, economic conditions, and comprehensive taxation system
- **Travels**: Journey through his European, Asian, and American experiences with cultural insights
- **Major Works**: Deep dive into Noli Me Tangere, El Filibusterismo with publication costs, modern value analysis, and detailed character studies
- **Martyrdom**: Understand his trial, final days, execution, and lasting legacy with legal analysis

### 🎯 **Interactive Learning**
- **Quiz System**: Test your knowledge with interactive quizzes featuring floating action button navigation
- **External Resources Library**: Searchable collection of official sources, government databases, and academic materials
- **Cost Analysis Tools**: Historical cost comparisons with modern PHP equivalents and inflation calculations
- **Mobile-Responsive Design**: Seamless experience across all devices with optimized mobile layouts
- **Rich Content Structure**: Detailed JSON-based content system with academic source verification

### 🎨 **Modern UI/UX**
- **Vintage Academic Aesthetic**: Consistent amber/brown color scheme with translucent overlays
- **Typography Excellence**: Allura script font for José Rizal's name, optimized readability fonts throughout
- **Responsive Navigation**: Adaptive navbar that switches to mobile hamburger menu when needed
- **Accessibility Compliant**: WCAG-standard font sizes (16-18px desktop, 18-20px mobile)
- **Floating UI Elements**: Contextual quiz button that appears on content pages only
- **Smooth Interactions**: Hover effects, transitions, and visual feedback throughout
- **Mobile-First Design**: Optimized layouts for mobile devices with enhanced touch interfaces

### ⚖️ **Rizal Law Integration**
- **Legal Compliance**: Educational content aligned with Republic Act 1425 (Rizal Law)
- **Academic Standards**: Comprehensive coverage suitable for university requirements
- **Source Verification**: All content verified against authoritative academic sources
- **Research Methodology**: Transparent source hierarchy and verification processes

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/life-and-works-of-rizal.git
   cd life-and-works-of-rizal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action!

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality |

## 📋 Content Management

The application uses a structured JSON-based content system for easy maintenance:

- **Historical Data**: Comprehensive information in `/public/data/data-json/` including cost analysis and modern value calculations
- **Academic Sources**: Verified bibliography with primary and secondary sources in structured format
- **External Resources**: Curated database of official links, government sources, and educational materials
- **Modular Components**: TypeScript components with specialized rendering for different content types
- **Icon System**: Consistent SVG icon implementation with semantic meaning throughout
- **Design System**: Unified amber/vintage color scheme with accessibility-compliant contrast ratios

## 🏗️ Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: Custom React components with modern design patterns
- **Fonts**: Geist Sans & Mono for body text, Allura script for decorative elements
- **Interactive Elements**: React Confetti, floating quiz navigation, and smooth page transitions
- **Google Fonts**: Dynamic font loading for enhanced typography (Allura script integration)

## 📱 Project Structure

```
life-and-works-of-rizal/
├── app/                    # Next.js App Router pages
│   ├── early-life/        # Early life section
│   ├── education/          # Education journey
│   ├── 19th-century/       # Historical context of 19th century Philippines
│   ├── travels/            # Travel experiences
│   ├── major-works/        # Literary works
│   ├── martyrdom/          # Final days and legacy
│   ├── quiz/               # Interactive quiz system
│   ├── resources/          # External resources
│   └── rizal-law/          # Legal framework information
├── components/             # Reusable React components
│   ├── NavBar.tsx          # Responsive navigation with mobile hamburger menu
│   ├── FloatingQuizButton.tsx  # Contextual quiz access button
│   ├── QuizCard.tsx        # Interactive quiz interface with results
│   ├── PageLayout.tsx      # Unified page layout with vintage aesthetic
│   ├── ExternalResourcesLibrary.tsx  # Academic resource management
│   └── MobileReadableText.tsx  # Accessibility-optimized text rendering
├── public/                 # Static assets
│   ├── jose-pic.svg        # Hero image
│   ├── vintage-paper.png   # Background texture
│   └── data/               # Content data files
│       ├── data-json/      # Structured content for each section
│       ├── external-resources.json  # Curated external links
│       └── quiz-questions.json      # Interactive quiz content
└── hooks/                  # Custom React hooks
```

## 🎨 Design Philosophy

This application embraces a **vintage academic aesthetic** that reflects the historical period of Dr. Rizal's era while maintaining modern usability and accessibility standards:

- **Color Palette**: Unified amber/brown theme (`bg-amber-50/30`, `border-amber-200`) for historical authenticity
- **Typography**: Allura script for José Rizal's name, readable sans-serif for content with WCAG-compliant sizing
- **Visual Hierarchy**: Consistent translucent overlays and subtle depth through shadow effects
- **Accessibility First**: High contrast ratios, proper font sizing, and mobile-optimized touch targets
- **Cultural Sensitivity**: Design elements that honor Filipino heritage and historical context
- **Modern Performance**: Optimized loading, responsive images, and smooth animations

## 🤝 Contributing

We welcome contributions to improve this educational resource! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and ensure they follow our coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Areas for Contribution
- **Historical Research**: Additional verified sources and cost analysis data
- **Educational Content**: Enhanced quiz questions and interactive learning modules
- **Accessibility**: Further WCAG compliance improvements and screen reader optimization
- **Internationalization**: Translation support for Filipino/Tagalog and other languages
- **Performance**: Image optimization and loading speed enhancements
- **Mobile UX**: Touch gesture improvements and mobile-specific features

## 📚 Educational Value

This platform serves multiple educational purposes with comprehensive academic rigor:

- **Academic Research**: Comprehensive source with verified citations and cost analysis methodology
- **Student Learning**: Interactive quizzes, floating navigation, and accessibility-optimized content
- **Historical Context**: Deep dive into 19th century Philippines including taxation and economic systems
- **Cultural Preservation**: Digital preservation of Philippine heritage with respectful design approach
- **Legal Compliance**: Meets and exceeds Rizal Law (RA 1425) educational requirements
- **Modern Relevance**: Cost analysis connecting historical events to contemporary economic understanding

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Dr. José Rizal** - For his invaluable contributions to Philippine literature and freedom
- **Philippine Historical Community** - For preserving and sharing Rizal's legacy
- **Next.js Team** - For the excellent React framework
- **Tailwind CSS** - For the beautiful utility-first CSS framework

## 📞 Support

If you encounter any issues or have suggestions:

- 🐛 **Report bugs** by opening an issue
- 💡 **Suggest features** through discussions
- 📧 **Contact maintainers** for other inquiries

---

<div align="center">
  <p><strong>Built with ❤️ for Philippine education and cultural preservation</strong></p>
  <p><em>Honoring the memory and teachings of Dr. José Rizal</em></p>
</div>
