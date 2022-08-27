import styled from "styled-components";
import { devices } from "../devices";
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
  return (
    <Container>
      <BlogPost>
        <PostCard />
      </BlogPost>
      <BlogPost>
        <PostCard />
      </BlogPost>
      <BlogPost>
        <PostCard />
      </BlogPost>
      <BlogPost>
        <PostCard />
      </BlogPost>
    </Container>
  );
};

export default Posts;
