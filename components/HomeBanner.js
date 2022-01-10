import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CatLogo from "../public/CatwikiLogo.svg";
import styles from "../styles/HomeBanner.module.scss";

import Search from "@mui/icons-material/Search";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { AppContext } from "./Layout";
import { getAllBreeds } from "../utils/data";

import { styled } from "@mui/material";

const MobileButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  marginBottom: "1rem",
  marginLeft: "-2px",
  textTransform: "capitalize",
  fontSize: "1.2rem",
  fontFamily: "Montserrat",
  backgroundColor: "#fff",
  color: "#291507",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const OptionsList = styled(List)({
  fontSize: "1.8rem",
  borderRadius: "2.3rem",
  width: "100%",
});

const OptionsListItem = styled(ListItem)({
  width: "100%",
});

const HomeBanner = ({ cats, searchData }) => {
  const {
    setDrawer,
    navigateBreedDetail,
    inputMatch,
    getMatches,
    userInput,
    setUserInput,
  } = useContext(AppContext);

  const [line, setLine] = useState(styles.lineShort);

  useEffect(() => {
    getMatches(searchData, userInput);
  }, [userInput]);

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
              <SearchBar setUserInput={setUserInput} />
            </div>

            <div
              className={`${styles.options} ${
                (inputMatch?.length == 67 || inputMatch?.length == 0) &&
                styles.hidden
              }`}
            >
              <OptionsList>
                {inputMatch?.map((match, index) => (
                  <div key={index}>
                    <OptionsListItem
                      onClick={() => navigateBreedDetail(match.id)}
                      button
                    >
                      <ListItemText primary={match.name} />
                    </OptionsListItem>
                    <Divider />
                  </div>
                ))}
              </OptionsList>
            </div>

            <MobileButton
              variant="contained"
              endIcon={<Search />}
              onClick={() => setDrawer(true)}
            >
              Search
            </MobileButton>
          </div>
        </Container>
      </div>

      <div className={styles.discover}>
        <Container sx={{ px: 3.5 }}>
          <div className={styles.discoverTitle}>
            <h4 className={line}>Most Searched Breeds</h4>
          </div>

          <div className={styles.discoverTagline}>
            <h3>66+ Breeds For you to discover</h3>
            <div
              className={styles.discoverLink}
              onMouseOver={() => setLine(styles.lineLong)}
              onMouseOut={() => setLine(styles.lineShort)}
            >
              <Link href="/most-searched">See more →</Link>
            </div>
          </div>

          <Grid
            container
            spacing={{ xs: 1, sm: 3, lg: 6 }}
            className={styles.discoverContainer}
          >
            {[...cats]?.map((cat, index) => (
              <Grid
                item
                key={index}
                xs={6}
                md={3}
                className={styles.discoverItem}
              >
                <button
                  onClick={() => navigateBreedDetail(`${cat.cat.breeds[0].id}`)}
                >
                  <div className={styles.discoverImage}>
                    <img src={cat.cat.url} alt={`${cat.cat.breeds[0].name}`} />
                  </div>

                  <h4>{cat.cat.breeds[0].name}</h4>
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
