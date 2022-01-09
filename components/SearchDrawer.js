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
      <Container className={styles.drawer}>
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
          <List className={styles.optionsList}>
            {inputMatch?.map((match) => (
              <>
                <ListItem
                  onClick={() => {
                    navigateBreedDetail(match.id);
                  }}
                  className={styles.optionsItem}
                  button
                >
                  <ListItemText primary={match.name} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </div>
      </Container>
    </SwipeableDrawer>
  );
};

export default SearchDrawer;
