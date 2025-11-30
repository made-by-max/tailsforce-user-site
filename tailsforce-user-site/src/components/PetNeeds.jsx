import styled from "styled-components";

const PetCard = ({ name, breed, image_link, sex, age }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image alt={name} src={image_link} />
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

export default PetCard;
