import { Container, createTheme } from "@mui/material";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import Header from "./Header";
import SearchDrawer from "./SearchDrawer";

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ drawer, setDrawer, navigateBreedDetail }}>
          <SearchDrawer />
          <Container maxWidth="xl">
            <Header />
            <main>{props.children}</main>
            <Footer />
          </Container>
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
