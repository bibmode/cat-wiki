import { Box } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Image src="/CatwikiLogo.svg" alt="" height={30} width={120} />
    </Box>
  );
};

export default Header;
