"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TEAM_MEMBERS = [
  { name: 'Chalve', imageUrl: '/chalve.svg', profileUrl: '#' },
  { name: 'Nikka', imageUrl: '/nikka.svg', profileUrl: '#' },
  { name: 'Karla', imageUrl: '/karla.svg', profileUrl: '#' },
  { name: 'Krecel', imageUrl: '/krecel.svg', profileUrl: '#' },
];

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="hidden md:block fixed left-0 right-0 bottom-[-60px] md:bottom-[-30px] h-[140px] w-full z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${isHovered ? 'blur-sm' : ''}`}>
          <div className="flex items-center justify-center space-x-4 mb-2">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="relative">
                <Link href={member.profileUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name}'s profile`}
                    width={70}
                    height={70}
                    className="rounded-full opacity-75 transition-all duration-500"
                    style={{
                      filter: 'sepia(20%) brightness(110%) contrast(110%) drop-shadow(2px 2px 4px rgba(101, 67, 33, 0.3))',
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
            <p
              className="font-bold font-serif text-xs md:text-sm tracking-wide text-amber-900 bg-amber-100/80 rounded-lg px-3 py-1 shadow-lg border border-amber-300 text-center"
              style={{
                textShadow: '1px 1px 2px rgba(101, 67, 33, 0.3)',
                filter: 'sepia(10%)',
              }}
            >
              <span className="block">&copy; {currentYear}</span>
              <span className="block">Group 6 | Dedicated to honoring the enduring legacy and works of Dr. José P. Rizal</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 