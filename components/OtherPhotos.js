import { Grid } from "@mui/material";
import styles from "../styles/OtherPhotos.module.scss";

const OtherPhotos = ({ images }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Other photos</h2>
      <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} className={styles.cat}>
        {images?.map((cat, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={4}
            md={3}
            className={styles.catItem}
          >
            <div className={styles.catPhoto}>
              <img src={cat} alt="cat" />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OtherPhotos;
