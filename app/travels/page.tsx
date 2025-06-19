import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData, getColorClasses, getBorderColorClass } from "../../lib/loadPageData";

export const metadata: Metadata = {
  title: 'Travels - José Rizal',
  description: 'Follow José Rizal\'s journeys across Europe, Asia, and America, and discover how his travels shaped his worldview.',
};

// Icon Components
const ChildhoodTravelsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const EducationalTravelsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const EuropeanTravelsIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TravelPurposesIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const TravelImpactIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ShipIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const TravelIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChurchIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const EducationTravelIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const PurposeIcon = () => (
  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

export default async function Travels() {
  const data = await loadPageData('travels');

  const getMainIconComponent = (sectionType: string) => {
    switch (sectionType) {
      case 'childhood_travels':
        return <ChildhoodTravelsIcon />;
      case 'educational_travels':
        return <EducationalTravelsIcon />;
      case 'european_travels':
        return <EuropeanTravelsIcon />;
      case 'travel_purposes':
        return <TravelPurposesIcon />;
      case 'travel_impact':
        return <TravelImpactIcon />;
      default:
        return null;
    }
  };

  const getTravelIconComponent = (travelId: string) => {
    switch (travelId) {
      case 'antipolo-pilgrimage':
        return <ChurchIcon />;
      case 'binan-travel':
      case 'manila-travel':
        return <EducationTravelIcon />;
      default:
        return <TravelIcon />;
    }
  };

  const renderSection = (section: any) => {
    switch (section.type) {
      case 'childhood_travels':
        return (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.content.travels.map((travel: any, index: number) => (
                <div key={travel.id} className={`bg-white/40 md:bg-${travel.color}-50/30 rounded-lg p-4 md:p-6 border border-${travel.color}-200`}>
                  <h4 className="font-bold text-amber-800 mb-3 flex items-center text-base md:text-lg">
                    {getTravelIconComponent(travel.id)}
                    {travel.title}
                  </h4>
                  {travel.details ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {travel.details.map((detail: any, detailIndex: number) => (
                        <div key={detailIndex} className="bg-white/30 md:bg-transparent p-3 md:p-0 rounded md:rounded-none border border-amber-200/50 md:border-none">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.category}</h5>
                          <ul className="space-y-1 text-xs md:text-sm">
                            {detail.items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white/30 md:bg-transparent p-3 md:p-0 rounded md:rounded-none border border-amber-200/50 md:border-none">
                      <p className="text-xs md:text-sm leading-relaxed">{travel.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );

      case 'educational_travels':
        return (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {section.content.travels.map((travel: any, index: number) => (
                <div key={travel.id} className={`bg-white/40 md:bg-${travel.color}-50/30 rounded-lg p-4 md:p-6 border border-${travel.color}-200`}>
                  <h4 className="font-bold text-amber-800 mb-3 text-base md:text-lg flex items-center">
                    {getTravelIconComponent(travel.id)}
                    {travel.title}
                  </h4>
                  {travel.details ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {travel.details.map((detail: any, detailIndex: number) => (
                        <div key={detailIndex} className="bg-white/30 md:bg-transparent p-3 md:p-0 rounded md:rounded-none border border-amber-200/50 md:border-none">
                          <h5 className="font-semibold text-amber-700 mb-2 text-sm md:text-base">{detail.category}</h5>
                          <ul className="space-y-1 text-xs md:text-sm">
                            {detail.items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-sm leading-relaxed mb-3">{travel.description}</p>
                      {travel.highlights && (
                        <div className="bg-amber-50/50 rounded p-4">
                          <h5 className="font-semibold text-amber-700 mb-2">{travel.highlights.title}</h5>
                          <ul className="space-y-1 text-sm">
                            {travel.highlights.items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        );

      case 'european_travels':
        return (
          <section key={section.id}>
            <h3 className="text-2xl font-bold mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            
            {/* Departure */}
            <div className={`bg-${section.content.departure.color}-50/30 rounded-lg p-6 border border-${section.content.departure.color}-200 mb-6`}>
              <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                <ShipIcon />
                {section.content.departure.title}
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {section.content.departure.details.map((detail: any, index: number) => (
                  <div key={index}>
                    <h5 className="font-semibold text-amber-700 mb-2">{detail.category}</h5>
                    <ul className="space-y-1 text-sm">
                      {detail.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Route Map */}
            <div className={`bg-white/40 md:bg-${section.content.route_map.color}-50/30 rounded-lg p-4 md:p-6 border border-${section.content.route_map.color}-200 mb-4 md:mb-6`}>
              <h4 className="font-bold text-amber-800 mb-3 md:mb-4 text-base md:text-lg flex items-center">
                <MapIcon />
                {section.content.route_map.title}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {section.content.route_map.destinations.map((destination: any, index: number) => (
                  <div key={index} className="bg-white/70 md:bg-white/50 rounded p-3 md:p-4 text-center border border-amber-200/50">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-amber-800 text-xs md:text-sm">{destination.country}</h5>
                    <p className="text-xs">{destination.date}</p>
                    <p className="text-xs">{destination.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Country Visits */}
            <div className="space-y-4">
              {section.content.country_details.map((country: any, index: number) => (
                <div key={index} className={`bg-${country.color}-50/30 rounded-lg p-6 border border-${country.color}-200`}>
                  <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {country.country} ({country.period})
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {country.sections.map((section: any, sectionIndex: number) => (
                      <div key={sectionIndex}>
                        <h5 className="font-semibold text-amber-700 mb-2">{section.category}</h5>
                        <ul className="space-y-1 text-sm">
                          {section.items.map((item: string, itemIndex: number) => (
                            <li key={itemIndex}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'travel_purposes':
        return (
          <section key={section.id}>
            <h3 className="text-2xl font-bold mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {section.content.purposes.map((purpose: any, index: number) => (
                <div key={index} className={`bg-${purpose.color}-100/50 rounded-lg p-4 border border-${purpose.color}-300`}>
                  <h4 className="font-bold text-amber-800 mb-2 flex items-center">
                    <PurposeIcon />
                    {purpose.title}
                  </h4>
                  <ul className="text-sm space-y-1">
                    {purpose.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        );

      case 'travel_impact':
        return (
          <section key={section.id}>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif text-amber-800 flex items-center">
              {getMainIconComponent(section.type)}
              {section.title}
            </h3>
            <div className="bg-white/40 md:bg-amber-50/30 rounded-lg p-4 md:p-6 border border-amber-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {section.content.impacts.map((impact: any, index: number) => (
                  <div key={index} className="text-center bg-white/30 md:bg-transparent p-3 md:p-0 rounded border border-amber-200/50 md:border-none">
                    <div className={`bg-${impact.color}-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-amber-800 mb-2 text-sm md:text-base">{impact.title}</h4>
                    <ul className="text-xs md:text-sm space-y-1">
                      {impact.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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