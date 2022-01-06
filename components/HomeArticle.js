import { Container } from "@mui/material";
import Image from "next/image";
import styles from "../styles/HomeArticle.module.scss";

//images
import sleepyCat from "../public/image 2.png";
import catPaw from "../public/image 1.png";
import catInBag from "../public/image 3.png";

const HomeArticle = () => {
  return (
    <Container className={styles.article}>
      <div className={styles.articleText}>
        <h3>Why should you have a cat?</h3>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <a href="*">READ MORE </a>
      </div>

      <div className={`${styles.collage} ${styles.articleCollage}`}>
        <img
          className={styles.collageCat1}
          src="image 2.png"
          alt="sleepy cat"
        />
        <img className={styles.collageCat2} src="image 3.png" alt="paw cat" />
        <img className={styles.collageCat3} src="image 1.png" alt="bag cat" />
      </div>
    </Container>
  );
};

export default HomeArticle;
