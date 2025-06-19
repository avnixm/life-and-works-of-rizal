import Link from "next/link";
import { ExternalResource } from "../hooks/useExternalResources";

interface ExternalLinkButtonProps {
  resource: ExternalResource;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  className?: string;
}

export default function ExternalLinkButton({ 
  resource, 
  variant = 'primary', 
  size = 'md', 
  showDetails = true,
  className = '' 
}: ExternalLinkButtonProps) {
  
  const getButtonStyles = () => {
    const baseStyles = "inline-flex items-center justify-center rounded transition-colors font-medium";
    
    const sizeStyles = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-2 text-sm", 
      lg: "px-6 py-3 text-base"
    };
    
    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-amber-600 text-white hover:bg-amber-500", 
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
    };
    
    return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  };

  const getSourceIcon = (source: string) => {
    if (source.toLowerCase().includes('gutenberg')) return '📚';
    if (source.toLowerCase().includes('government') || source.toLowerCase().includes('official')) return '🏛️';
    if (source.toLowerCase().includes('museum')) return '🏛️';
    if (source.toLowerCase().includes('archive')) return '📁';
    if (source.toLowerCase().includes('library')) return '📖';
    if (source.toLowerCase().includes('education')) return '🎓';
    if (source.toLowerCase().includes('scholar')) return '🔬';
    return '🌐';
  };

  return (
    <div className={showDetails ? "space-y-2" : ""}>
      {showDetails && (
        <div className="text-sm text-amber-700">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h5 className="font-semibold">{resource.title}</h5>
              {resource.subtitle && (
                <p className="text-xs text-amber-600">{resource.subtitle}</p>
              )}
            </div>
            <div className="text-right text-xs">
              <div>{resource.pages > 0 ? `${resource.pages} pages` : 'Interactive'}</div>
              <div className="text-green-600 font-semibold">{resource.accessType}</div>
            </div>
          </div>
          <p className="text-xs">{resource.description}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-amber-100 px-2 py-0.5 rounded">{resource.language}</span>
            {resource.targetLevel && (
              <span className="text-xs bg-blue-100 px-2 py-0.5 rounded">{resource.targetLevel}</span>
            )}
            <span className="text-xs bg-green-100 px-2 py-0.5 rounded flex items-center gap-1">
              {getSourceIcon(resource.source)}
              {resource.source}
            </span>
          </div>
        </div>
      )}
      
      <Link
        href={resource.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonStyles()}
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
          />
        </svg>
        Visit Official Source
      </Link>
      
      {showDetails && (
        <p className="text-xs text-gray-500 mt-1">
          Source: {resource.sourceDescription}
        </p>
      )}
    </div>
  );
} 