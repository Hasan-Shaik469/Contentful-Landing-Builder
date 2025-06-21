import { notFound } from 'next/navigation';
import { getLandingPage } from '@/lib/contentful/queries';
import LayoutRenderer from '@/components/LayoutRenderer';

export async function generateStaticParams() {
  return ['page-1', 'page-2'].map(slug => ({ slug }));
}

export default async function LandingPage({ params }: { params: { slug: string } }) {
  try {
    // For REST API version:
    const page = await getLandingPage(params.slug);
    if (!page?.fields?.layoutConfig) notFound();
    return <LayoutRenderer layout={page.fields.layoutConfig} />;

    // For GraphQL version:
    // const page = await getLandingPage(params.slug);
    // if (!page?.layoutConfig) notFound();
    // return <LayoutRenderer layout={page.layoutConfig} />;
  } catch (error) {
    console.error(`Error loading page ${params.slug}:`, error);
    notFound();
  }
}