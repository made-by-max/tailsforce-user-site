import React, { useState } from "react";
import PetGrid from "../components/PetGrid/PetGrid";
import Filter from "../components/Filter";

const PetHome = () => {
  const [species, setSpecies] = useState("all");
  return (
    <>
      <Filter species={species} setSpecies={setSpecies} />
      <PetGrid species={species} />
    </>
  );
};

export default PetHome;
