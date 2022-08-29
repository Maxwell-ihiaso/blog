import styled from "styled-components";
import { devices } from "../devices";
import useFetch from "../utils/useFetch";
import PostCard from "./PostCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: inherit;
  color: black;

  max-width: 75rem;
  margin: 0 auto;

  @media screen and ${devices.laptop} {
    gap: 3rem;
  }
`;

const BlogPost = styled.article`
  /* width: 45%; */
  flex: 1 0 9.375rem;
`;
/**---------------- */

const Posts = () => {
  const { data, error, isLoading } = useFetch("/blogposts?populate=image");

  if (isLoading) return <Container>Loading...</Container>;
  if (error.message) return <Container>{error.message}</Container>;

  return (
    <Container>
      {data.map((post) => {
        const { title, body, createdAt, image } = post.attributes;

        return (
          <BlogPost key={post.id}>
            <PostCard
              createdAt={createdAt}
              title={title}
              body={body}
              imgUrl={image.data.attributes.formats.small.url}
              altText={image.data.attributes.formats.small.name}
            />
          </BlogPost>
        );
      })}
    </Container>
  );
};

export default Posts;
