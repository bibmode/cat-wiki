import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import styles from "../styles/Header.module.scss";
import { AppContext } from "./Layout";

const Header = () => {
  const { navigateHome } = useContext(AppContext);

  return (
    <Box sx={{ my: 2 }}>
      <Image
        className={styles.button}
        src="/CatwikiLogo.svg"
        alt=""
        height={30}
        width={120}
        onClick={navigateHome}
      />
    </Box>
  );
};

export default Header;
