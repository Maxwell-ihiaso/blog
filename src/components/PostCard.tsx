import styled from "styled-components";
import { devices } from "../devices";
import { IPostCard } from "../interfaces";

/** PORTRAIT-CARD STYLES */

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContentDate = styled.div`
  margin: 0.5rem 0;
  font-size: 0.5rem;
  color: grey;
  text-transform: uppercase;
  opacity: 0.7;

  @media screen and ${devices.mobileL} {
    font-size: 0.6rem;
  }
`;

const ContentHeader = styled.div`
  margin: 0.5rem 0 1rem;
  font-size: 0.8rem;
  color: #000;
  font-weight: 600;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    color: grey;
  }

  @media screen and ${devices.mobileL} {
    font-size: 1rem;
  }
`;

const ContentBody = styled.div`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  opacity: 0.8;
  display: none;

  @media screen and ${devices.tablet} {
    display: flex;
  }
`;

/**---------------- */

const PostCard = ({ imgUrl, altText, createdAt, title, body }: IPostCard) => {
  return (
    <Container>
      <Image
        src={`https://secure-ravine-59876.herokuapp.com${imgUrl}`}
        alt={altText}
      />

      <Content>
        <ContentDate>
          {new Date(createdAt).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </ContentDate>
        <ContentHeader>{title}</ContentHeader>
        <ContentBody>{body.substring(0, 150)}...</ContentBody>
      </Content>
    </Container>
  );
};

export default PostCard;
