import { Metadata } from 'next';
import PageLayout from "../../components/PageLayout";
import { loadPageData } from "../../lib/loadPageData";
import SectionSwitcher from "./SectionSwitcher";

export const metadata: Metadata = {
  title: "19th Century Philippines as Rizal's Context",
  description: "Explore the historical context of the Philippines during the 19th century: Spanish Colonial System, Social Classes, Church Power, Education System, and Economic Conditions."
};

export default async function NineteenthCenturyPage() {
  const data = await loadPageData('19th-century');

  return (
    <PageLayout title={data.title} subtitle={data.subtitle}>
      <SectionSwitcher sections={data.sections} />
    </PageLayout>
  );
} 