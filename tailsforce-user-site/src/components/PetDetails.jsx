import styled from "styled-components";

const PetDetails = ({
  name,
  breed,
  image_link,
  sex,
  age,
  size,
  description,
}) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <div>
        <img alt={name} src={image_link} />
      </div>

      <div>
        <h2>{breed}</h2>
        <p>{age}</p>
        <p>{sex}</p>
        <p>{size}</p>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PetDetails;
