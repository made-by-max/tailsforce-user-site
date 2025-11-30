import styled from "styled-components";
import PETS from "../data";
import { Camera } from "lucide-react";

const SpecialNeeds = ({ special_needs }) => {
  return (
    <Wrapper>
      <Camera />
      <Text>
        <Type>Special Needs</Type>
        <Details>{special_needs}</Details>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const Type = styled.p``;
const Details = styled.p``;

export default SpecialNeeds;
