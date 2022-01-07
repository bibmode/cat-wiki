import { Grid } from "@mui/material";
import styles from "../styles/OtherPhotos.module.scss";

const OtherPhotos = () => {
  const photos = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*",
    "https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1200-80.jpg",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?downsize=360:*",
    "https://e3.365dm.com/21/04/1600x900/skynews-ragdoll-cat_5353152.jpg?20210423104751",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfy6unjYwC7J3gjXxf5FqNltF5PWkKJgPsrLGMPbDbP8cacTSP6mDcA60g1_gJue8oxI&usqp=CAU",
    "https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6Ls6fcoFeoi9nojf7T5T0yrPK8r4UhTGUNhbzZ3x22u78_a8cL34AzQ2kPyYpkdimqI&usqp=CAU",
  ];

  return (
    <div className={styles.wrapper}>
      <h2>Other photos</h2>
      <Grid container spacing={4} className={styles.cat}>
        {photos.map((cat, index) => (
          <Grid key={index} item xs={6} sm={4} md={3}>
            <img className={styles.catPhoto} src={cat} alt="cat" />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OtherPhotos;
