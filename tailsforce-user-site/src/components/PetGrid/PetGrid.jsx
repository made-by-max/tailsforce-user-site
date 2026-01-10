import styles from "./PetGrid.module.css";
import Filter from "../Filter";
import PETS from "../../data";
import PetCard from "../PetCard";

const PetGrid = () => {
  return (
    <>
      <Filter />
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
