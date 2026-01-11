import React, { useState, useEffect } from "react";
import PETS from "../../data";

function Filter({ species, setSpecies, sex, setSex }) {
  const [speciesOptions, setSpeciesOptions] = useState([]);
  const [sexOptions, setSexOptions] = useState([]);

  useEffect(() => {
    const uniqueSpecies = [...new Set(PETS.map((pet) => pet.species))];
    setSpeciesOptions(uniqueSpecies);
  }, []);

  useEffect(() => {
    const uniqueSex = [...new Set(PETS.map((pet) => pet.sex))];
    setSexOptions(uniqueSex);
  }, []);

  return (
    <>
      <form>
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

        <label htmlFor="sex-select">Sex</label>

        <select
          id="sex-select"
          value={sex}
          onChange={(event) => {
            setSex(event.target.value);
          }}
        >
          <option value="all">all</option>

          {sexOptions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}

export default Filter;
