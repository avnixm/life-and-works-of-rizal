import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Early Life - José Rizal',
  description: 'Learn about the early life of Dr. José Rizal, his birth, family background, and childhood influences.',
};

// Icon Components
const BirthIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FamilyIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const InfluenceIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const MemoryIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ParentIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SiblingIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

export default async function EarlyLife() {
  const data = await loadPageData('early-life');

  const getIconComponent = (sectionId: string) => {
    switch (sectionId) {
      case 'birth-hometown':
        return <BirthIcon />;
      case 'family-background':
        return <FamilyIcon />;
      case 'early-education':
        return <EducationIcon />;
      case 'early-influences':
        return <InfluenceIcon />;
      case 'childhood-memories':
        return <MemoryIcon />;
      default:
        return null;
    }
  };

  const getSubIconComponent = (type: string) => {
    switch (type) {
      case 'parent':
        return <ParentIcon />;
      case 'sibling':
        return <SiblingIcon />;
      default:
        return null;
    }
  };

  return (
    <PageLayout title={data.title} subtitle={data.subtitle}>
      <div className="space-y-6 md:space-y-8 text-amber-900">
        
        {data.sections.map((section: any) => (
          <section key={section.id} className="bg-white/40 md:bg-transparent rounded-lg p-3 md:p-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-serif text-amber-800 flex items-center">
              {getIconComponent(section.id)}
              {section.title}
            </h3>
            
            {/* Render different section types */}
            {section.type === 'grid' && section.id === 'birth-hometown' && (
              <div className="bg-amber-50/50 md:bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-300 mb-4 md:mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">
                      {section.content.birth_details.title}
                    </h4>
                    <div className="space-y-3 text-sm md:text-base leading-relaxed">
                      {section.content.birth_details.items.map((item: any, index: number) => (
                        <div key={index} className="border-b border-amber-200 pb-2 last:border-b-0">
                          <div className="flex flex-col">
                            <div>
                              <strong className="text-amber-700">{item.label}:</strong> <span className="font-medium">{item.value}</span>
                            </div>
                            {item.explanation && (
                              <p className="text-sm text-amber-600 mt-1 italic">{item.explanation}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">
                      {section.content.hometown.title}
                    </h4>
                    {section.content.hometown.type === 'complex' ? (
                      <div className="space-y-3">
                        {Object.entries(section.content.hometown).map(([key, value]: [string, any]) => {
                          if (key === 'title' || key === 'type') return null;
                          return (
                            <div key={key} className="bg-white/50 rounded p-3 border border-amber-100">
                              <h5 className="font-semibold text-amber-700 mb-2 text-sm">{value.title}</h5>
                              <ul className="space-y-1 text-sm">
                                {value.items.map((item: string, index: number) => (
                                  <li key={index}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="leading-relaxed text-sm md:text-base">
                        {section.content.hometown.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {section.type === 'complex' && section.id === 'family-background' && (
              <>
                {/* Parents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {section.content.parents.map((parent: any, index: number) => (
                    <div key={index} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(parent.color)}`}>
                      <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                        {getSubIconComponent('parent')}
                        {parent.title}
                      </h4>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {parent.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Siblings */}
                <div>
                  <h4 className="font-bold text-amber-800 mb-4 text-base md:text-lg flex items-center">
                    {getSubIconComponent('sibling')}
                    {section.content.siblings.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                    {section.content.siblings.children.map((child: any, index: number) => (
                      <div key={index} className="bg-amber-50/60 md:bg-amber-50/50 rounded-lg p-3 md:p-4 border border-amber-200">
                        <h5 className="font-semibold text-sm md:text-base">{child.name}</h5>
                        <p className="text-sm leading-relaxed">{child.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {section.type === 'cards' && (
              <div className="space-y-4 md:space-y-6">
                {section.content.map((card: any, index: number) => (
                  <div key={index} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(card.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">
                      {card.title}
                    </h4>
                    {card.type === 'text' ? (
                      <p className="leading-relaxed text-sm md:text-base">{card.content}</p>
                    ) : (
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {card.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {section.type === 'influences' && (
              <div className="space-y-4 md:space-y-6">
                {section.content.map((influence: any, index: number) => (
                  <div key={index} className={`border-l-4 ${getBorderColorClass(influence.color)} pl-4 md:pl-6 bg-white/30 md:bg-transparent rounded-r p-3 md:p-0`}>
                    <h4 className="font-bold text-amber-800 text-base md:text-lg">{influence.title}</h4>
                    <ul className="mt-2 space-y-1 text-sm md:text-base leading-relaxed">
                      {influence.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'grid' && section.id === 'childhood-memories' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((memory: any, index: number) => (
                  <div key={index} className="bg-amber-50/50 md:bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-300">
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">{memory.title}</h4>
                    <p className="text-sm md:text-base leading-relaxed">{memory.content}</p>
                  </div>
                ))}
              </div>
            )}

            {section.type === 'detailed_memories' && (
              <div className="space-y-4 md:space-y-6">
                {section.content.map((memory: any, index: number) => (
                  <div key={index} className="bg-white/40 md:bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h4 className="font-bold text-amber-800 text-base md:text-lg">{memory.title}</h4>
                      <span className="text-sm md:text-base text-amber-600 font-medium italic">{memory.age}</span>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed mb-3">{memory.content}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-amber-50/50 rounded p-3 border border-amber-200">
                        <h5 className="font-semibold text-amber-700 mb-1">Significance:</h5>
                        <p className="text-amber-600">{memory.significance}</p>
                      </div>
                      
                      {memory.literary_connection && (
                        <div className="bg-amber-50/50 rounded p-3 border border-amber-200">
                          <h5 className="font-semibold text-amber-700 mb-1">Literary Connection:</h5>
                          <p className="text-amber-600">{memory.literary_connection}</p>
                        </div>
                      )}
                      
                      {memory.scholarly_note && (
                        <div className="bg-amber-50/50 rounded p-3 border border-amber-200 md:col-span-2">
                          <h5 className="font-semibold text-amber-700 mb-1">Scholarly Note:</h5>
                          <p className="text-amber-600">{memory.scholarly_note}</p>
                        </div>
                      )}
                      
                      {memory.character_development && (
                        <div className="bg-amber-50/50 rounded p-3 border border-amber-200">
                          <h5 className="font-semibold text-amber-700 mb-1">Character Development:</h5>
                          <p className="text-amber-600">{memory.character_development}</p>
                        </div>
                      )}
                      
                      {memory.later_influence && (
                        <div className="bg-amber-50/50 rounded p-3 border border-amber-200">
                          <h5 className="font-semibold text-amber-700 mb-1">Later Influence:</h5>
                          <p className="text-amber-600">{memory.later_influence}</p>
                        </div>
                      )}
                      
                      {memory.philosophical_development && (
                        <div className="bg-amber-50/50 rounded p-3 border border-amber-200">
                          <h5 className="font-semibold text-amber-700 mb-1">Philosophical Development:</h5>
                          <p className="text-amber-600">{memory.philosophical_development}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

      </div>
    </PageLayout>
  );
} 