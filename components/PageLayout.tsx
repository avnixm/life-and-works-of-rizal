import Image from "next/image";
import NavBar from "./NavBar";
import FloatingQuizButton from "./FloatingQuizButton";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: '#ecc889' }}>
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/vintage-paper.png"
          alt="Vintage paper background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Fixed NavBar */}
      <NavBar />
      
      {/* Floating Quiz Button */}
      <FloatingQuizButton />
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-10 h-screen overflow-y-auto pt-21 md:pt-25 smooth-scroll">
        {/* Page Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-amber-900 mb-3 md:mb-4 font-serif leading-tight">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-xl md:text-2xl text-amber-800 font-serif italic leading-relaxed px-2">
                {subtitle}
              </h2>
            )}
          </div>
          
          {/* Page Content */}
          <div className="bg-white/40 md:bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-amber-200 p-4 md:p-8 mb-6 md:mb-8">
            <div className="text-lg leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 