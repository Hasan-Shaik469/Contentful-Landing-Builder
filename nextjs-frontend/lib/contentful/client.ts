import { gql } from '@apollo/client';
import { graphQLClient } from './client';

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

export async function getLandingPage(slug: string) {
  try {
    const { data } = await graphQLClient.query({
      query: GET_LANDING_PAGE,
      variables: { slug },
    });
    
    return data.landingPageCollection?.items[0] || null;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
}