import { promises as fs } from 'fs';
import path from 'path';

export interface PageData {
  title: string;
  subtitle: string;
  sections: any[];
}

export async function loadPageData(pageName: string): Promise<PageData> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data-json', `${pageName}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data;
  } catch (error) {
    console.error(`Error loading data for page ${pageName}:`, error);
    throw new Error(`Failed to load page data for ${pageName}`);
  }
}

// Helper function to get color classes for styling
export function getColorClasses(color: string) {
  const colorMap: { [key: string]: string } = {
    blue: 'bg-blue-50/50 md:bg-blue-50/30 border-blue-200',
    pink: 'bg-pink-50/50 md:bg-pink-50/30 border-pink-200',
    green: 'bg-green-50/50 md:bg-green-50/30 border-green-200',
    yellow: 'bg-yellow-50/50 md:bg-yellow-50/30 border-yellow-200',
    purple: 'bg-purple-50/50 md:bg-purple-50/30 border-purple-200',
    red: 'bg-red-50/50 md:bg-red-50/30 border-red-200',
    orange: 'bg-orange-50/50 md:bg-orange-50/30 border-orange-200',
    amber: 'bg-amber-50/60 md:bg-amber-50/50 border-amber-200',
    cyan: 'bg-cyan-50/50 md:bg-cyan-50/30 border-cyan-200',
    gray: 'bg-gray-50/50 md:bg-gray-50/30 border-gray-200',
    teal: 'bg-teal-50/50 md:bg-teal-50/30 border-teal-200',
    lime: 'bg-lime-50/50 md:bg-lime-50/30 border-lime-200',
    indigo: 'bg-indigo-50/50 md:bg-indigo-50/30 border-indigo-200',
    rose: 'bg-rose-50/50 md:bg-rose-50/30 border-rose-200',
    violet: 'bg-violet-50/50 md:bg-violet-50/30 border-violet-200'
  };
  return colorMap[color] || colorMap.amber;
}

// Helper function to get border color classes for influences
export function getBorderColorClass(color: string) {
  const borderMap: { [key: string]: string } = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    orange: 'border-orange-500'
  };
  return borderMap[color] || borderMap.blue;
} 