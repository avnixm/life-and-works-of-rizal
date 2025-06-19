"use client";
import { useState } from "react";

// Color utility functions (client-safe versions)
const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-50/60 md:bg-blue-50/50 border-blue-200",
    green: "bg-green-50/60 md:bg-green-50/50 border-green-200", 
    yellow: "bg-yellow-50/60 md:bg-yellow-50/50 border-yellow-200",
    red: "bg-red-50/60 md:bg-red-50/50 border-red-200",
    purple: "bg-purple-50/60 md:bg-purple-50/50 border-purple-200",
    orange: "bg-orange-50/60 md:bg-orange-50/50 border-orange-200",
    gray: "bg-gray-50/60 md:bg-gray-50/50 border-gray-200",
    cyan: "bg-cyan-50/60 md:bg-cyan-50/50 border-cyan-200",
    amber: "bg-amber-50/60 md:bg-amber-50/50 border-amber-200",
  };
  return colorMap[color] || "bg-amber-50/60 md:bg-amber-50/50 border-amber-200";
};

// Main Section Icon Components
const GovernmentSectionIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const UsersSectionIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ChurchSectionIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EducationSectionIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const EconomySectionIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

// Sub-section Icon Components
const GovernmentIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const LocalGovIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

const CorruptionIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const SocialIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ChurchIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const EconomyIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

export default function SectionSwitcher({ sections }: { sections: any[] }) {
  const [selected, setSelected] = useState(sections[0].id);
  const section = sections.find((s) => s.id === selected);

  const getMainIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'government':
        return <GovernmentSectionIcon />;
      case 'users':
        return <UsersSectionIcon />;
      case 'church':
        return <ChurchSectionIcon />;
      case 'education':
        return <EducationSectionIcon />;
      case 'economy':
        return <EconomySectionIcon />;
      default:
        return null;
    }
  };

  const getSubIconComponent = (itemId: string) => {
    switch (itemId) {
      case 'government-structure':
      case 'institutional-structure':
      case 'primary-education':
      case 'agricultural-economy':
        return <GovernmentIcon />;
      case 'local-governance':
      case 'secondary-higher-education':
      case 'trade-commerce':
        return <LocalGovIcon />;
      case 'corruption-problems':
      case 'economic-power':
      case 'labor-taxation':
      case 'economic-problems':
        return <CorruptionIcon />;
      case 'spanish-classes':
      case 'mixed-heritage-classes':
      case 'filipino-classes':
      case 'chinese-community':
        return <SocialIcon />;
      case 'political-influence':
      case 'education-control':
      case 'conflicts-resistance':
        return <ChurchIcon />;
      case 'educational-problems':
      case 'educational-awakening':
        return <EducationIcon />;
      case 'emerging-classes':
        return <EconomyIcon />;
      default:
        return null;
    }
  };

  const renderContent = (content: any) => {
    if (!content || !Array.isArray(content)) return null;

    return content.map((item: any) => (
      <div key={item.id} className={`rounded-lg p-4 md:p-6 border ${getColorClasses(item.color)} mb-4 md:mb-6`}>
        <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
          {getSubIconComponent(item.id)}
          {item.title}
        </h4>

        {/* Grid type */}
        {item.type === 'grid' && item.details && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.details.map((detail: any, index: number) => (
              <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {detail.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Complex type */}
        {item.type === 'complex' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {item.details.map((detail: any, index: number) => (
                <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                  <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.subtitle}</h5>
                  <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                    {detail.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {item.special_features && (
              <div className="bg-amber-50/60 md:bg-amber-50/50 rounded p-3 md:p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{item.special_features.title}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {item.special_features.items.map((feature: string, index: number) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Problems type */}
        {item.type === 'problems' && item.issues && (
          <div className="space-y-3">
            {item.issues.map((issue: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{issue.title}</h5>
                <p className="text-xs md:text-sm leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Dual class type */}
        {item.type === 'dual_class' && item.classes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.classes.map((cls: any, index: number) => (
              <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{cls.name}</h5>
                <p className="text-xs italic mb-2">{cls.description}</p>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {cls.characteristics.map((char: string, charIndex: number) => (
                    <li key={charIndex}>• {char}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Heritage groups type */}
        {item.type === 'heritage_groups' && item.groups && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {item.groups.map((group: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 text-center border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{group.name}</h5>
                <p className="text-xs italic mb-2">{group.background}</p>
                <ul className="text-xs leading-relaxed space-y-1">
                  {group.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Native hierarchy type */}
        {item.type === 'native_hierarchy' && item.hierarchy && (
          <div className="space-y-4">
            {item.hierarchy.map((tier: any, index: number) => (
              <div key={index} className="border-l-4 border-amber-400 pl-4 md:pl-6 bg-white/30 md:bg-transparent rounded-r p-3 md:p-0">
                <h5 className="font-bold text-amber-800 mb-2 text-sm md:text-base">{tier.class}</h5>
                <p className="text-xs italic mb-2">{tier.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <h6 className="font-semibold text-amber-700 text-xs md:text-sm mb-1">Composition:</h6>
                    <ul className="space-y-1 text-xs leading-relaxed">
                      {tier.composition.map((comp: string, compIndex: number) => (
                        <li key={compIndex}>• {comp}</li>
                      ))}
                    </ul>
                  </div>
                  {tier.privileges && (
                    <div>
                      <h6 className="font-semibold text-amber-700 text-xs md:text-sm mb-1">Privileges:</h6>
                      <ul className="space-y-1 text-xs leading-relaxed">
                        {tier.privileges.map((priv: string, privIndex: number) => (
                          <li key={privIndex}>• {priv}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tier.significance && (
                    <div>
                      <h6 className="font-semibold text-amber-700 text-xs md:text-sm mb-1">Significance:</h6>
                      <ul className="space-y-1 text-xs leading-relaxed">
                        {tier.significance.map((sig: string, sigIndex: number) => (
                          <li key={sigIndex}>• {sig}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tier.conditions && (
                    <div>
                      <h6 className="font-semibold text-amber-700 text-xs md:text-sm mb-1">Conditions:</h6>
                      <ul className="space-y-1 text-xs leading-relaxed">
                        {tier.conditions.map((cond: string, condIndex: number) => (
                          <li key={condIndex}>• {cond}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Special community type */}
        {item.type === 'special_community' && item.details && (
          <div className="space-y-3">
            <div className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
              <p className="text-xs md:text-sm leading-relaxed mb-3">{item.details.background}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Contributions:</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {item.details.contributions.map((contrib: string, index: number) => (
                    <li key={index}>• {contrib}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/40 md:bg-transparent rounded p-3 md:p-0 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">Challenges:</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {item.details.challenges.map((challenge: string, index: number) => (
                    <li key={index}>• {challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Church hierarchy type */}
        {item.type === 'church_hierarchy' && item.hierarchy && (
          <div className="space-y-3">
            {item.hierarchy.map((level: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{level.level}</h5>
                <p className="text-xs italic mb-2">{level.description}</p>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {level.powers.map((power: string, powerIndex: number) => (
                    <li key={powerIndex}>• {power}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Economic control type */}
        {item.type === 'economic_control' && item.aspects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.aspects.map((aspect: any, index: number) => (
              <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{aspect.title}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {aspect.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Political control type */}
        {item.type === 'political_control' && item.powers && (
          <div className="space-y-3">
            {item.powers.map((power: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{power.area}</h5>
                <p className="text-xs md:text-sm leading-relaxed">{power.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Educational monopoly type */}
        {item.type === 'educational_monopoly' && item.control_areas && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.control_areas.map((area: any, index: number) => (
              <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{area.institution}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {area.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Church conflicts type */}
        {item.type === 'church_conflicts' && item.conflicts && (
          <div className="space-y-3">
            {item.conflicts.map((conflict: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{conflict.title}</h5>
                <p className="text-xs md:text-sm leading-relaxed">{conflict.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Basic education type */}
        {item.type === 'basic_education' && item.characteristics && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.characteristics.map((char: any, index: number) => (
              <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{char.aspect}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {char.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Advanced education type */}
        {item.type === 'advanced_education' && item.institutions && (
          <div className="space-y-3">
            {item.institutions.map((inst: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">
                  {inst.name} ({inst.founded})
                </h5>
                <p className="text-xs italic mb-2">Operated by: {inst.operator}</p>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {inst.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Educational issues type */}
        {item.type === 'educational_issues' && item.problems && (
          <div className="space-y-3">
            {item.problems.map((problem: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{problem.category}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {problem.issues.map((issue: string, issueIndex: number) => (
                    <li key={issueIndex}>• {issue}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Intellectual development type */}
        {item.type === 'intellectual_development' && item.developments && (
          <div className="space-y-3">
            {item.developments.map((dev: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{dev.period}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {dev.changes.map((change: string, changeIndex: number) => (
                    <li key={changeIndex}>• {change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Agriculture system type */}
        {item.type === 'agriculture_system' && item.aspects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.aspects.map((aspect: any, index: number) => (
              <div key={index} className="bg-white/40 md:bg-transparent rounded p-3 md:p-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{aspect.category}</h5>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {aspect.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Trade system type */}
        {item.type === 'trade_system' && item.systems && (
          <div className="space-y-3">
            {item.systems.map((system: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{system.name}</h5>
                <p className="text-xs italic mb-2">{system.description}</p>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {(system.characteristics || system.impacts).map((item: string, itemIndex: number) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Labor tax system type */}
        {item.type === 'labor_tax_system' && item.systems && (
          <div className="space-y-3">
            {item.systems.map((system: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{system.system}</h5>
                <p className="text-xs italic mb-2">{system.description}</p>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {system.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Economic classes type */}
        {item.type === 'economic_classes' && item.classes && (
          <div className="space-y-3">
            {item.classes.map((cls: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{cls.class}</h5>
                <p className="text-xs italic mb-2">{cls.development}</p>
                <ul className="space-y-1 text-xs md:text-sm leading-relaxed">
                  {cls.characteristics.map((char: string, charIndex: number) => (
                    <li key={charIndex}>• {char}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Economic issues type */}
        {item.type === 'economic_issues' && item.problems && (
          <div className="space-y-3">
            {item.problems.map((problem: any, index: number) => (
              <div key={index} className="bg-white/60 md:bg-white/50 rounded p-3 md:p-4 border md:border-0">
                <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{problem.issue}</h5>
                <p className="text-xs md:text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`px-4 py-2 rounded-xl font-semibold border transition-colors duration-200 text-sm md:text-base
              ${selected === s.id
                ? "bg-amber-900 text-amber-50 border-amber-900 shadow"
                : "bg-white/80 text-amber-900 border-amber-300 hover:bg-amber-100"}
            `}
            onClick={() => setSelected(s.id)}
          >
            {s.title}
          </button>
        ))}
      </div>
      <div className="space-y-6 md:space-y-8 text-amber-900">
        <section className="bg-white/40 md:bg-transparent rounded-lg p-4 md:p-6 border border-amber-200 mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
            {getMainIconComponent(section.icon)}
            {section.title}
          </h3>
          {renderContent(section.content)}
        </section>
      </div>
    </>
  );
} 