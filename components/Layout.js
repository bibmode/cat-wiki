import { Container, createTheme } from "@mui/material";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.scss";

export const theme = createTheme({
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
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1.2rem",
    },
  },
});

export const AppContext = createContext("");

const Layout = (props) => {
  const [drawer, setDrawer] = useState(false);
  const [inputMatch, setInputMatch] = useState([]);
  const [userInput, setUserInput] = useState(null);

  const mostSearchedBreeds = [
    "ragdoll",
    "exotic",
    "maine",
    "persian",
    "britishshorthair",
    "devon",
    "abyssinian",
    "americanshorthair",
    "scottishfold",
    "sphynx",
  ];

  const router = useRouter();

  const navigateBreedDetail = (id) => {
    router.push(`/${id}`);
    setDrawer(false);
    setUserInput(null);
  };

  const navigateHome = () => {
    router.push("/");
    setUserInput(null);
  };

  const getMatches = (searchData, userInput) => {
    const matches = searchData.filter((data) =>
      data.name.toLowerCase().match(new RegExp(`(^${userInput})`, "g"))
    );
    setInputMatch(matches);
    console.log(matches);
  };

  return (
    <div className={styles.layout}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            drawer,
            setDrawer,
            navigateBreedDetail,
            navigateHome,
            mostSearchedBreeds,
            inputMatch,
            setInputMatch,
            getMatches,
            userInput,
            setUserInput,
          }}
        >
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
