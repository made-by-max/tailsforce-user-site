import styled from "styled-components";
import { Link } from "react-router";

const PetCard = ({ name, breed, image_link, sex, age, id }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Link to={`/item/${id}`} key={id}>
          <Image alt={name} src={image_link} />
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <Name>{name}</Name>
        <Text>{breed}</Text>
        <Text>
          {age} &middot; {sex}
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border-radius: 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Name = styled.h2`
  font-family: "Figtree";
  font-weight: 700;
  margin-block: 0;
  src: url(https://design.penpot.app/internal/gfonts/font/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR25XyEAk4A.woff2)
    format("woff2");
  font-size: 1.75rem;
  color: #222222;
`;

const Text = styled.p`
  font-family: "Figtree";
  font-weight: 400;
  src: url(https://design.penpot.app/internal/gfonts/font/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR25XyEAk4A.woff2)
    format("woff2");
  font-size: 1rem;
  color: #6a6a6a;
  margin-block: 0;
`;

export default PetCard;
