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
        <h4 className="font-bold text-amber-800 mb-3 text-lg md:text-xl flex items-center">
          {getSubIconComponent(item.id)}
          {item.title}
        </h4>

        {/* Grid type */}
        {item.type === 'grid' && item.details && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {item.details.map((detail: any, index: number) => (
              <div key={index} className="bg-white/60 rounded p-4 md:bg-transparent md:p-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-base md:text-lg">{detail.subtitle}</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  {detail.items.map((item: string, itemIndex: number) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Comprehensive Government type */}
        {item.type === 'comprehensive_government' && (
          <div className="space-y-6">
            {/* Central Authority */}
            {item.central_authority && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.central_authority.subtitle}</h5>
                <div className="space-y-4">
                  <div className="bg-white/60 rounded p-4">
                    <h6 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Powers and Responsibilities:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {item.central_authority.powers_and_responsibilities.map((power: string, index: number) => (
                        <li key={index}>• {power}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded p-4">
                    <h6 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Notable Governors-General:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {item.central_authority.notable_governors_general.map((governor: string, index: number) => (
                        <li key={index}>• {governor}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Provincial Administration */}
            {item.provincial_administration && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.provincial_administration.subtitle}</h5>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                  <div className="bg-white/60 rounded p-4">
                    <h6 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Alcaldes Mayores:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {item.provincial_administration.alcaldes_mayores.map((detail: string, index: number) => (
                        <li key={index}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded p-4">
                    <h6 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Municipal Government:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {item.provincial_administration.municipal_government.map((detail: string, index: number) => (
                        <li key={index}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Administrative Challenges */}
            {item.administrative_challenges && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.administrative_challenges.subtitle}</h5>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                  <div className="bg-white/60 rounded p-4">
                    <h6 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Structural Issues:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {item.administrative_challenges.structural_issues.map((issue: string, index: number) => (
                        <li key={index}>• {issue}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/60 rounded p-4">
                    <h6 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Corruption Patterns:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {item.administrative_challenges.corruption_patterns.map((pattern: string, index: number) => (
                        <li key={index}>• {pattern}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Complex type */}
        {item.type === 'complex' && (
          <div className="space-y-4">
            {item.details.map((detail: any, index: number) => (
              <div key={index}>
                <h5 className="font-semibold text-amber-700 mb-2 text-base md:text-lg">{detail.subtitle}</h5>
                <ul className="space-y-1 list-disc list-inside text-sm md:text-base">
                  {detail.items.map((text: string, textIndex: number) => (
                    <li key={textIndex}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
            {item.special_features && (
              <div>
                <h5 className="font-semibold text-amber-700 mb-2 text-base md:text-lg">{item.special_features.title}</h5>
                <ul className="space-y-1 list-disc list-inside text-sm md:text-base">
                  {item.special_features.items.map((text: string, textIndex: number) => (
                    <li key={textIndex}>{text}</li>
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
              <div key={index}>
                <h5 className="font-semibold text-amber-800 text-base md:text-lg">{issue.title}</h5>
                <p className="text-sm md:text-base">{issue.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Dual class type */}
        {item.type === 'dual_class' && item.classes && (
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {item.classes.map((cls: any, index: number) => (
              <div key={index} className="bg-white/60 rounded p-4 border md:bg-transparent md:p-0 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{cls.name}</h5>
                <p className="text-sm italic mb-3">{cls.description}</p>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
            {item.groups.map((group: any, index: number) => (
              <div key={index} className="bg-white/70 rounded p-4 text-center border md:bg-white/50 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{group.name}</h5>
                <p className="text-sm italic mb-3">{group.background}</p>
                <ul className="text-sm leading-relaxed space-y-2">
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
          <div className="space-y-6">
            {item.hierarchy.map((tier: any, index: number) => (
              <div key={index} className="border-l-4 border-amber-400 pl-4 bg-white/50 rounded-r p-4 md:bg-transparent md:p-0 md:pl-6">
                <h5 className="font-bold text-amber-800 mb-3 text-base md:text-lg">{tier.class}</h5>
                <p className="text-sm italic mb-4">{tier.description}</p>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                  <div>
                    <h6 className="font-semibold text-amber-700 text-sm md:text-base mb-2">Composition:</h6>
                    <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                      {tier.composition.map((comp: string, compIndex: number) => (
                        <li key={compIndex}>• {comp}</li>
                      ))}
                    </ul>
                  </div>
                  {tier.privileges && (
                    <div>
                      <h6 className="font-semibold text-amber-700 text-sm md:text-base mb-2">Privileges:</h6>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {tier.privileges.map((priv: string, privIndex: number) => (
                          <li key={privIndex}>• {priv}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tier.significance && (
                    <div>
                      <h6 className="font-semibold text-amber-700 text-sm md:text-base mb-2">Significance:</h6>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {tier.significance.map((sig: string, sigIndex: number) => (
                          <li key={sigIndex}>• {sig}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tier.conditions && (
                    <div>
                      <h6 className="font-semibold text-amber-700 text-sm md:text-base mb-2">Conditions:</h6>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4">
            <div className="bg-white/70 rounded p-4 border md:bg-white/50 md:border-0">
              <p className="text-sm md:text-base leading-relaxed">{item.details.background}</p>
            </div>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
              <div className="bg-white/60 rounded p-4 border md:bg-transparent md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Contributions:</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  {item.details.contributions.map((contrib: string, index: number) => (
                    <li key={index}>• {contrib}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/60 rounded p-4 border md:bg-transparent md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">Challenges:</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {item.aspects.map((aspect: any, index: number) => (
              <div key={index} className="bg-white/60 rounded p-4 md:bg-transparent md:p-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{aspect.title}</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {item.control_areas.map((area: any, index: number) => (
              <div key={index} className="bg-white/60 rounded p-4 md:bg-transparent md:p-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{area.institution}</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {item.characteristics.map((char: any, index: number) => (
              <div key={index} className="bg-white/60 rounded p-4 md:bg-transparent md:p-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{char.aspect}</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4">
            {item.institutions.map((inst: any, index: number) => (
              <div key={index} className="bg-white/70 rounded p-4 border md:bg-white/50 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">
                  {inst.name} ({inst.founded})
                </h5>
                <p className="text-sm italic mb-3">Operated by: {inst.operator}</p>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {item.aspects.map((aspect: any, index: number) => (
              <div key={index} className="bg-white/60 rounded p-4 md:bg-transparent md:p-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{aspect.category}</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4">
            {item.systems.map((system: any, index: number) => (
              <div key={index} className="bg-white/70 rounded p-4 border md:bg-white/50 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{system.name}</h5>
                <p className="text-sm italic mb-3">{system.description}</p>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4">
            {item.systems.map((system: any, index: number) => (
              <div key={index} className="bg-white/70 rounded p-4 border md:bg-white/50 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{system.system}</h5>
                <p className="text-sm italic mb-3">{system.description}</p>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4">
            {item.classes.map((cls: any, index: number) => (
              <div key={index} className="bg-white/70 rounded p-4 border md:bg-white/50 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{cls.class}</h5>
                <p className="text-sm italic mb-3">{cls.development}</p>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
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
          <div className="space-y-4">
            {item.problems.map((problem: any, index: number) => (
              <div key={index} className="bg-white/70 rounded p-4 border md:bg-white/50 md:border-0">
                <h5 className="font-semibold text-amber-700 mb-3 text-sm md:text-base">{problem.issue}</h5>
                <p className="text-sm md:text-base leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Complex taxation type */}
        {item.type === 'complex_taxation' && (
          <div className="space-y-6">
            {/* Taxation Overview */}
            {item.taxation_overview && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-3 text-base md:text-lg">{item.taxation_overview.subtitle}</h5>
                <p className="text-sm md:text-base leading-relaxed">{item.taxation_overview.description}</p>
              </div>
            )}

            {/* Direct Taxes */}
            {item.direct_taxes && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.direct_taxes.subtitle}</h5>
                <div className="space-y-4">
                  {item.direct_taxes.taxes.map((tax: any, index: number) => (
                    <div key={index} className="bg-white/60 rounded p-4">
                      <h6 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{tax.name}</h6>
                      <p className="text-sm italic mb-3">{tax.description}</p>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {tax.details.map((detail: string, i: number) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trade Taxes */}
            {item.trade_taxes && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.trade_taxes.subtitle}</h5>
                <div className="space-y-4">
                  {item.trade_taxes.taxes.map((tax: any, index: number) => (
                    <div key={index} className="bg-white/60 rounded p-4">
                      <h6 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{tax.name}</h6>
                      <p className="text-sm italic mb-3">{tax.description}</p>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {tax.details.map((detail: string, i: number) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Forced Systems */}
            {item.forced_systems && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.forced_systems.subtitle}</h5>
                <div className="space-y-4">
                  {item.forced_systems.systems.map((system: any, index: number) => (
                    <div key={index} className="bg-white/60 rounded p-4">
                      <h6 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{system.name}</h6>
                      <p className="text-sm italic mb-3">{system.description}</p>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {system.details.map((detail: string, i: number) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Monopoly Revenues */}
            {item.monopoly_revenues && (
              <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-200">
                <h5 className="font-semibold text-amber-800 mb-4 text-base md:text-lg">{item.monopoly_revenues.subtitle}</h5>
                <div className="space-y-4">
                  {item.monopoly_revenues.monopolies.map((monopoly: any, index: number) => (
                    <div key={index} className="bg-white/60 rounded p-4">
                      <h6 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{monopoly.name}</h6>
                      <p className="text-sm italic mb-3">{monopoly.description}</p>
                      <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                        {monopoly.details.map((detail: string, i: number) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tax Collection Problems */}
            {item.tax_collection_problems && (
              <div className="bg-red-50/50 rounded-lg p-4 border border-red-200">
                <h5 className="font-semibold text-red-800 mb-4 text-base md:text-lg">{item.tax_collection_problems.subtitle}</h5>
                <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                  {item.tax_collection_problems.issues.map((issue: string, index: number) => (
                    <li key={index} className="text-red-700">• {issue}</li>
                  ))}
                </ul>
              </div>
            )}
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