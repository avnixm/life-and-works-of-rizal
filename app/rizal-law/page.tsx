import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Rizal Law - José Rizal',
  description: 'Learn about Republic Act 1425, also known as the Rizal Law, mandating the study of José Rizal\'s life and works.',
};

// Icon Components
const SummaryIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ObjectivesIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const ImportanceIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const LegalIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const CurriculumIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export default async function RizalLaw() {
  const data = await loadPageData('rizal-law');

  const getIconComponent = (sectionType: string) => {
    switch (sectionType) {
      case 'summary_section':
        return <SummaryIcon />;
      case 'objectives_list':
        return <ObjectivesIcon />;
      case 'importance_grid':
        return <ImportanceIcon />;
      case 'legal_document':
        return <LegalIcon />;
      case 'curriculum_levels':
        return <CurriculumIcon />;
      default:
        return null;
    }
  };

  const renderSection = (section: any) => {
    const IconComponent = getIconComponent(section.type);
    
    switch (section.type) {
      case 'summary_section':
        return (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-serif text-amber-800 flex items-center">
              {IconComponent}
              {section.title}
            </h3>
            <div className="prose prose-amber max-w-none">
              <div className="bg-white/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-lg md:rounded-none border border-amber-200/50 md:border-none mb-4 md:mb-0">
                {section.content.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index} className="text-base md:text-lg leading-relaxed mb-3 md:mb-4 last:mb-0">
                    <span dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                  </p>
                ))}
              </div>
            </div>
          </section>
        );

      case 'objectives_list':
        return (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-serif text-amber-800 flex items-center">
              {IconComponent}
              {section.title}
            </h3>
            <div className="bg-white/30 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-lg md:rounded-none border border-amber-200/50 md:border-none">
              <ul className="space-y-3 text-base md:text-lg">
                {section.content.objectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );

      case 'importance_grid':
        return (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-serif text-amber-800 flex items-center">
              {IconComponent}
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {section.content.items.map((item: any, index: number) => (
                <div key={index} className="bg-white/40 md:bg-amber-50/50 rounded-lg p-4 md:p-6 border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-2 md:mb-3 text-base md:text-lg">{item.title}</h4>
                  <p className="text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'legal_document':
        return (
          <section key={section.id}>
            <h3 className="text-2xl font-bold mb-4 font-serif text-amber-800 flex items-center">
              {IconComponent}
              {section.title}
            </h3>
            <div className="bg-amber-50/30 rounded-lg p-6 border border-amber-300">
              <h4 className="font-bold mb-4 text-center">{section.content.official_title}</h4>
              <p className="text-center mb-4 italic">{section.content.subtitle}</p>
              
              <div className="space-y-4 text-sm">
                {section.content.sections.map((legalSection: any, index: number) => (
                  <p key={index}>
                    <strong>Section {legalSection.number}.</strong> {legalSection.text}
                  </p>
                ))}
                
                <p className="text-right mt-4">
                  <em>{section.content.approval_date}</em>
                </p>
              </div>
            </div>
          </section>
        );

      case 'curriculum_levels':
        return (
          <section key={section.id}>
            <h3 className="text-2xl font-bold mb-4 font-serif text-amber-800 flex items-center">
              {IconComponent}
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.content.levels.map((level: any, index: number) => (
                <div key={index} className="border-l-4 border-amber-600 pl-6">
                  <h4 className="font-bold text-amber-800">{level.level}</h4>
                  <p>{level.description}</p>
                </div>
              ))}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout title={data.title} subtitle={data.subtitle}>
      <div className="space-y-6 md:space-y-8 text-amber-900">
        {data.sections.map((section: any) => renderSection(section))}
      </div>
    </PageLayout>
  );
} 