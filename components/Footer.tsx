"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TeamMember = {
  name: string;
  imageUrl: string;
  profileUrl: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Nikka",
    imageUrl: "/nikka.svg",
    profileUrl: "https://www.facebook.com/avnixm/",
  },
  {
    name: "Krecel",
    imageUrl: "/krecel.svg",
    profileUrl: "https://www.facebook.com/liezel.dorerocapalar.1",
  },
  {
    name: "Chalve",
    imageUrl: "/chalve.svg",
    profileUrl: "https://www.facebook.com/chalve.elizan.16",
  },
  {
    name: "Karla",
    imageUrl: "/karla.svg",
    profileUrl: "https://www.facebook.com/profile.php?id=100093054081598",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed left-0 right-0 bottom-[-60px] md:bottom-[-30px] h-[140px] w-full z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Blurred content when hovered */}
        <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${isHovered ? 'blur-md' : ''}`}
        >
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
        {/* Overlay tribute text */}
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