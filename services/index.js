import { GraphQLClient, gql } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-ap-southeast-2.hygraph.com/v2/cl5qe8mqd2tdr01ul5yph3abv/master"
);

export const getPosts = async () => {
  const QUERY = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            title
            slug
            excerpt
            createdAt
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const posts = await hygraph.request(QUERY);

  return posts.postsConnection.edges;
};
