import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.footerWrapper}>
        <Image
          className={styles.footerImage}
          src="/CatwikiLogo.svg"
          alt="cat logo"
          width={71}
          height={24}
          objectFit="cover"
        />
        <div className={styles.footerCredit}>
          <h5>©</h5>
          <p>
            created by{" "}
            <b>
              <u>genevieve navales</u>
            </b>{" "}
            - devChallenge.io 2021
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
