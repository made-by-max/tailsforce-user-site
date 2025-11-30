import PetDetails from "../components/PetDetails";
import SpecialNeeds from "../components/SpecialNeeds";
import TopNav from "../components/TopNav";
import PETS from "../data";
import styled from "styled-components";
import { useParams } from "react-router";

const PetInfo = () => {
  const { id } = useParams();
  const pet = PETS.find((item) => item.id === id);

  return (
    <Wrapper>
      <TopNav />
      <h1>{pet.name}</h1>

      <div>
        <img alt={pet.name} src={pet.image_link} />
      </div>

      <div>
        <h2>{pet.breed}</h2>
        <Text>
          {pet.age} &middot; {pet.sex} &middot; {pet.size}
        </Text>
        <SpecialNeeds />
        <p>{pet.description}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const PetWrapper = styled.div``;

const Text = styled.p`
  font-family: "Figtree";
  font-weight: 400;
  src: url(https://design.penpot.app/internal/gfonts/font/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR25XyEAk4A.woff2)
    format("woff2");
  font-size: 1rem;
  color: #6a6a6a;
  margin-block: 0;
`;

export default PetInfo;
