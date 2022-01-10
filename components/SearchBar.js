import { InputAdornment, OutlinedInput } from "@mui/material";
import styles from "../styles/SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setUserInput }) => {
  return (
    <>
      <OutlinedInput
        className={styles.search}
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
