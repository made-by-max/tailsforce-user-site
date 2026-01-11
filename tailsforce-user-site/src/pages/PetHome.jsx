import React, { useState } from "react";
import PetGrid from "../components/PetGrid/PetGrid";
import Filter from "../components/Filter";

const PetHome = () => {
  const [species, setSpecies] = useState("all");
  const [sex, setSex] = useState("all");
  return (
    <>
      <Filter
        species={species}
        setSpecies={setSpecies}
        sex={sex}
        setSex={setSex}
      />
      <PetGrid species={species} sex={sex} />
    </>
  );
};

export default PetHome;
