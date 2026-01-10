import React, { useState, useEffect } from "react";
import PETS from "../../data";

function Filter({ runFilter }) {
  const [species, setSpecies] = useState("");
  const [speciesOptions, setSpeciesOptions] = useState([]);

  useEffect(() => {
    const uniqueSpecies = [...new Set(PETS.map((pet) => pet.species))];
    setSpeciesOptions(uniqueSpecies);
  }, []);

  return (
    <>
      <form onSubmit={runFilter(species)}>
        <label htmlFor="species-select">Species</label>

        <select
          id="species-select"
          value={species}
          onChange={(event) => {
            setSpecies(event.target.value);
          }}
        >
          <option value="all">all</option>

          {speciesOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </form>
      <p>You've selected {species} </p>
    </>
  );
}

export default Filter;
