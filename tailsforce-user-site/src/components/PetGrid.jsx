import styled from "styled-components";

import PETS from "../data";
import PetCard from "../components/PetCard";

const PetGrid = () => {
  return (
    <Wrapper>
      {PETS.map((pet) => (
        <PetWrapper key={pet.id}>
          <PetCard {...pet} />
        </PetWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  gap: 32px;
`;

const PetWrapper = styled.div``;

export default PetGrid;
