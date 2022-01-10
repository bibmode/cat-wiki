import styles from "../styles/Footer.module.scss";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <img
            className={styles.footerImage}
            src="/CatwikiLogo.svg"
            alt="cat logo"
          />
          <div className={styles.footerCredit}>
            <h5>©</h5>
            <p>
              created by{" "}
              <b>
                <a
                  href="https://devchallenges.io/portfolio/bibmode"
                  target="_blank"
                  rel="noreferrer"
                >
                  genevieve navales
                </a>
              </b>{" "}
              - devChallenge.io 2021
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
