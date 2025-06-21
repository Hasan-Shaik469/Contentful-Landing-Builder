import { getLandingPage } from '@/lib/contentful/queries';

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const page = await getLandingPage(params.slug);
  return {
    title: page?.title || 'Landing Page',
    description: page?.description || '',
  };
}