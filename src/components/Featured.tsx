import styled from "styled-components";
import { devices } from "../devices";
import LandscapeCard from "./LandscapeCard";
import PortraitCard from "./PortraitCard";

/**
 * BLOGTITLE STYLES
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0 0.8rem 1.2rem;
  background-color: black;
  color: rgb(125, 125, 125);

  max-width: 75rem;
  margin: 0 auto;

  @media screen and ${devices.mobileL} {
    padding: 0 1.2rem 3rem;
  }

  @media screen and ${devices.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and ${devices.laptop} {
    gap: 3rem;
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
    letter-spacing: 0.7rem;
    line-height: 8rem;
  }

  @media screen and ${devices.laptop} {
    line-height: 11rem;
  }
`;

const TopGroup = styled.div`
  flex: 1;
  width: 100%;
  background-color: inherit;
`;

const BottomGroup = styled.div`
  flex: 1;
  width: 100%;
`;

/**------------ */

const Featured = () => {
  return (
    <Container>
      <TopGroup>
        <PortraitCard />
      </TopGroup>

      <BottomGroup>
        <LandscapeCard />
      </BottomGroup>
    </Container>
  );
};

export default Featured;
