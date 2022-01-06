import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, useTheme } from "@mui/material";
import Image from "next/image";
import { createContext, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeArticle from "../components/HomeArticle";
import HomeBanner from "../components/HomeBanner";
import SearchDrawer from "../components/SearchDrawer";

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

export const HomeContext = createContext("");

export default function Home() {
  const [drawer, setDrawer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <HomeContext.Provider value={{ drawer, setDrawer }}>
        <SearchDrawer />
        <Container maxWidth="xl">
          <Header />
          <HomeBanner />
          <HomeArticle />
          <Footer />
        </Container>
      </HomeContext.Provider>
    </ThemeProvider>
  );
}
