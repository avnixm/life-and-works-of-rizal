import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ backgroundColor: '#ecc889' }}>
      {/* Background Image */}
        <Image
        src="/vintage-paper.png"
        alt="Vintage paper background"
        fill
        className="object-cover"
          priority
        />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col z-10">
        {/* NavBar at the top */}
        <div className="w-full flex justify-center mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          <NavBar />
        </div>
        
        {/* Main Content Area - Mobile vs Desktop Layout */}
        <div className="flex-1 flex relative">
          {/* Mobile Layout: Large background image with content overlay */}
          <div className="flex w-full h-full md:hidden relative">
            {/* Extra Large José Rizal Background Image (Mobile) - Lower Z-Index */}
            <div className="absolute -inset-8 flex items-start justify-start pr-10 pb-85 z-0">
              <div className="w-[120%] h-[120%] relative opacity-25">
                <Image
                  src="/jose-pic.svg"
                  alt="Dr. José Rizal"
                  fill
                  className="object-contain object-center scale-150"
                  priority
                />
              </div>
            </div>
            
            {/* Content Overlay (Mobile) - Higher Z-Index */}
            <div className="relative z-10 w-full flex flex-col justify-end items-center px-6 pb-16 pt-8 text-center">
              {/* Main Title */}
              <h1 className="text-4xl font-black text-amber-900 font-serif leading-tight mb-3 drop-shadow-lg">
                Dr. José Rizal
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-xl font-bold text-amber-800 font-serif italic leading-relaxed mb-4 drop-shadow-md">
                National Hero of the Philippines
              </h2>
              
              {/* Quote */}
              <blockquote className="text-lg font-semibold text-amber-700 font-serif italic leading-relaxed mb-4 max-w-xs drop-shadow-md">
                "The youth is the hope of our future."
              </blockquote>
              
              {/* Years */}
              <p className="text-xl font-black text-amber-800 font-serif mb-6 drop-shadow-lg">
                1861 - 1896
              </p>
              
              {/* Navigation Buttons - Stacked vertically */}
              <div className="flex flex-col space-y-3 w-full max-w-xs">
                <Link href="/early-life" className="px-6 py-3 bg-amber-900 text-amber-50 rounded-lg hover:bg-amber-800 transition-colors font-medium text-sm text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200">
                  Explore His Life
                </Link>
                <Link href="/major-works" className="px-6 py-3 border-2 border-amber-900 text-amber-900 rounded-lg hover:bg-amber-900 hover:text-amber-50 transition-colors font-medium text-sm text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200">
                  Read His Works
                </Link>
                <Link href="/martyrdom" className="px-6 py-3 border-2 border-amber-900 text-amber-900 rounded-lg hover:bg-amber-900 hover:text-amber-50 transition-colors font-medium text-sm text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200">
                  Learn His Legacy
                </Link>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout: Original Design */}
          <div className="hidden md:flex w-full h-full items-start justify-end text-center relative pr-16 lg:pr-30 xl:pr-38 pt-16 lg:pt-20">
            {/* Background Hero Image - Desktop */}
            <div className="absolute left-0 bottom-0 flex items-end justify-start pl-8 lg:pl-16 -mb-12 opacity-30 z-0">
              <div className="w-[32rem] h-[32rem] lg:w-[42rem] lg:h-[42rem] relative">
                <Image
                  src="/jose-pic.svg"
                  alt="Dr. José Rizal"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Hero Content - Desktop */}
            <div className="relative z-10 max-w-lg lg:max-w-xl">
                {/* Main Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-3 font-serif leading-tight">
                  Dr. José Rizal
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-lg lg:text-xl text-amber-800 mb-4 font-serif italic leading-relaxed">
                  National Hero of the Philippines
                </h2>
                
                {/* Quote */}
                <blockquote className="text-base lg:text-lg text-amber-700 mb-6 font-serif italic leading-relaxed bg-white/20 backdrop-blur-sm p-3 lg:p-4 rounded-lg">
                  "The youth is the hope of our future."
                </blockquote>
                
                {/* Years */}
                <p className="text-sm lg:text-base text-amber-800 mb-6 font-serif font-semibold">
                  1861 - 1896
                </p>
                
                {/* Navigation Buttons - Desktop */}
                <div className="flex flex-row gap-3 justify-center">
                  <Link href="/early-life" className="px-4 lg:px-5 py-2 bg-amber-900 text-amber-50 rounded-md hover:bg-amber-800 transition-colors font-medium text-sm text-center">
                    Explore His Life
                  </Link>
                  <Link href="/major-works" className="px-4 lg:px-5 py-2 border-2 border-amber-900 text-amber-900 bg-white/20 backdrop-blur-sm rounded-md hover:bg-amber-900 hover:text-amber-50 transition-colors font-medium text-sm text-center">
                    Read His Works
                  </Link>
                  <Link href="/martyrdom" className="px-4 lg:px-5 py-2 border-2 border-amber-900 text-amber-900 bg-white/20 backdrop-blur-sm rounded-md hover:bg-amber-900 hover:text-amber-50 transition-colors font-medium text-sm text-center">
                    Learn His Legacy
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
