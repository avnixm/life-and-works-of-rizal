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
              <div className="space-y-8">
                {section.content.map((novel: any) => (
                  <div key={novel.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(novel.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl">{novel.title}</h4>
                    <p className="text-sm md:text-base italic mb-4">{novel.subtitle}</p>

                    {/* Publication Details */}
                    {novel.publication_details && (
                      <div className="bg-gray-50/50 rounded p-3 mb-4 border border-gray-200">
                        <h5 className="font-semibold mb-2 text-base">Publication Details:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><strong>Publisher:</strong> {novel.publication_details.publisher}</div>
                          <div><strong>Location:</strong> {novel.publication_details.location}</div>
                          <div><strong>Date:</strong> {novel.publication_details.date}</div>
                          <div><strong>Pages:</strong> {novel.publication_details.pages}</div>
                          <div><strong>First Edition:</strong> {novel.publication_details.first_edition}</div>
                          <div><strong>Cost:</strong> {novel.publication_details.cost}</div>
                        </div>
                      </div>
                    )}

                    {/* Cost Analysis */}
                    {novel.publication_details?.cost_analysis && (
                      <div className="bg-amber-50/30 rounded p-3 mb-4 border border-amber-200">
                        <h5 className="font-semibold mb-3 text-base text-amber-800">Cost Analysis & Modern Value (2025):</h5>
                        
                        {/* Modern Value 2025 */}
                        {novel.publication_details.cost_analysis.modern_value_2025 && (
                          <div className="bg-white/40 rounded p-3 mb-3 border border-amber-100">
                            <h6 className="font-semibold text-amber-700 text-sm mb-2">What it would cost today in PHP:</h6>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                              {novel.publication_details.cost_analysis.modern_value_2025.printing_cost_today && (
                                <div><strong>Total printing cost:</strong> {novel.publication_details.cost_analysis.modern_value_2025.printing_cost_today}</div>
                              )}
                              {novel.publication_details.cost_analysis.modern_value_2025.per_book_cost_today && (
                                <div><strong>Per book cost:</strong> {novel.publication_details.cost_analysis.modern_value_2025.per_book_cost_today}</div>
                              )}
                              {novel.publication_details.cost_analysis.modern_value_2025.selling_price_today && (
                                <div><strong>Selling price:</strong> {novel.publication_details.cost_analysis.modern_value_2025.selling_price_today}</div>
                              )}
                              {novel.publication_details.cost_analysis.modern_value_2025.actual_price_today && (
                                <div><strong>Actual price paid:</strong> {novel.publication_details.cost_analysis.modern_value_2025.actual_price_today}</div>
                              )}
                              {novel.publication_details.cost_analysis.modern_value_2025.normal_price_today && (
                                <div><strong>Normal price (without confiscation):</strong> {novel.publication_details.cost_analysis.modern_value_2025.normal_price_today}</div>
                              )}
                              {novel.publication_details.cost_analysis.modern_value_2025.comparison && (
                                <div><strong>Comparison:</strong> {novel.publication_details.cost_analysis.modern_value_2025.comparison}</div>
                              )}
                              {novel.publication_details.cost_analysis.modern_value_2025.inflation_factor && (
                                <div><strong>Inflation factor:</strong> {novel.publication_details.cost_analysis.modern_value_2025.inflation_factor}</div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Historical Context */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          {novel.publication_details.cost_analysis.printing_cost && (
                            <div><strong>Original printing cost:</strong> {novel.publication_details.cost_analysis.printing_cost}</div>
                          )}
                          {novel.publication_details.cost_analysis.cost_per_book && (
                            <div><strong>Cost per book:</strong> {novel.publication_details.cost_analysis.cost_per_book}</div>
                          )}
                          {novel.publication_details.cost_analysis.actual_selling_price && (
                            <div><strong>Likely selling price:</strong> {novel.publication_details.cost_analysis.actual_selling_price}</div>
                          )}
                          {novel.publication_details.cost_analysis.original_selling_price && (
                            <div><strong>Actual selling price:</strong> {novel.publication_details.cost_analysis.original_selling_price}</div>
                          )}
                          {novel.publication_details.cost_analysis.peso_equivalent && (
                            <div><strong>Peso equivalent:</strong> {novel.publication_details.cost_analysis.peso_equivalent}</div>
                          )}
                          {novel.publication_details.cost_analysis.purchasing_power_1891 && (
                            <div><strong>Purchasing power:</strong> {novel.publication_details.cost_analysis.purchasing_power_1891}</div>
                          )}
                          {novel.publication_details.cost_analysis.rarity_factor && (
                            <div><strong>Rarity factor:</strong> {novel.publication_details.cost_analysis.rarity_factor}</div>
                          )}
                          {novel.publication_details.cost_analysis.normal_price_estimate && (
                            <div><strong>Normal price estimate:</strong> {novel.publication_details.cost_analysis.normal_price_estimate}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Summary */}
                    <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0 mb-4">
                      <h5 className="font-semibold mb-2 text-base md:text-lg">Summary:</h5>
                      <p className="text-sm md:text-base leading-relaxed">
                        {novel.comprehensive_summary || novel.summary}
                      </p>
                    </div>

                    {/* Themes */}
                    <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0 mb-4">
                      <h5 className="font-semibold mb-2 text-base md:text-lg">
                        {novel.detailed_themes ? 'Major Themes:' : 'Main Themes:'}
                      </h5>
                      {novel.detailed_themes ? (
                        <div className="space-y-3">
                          {novel.detailed_themes.map((themeObj: any, index: number) => (
                            <div key={index} className="bg-blue-50/30 rounded p-3 border border-blue-200">
                              <h6 className="font-semibold text-amber-800 text-sm mb-1">{themeObj.theme}</h6>
                              <p className="text-sm text-amber-700 mb-1">{themeObj.description}</p>
                              <p className="text-sm text-amber-600 italic">Examples: {themeObj.examples}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="text-sm md:text-base space-y-1 leading-relaxed">
                          {(novel.themes || []).map((theme: string, index: number) => (
                            <li key={index}>• {theme}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Characters */}
                    <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0 mb-4">
                      <h5 className="font-semibold mb-2 text-base md:text-lg">
                        {novel.major_characters ? 'Major Characters:' : 'Key Characters:'}
                      </h5>
                      {novel.major_characters ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {novel.major_characters.map((character: any, index: number) => (
                            <div key={index} className="bg-amber-50/30 rounded p-3 border border-amber-200">
                              <h6 className="font-semibold text-amber-800 text-sm mb-1">{character.name}</h6>
                              <p className="text-sm text-amber-700 mb-1">
                                <strong>Role:</strong> {character.role}
                              </p>
                              <p className="text-sm text-amber-600 mb-1">{character.description}</p>
                              <p className="text-sm text-amber-600 italic">
                                <strong>Symbolism:</strong> {character.symbolism}
                              </p>
                              {character.secret && (
                                <p className="text-sm text-amber-700 mt-1">
                                  <strong>Secret:</strong> {character.secret}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="text-sm md:text-base space-y-1 leading-relaxed">
                          {(novel.characters || []).map((character: string, index: number) => (
                            <li key={index}>• {character}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Literary Significance */}
                    {novel.literary_significance && (
                      <div className="bg-amber-50/30 rounded p-3 border border-amber-200 mb-4">
                        <h5 className="font-semibold mb-2 text-base text-amber-800">Literary Significance:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                          <div><strong>Style:</strong> {novel.literary_significance.style}</div>
                          <div><strong>Structure:</strong> {novel.literary_significance.structure}</div>
                          <div><strong>Language:</strong> {novel.literary_significance.language}</div>
                          <div><strong>Innovation:</strong> {novel.literary_significance.innovation}</div>
                        </div>
                      </div>
                    )}

                    {/* Historical Impact */}
                    {novel.historical_impact && (
                      <div className="bg-amber-50/30 rounded p-3 border border-amber-200">
                        <h5 className="font-semibold mb-2 text-base text-amber-800">Historical Impact:</h5>
                        <div className="space-y-1 text-sm">
                          <div><strong>Immediate:</strong> {novel.historical_impact.immediate}</div>
                          <div><strong>Political:</strong> {novel.historical_impact.political}</div>
                          <div><strong>Cultural:</strong> {novel.historical_impact.cultural}</div>
                          <div><strong>Literary:</strong> {novel.historical_impact.literary}</div>
                        </div>
                      </div>
                    )}
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
                    <p className="text-sm md:text-base leading-relaxed mb-3">{section.content.description}</p>
                    <blockquote className="text-sm italic bg-amber-50/60 md:bg-amber-50/50 p-3 rounded border-l-4 border-amber-300">
                      "{section.content.quote.text}" - {section.content.quote.author}
                    </blockquote>
                  </div>

                  {/* Chapter Summaries */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-amber-800 text-base md:text-lg">Key Annotations by Chapter:</h5>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {section.content.chapters.map((chapter: any) => (
                        <div key={chapter.number} className="bg-white/30 md:bg-white/20 rounded p-3 border border-amber-100">
                          <h6 className="font-semibold text-amber-800 text-sm md:text-base mb-2">
                            Chapter {chapter.number}: {chapter.title}
                          </h6>
                          <p className="text-sm leading-relaxed">{chapter.content}</p>
                        </div>
                      ))}
                    </div>

                    {/* Major Themes */}
                    <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 border border-amber-200">
                      <h5 className="font-semibold text-amber-800 text-base md:text-lg mb-2">Major Themes in Rizal's Annotations:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <ul className="text-sm md:text-base space-y-1 leading-relaxed">
                          {section.content.major_themes.left_column.map((theme: string, index: number) => (
                            <li key={index}>• {theme}</li>
                          ))}
                        </ul>
                        <ul className="text-sm md:text-base space-y-1 leading-relaxed">
                          {section.content.major_themes.right_column.map((theme: string, index: number) => (
                            <li key={index}>• {theme}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Historical Significance */}
                    <div className="bg-blue-50/60 md:bg-blue-50/50 rounded p-3 border border-blue-200">
                      <h5 className="font-semibold text-amber-800 text-base md:text-lg mb-2">Historical Significance:</h5>
                      <p className="text-sm md:text-base leading-relaxed">{section.content.historical_significance}</p>
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
                    <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl">{essay.title}</h4>
                    <div className="space-y-3">
                      <p className="text-sm md:text-base leading-relaxed">{essay.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white/30 md:bg-transparent rounded p-3 md:p-0">
                          <h5 className="font-semibold text-amber-700 text-sm mb-2">Main Arguments:</h5>
                          <ul className="text-sm space-y-1 leading-relaxed">
                            {(essay.main_arguments || []).map((arg: string, index: number) => <li key={index}>• {arg}</li>)}
                          </ul>
                        </div>
                        <div className="bg-white/30 md:bg-transparent rounded p-3 md:p-0">
                          <h5 className="font-semibold text-amber-700 text-sm mb-2">Solutions Proposed:</h5>
                          <ul className="text-sm space-y-1 leading-relaxed">
                            {(essay.solutions_proposed || []).map((sol: string, index: number) => <li key={index}>• {sol}</li>)}
                          </ul>
                        </div>
                      </div>

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
                    <p className="text-sm md:text-base leading-relaxed mb-3">{poem.description}</p>
                    <blockquote className="text-sm italic bg-amber-50/60 md:bg-amber-50/50 p-3 rounded border-l-4 border-amber-300">
                      {poem.excerpt.split('\\n').map((line: string, index: number) => (
                        <span key={index}>{line}<br /></span>
                      ))}
                    </blockquote>
                  </div>
                ))}
              </div>
            )}

            {/* Letters */}
            {section.type === 'letters' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.content.map((letter_group: any) => (
                  <div key={letter_group.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(letter_group.color)}`}>
                    <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg">{letter_group.title}</h4>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {letter_group.items.map((item: string, index: number) => (
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