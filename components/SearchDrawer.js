import {
  IconButton,
  SwipeableDrawer,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { HomeContext } from "../pages";
import styles from "../styles/SearchDrawer.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "./SearchBar";
import { AppContext } from "./Layout";

import { styled } from "@mui/material";

const OptionsList = styled(List)({
  fontSize: "1.8rem",
  borderRadius: "2.3rem",
  width: "100%",
});

const OptionsListItem = styled(ListItem)({
  width: "100%",
});

const SearchDrawer = ({ searchData }) => {
  const {
    drawer,
    setDrawer,
    userInput,
    setUserInput,
    inputMatch,
    getMatches,
    navigateBreedDetail,
  } = useContext(AppContext);

  useEffect(() => {
    getMatches(searchData, userInput);
  }, [userInput]);

  return (
    <SwipeableDrawer
      anchor="top"
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => setDrawer(true)}
      sx={{ minHeight: "100vh" }}
    >
      <Container>
        <div className={styles.drawer}>
          <IconButton
            aria-label="close"
            onClick={() => setDrawer(false)}
            className={styles.drawerClose}
          >
            <CloseIcon />
          </IconButton>
          <div className={styles.drawerSearch}>
            <SearchBar setUserInput={setUserInput} />
          </div>

          <div
            className={`${styles.options} ${
              inputMatch?.length == 67 && styles.hidden
            }`}
          >
            <OptionsList className={styles.optionsList}>
              {inputMatch?.map((match, index) => (
                <>
                  <OptionsListItem
                    key={index}
                    onClick={() => {
                      navigateBreedDetail(match.id);
                    }}
                    className={styles.optionsItem}
                    button
                  >
                    <ListItemText primary={match.name} />
                  </OptionsListItem>
                  <Divider />
                </>
              ))}
            </OptionsList>
          </div>
        </div>
      </Container>
    </SwipeableDrawer>
  );
};

export default SearchDrawer;
