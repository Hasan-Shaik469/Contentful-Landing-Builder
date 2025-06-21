import { gql } from '@apollo/client';
import { client } from './client';

// GraphQL query should be defined only once
const GET_LANDING_PAGE = gql`
  query GetLandingPage($slug: String!) {
    landingPageCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        description
        seoImage {
          url
          description
        }
        layoutConfig
      }
    }
  }
`;

// Single function definition
export async function getLandingPage(slug: string) {
  try {
    const { data } = await client.query({
      query: GET_LANDING_PAGE,
      variables: { slug },
    });
    
    if (!data?.landingPageCollection?.items?.length) {
      console.error('No landing page found for slug:', slug);
      return null;
    }

    return data.landingPageCollection.items[0];
  } catch (error) {
    console.error('Error fetching landing page:', error);
    throw error;
  }
}