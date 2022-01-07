import styles from "../styles/CatStatus.module.scss";

const CatStatus = ({ stats, name }) => {
  return (
    <div className={styles.status}>
      <p>
        <b>{name}:</b>
      </p>
      <div className={styles.bars}>
        {[...Array(5)].map((stat, index) => (
          <div
            key={index}
            className={
              stats < index + 1 ? styles.barsInactive : styles.barsActive
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CatStatus;
