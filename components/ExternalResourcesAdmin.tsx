"use client";

import { useState } from "react";

export default function ExternalResourcesAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          ⚙️ Admin Panel
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-900">External Resources Admin Panel</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">✅ Safe & Legal Approach:</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• All resources link to official, authorized sources</li>
              <li>• No copyright infringement issues</li>
              <li>• Links to government sites, libraries, and educational institutions</li>
              <li>• Update JSON configuration in /public/data/external-resources.json</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-blue-800 mb-3">📋 How to Add New Resources:</h3>
              <ol className="text-sm text-blue-700 space-y-2">
                <li><strong>1.</strong> Find an official source (government site, library, museum, etc.)</li>
                <li><strong>2.</strong> Verify the source is legitimate and authorized</li>
                <li><strong>3.</strong> Add the resource to the appropriate category in the JSON file</li>
                <li><strong>4.</strong> Include proper source attribution and description</li>
                <li><strong>5.</strong> Test the link to ensure it works</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-3">🔗 Recommended Sources:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🏛️ Government & Official</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Official Gazette Philippines</li>
                    <li>• National Historical Commission</li>
                    <li>• Department of Education</li>
                    <li>• National Library Philippines</li>
                    <li>• NHCP Museums</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📚 Digital Libraries</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Project Gutenberg</li>
                    <li>• Internet Archive</li>
                    <li>• Google Scholar</li>
                    <li>• University Repositories</li>
                    <li>• Educational Platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-3">📝 Sample JSON Entry:</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs overflow-x-auto text-gray-700">{`{
  "id": "unique-identifier",
  "title": "Document Title",
  "subtitle": "Document Subtitle",
  "language": "English",
  "pages": 100,
  "description": "Brief description of the resource",
  "tags": ["tag1", "tag2", "tag3"],
  "yearPublished": 1887,
  "externalUrl": "https://official-source.gov/document",
  "source": "Official Source Name",
  "sourceDescription": "Description of the source",
  "accessType": "Free",
  "targetLevel": "College" // Optional
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-3">⚠️ Important Guidelines:</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li><strong>✅ DO:</strong> Link to official government sites, libraries, museums</li>
                  <li><strong>✅ DO:</strong> Use sources with proper authorization</li>
                  <li><strong>✅ DO:</strong> Verify links work and content is appropriate</li>
                  <li><strong>❌ DON'T:</strong> Link to pirated or unauthorized content</li>
                  <li><strong>❌ DON'T:</strong> Host copyrighted materials directly</li>
                  <li><strong>❌ DON'T:</strong> Use questionable or unofficial sources</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-3">🔧 Categories Available:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="bg-blue-50 p-3 rounded">
                  <strong>rizalWorks:</strong> Original writings and literature
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <strong>legalDocs:</strong> Government and legal documents
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong>studyGuides:</strong> Educational materials and guides
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <strong>museums:</strong> Museum and cultural site resources
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>💡 Pro Tip:</strong> Always test your links in an incognito/private browser window 
                to ensure they work for all users. Some sites may require authentication or have 
                geographic restrictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 