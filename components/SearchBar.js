import { InputAdornment, OutlinedInput } from "@mui/material";
import styles from "../styles/SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <OutlinedInput
      className={styles.search}
      placeholder="Search"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
