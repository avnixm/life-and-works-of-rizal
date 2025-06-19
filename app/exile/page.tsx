import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Exile - José Rizal',
  description: 'Discover José Rizal\'s exile in Dapitan and his continued contributions to society during this period.',
};

// Icon Components
const ExileBackgroundIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const EducationalWorkIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MedicalWorkIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ScientificWorkIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const CommunityDevelopmentIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const LoveStoryIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const DepartureIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

// Sub-icons
const TrialIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
  </svg>
);

const TeachingIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const SchoolIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MedicalIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const ResearchIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CommunityIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const ChurchIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LegacyIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

export default async function Exile() {
  const data = await loadPageData('exile');

  const getMainIconComponent = (sectionType: string) => {
    switch (sectionType) {
      case 'exile_background':
        return <ExileBackgroundIcon />;
      case 'educational_work':
        return <EducationalWorkIcon />;
      case 'medical_work':
        return <MedicalWorkIcon />;
      case 'scientific_work':
        return <ScientificWorkIcon />;
      case 'community_development':
        return <CommunityDevelopmentIcon />;
      case 'love_story':
        return <LoveStoryIcon />;
      case 'departure':
        return <DepartureIcon />;
      default:
        return null;
    }
  };

  const getSubIconComponent = (itemId: string) => {
    switch (itemId) {
      case 'trial-and-deportation':
        return <TrialIcon />;
      case 'school-establishment':
        return <SchoolIcon />;
      case 'teaching-methods':
        return <TeachingIcon />;
      case 'medical-practice':
        return <MedicalIcon />;
      case 'research-activities':
        return <ResearchIcon />;
      default:
        return <CommunityIcon />;
    }
  };

  return (
    <PageLayout title={data.title} subtitle={data.subtitle}>
      <div className="space-y-6 md:space-y-8 text-amber-900">
        
        {data.sections.map((section: any) => (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            
            {/* Exile Background */}
            {section.type === 'exile_background' && (
              <>
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)} mb-4 md:mb-6`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {item.details.map((detail: any, index: number) => (
                        <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {detail.items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Educational Work */}
            {section.type === 'educational_work' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Grid type */}
                    {item.type === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {item.details.map((detail: any, index: number) => (
                          <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {detail.items.map((listItem: string, itemIndex: number) => (
                                <li key={itemIndex}>• {listItem}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Three column grid */}
                    {item.type === 'three_column_grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {item.columns.map((column: any, index: number) => (
                          <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{column.subtitle}</h5>
                            <ul className="space-y-1 text-xs leading-relaxed">
                              {column.items.map((listItem: string, itemIndex: number) => (
                                <li key={itemIndex}>• {listItem}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Medical Work */}
            {section.type === 'medical_work' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Grid type for medical practice */}
                    {item.type === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {item.details.map((detail: any, index: number) => (
                          <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {detail.items.map((listItem: string, itemIndex: number) => (
                                <li key={itemIndex}>• {listItem}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Notable cases */}
                    {item.type === 'notable_cases' && (
                      <div className="space-y-3">
                        {item.cases.map((caseItem: any, index: number) => (
                          <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{caseItem.title}</h5>
                            <p className="text-xs md:text-sm leading-relaxed">{caseItem.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Scientific Work */}
            {section.type === 'scientific_work' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Grid type for research */}
                    {item.type === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {item.details.map((detail: any, index: number) => (
                          <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {detail.items.map((listItem: string, itemIndex: number) => (
                                <li key={itemIndex}>• {listItem}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Discoveries type */}
                    {item.type === 'discoveries' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {item.details.map((detail: any, index: number) => (
                          <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {detail.items.map((listItem: string, itemIndex: number) => (
                                <li key={itemIndex}>• {listItem}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Community Development */}
            {section.type === 'community_development' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-3 md:space-y-4">
                  {section.content.left_column.map((project: any) => (
                    <div key={project.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(project.color)}`}>
                      <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                        <CommunityIcon />
                        {project.title}
                      </h4>
                      <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                        {project.items.map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 md:space-y-4">
                  {section.content.right_column.map((project: any) => (
                    <div key={project.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(project.color)}`}>
                      <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                        <CommunityIcon />
                        {project.title}
                      </h4>
                      <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                        {project.items.map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Love Story */}
            {section.type === 'love_story' && (
              <div className={`rounded-lg p-4 md:p-6 border ${getColorClasses(section.content.color)}`}>
                <h4 className="font-bold text-amber-800 mb-3 md:mb-4 text-base md:text-lg flex items-center">
                  <LoveStoryIcon />
                  {section.content.title}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  {section.content.background_info.map((info: any, index: number) => (
                    <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                      <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{info.subtitle}</h5>
                      <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                        {info.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 md:space-y-4">
                  {section.content.relationship_details.map((detail: any, index: number) => (
                    <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                      <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base flex items-center">
                        <ChurchIcon />
                        {detail.title}
                      </h5>
                      <p className="text-xs md:text-sm leading-relaxed">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Departure */}
            {section.type === 'departure' && (
              <div className={`rounded-lg p-4 md:p-6 border ${getColorClasses(section.content.color)}`}>
                <h4 className="font-bold text-amber-800 mb-3 md:mb-4 text-base md:text-lg flex items-center">
                  <DepartureIcon />
                  {section.content.title}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {section.content.departure_details.map((detail: any, index: number) => (
                    <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                      <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                      <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                        {detail.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 md:p-4 mt-3 md:mt-4 border md:border-0">
                  <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base flex items-center">
                    <LegacyIcon />
                    {section.content.legacy.title}
                  </h5>
                  <p className="text-xs md:text-sm leading-relaxed">{section.content.legacy.description}</p>
                </div>
              </div>
            )}
          </section>
        ))}

      </div>
    </PageLayout>
  );
} 