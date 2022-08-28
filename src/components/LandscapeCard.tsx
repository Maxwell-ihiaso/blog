import styled from "styled-components";
import { devices } from "../devices";

/** PORTRAIT-CARD STYLES */

const Container = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 20vh;
  padding: 1rem 0;
  border-top: 2px solid rgba(128, 128, 128, 0.2);

  @media screen and ${devices.tablet} {
    flex-direction: row-reverse;
`;

const Image = styled.img`
  flex: 0 1 auto;
  height: 80%;
`;

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const ContentDate = styled.div`
  margin: 0.25rem 0;
  font-size: 0.5rem;
  color: grey;
  text-transform: uppercase;
  opacity: 0.7;

  @media screen and ${devices.mobileL} {
    font-size: 0.6rem;
  }
`;

const ContentHeader = styled.div`
  margin: 0.25rem 0;
  font-size: 0.8rem;
  color: #edebeb;
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

/**---------------- */

const LandscapeCard = () => {
  return (
    <>
      <Container>
        <Content>
          <ContentDate>march 27, 2022</ContentDate>
          <ContentHeader>
            Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun
            ke industri
          </ContentHeader>
        </Content>
        <Image src="/images/blog-photo-2.jpg" alt="torchLight-blog" />
      </Container>

      <Container>
        <Content>
          <ContentDate>march 27, 2022</ContentDate>
          <ContentHeader>
            Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun
            ke industri
          </ContentHeader>
        </Content>
        <Image src="/images/blog-photo-4.jpg" alt="torchLight-blog" />
      </Container>

      <Container>
        <Content>
          <ContentDate>march 27, 2022</ContentDate>
          <ContentHeader>
            Mungkin yang kamu butuhkan saat ini bukan lagi latihan tapi terjun
            ke industri
          </ContentHeader>
        </Content>
        <Image src="/images/blog-photo-5.jpg" alt="torchLight-blog" />
      </Container>
    </>
  );
};

export default LandscapeCard;
