import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Education - José Rizal',
  description: 'Explore the educational journey of Dr. José Rizal, from his early schooling to his university studies in Europe.',
};

// Icon Components
const EarlyEducationIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const HigherEducationIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5z" />
  </svg>
);

const TeacherIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SchoolIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const UniversityIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const EuropeIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StudyIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

export default async function Education() {
  const data = await loadPageData('education');

  const getMainIconComponent = (sectionId: string) => {
    switch (sectionId) {
      case 'early-education':
        return <EarlyEducationIcon />;
      case 'higher-education':
        return <HigherEducationIcon />;
      default:
        return null;
    }
  };

  const getStageIconComponent = (stageId: string) => {
    switch (stageId) {
      case 'first-teacher':
        return <TeacherIcon />;
      case 'binan':
      case 'ateneo':
        return <SchoolIcon />;
      case 'ust':
        return <UniversityIcon />;
      case 'madrid':
      case 'paris-heidelberg':
      case 'european-summary':
        return <EuropeIcon />;
      default:
        return <StudyIcon />;
    }
  };

  return (
    <PageLayout title={data.title} subtitle={data.subtitle}>
      <div className="space-y-6 md:space-y-8 text-amber-900">
        
        {data.sections.map((section: any) => (
          <section key={section.id} className="bg-white/40 md:bg-transparent rounded-lg p-3 md:p-0">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.id)}
              {section.title}
            </h3>
            
            {/* Educational Stages */}
            {section.type === 'educational_stages' && (
              <>
                {section.content.map((stage: any) => (
                  <div key={stage.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(stage.color)} mb-4 md:mb-6`}>
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center text-sm md:text-base">
                      {getStageIconComponent(stage.id)}
                      {stage.title}
                    </h4>
                    
                    {/* Grid type - like First Teacher */}
                    {stage.type === 'grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {stage.details.map((detail: any, index: number) => (
                          <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">{detail.subtitle}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {detail.items.map((item: string, itemIndex: number) => (
                                <li key={itemIndex}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Complex type - like Biñan, Ateneo, UST */}
                    {stage.type === 'complex' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {stage.details.map((detail: any, index: number) => (
                            <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                              <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">{detail.subtitle}</h5>
                              <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                                {detail.items.map((item: string, itemIndex: number) => (
                                  <li key={itemIndex}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Notable Experiences for Biñan */}
                        {stage.notable_experiences && (
                          <div className="bg-yellow-50/60 md:bg-yellow-50/50 rounded p-3 md:p-4">
                            <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">{stage.notable_experiences.title}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {stage.notable_experiences.items.map((item: string, index: number) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Extracurricular Activities for Ateneo */}
                        {stage.extracurricular && (
                          <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 md:p-4">
                            <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">{stage.extracurricular.title}</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                              {stage.extracurricular.activities.map((activity: any, index: number) => (
                                <div key={index} className="bg-white/30 md:bg-transparent rounded p-2 md:p-0">
                                  <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                                    {activity.items.map((item: string, itemIndex: number) => (
                                      <li key={itemIndex}>• {item}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Leaving Reasons for UST */}
                        {stage.leaving_reasons && (
                          <div className="bg-red-50/60 md:bg-red-50/50 rounded p-3 md:p-4">
                            <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">{stage.leaving_reasons.title}</h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {stage.leaving_reasons.items.map((item: string, index: number) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

            {/* International Studies */}
            {section.type === 'international_studies' && (
              <>
                {section.content.map((study: any) => (
                  <div key={study.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(study.color)} mb-4 md:mb-6`}>
                    <h4 className="font-bold text-amber-800 mb-3 flex items-center text-sm md:text-base">
                      {getStageIconComponent(study.id)}
                      {study.title}
                    </h4>

                    {/* Grid type for Madrid */}
                    {study.type === 'grid' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {study.details.map((detail: any, index: number) => (
                            <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                              <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">{detail.subtitle}</h5>
                              <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                                {detail.items.map((item: string, itemIndex: number) => (
                                  <li key={itemIndex}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Dual city type for Paris & Heidelberg */}
                    {study.type === 'dual_city' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {study.cities.map((city: any, index: number) => (
                          <div key={index} className={`rounded p-3 md:p-4 ${index === 0 ? 'bg-blue-50/60 md:bg-blue-50/50' : 'bg-amber-50/60 md:bg-amber-50/50'}`}>
                            <h5 className="font-semibold text-amber-700 mb-2 text-xs md:text-sm">
                              {city.name}
                            </h5>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {city.items.map((item: string, itemIndex: number) => (
                                <li key={itemIndex}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Fields grid for summary */}
                    {study.type === 'fields_grid' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {study.fields.map((field: any, index: number) => (
                          <div key={index} className="text-center bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                            <div className={`bg-${field.color}-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3`}>
                              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-amber-800 mb-2 text-xs md:text-sm">{field.name}</h5>
                            <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                              {field.subjects.map((subject: string, subIndex: number) => (
                                <li key={subIndex}>• {subject}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </section>
        ))}

      </div>
    </PageLayout>
  );
} 