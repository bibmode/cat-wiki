import { Container } from "@mui/material";
import styles from "../styles/BreedDetail.module.scss";
import CatStatus from "./CatStatus";

const BreedDetail = () => {
  const specifications = [
    {
      name: "Adaptability",
      stats: 5,
    },
    {
      name: "Affection Level",
      stats: 5,
    },
    {
      name: "Child Friendly",
      stats: 4,
    },
    {
      name: "Grooming",
      stats: 1,
    },
    {
      name: "Intelligence",
      stats: 5,
    },
    {
      name: "Health Issues",
      stats: 3,
    },
    {
      name: "Social Needs",
      stats: 5,
    },
    {
      name: "Stranger Friendly",
      stats: 3,
    },
  ];
  return (
    <Container className={styles.breed}>
      <div className={styles.breedImage}>
        <img
          src="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
          alt="cat detail"
        />
      </div>
      <div className={styles.breedDetails}>
        <div className={styles.breedDetailsWrapper}>
          <h2>Bengal</h2>
          <p>
            {`Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.`}
          </p>
          <p>
            <b>Temperament:</b> Alert, Agile, Energetic, Demanding, Intelligent
          </p>
          <p>
            <b>Origin:</b> United States
          </p>
          <p>
            <b>Life Span:</b> 12 - 15 years
          </p>
          {specifications.map((spec, index) => (
            <CatStatus key={index} stats={spec.stats} name={spec.name} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BreedDetail;
