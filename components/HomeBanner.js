import { Button, Container, Grid } from "@mui/material";
import CatLogo from "../public/CatwikiLogo.svg";
import styles from "../styles/HomeBanner.module.scss";

import Search from "@mui/icons-material/Search";
import Image from "next/image";
import { useContext } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { AppContext } from "./Layout";

const cats = [
  "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
  "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
  "https://petkeen.com/wp-content/uploads/2020/06/black-cat-on-top-of-car.jpg",
  "https://nenow.in/wp-content/uploads/2020/04/cat-image-2.jpg",
];

const HomeBanner = () => {
  const { setDrawer, navigateBreedDetail } = useContext(AppContext);

  return (
    <>
      <div className={styles.banner}>
        <Container sx={{ px: 3.5 }} maxWidth="lg">
          <div className={styles.bannerWrapper}>
            <CatLogo className={styles.bannerLogo1} height={50} width={150} />
            <h1 className={styles.bannerLogo2}>CatWiki</h1>
            <h2 className={styles.bannerText}>
              Get to know more about your cat breed
            </h2>
            <div className={styles.bannerSearchField}>
              <SearchBar />
            </div>

            <Button
              className={styles.bannerSearchBtn}
              variant="contained"
              endIcon={<Search />}
              onClick={() => setDrawer(true)}
            >
              Search
            </Button>
          </div>
        </Container>
      </div>

      <div className={styles.discover}>
        <Container sx={{ px: 3.5 }}>
          <a className={styles.discoverLink} href="*">
            Most Searched Breeds
          </a>

          <div className={styles.discoverTagline}>
            <h3>66+ Breeds For you to discover</h3>
            <Link className={styles.discoverTaglineLink} href="/most-searched">
              See more →
            </Link>
          </div>

          <Grid
            container
            spacing={{ xs: 2, lg: 6 }}
            className={styles.discoverContainer}
          >
            {cats.map((cat, index) => (
              <Grid item key={index} lg={3} className={styles.discoverItem}>
                <button onClick={() => navigateBreedDetail(index)}>
                  <img src={cat} alt={`cat-${index}`} />
                  <h4>Cat Name</h4>
                </button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomeBanner;
