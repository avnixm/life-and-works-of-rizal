import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Major Works - José Rizal',
  description: 'Read about José Rizal\'s major literary works including Noli Me Tangere, El Filibusterismo, and his other writings.',
};

// Icon Components
const NovelsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const HistoricalWorkIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const EssaysIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PoemsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const LettersIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default async function MajorWorks() {
  const data = await loadPageData('major-works');

  const getMainIconComponent = (sectionType: string) => {
    switch (sectionType) {
      case 'novels':
        return <NovelsIcon />;
      case 'historical_work':
        return <HistoricalWorkIcon />;
      case 'essays':
        return <EssaysIcon />;
      case 'poems':
        return <PoemsIcon />;
      case 'letters':
        return <LettersIcon />;
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
            
            {/* Novels */}
            {section.type === 'novels' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((novel: any) => (
                  <div key={novel.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(novel.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl">{novel.title}</h4>
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm italic">{novel.subtitle}</p>
                      <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                        <h5 className="font-semibold mb-2 text-sm md:text-base">Summary:</h5>
                        <p className="text-xs md:text-sm leading-relaxed">{novel.summary}</p>
                      </div>
                      <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                        <h5 className="font-semibold mb-2 text-sm md:text-base">Main Themes:</h5>
                        <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                          {novel.themes.map((theme: string, index: number) => (
                            <li key={index}>• {theme}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                        <h5 className="font-semibold mb-2 text-sm md:text-base">Key Characters:</h5>
                        <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                          {novel.characters.map((character: string, index: number) => (
                            <li key={index}>• {character}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Historical Work */}
            {section.type === 'historical_work' && (
              <div className={`rounded-lg p-4 md:p-6 border ${getColorClasses(section.content.color)} mb-6`}>
                <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl">{section.content.title}</h4>
                <div className="space-y-4">
                  <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                    <p className="text-xs md:text-sm leading-relaxed mb-3">{section.content.description}</p>
                    <blockquote className="text-xs italic bg-amber-50/60 md:bg-amber-50/50 p-3 rounded border-l-4 border-amber-300">
                      "{section.content.quote.text}" - {section.content.quote.author}
                    </blockquote>
                  </div>

                  {/* Chapter Summaries */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-amber-800 text-sm md:text-base">Key Annotations by Chapter:</h5>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {section.content.chapters.map((chapter: any) => (
                        <div key={chapter.number} className="bg-white/30 md:bg-white/20 rounded p-3 border border-amber-100">
                          <h6 className="font-semibold text-amber-800 text-xs md:text-sm mb-2">
                            Chapter {chapter.number}: {chapter.title}
                          </h6>
                          <p className="text-xs leading-relaxed">{chapter.content}</p>
                        </div>
                      ))}
                    </div>

                    {/* Major Themes */}
                    <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 border border-amber-200">
                      <h5 className="font-semibold text-amber-800 text-sm md:text-base mb-2">Major Themes in Rizal's Annotations:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                          {section.content.major_themes.left_column.map((theme: string, index: number) => (
                            <li key={index}>• {theme}</li>
                          ))}
                        </ul>
                        <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                          {section.content.major_themes.right_column.map((theme: string, index: number) => (
                            <li key={index}>• {theme}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Historical Significance */}
                    <div className="bg-blue-50/60 md:bg-blue-50/50 rounded p-3 border border-blue-200">
                      <h5 className="font-semibold text-amber-800 text-sm md:text-base mb-2">Historical Significance:</h5>
                      <p className="text-xs md:text-sm leading-relaxed">{section.content.historical_significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Essays */}
            {section.type === 'essays' && (
              <div className="space-y-3 md:space-y-4">
                {section.content.map((essay: any) => (
                  <div key={essay.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(essay.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">{essay.title}</h4>
                    <p className="text-xs md:text-sm leading-relaxed mb-3">{essay.description}</p>
                    
                    {/* Indolence essay specific layout */}
                    {essay.id === 'indolence-filipino' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold mb-2 text-sm md:text-base">Main Arguments:</h5>
                          <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                            {essay.main_arguments.map((argument: string, index: number) => (
                              <li key={index}>• {argument}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold mb-2 text-sm md:text-base">Solutions Proposed:</h5>
                          <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                            {essay.solutions_proposed.map((solution: string, index: number) => (
                              <li key={index}>• {solution}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Philippines Century Hence essay specific layout */}
                    {essay.id === 'philippines-century-hence' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold mb-2 text-sm md:text-base">Three Possibilities:</h5>
                          <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                            {essay.three_possibilities.map((possibility: string, index: number) => (
                              <li key={index}>• {possibility}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold mb-2 text-sm md:text-base">Factors for Change:</h5>
                          <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                            {essay.factors_for_change.map((factor: string, index: number) => (
                              <li key={index}>• {factor}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                          <h5 className="font-semibold mb-2 text-sm md:text-base">His Preference:</h5>
                          <ul className="text-xs md:text-sm space-y-1 leading-relaxed">
                            {essay.his_preference.map((preference: string, index: number) => (
                              <li key={index}>• {preference}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Poems */}
            {section.type === 'poems' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((poem: any) => (
                  <div key={poem.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(poem.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">{poem.title}</h4>
                    <p className="text-xs md:text-sm leading-relaxed mb-3">{poem.description}</p>
                    <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 border md:border-0">
                      <p className="text-xs italic leading-relaxed">
                        {poem.excerpt.split('\\n').map((line: string, index: number) => (
                          <span key={index}>
                            {line}
                            {index < poem.excerpt.split('\\n').length - 1 && <><br /></>}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Letters */}
            {section.type === 'letters' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((letterType: any) => (
                  <div key={letterType.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(letterType.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">{letterType.title}</h4>
                    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm leading-relaxed">
                      {letterType.items.map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
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