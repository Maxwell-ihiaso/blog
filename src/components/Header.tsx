import styled from "styled-components";
import { BiMenuAltRight } from "react-icons/bi";
import { FiTwitter, FiInstagram, FiGithub } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import { devices } from "../devices";

/**
 *
 * HEADER STYLES
 */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background-color: black;
  color: rgb(128, 128, 128);

  max-width: 75rem;
  margin: 0 auto;

  @media screen and ${devices.mobileL} {
    padding: 1.2rem;
  }
`;

const BrandGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  padding: 0.3125rem 0.4375rem;
  max-width: 1.25rem;
  font-size: 0.6rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  color: #f7f7f7;
  font-weight: bold;

  background: rgb(253, 29, 29);
  background: -moz-linear-gradient(
    278deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );
  background: -webkit-linear-gradient(
    278deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );
  background: linear-gradient(
    278deg,
    rgba(253, 29, 29, 1) 0%,
    rgba(252, 176, 69, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fd1d1d",endColorstr="#fcb045",GradientType=1);
  &:hover {
    cursor: pointer;
  }

  @media screen and ${devices.mobileL} {
    padding: 0.5rem 0.625rem;
    font-size: 1rem;
  }
`;

const MenuItems = styled.ul`
  list-style-type: none;
  display: none;

  @media screen and ${devices.tablet} {
    display: flex;
  }
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  margin: 0 0.5rem;
  transition: all 0.2s linear;

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  @media screen and ${devices.laptop} {
    margin: 0 1rem;
  }
`;

const SocialIconGroup = styled.div`
  display: flex;
`;

const SocialIcons = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;

  width: 11rem;
  font-size: 1.1rem;

  @media screen and ${devices.tablet} {
    display: flex;
  }

  @media screen and ${devices.laptop} {
    width: 12rem;
  }
`;

const WithHover = styled.div`
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

const MenuButton = styled.div`
  color: grey;
  font-size: 1rem;

  @media screen and ${devices.mobileL} {
    font-size: 1.6rem;
  }

  @media screen and ${devices.tablet} {
    display: none;
  }
`;
/**-------------------- */

const Header = () => {
  return (
    <Container>
      <BrandGroup>
        <Brand>tl</Brand>

        <MenuItems>
          <MenuItem>learn</MenuItem>
          <MenuItem>blog</MenuItem>
          <MenuItem>bookmarks</MenuItem>
          <MenuItem>ui kit</MenuItem>
          <MenuItem>lain nya</MenuItem>
        </MenuItems>
      </BrandGroup>

      <SocialIconGroup>
        <MenuButton>
          <BiMenuAltRight />
        </MenuButton>

        <SocialIcons>
          <WithHover>
            <FiTwitter />
          </WithHover>
          <WithHover>
            <FiInstagram />
          </WithHover>
          <WithHover>
            <FiGithub />
          </WithHover>
          <WithHover>
            <BsMedium />
          </WithHover>
        </SocialIcons>
      </SocialIconGroup>
    </Container>
  );
};

export default Header;
