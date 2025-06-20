import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import ExternalResourcesLibrary from "../../components/ExternalResourcesLibrary";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Resources - José Rizal',
  description: 'Additional resources, references, and further reading about José Rizal and his contributions to Philippine history.',
};

// Icon Components
const ExternalLinksIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const MuseumsSitesIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const OnlineResourcesIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const ContactInfoIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Sub-icons
const EducationalIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const LibraryIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M15 7v3M9 7v3" />
  </svg>
);

const MuseumIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const SiteIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MonumentIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const CollectionIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const AcademicIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const GovernmentIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M15 7v3M9 7v3" />
  </svg>
);

export default async function Resources() {
  const data = await loadPageData('resources');

  const getButtonColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      red: 'bg-red-600 hover:bg-red-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      teal: 'bg-teal-600 hover:bg-teal-700'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getMainIconComponent = (sectionType: string) => {
    switch (sectionType) {
      case 'external_links':
        return <ExternalLinksIcon />;
      case 'museums_sites':
        return <MuseumsSitesIcon />;
      case 'online_resources':
        return <OnlineResourcesIcon />;
      case 'contact_info':
        return <ContactInfoIcon />;
      case 'academic_sources':
        return <AcademicIcon />;
      case 'digital_databases':
        return <DatabaseIcon />;
      case 'methodology_note':
        return (
          <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryIconComponent = (categoryId: string) => {
    switch (categoryId) {
      case 'educational-resources':
        return <EducationalIcon />;
      case 'digital-libraries':
        return <LibraryIcon />;
      case 'rizal-museum':
        return <MuseumIcon />;
      case 'rizal-shrine-calamba':
        return <SiteIcon />;
      case 'monuments-memorials':
        return <MonumentIcon />;
      case 'manuscript':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'graduation-cap':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case 'building-columns':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M15 7v3M9 7v3" />
          </svg>
        );
      case 'book-open':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'microscope':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'coins':
        return (
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return <DatabaseIcon />;
    }
  };

  const getSubsectionIconComponent = (subsectionId: string) => {
    switch (subsectionId) {
      case 'digital-archives':
        return <CollectionIcon />;
      case 'research-tools':
        return <DatabaseIcon />;
      case 'academic-institutions':
        return <AcademicIcon />;
      case 'government-agencies':
        return <GovernmentIcon />;
      default:
        return <DatabaseIcon />;
    }
  };

  // Find about-makers section if present
  const aboutMakersSection = data.sections.find((section: any) => section.id === 'about-makers');

  return (
    <PageLayout title={data.title} subtitle={data.subtitle}>
      <div className="mb-12">
        <ExternalResourcesLibrary />
      </div>
      
      <div className="space-y-6 md:space-y-8 text-amber-900">

        {data.sections.map((section: any) => (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            
            {/* External Links */}
            {section.type === 'external_links' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((category: any) => (
                  <div key={category.id} className="bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-3 md:mb-4 text-lg md:text-xl flex items-center">
                      {getCategoryIconComponent(category.id)}
                      {category.title}
                    </h4>
                    <div className="space-y-2 md:space-y-3">
                      {category.links.map((link: any, index: number) => (
                        <a 
                          key={index}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block bg-white/60 rounded p-3 hover:bg-white/80 transition-colors border border-amber-200"
                        >
                          <h5 className="font-semibold text-amber-700 text-base md:text-lg">{link.title}</h5>
                          <p className="text-sm text-amber-600 leading-relaxed">{link.description}</p>
                          <span className="text-blue-600 text-sm">→ {link.display_url}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Museums and Sites */}
            {section.type === 'museums_sites' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {section.content.map((site: any) => (
                  <div key={site.id} className="bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-3 text-center text-lg md:text-xl flex items-center justify-center">
                      {getCategoryIconComponent(site.id)}
                      {site.title}
                    </h4>
                    <div className="space-y-2">
                      {site.features.map((feature: any, index: number) => (
                        <div key={index} className="bg-white/60 rounded p-3 border border-amber-200">
                          <h5 className="font-semibold text-amber-700 text-base">{feature.title}</h5>
                          <p className="text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Academic Sources */}
            {section.type === 'academic_sources' && (
              <div className="space-y-6">
                {section.content.map((category: any, categoryIndex: number) => (
                  <div key={categoryIndex} className="bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-4 text-lg md:text-xl flex items-center">
                      {getCategoryIconComponent(category.icon)}
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {category.sources.map((source: any, sourceIndex: number) => (
                        <div key={sourceIndex} className="bg-white/60 rounded-lg p-4 border border-amber-200">
                          <h5 className="font-semibold text-amber-800 mb-2 text-base">{source.author_date}</h5>
                          <p className="text-sm text-amber-700 italic mb-2">"{source.title}"</p>
                          <p className="text-sm text-amber-600">{source.publication_details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Digital Research Databases */}
            {section.type === 'digital_databases' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((database: any, index: number) => (
                  <div key={index} className="bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-200">
                    <h4 className="font-bold text-amber-800 mb-2 text-lg md:text-xl">{database.title}</h4>
                    <p className="text-sm text-amber-700 mb-3">
                      <strong>Institution:</strong> {database.institution}
                    </p>
                    <p className="text-xs leading-relaxed mb-3">{database.description}</p>
                    <div className="bg-white/50 rounded p-3 border border-amber-200 mb-3">
                      <p className="text-xs text-amber-700">
                        <strong>Special Features:</strong> {database.special_features}
                      </p>
                    </div>
                    <a 
                      href={database.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-amber-600 text-white px-3 py-2 rounded text-xs hover:bg-amber-700 transition-colors"
                    >
                      Visit Database →
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Research Methodology Note */}
            {section.type === 'methodology_note' && (
              <div className="bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-200">
                <div className="space-y-3">
                  <div className="bg-white/60 rounded p-3 border border-amber-200">
                    <h5 className="font-semibold text-amber-800 mb-2">Research Approach</h5>
                    <p className="text-sm leading-relaxed">{section.content.approach}</p>
                  </div>
                  <div className="bg-white/60 rounded p-3 border border-amber-200">
                    <h5 className="font-semibold text-amber-800 mb-2">Verification Process</h5>
                    <p className="text-sm leading-relaxed">{section.content.verification}</p>
                  </div>
                  <div className="bg-white/60 rounded p-3 border border-amber-200">
                    <h5 className="font-semibold text-amber-800 mb-2">Source Hierarchy</h5>
                    <p className="text-sm leading-relaxed">{section.content.source_hierarchy}</p>
                  </div>
                  <div className="bg-white/60 rounded p-3 border border-amber-200">
                    <h5 className="font-semibold text-amber-800 mb-2">Known Limitations</h5>
                    <p className="text-sm leading-relaxed">{section.content.limitations}</p>
                  </div>
                  <div className="bg-white/60 rounded p-3 border border-amber-200">
                    <h5 className="font-semibold text-amber-800 mb-2">Ongoing Updates</h5>
                    <p className="text-sm leading-relaxed">{section.content.updates}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact the Makers (new structure) */}
            {section.type === 'contact_info' && (
              <div className="bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-200">
                <p className="text-amber-900 text-sm md:text-base mb-2">{section.content.message}</p>
                <p className="text-amber-800 text-xs md:text-sm font-mono">
                  <span className="font-semibold">Contact: </span>
                  <a href={`mailto:${section.content.contact}`} className="underline hover:text-amber-700">{section.content.contact}</a>
                </p>
              </div>
            )}
          </section>
        ))}

        {/* About the Makers / Contact Us Section */}
        {aboutMakersSection && (
          <section key={aboutMakersSection.id} className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(aboutMakersSection.type)}
              {aboutMakersSection.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              {aboutMakersSection.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {aboutMakersSection.members.map((member: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 rounded-full overflow-hidden shadow-lg border-2 border-amber-300">
                    <img
                      src={member.photo_url}
                      alt={`Photo of ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-base">{member.name}</h4>
                  <p className="text-sm text-amber-700">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </PageLayout>
  );
} 