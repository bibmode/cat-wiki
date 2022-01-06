import {
  Button,
  Container,
  Grid,
  imageListClasses,
  TextField,
} from "@mui/material";
import CatLogo from "../public/CatwikiLogo.svg";
import styles from "../styles/HomeBanner.module.scss";

import Search from "@mui/icons-material/Search";
import Image from "next/image";
import { HomeContext } from "../pages";
import { useContext } from "react";

const cats = [
  "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
  "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75",
  "https://petkeen.com/wp-content/uploads/2020/06/black-cat-on-top-of-car.jpg",
  "https://nenow.in/wp-content/uploads/2020/04/cat-image-2.jpg",
];

const HomeBanner = () => {
  const { setDrawer } = useContext(HomeContext);
  return (
    <>
      <div className={styles.banner}>
        <Container sx={{ px: 3.5 }}>
          <div className={styles.bannerWrapper}>
            <CatLogo className={styles.bannerLogo1} height={50} width={150} />
            <h1 className={styles.bannerLogo2}>CatWiki</h1>
            <h2 className={styles.bannerText}>
              Get to know more about your cat breed
            </h2>
            <TextField className={styles.bannerSearchField} />
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
          <a href="*">Most Searched Breeds</a>
          <h3>66+ Breeds For you to discover</h3>
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 4 }}
            className={styles.discoverContainer}
          >
            {cats.map((cat, index) => (
              <Grid item key={index} className={styles.discoverItem}>
                <img src={cat} alt={`cat-${index}`} />
                <h4>Cat Name</h4>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default HomeBanner;
