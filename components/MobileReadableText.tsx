interface MobileReadableTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileReadableText({ children, className = "" }: MobileReadableTextProps) {
  return (
    <div className={`
      text-amber-900
      text-sm md:text-base 
      leading-relaxed md:leading-normal
      bg-white/30 md:bg-transparent
      backdrop-blur-sm md:backdrop-blur-none
      p-3 md:p-0
      rounded-lg md:rounded-none
      shadow-sm md:shadow-none
      border border-amber-200/50 md:border-none
      mb-4 md:mb-0
      ${className}
    `}>
      {children}
    </div>
  );
} 