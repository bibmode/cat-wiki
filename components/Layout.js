import { Container, createTheme } from "@mui/material";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import Header from "./Header";
import SearchDrawer from "./SearchDrawer";
import styles from "../styles/Layout.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E3E1DC",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
});

export const AppContext = createContext("");

const Layout = (props) => {
  const [drawer, setDrawer] = useState(false);

  const router = useRouter();

  const navigateBreedDetail = (id) => {
    router.push(`/${id}`);
  };

  const navigateHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.layout}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{ drawer, setDrawer, navigateBreedDetail, navigateHome }}
        >
          <SearchDrawer />
          <Container maxWidth="xl" className={styles.wrapper}>
            <Header />
            <main>{props.children}</main>
            <Footer className={styles.footer} />
          </Container>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
