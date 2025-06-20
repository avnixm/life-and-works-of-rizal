'use client';

import { useEffect, useState } from 'react';

const QuizIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function FloatingQuizButton() {
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

  // Don't show on home page
  if (isHomePage) {
    return null;
  }

  const handleQuizClick = () => {
    window.location.href = '/quiz';
  };

  return (
    <button
      onClick={handleQuizClick}
      className="fixed bottom-6 right-6 z-50 bg-white/80 hover:bg-white/90 backdrop-blur-sm border-2 border-amber-600 text-amber-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group px-4 py-3"
      aria-label="Take Quiz"
    >
      <div className="flex items-center gap-2">
        <QuizIcon />
        <span className="font-semibold text-sm">Take Quiz</span>
      </div>
      

    </button>
  );
} 