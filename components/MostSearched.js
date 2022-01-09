import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/MostSearched.module.scss";

const MostSearched = ({ cats }) => {
  return (
    <div className={styles.container}>
      <h1>Top 10 most searched breeds</h1>
      {[...cats]?.map((cat, index) => (
        <Breed
          key={index}
          number={index + 1}
          image={cat.cat.url}
          name={cat.cat.breeds[0].name}
          detail={cat.cat.breeds[0].description}
          id={cat.cat.breeds[0].id}
        />
      ))}
    </div>
  );
};

const Breed = ({ image, name, detail, number, id }) => {
  return (
    <div className={styles.breed}>
      <div className={styles.breedImage}>
        <img src={image} alt="cat" />
      </div>

      <div className={styles.breedDetails}>
        <Link href={`/${id}`}>{`${number}. ${name}`}</Link>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default MostSearched;
