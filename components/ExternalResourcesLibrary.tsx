"use client";

import { useState, useMemo } from "react";
import { useExternalResources } from "../hooks/useExternalResources";
import ExternalLinkButton from "./ExternalLinkButton";

// Icon Components
const LibraryIcon = () => (
  <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-16 h-16 mx-auto mb-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const FreeIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const GovernmentIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M15 7v3M9 7v3" />
  </svg>
);

const DigitalLibraryIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CulturalIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function ExternalResourcesLibrary() {
  const { resourceData, loading, error, searchResources, getAllResources } = useExternalResources();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");

  const filteredResources = useMemo(() => {
    let resources = searchQuery ? searchResources(searchQuery) : getAllResources;
    
    if (selectedCategory !== "all") {
      resources = resources.filter((resource: any) => resource.categoryKey === selectedCategory);
    }
    
    if (selectedSource !== "all") {
      resources = resources.filter((resource: any) => 
        resource.source.toLowerCase().includes(selectedSource)
      );
    }
    
    return resources;
  }, [searchQuery, selectedCategory, selectedSource, searchResources, getAllResources]);

  const categories = useMemo(() => {
    if (!resourceData) return [];
    return Object.entries(resourceData).map(([key, data]) => ({
      key,
      label: data.category,
      count: data.items.length
    }));
  }, [resourceData]);

  const sources = useMemo(() => {
    const sourceSet = new Set<string>();
    getAllResources.forEach((resource: any) => {
      sourceSet.add(resource.source);
    });
    return Array.from(sourceSet).sort();
  }, [getAllResources]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <h3 className="text-red-800 font-semibold mb-2">Error Loading Resources</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-amber-900 mb-4 flex items-center justify-center">
          <LibraryIcon />
          Official Resources Library
        </h2>
        <p className="text-amber-700 max-w-2xl mx-auto">
          Access official sources and trusted repositories for educational materials, original works, 
          legal documents, and study guides related to the life and works of Dr. José Rizal.
        </p>
        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
          <p className="text-green-800 text-sm flex items-center flex-wrap justify-center gap-4">
            <span className="flex items-center">
              <LinkIcon />
              All resources link to official sources
            </span>
            <span className="flex items-center">
              <FreeIcon />
              Completely free access
            </span>
            <span className="flex items-center">
              <CheckIcon />
              Copyright compliant
            </span>
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-2">
              Search Resources
            </label>
            <input
              type="text"
              placeholder="Search by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All Categories ({getAllResources.length})</option>
              {categories.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.label} ({cat.count})
                </option>
              ))}
            </select>
          </div>

          {/* Source Filter */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-2">
              Source
            </label>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All Sources</option>
              {sources.map((source) => (
                <option key={source} value={source.toLowerCase()}>
                  {source}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-amber-600">
          Showing {filteredResources.length} of {getAllResources.length} resources
          {searchQuery && ` for "${searchQuery}"`}
        </div>
      </div>

      {/* Resources Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <SearchIcon />
          <h3 className="text-xl font-semibold text-amber-800 mb-2">No Resources Found</h3>
          <p className="text-amber-600">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource: any) => (
            <div
              key={resource.id}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-bold text-amber-900 text-lg leading-tight">
                      {resource.title}
                    </h4>
                    {resource.subtitle && (
                      <p className="text-amber-700 text-sm mt-1">{resource.subtitle}</p>
                    )}
                  </div>
                  <div className="text-xs text-amber-600 ml-2 text-right">
                    <div className="text-green-600 font-semibold">{resource.accessType}</div>
                    <div>{resource.pages > 0 ? `${resource.pages} pages` : 'Interactive'}</div>
                  </div>
                </div>
                
                <p className="text-amber-600 text-sm mb-3">{resource.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                    {resource.language}
                  </span>
                  {resource.targetLevel && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {resource.targetLevel}
                    </span>
                  )}
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {resource.source}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200"
                    >
                      #{tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="text-xs text-amber-600">
                      +{resource.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <ExternalLinkButton
                resource={resource}
                showDetails={false}
                className="w-full"
              />
              
              <p className="text-xs text-gray-500 mt-2">
                Source: {resource.sourceDescription}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Trusted Sources Info */}
      <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <ShieldIcon />
          Trusted Official Sources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
              <GovernmentIcon />
              Government Sources
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Official Gazette of the Philippines</li>
              <li>• National Historical Commission</li>
              <li>• Department of Education</li>
              <li>• National Library of the Philippines</li>
            </ul>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
              <DigitalLibraryIcon />
              Digital Libraries
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Project Gutenberg</li>
              <li>• Internet Archive</li>
              <li>• Google Scholar</li>
              <li>• Academic Repositories</li>
            </ul>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
              <CulturalIcon />
              Cultural Institutions
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Museums and Shrines</li>
              <li>• Heritage Sites</li>
              <li>• Cultural Centers</li>
              <li>• Educational Institutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm flex items-start">
          <DocumentIcon />
          <span>
            <strong>Legal Notice:</strong> All resources link to official, authorized sources. 
            We respect copyright laws and only provide links to legitimate, publicly available materials. 
            For academic use, please cite original sources appropriately.
          </span>
        </p>
      </div>
    </div>
  );
} 