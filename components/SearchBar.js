import { InputAdornment, OutlinedInput } from "@mui/material";
import styles from "../styles/SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material";

const Search = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: "5.9rem",
  fontSize: "1.8rem",
  // padding: "1rem",
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchBar = ({ setUserInput }) => {
  return (
    <>
      <Search
        placeholder="Search"
        onChange={(e) => setUserInput(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </>
  );
};

export default SearchBar;
