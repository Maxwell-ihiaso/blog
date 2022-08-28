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
