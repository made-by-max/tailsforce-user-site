import styles from "./PetGrid.module.css";
import Filter from "../Filter";
import PETS from "../../data";
import PetCard from "../PetCard";

const PetGrid = () => {
  function runFilter(species) {
    window.alert(`Searched for: ${species}`);
  }

  return (
    <>
      <Filter runFilter={runFilter} />
      <div className={styles.wrapper}>
        {PETS.map((pet) => (
          <div className={styles.petWrapper} key={pet.id}>
            <PetCard {...pet} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PetGrid;
