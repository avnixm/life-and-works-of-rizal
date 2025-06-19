'use client';

import { useState, useEffect } from "react";

// Icon Components
const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const LawIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const ChildIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const TravelIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WorksIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ExileIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MartyrdomIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const QuizIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ResourcesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHomePage, setIsHomePage] = useState(false);

  // Check if we're on the home page
  useEffect(() => {
    const checkHomePage = () => {
      setIsHomePage(window.location.pathname === '/');
    };
    
    checkHomePage();
    
    // Listen for navigation changes
    window.addEventListener('popstate', checkHomePage);
    return () => window.removeEventListener('popstate', checkHomePage);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      // Find the scrollable container
      const scrollContainer = document.querySelector('.overflow-y-auto');
      if (!scrollContainer) return;
      
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight;
      const clientHeight = scrollContainer.clientHeight;
      const totalScrollable = scrollHeight - clientHeight;
      
      if (totalScrollable <= 0) {
        setScrollProgress(0);
        return;
      }
      
      const progress = (scrollTop / totalScrollable) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    // Initial calculation
    updateScrollProgress();
    
    // Find the scrollable container and add event listener
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
      
      // Also listen for resize events that might affect scroll
      window.addEventListener('resize', updateScrollProgress);
      
      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollProgress);
        window.removeEventListener('resize', updateScrollProgress);
      };
    }
  }, []);

  const navigationItems = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/rizal-law", label: "Rizal Law", icon: LawIcon },
    { href: "/early-life", label: "Early Life", icon: ChildIcon },
    { href: "/education", label: "Education", icon: EducationIcon },
    { href: "/19th-century", label: "19th Century", icon: ExileIcon },
    { href: "/travels", label: "Travels", icon: TravelIcon },
    { href: "/major-works", label: "Major Works", icon: WorksIcon },
    { href: "/martyrdom", label: "Martyrdom", icon: MartyrdomIcon },
    { href: "/quiz", label: "Quiz", icon: QuizIcon },
    { href: "/resources", label: "Resources", icon: ResourcesIcon },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    closeMobileMenu();
    window.location.href = href;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-30">
        {/* Scroll Progress Bar - Hidden on Home Page */}
        {!isHomePage && (
          <div className="w-full h-1 bg-amber-200/30">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-800 transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
        
        {/* Navigation Content */}
        <div className="py-4 px-6 md:bg-transparent bg-amber-50/20 md:backdrop-blur-none backdrop-blur-md md:border-b-0 border-b border-amber-200/30">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center">
            <ul className="flex flex-wrap gap-4 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/50 px-6 py-3">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <button 
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-center gap-2 text-amber-900 font-semibold transition-colors text-sm bg-transparent border-none cursor-pointer hover:bg-amber-100 px-2 py-1 rounded-md"
                    >
                      <IconComponent />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Navigation - Upper Left */}
          <div className="md:hidden flex justify-start">
            <button
              onClick={toggleMobileMenu}
              className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/50 p-3 text-amber-900 hover:bg-white/40 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-amber-50 shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-200">
          <h2 className="text-xl font-bold text-amber-900">Navigation</h2>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-amber-100 text-amber-900 transition-colors"
            aria-label="Close mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="py-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center gap-3 px-4 py-3 text-amber-900 font-semibold rounded-lg hover:bg-amber-100 transition-colors text-base w-full text-left bg-transparent border-none cursor-pointer"
                  >
                    <IconComponent />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-amber-200">
          <div className="text-center">
            <p className="text-sm text-amber-700 italic">
              "The youth is the hope of our future"
            </p>
            <p className="text-xs text-amber-600 mt-1">- Dr. José Rizal</p>
          </div>
        </div>
      </div>
    </>
  );
} 