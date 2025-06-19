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

> **Latest Updates**: Now includes comprehensive 19th Century Philippines historical context section with detailed coverage of Spanish colonial system, social stratification, church power, education system, and economic conditions. Navigation has been reordered for better pedagogical flow.

### 📖 **Comprehensive Biography Sections**
- **Early Life**: Discover Rizal's childhood, family background, and formative years
- **Education**: Follow his academic journey from Ateneo to European universities
- **19th Century Philippines**: Explore the historical context of Spanish colonial rule, social classes, church power, education system, and economic conditions
- **Travels**: Explore his adventures across Europe, Asia, and America
- **Major Works**: Deep dive into Noli Me Tangere, El Filibusterismo, and other writings
- **Martyrdom**: Understand his final days and execution at Bagumbayan

### 🎯 **Interactive Learning**
- **Quiz System**: Test your knowledge with interactive quizzes
- **External Resources Library**: Curated collection of scholarly articles and references
- **Mobile-Responsive Design**: Seamless experience across all devices
- **Rich Content Structure**: Detailed JSON-based content system for easy maintenance and updates

### 🎨 **Modern UI/UX**
- Beautiful vintage-inspired design with authentic aesthetics
- Smooth animations and transitions
- Accessible and user-friendly navigation
- Mobile-first responsive layout
- SVG icons throughout the application for crisp, scalable graphics
- Scroll progress indicators for better user orientation

### ⚖️ **Rizal Law Integration**
- Educational content aligned with Republic Act 1425 (Rizal Law)
- Comprehensive coverage suitable for academic requirements

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

- **Historical Data**: Detailed information stored in `/public/data/data-json/` with separate files for each section
- **Modular Components**: Each page section has dedicated TypeScript components for rendering different content types
- **Icon System**: Consistent SVG icon implementation throughout the application
- **Responsive Design**: Content adapts seamlessly across desktop, tablet, and mobile devices

## 🏗️ Tech Stack

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: Custom React components with modern design patterns
- **Fonts**: Geist Sans & Geist Mono for optimal readability
- **Interactive Elements**: React Confetti for enhanced user experience

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
│   ├── NavBar.tsx          # Navigation component
│   ├── QuizCard.tsx        # Quiz interface
│   ├── PageLayout.tsx      # Page layout wrapper
│   └── ...
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

This application embraces a **vintage academic aesthetic** that reflects the historical period of Dr. Rizal's era while maintaining modern usability standards:

- **Color Palette**: Warm amber and brown tones evoke historical authenticity
- **Typography**: Serif fonts for headings maintain academic elegance
- **Imagery**: Carefully curated vintage elements and authentic portraits
- **Layout**: Clean, readable design prioritizing content accessibility

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
- Additional historical content and sources
- Enhanced quiz questions and interactivity
- Improved accessibility features
- Mobile experience optimizations
- Translation support for other languages

## 📚 Educational Value

This platform serves multiple educational purposes:

- **Academic Research**: Comprehensive source for Rizal studies
- **Student Learning**: Interactive content for engaging education
- **Cultural Preservation**: Digital preservation of Philippine heritage
- **Legal Compliance**: Meets Rizal Law educational requirements

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
