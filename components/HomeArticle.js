import { Container } from "@mui/material";
import Image from "next/image";
import styles from "../styles/HomeArticle.module.scss";

import { useState } from "react";

const HomeArticle = () => {
  const [line, setLine] = useState(styles.lineShort);

  return (
    <Container>
      <div className={styles.article}>
        <div className={styles.articleText}>
          <h3 className={`${line}`}>Why should you have a cat?</h3>
          <p>
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels
          </p>
          <div
            className={styles.articleTextLink}
            onMouseOver={() => setLine(styles.lineLong)}
            onMouseOut={() => setLine(styles.lineShort)}
          >
            <a
              href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship.&text=Any%20cat%20owner%20will%20tell,them%20to%20relax%20and%20unwind."
              target="_blank"
              rel="noreferrer"
            >
              READ MORE{" "}
            </a>
          </div>
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
      </div>
    </Container>
  );
};

export default HomeArticle;
