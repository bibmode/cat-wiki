import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/BreedDetail.module.scss";
import CatStatus from "./CatStatus";

const BreedDetail = ({ cat }) => {
  const specifications = [
    "adaptability",
    "affection_level",
    "child_friendly",
    "grooming",
    "intelligence",
    "health_issues",
    "social_needs",
    "stranger_friendly",
  ];

  const details = cat.breeds[0];

  return (
    <Container className={styles.breed}>
      <div className={styles.breedImage}>
        <img src={cat.url} alt="cat detail" />
      </div>
      <div className={styles.breedDetails}>
        <div className={styles.breedDetailsWrapper}>
          <h2>{details.name}</h2>
          <p>{details.description}</p>
          <p>
            <b>Temperament: </b>
            {details.temperament}
          </p>
          <p>
            <b>Origin:</b> {details.origin}
          </p>
          <p>
            <b>Life Span:</b> {details.life_span} years
          </p>
          {specifications.map((spec, index) => (
            <CatStatus
              key={index}
              stats={details[spec]}
              name={`${spec[0].toUpperCase()}${spec
                .slice(1)
                .replace("_", " ")}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BreedDetail;
