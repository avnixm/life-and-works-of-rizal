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
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                      {getSubIconComponent(item.id)}
                      {item.title}
                    </h4>
                    
                    {/* Journey details */}
                    {item.travel_details && item.revolution_context && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-base md:text-lg">
                            {item.travel_details.title}
                          </h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.travel_details.items.map((detail: string, index: number) => (
                              <li key={index}>• {detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-base md:text-lg">
                            {item.revolution_context.title}
                          </h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
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
                          <h5 className="font-semibold text-amber-700 mb-2 text-base md:text-lg">
                            {item.arrest_details.title}
                          </h5>
                          <p className="text-sm md:text-base leading-relaxed">
                            {item.arrest_details.description}
                          </p>
                        </div>
                        <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                          <h5 className="font-semibold text-amber-700 mb-2 text-base md:text-lg">
                            {item.prison_details.title}
                          </h5>
                          <p className="text-sm md:text-base leading-relaxed">
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
                {section.content.map((item: any) => {
                  if (item.id === 'charges') {
                    return (
                      <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                        <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                          {getSubIconComponent(item.id) || <TrialIcon />}
                          {item.title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2 text-base">Primary Charges:</h5>
                            <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                              {item.primary_charges.map((charge: string, index: number) => (
                                <li key={index}>• {charge}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2 text-base">Evidence Presented:</h5>
                            <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                              {item.evidence_presented.map((evidence: string, index: number) => (
                                <li key={index}>• {evidence}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (item.id === 'trial-proceedings') {
                    return (
                      <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                        <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                          {getSubIconComponent(item.id) || <TrialIcon />}
                          {item.title}
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-amber-50/30 rounded p-3 border border-amber-200">
                            <h5 className="font-semibold text-amber-800 mb-2 text-base md:text-lg">{item.trial_structure.title}</h5>
                            <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                              {item.trial_structure.court_details.map((point: string, index: number) => (
                                <li key={index}>• {point}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-amber-50/30 rounded p-3 border border-amber-200">
                            <h5 className="font-semibold text-amber-800 mb-2 text-base md:text-lg">{item.legal_violations.title}</h5>
                            <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                              {item.legal_violations.items.map((violation: string, index: number) => (
                                <li key={index}>• {violation}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-amber-50/30 rounded p-3 border border-amber-200">
                            <h5 className="font-semibold text-amber-800 mb-2 text-base md:text-lg">{item.evidence_presented.title}</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                              <ul className="space-y-1">
                                {item.evidence_presented.prosecution_evidence.map((doc: string, index: number) => <li key={index}>• {doc}</li>)}
                              </ul>
                              <ul className="space-y-1">
                                {item.evidence_presented.defense_arguments.map((test: string, index: number) => <li key={index}>• {test}</li>)}
                              </ul>
                            </div>
                          </div>
                          <div className="bg-amber-50/30 rounded p-3 border border-amber-200">
                            <h5 className="font-semibold text-amber-800 mb-2 text-base md:text-lg">{item.key_testimonies.title}</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                               <ul className="space-y-1">
                                 <h6 className="font-semibold text-amber-700 mb-2 text-sm">Testimonies Against Rizal:</h6>
                                 {item.key_testimonies.against_rizal.map((doc: string, index: number) => <li key={index}>• {doc}</li>)}
                               </ul>
                               <ul className="space-y-1">
                                 <h6 className="font-semibold text-amber-700 mb-2 text-sm">Rizal's Statements:</h6>
                                 {item.key_testimonies.rizal_statements.map((test: string, index: number) => <li key={index}>• {test}</li>)}
                               </ul>
                             </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (item.id === 'verdict') {
                    return (
                      <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                        <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                          {getSubIconComponent(item.id) || <TrialIcon />}
                          {item.title}
                        </h4>
                        <div className="text-center mb-3">
                          <h5 className="font-bold text-red-800 text-xl">{item.verdict}</h5>
                          <p className="text-sm md:text-base italic">{item.date}</p>
                        </div>
                        <p className="text-sm md:text-base">{item.description}</p>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            )}

            {/* Final Preparations */}
            {section.type === 'final_preparations' && (
              <div className="space-y-4 md:space-y-6">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                      {getSubIconComponent(item.id) || <WritingIcon />}
                      {item.title}
                    </h4>
                    {item.mi_ultimo_adios && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Mi Último Adiós:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.mi_ultimo_adios.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Final Letters:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.final_letters.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                      </div>
                    )}
                    {item.family_members && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Family Members:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.family_members.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Religious Preparation:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.religious_preparation.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
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
              <div className={`rounded-lg p-4 md:p-6 border ${getColorClasses(section.content.color)}`}>
                 <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                    <SunriseIcon />
                    Execution at Bagumbayan ({section.content.date_time})
                  </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                    {section.content.final_moments.left_column.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                  </ul>
                  <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                    {section.content.final_moments.right_column.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                  </ul>
                </div>
                <p className="text-sm md:text-base leading-relaxed italic bg-amber-50/50 p-3 rounded">{section.content.witnesses_atmosphere}</p>
              </div>
            )}

            {/* Mourning and Hero Status */}
            {section.type === 'mourning_hero_status' && (
              <div className="space-y-4 md:space-y-6">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                      {getSubIconComponent(item.id) || <HeroIcon />}
                      {item.title}
                    </h4>
                    {item.public_reaction && (
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Public Reaction:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.public_reaction.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Revolutionary Response:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.revolutionary_response.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                      </div>
                    )}
                    {item.official_declaration && (
                      <div>
                        <p className="text-sm md:text-base leading-relaxed mb-3 italic">{item.official_declaration}</p>
                        <h5 className="font-semibold text-amber-700 mb-2 text-base">Reasons for Hero Status:</h5>
                        <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                          {item.why_national_hero.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Monuments and Recognition */}
            {section.type === 'monuments_recognition' && (
              <div className="space-y-4 md:space-y-6">
                {section.content.map((item: any) => (
                  <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
                      {getSubIconComponent(item.id) || <MonumentIcon />}
                      {item.title}
                    </h4>
                     {item.rizal_monument_manila && (
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Rizal Monument (Manila):</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.rizal_monument_manila.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2 text-base">Other Monuments:</h5>
                          <ul className="space-y-1 text-sm md:text-base leading-relaxed">
                            {item.other_monuments.map((detail: string, i: number) => <li key={i}>• {detail}</li>)}
                          </ul>
                        </div>
                      </div>
                    )}
                    {item.countries && (
                      <div className="space-y-3">
                        {item.countries.map((country: any, i: number) => (
                          <div key={i}>
                            <h5 className="font-semibold text-amber-700 mb-1 text-base">{country.name}</h5>
                            <ul className="space-y-1 text-sm md:text-base leading-relaxed list-disc list-inside">
                              {country.recognitions.map((rec: string, j: number) => <li key={j}>{rec}</li>)}
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
                        <ul className="space-y-1 text-sm md:text-base leading-relaxed">
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
                        <ul className="space-y-1 text-sm md:text-base leading-relaxed">
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
                  <p className="text-sm md:text-base leading-relaxed text-center italic">
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