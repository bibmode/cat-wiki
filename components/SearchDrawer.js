import { IconButton, SwipeableDrawer, Container } from "@mui/material";
import { useContext } from "react";
import { HomeContext } from "../pages";
import styles from "../styles/SearchDrawer.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "./SearchBar";
import { AppContext } from "./Layout";

const SearchDrawer = () => {
  const { drawer, setDrawer } = useContext(AppContext);

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
          <SearchBar />
        </div>
      </Container>
    </SwipeableDrawer>
  );
};

export default SearchDrawer;
