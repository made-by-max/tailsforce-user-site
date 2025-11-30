import PetDetails from "../components/PetDetails";
import TopNav from "../components/TopNav";
import PETS from "../data";
import styled from "styled-components";

const PetInfo = () => {
  return (
    <>
      <TopNav />
      <h1>Pet Details Here</h1>
      <Wrapper>
        {PETS.map((pet) => (
          <PetWrapper key={pet.id}>
            <PetDetails {...pet} />
          </PetWrapper>
        ))}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div``;

const PetWrapper = styled.div``;

export default PetInfo;
