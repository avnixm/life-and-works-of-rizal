import { useState, useEffect, useMemo } from 'react';

export interface ExternalResource {
  id: string;
  title: string;
  subtitle: string;
  language: string;
  pages: number;
  description: string;
  tags: string[];
  yearPublished: number | string;
  targetLevel?: string;
  externalUrl: string;
  source: string;
  sourceDescription: string;
  accessType: string;
  categoryKey?: string;
}

export interface ExternalResourceCategory {
  category: string;
  description: string;
  items: ExternalResource[];
}

export interface ExternalResourcesData {
  [key: string]: ExternalResourceCategory;
}

export const useExternalResources = () => {
  const [resourceData, setResourceData] = useState<ExternalResourcesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExternalResources = async () => {
      try {
        const response = await fetch('/data/external-resources.json');
        if (!response.ok) {
          throw new Error('Failed to load external resources');
        }
        const data = await response.json();
        setResourceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadExternalResources();
  }, []);

  const searchResources = useMemo(() => {
    return (query: string, category?: string) => {
      if (!resourceData) return [];

      const searchTerm = query.toLowerCase();
      const results: ExternalResource[] = [];

      Object.entries(resourceData).forEach(([key, categoryData]) => {
        if (category && key !== category) return;

        categoryData.items.forEach(item => {
          const matchesTitle = item.title.toLowerCase().includes(searchTerm);
          const matchesDescription = item.description.toLowerCase().includes(searchTerm);
          const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
          const matchesSubtitle = item.subtitle.toLowerCase().includes(searchTerm);
          const matchesSource = item.source.toLowerCase().includes(searchTerm);

          if (matchesTitle || matchesDescription || matchesTags || matchesSubtitle || matchesSource) {
            results.push({ ...item, categoryKey: key });
          }
        });
      });

      return results;
    };
  }, [resourceData]);

  const getAllResources = useMemo(() => {
    if (!resourceData) return [];
    
    const allResources: ExternalResource[] = [];
    Object.entries(resourceData).forEach(([key, categoryData]) => {
      categoryData.items.forEach(item => {
        allResources.push({ ...item, categoryKey: key });
      });
    });
    
    return allResources;
  }, [resourceData]);

  const getResourcesByCategory = useMemo(() => {
    return (categoryKey: string) => {
      if (!resourceData || !resourceData[categoryKey]) return [];
      return resourceData[categoryKey].items;
    };
  }, [resourceData]);

  const getResourceById = useMemo(() => {
    return (id: string) => {
      if (!resourceData) return null;
      
      for (const categoryData of Object.values(resourceData)) {
        const resource = categoryData.items.find(item => item.id === id);
        if (resource) return resource;
      }
      
      return null;
    };
  }, [resourceData]);

  return {
    resourceData,
    loading,
    error,
    searchResources,
    getAllResources,
    getResourcesByCategory,
    getResourceById
  };
}; 