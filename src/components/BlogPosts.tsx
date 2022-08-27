import styled from "styled-components";
import { devices } from "../devices";
import Posts from "./Posts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem 0.8rem 1.2rem;
  background-color: #fff;
  color: rgb(125, 125, 125);

  max-width: 75rem;
  margin: 0 auto;

  @media screen and ${devices.mobileL} {
    padding: 1.5rem 1.2rem 3rem;
  }
`;

const ShortText = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.6;
`;

const BlogPosts = () => {
  return (
    <Container>
      <ShortText>Maxwell Editor</ShortText>

      <Posts />
    </Container>
  );
};

export default BlogPosts;
