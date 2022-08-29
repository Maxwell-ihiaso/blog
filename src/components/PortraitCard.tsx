import styled from "styled-components";
import { devices } from "../devices";
import useFetch from "../utils/useFetch";

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
  const { meta, data, error, isLoading } = useFetch(
    "/blogposts?populate=image"
  );

  if (isLoading) return <Container>Loading...</Container>;
  if (error.message) return <Container>{error.message}</Container>;

  const num = meta && Math.floor(Math.random() * meta.pagination.total);
  return (
    <>
      {data.slice(num, num + 1).map((post) => {
        const { title, createdAt, image, body } = post.attributes;

        return (
          <Container>
            <Image
              src={`http://localhost:1337${image.data.attributes.formats.small.url}`}
              alt={`http://localhost:1337${image.data.attributes.formats.small.name}`}
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
              <ContentHeader>{title} </ContentHeader>
              <ContentBody>{body.substring(0, 200)}...</ContentBody>
            </Content>
          </Container>
        );
      })}
    </>
  );
};

export default PortraitCard;
