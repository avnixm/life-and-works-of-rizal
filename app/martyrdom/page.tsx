import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Martyrdom - José Rizal',
  description: 'Learn about José Rizal\'s final days, trial, and martyrdom that made him the national hero of the Philippines.',
};

// Icon Components
const ArrestDetailsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const TrialProceedingsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
  </svg>
);

const FinalPreparationsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const ExecutionDetailsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MourningHeroStatusIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const MonumentsRecognitionIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const LastingLegacyIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

// Sub-icons
const JourneyIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ArrestIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const TrialIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
  </svg>
);

const WritingIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const VisitorsIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const SunriseIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ImpactIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const HeroIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const MonumentIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const InternationalIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FlagIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const ThoughtIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default async function Martyrdom() {
  const data = await loadPageData('martyrdom');

  const getMainIconComponent = (sectionType: string) => {
    switch (sectionType) {
      case 'arrest_details':
        return <ArrestDetailsIcon />;
      case 'trial_proceedings':
        return <TrialProceedingsIcon />;
      case 'final_preparations':
        return <FinalPreparationsIcon />;
      case 'execution_details':
        return <ExecutionDetailsIcon />;
      case 'mourning_hero_status':
        return <MourningHeroStatusIcon />;
      case 'monuments_recognition':
        return <MonumentsRecognitionIcon />;
      case 'lasting_legacy':
        return <LastingLegacyIcon />;
      default:
        return null;
    }
  };

  const getSubIconComponent = (itemId: string) => {
    switch (itemId) {
      case 'journey-to-manila':
        return <JourneyIcon />;
      case 'arrest-imprisonment':
        return <ArrestIcon />;
      case 'court-martial':
        return <TrialIcon />;
      case 'last-writings':
        return <WritingIcon />;
      case 'final-visitors':
        return <VisitorsIcon />;
      case 'immediate-impact':
        return <ImpactIcon />;
      case 'hero-recognition':
        return <HeroIcon />;
      case 'major-monuments':
        return <MonumentIcon />;
      case 'international-recognition':
        return <InternationalIcon />;
      default:
        return null;
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
            
            {/* Arrest Details */}
            {section.type === 'arrest_details' && (
              <>
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)} mb-4 md:mb-6`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Journey details */}
                    {item.travel_details && item.revolution_context && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">
                            {item.travel_details.title}
                          </h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.travel_details.items.map((detail: string, index: number) => (
                              <li key={index}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">
                            {item.revolution_context.title}
                          </h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.revolution_context.items.map((detail: string, index: number) => (
                              <li key={index}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Arrest and imprisonment details */}
                    {item.arrest_details && item.prison_details && (
                      <div className="space-y-3">
                        <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">
                            {item.arrest_details.title}
                          </h5>
                          <p className="text-xs md:text-sm leading-relaxed">
                            {item.arrest_details.description}
                          </p>
                        </div>
                        <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">
                            {item.prison_details.title}
                          </h5>
                          <p className="text-xs md:text-sm leading-relaxed">
                            {item.prison_details.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

            {/* Trial Proceedings */}
            {section.type === 'trial_proceedings' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Charges */}
                    {item.primary_charges && item.evidence_presented && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Primary Charges:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.primary_charges.map((charge: string, index: number) => (
                              <li key={index}>• {charge}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Evidence Presented:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.evidence_presented.map((evidence: string, index: number) => (
                              <li key={index}>• {evidence}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Court details */}
                    {item.court_details && (
                      <div className="space-y-3">
                        <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Court Details:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {item.court_details.left_column.map((detail: string, index: number) => (
                                <li key={index}>• {detail}</li>
                              ))}
                            </ul>
                            <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                              {item.court_details.right_column.map((detail: string, index: number) => (
                                <li key={index}>• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {item.rizal_defense && (
                          <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Rizal's Defense:</h5>
                            <p className="text-xs md:text-sm leading-relaxed">{item.rizal_defense}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Verdict */}
                    {item.verdict && (
                      <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                        <div className="text-center mb-3 md:mb-4">
                          <h5 className="font-bold text-red-800 text-base md:text-lg">{item.verdict}</h5>
                          <p className="text-xs md:text-sm italic">{item.date}</p>
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Final Preparations */}
            {section.type === 'final_preparations' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Last works */}
                    {item.mi_ultimo_adios && item.final_letters && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">"Mi Último Adiós":</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.mi_ultimo_adios.map((detail: string, index: number) => (
                              <li key={index}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Final Letters:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.final_letters.map((letter: string, index: number) => (
                              <li key={index}>• {letter}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Final visitors */}
                    {item.family_members && item.religious_preparation && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Family Members:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.family_members.map((member: string, index: number) => (
                              <li key={index}>• {member}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Religious Preparation:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.religious_preparation.map((prep: string, index: number) => (
                              <li key={index}>• {prep}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Execution Details */}
            {section.type === 'execution_details' && (
              <div className={`rounded-lg p-4 md:p-6 border ${getColorClasses(section.content.color)} mb-4 md:mb-6`}>
                <h4 className="font-bold text-amber-800 mb-3 md:mb-4 text-base md:text-lg flex items-center">
                  <SunriseIcon />
                  {section.content.date_time}
                </h4>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                    <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Final Moments:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                        {section.content.final_moments.left_column.map((moment: string, index: number) => (
                          <li key={index}>• {moment}</li>
                        ))}
                      </ul>
                      <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                        {section.content.final_moments.right_column.map((moment: string, index: number) => (
                          <li key={index}>• {moment}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 md:p-4 border md:border-0">
                    <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Witnesses and Atmosphere:</h5>
                    <p className="text-xs md:text-sm leading-relaxed">
                      {section.content.witnesses_atmosphere}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Mourning and Hero Status */}
            {section.type === 'mourning_hero_status' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Immediate impact */}
                    {item.public_reaction && item.revolutionary_response && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Public Reaction:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.public_reaction.map((reaction: string, index: number) => (
                              <li key={index}>• {reaction}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Revolutionary Response:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.revolutionary_response.map((response: string, index: number) => (
                              <li key={index}>• {response}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Hero recognition */}
                    {item.official_declaration && (
                      <div className="space-y-3">
                        <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Official Declaration:</h5>
                          <p className="text-xs md:text-sm leading-relaxed">{item.official_declaration}</p>
                        </div>
                        <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Why Rizal Became the National Hero:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.why_national_hero.map((reason: string, index: number) => (
                              <li key={index}>• {reason}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Monuments and Recognition */}
            {section.type === 'monuments_recognition' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Major monuments */}
                    {item.rizal_monument_manila && item.other_monuments && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Rizal Monument, Manila:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.rizal_monument_manila.map((detail: string, index: number) => (
                              <li key={index}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Other Notable Monuments:</h5>
                          <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                            {item.other_monuments.map((monument: string, index: number) => (
                              <li key={index}>• {monument}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* International recognition */}
                    {item.countries && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {item.countries.map((country: any, index: number) => (
                          <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 text-center border md:border-0">
                            <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{country.name}</h5>
                            <ul className="text-xs leading-relaxed space-y-1">
                              {country.recognitions.map((recognition: string, idx: number) => (
                                <li key={idx}>• {recognition}</li>
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

            {/* Lasting Legacy */}
            {section.type === 'lasting_legacy' && (
              <div className={`rounded-lg p-4 md:p-6 border ${getColorClasses(section.content.color)}`}>
                <h4 className="font-bold text-amber-800 mb-3 md:mb-4 text-base md:text-lg flex items-center">
                  <FlagIcon />
                  {section.content.title}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-3 md:space-y-4">
                    {section.content.legacy_areas.slice(0, 2).map((area: any, index: number) => (
                      <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                        <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{area.title}</h5>
                        <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                          {area.items.map((item: string, idx: number) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    {section.content.legacy_areas.slice(2, 4).map((area: any, index: number) => (
                      <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                        <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{area.title}</h5>
                        <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                          {area.items.map((item: string, idx: number) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50/60 md:bg-yellow-50/50 rounded p-3 md:p-4 mt-4 md:mt-6 border md:border-0">
                  <h5 className="font-semibold text-amber-700 mb-2 text-center text-sm md:text-base flex items-center justify-center">
                    <ThoughtIcon />
                    Eternal Message:
                  </h5>
                  <p className="text-xs md:text-sm leading-relaxed text-center italic">
                    {section.content.eternal_message}
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}

      </div>
    </PageLayout>
  );
} 