import styled from "styled-components";
import { devices } from "../devices";

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
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #edebeb;
  font-weight: 600;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    color: grey;
  }

  @media screen and ${devices.mobileL} {
    font-size: 1.3rem;
  }
`;

const ContentBody = styled.div`
  margin: 0.5rem 0;
  font-size: 0.7rem;
  opacity: 0.8;

  @media screen and ${devices.mobileL} {
    font-size: 0.9rem;
  }
`;
/**---------------- */

const PortraitCard = () => {
  return (
    <Container>
      <Image src="/images/blog-photo-1.jpg" alt="torchLight-blog" />

      <Content>
        <ContentDate>january 11, 2022</ContentDate>
        <ContentHeader>
          Eksplorasi design untuk melamar pekerjaan UI Designer
        </ContentHeader>
        <ContentBody>
          He took a sip of the drink. He wasn't sure whether he liked it or not,
          but at this moment it didn't matter. She had made it especially for
          him so he would have forced it down even if he had absolutely hated
          it.
        </ContentBody>
      </Content>
    </Container>
  );
};

export default PortraitCard;
