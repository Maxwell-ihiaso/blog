import styled from "styled-components";
import { devices } from "../devices";

/**
 * BLOGTITLE STYLES
 */

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 2.9rem;
  font-weight: 900;

  padding: 0 0.8rem 0.8rem;
  background-color: black;
  color: rgb(255, 255, 255);

  max-width: 75rem;
  margin: 0 auto;

  @media screen and ${devices.mobileL} {
    padding: 0 1.2rem 1.2rem;
    font-size: 4.4rem;
  }

  @media screen and ${devices.tablet} {
    font-size: 8rem;
  }

  @media screen and ${devices.laptop} {
    font-size: 11rem;
  }
`;

const Title = styled.div`
  border: 2px solid rgba(128, 128, 128, 0.2);
  border-left: 0;
  border-right: 0;
  word-spacing: 1.3rem;
  letter-spacing: 0.4rem;
  line-height: 4rem;

  @media screen and ${devices.mobileL} {
    line-height: 5rem;
  }

  @media screen and ${devices.tablet} {
    letter-spacing: 0.5rem;
    line-height: 8rem;
  }

  @media screen and ${devices.laptop} {
    line-height: 11rem;
  }
`;
/**----------------- */

const BlogTitle = () => {
  return (
    <Container>
      <Title>the blog</Title>
    </Container>
  );
};

export default BlogTitle;
