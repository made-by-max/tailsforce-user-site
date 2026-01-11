import React, { useState, useEffect } from "react";
import styles from "./PetGrid.module.css";
import PETS from "../../data";
import PetCard from "../PetCard";

const PetGrid = ({ species }) => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    setPetData(PETS);
  }, []);

  // Filter pets based on the species prop
  const filteredPets = petData.filter((pet) => {
    // If species is "all" or empty, show all pets
    if (species === "all" || !species) {
      return true;
    }
    // Otherwise, show only pets that match the selected species
    return pet.species === species;
  });

  return (
    <>
      <div className={styles.wrapper}>
        {filteredPets.map((pet) => (
          <div className={styles.petWrapper} key={pet.id}>
            <PetCard {...pet} />
          </div>
        ))}
      </div>
    </>
  );
};
export default PetGrid;
