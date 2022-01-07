import styles from "../styles/MostSearched.module.scss";

const MostSearched = () => {
  const list = [
    {
      image:
        "https://excitedcats.com/wp-content/uploads/2020/11/Bengal-cat_Shutterstock_Alexander_Evgenyevich.jpg",
      name: "Bengal",
      detail: `Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it. `,
    },
    {
      image:
        "https://media.kidadl.com/60a3b21215f3672db3ca6921_interesting_chartreux_facts_for_kids_b051cbb7ce.jpg",
      name: "Chartreux",
      detail: `The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well. `,
    },
    {
      image:
        "https://www.thesprucepets.com/thmb/nW7w-RZWD-123v87NDaZfWA2y1g=/1414x1414/smart/filters:no_upscale()/GettyImages-1068070022-cc640df4be4d4c3a8b4356f76beeee60.jpg",
      name: "Khao Manee",
      detail: `The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat. `,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Top 10 most searched breeds</h1>
      {list.map((cat, index) => (
        <Breed
          key={index}
          number={index + 1}
          image={cat.image}
          name={cat.name}
          detail={cat.detail}
        />
      ))}
    </div>
  );
};

const Breed = ({ image, name, detail, number }) => {
  return (
    <div className={styles.breed}>
      <div className={styles.breedImage}>
        <img src={image} alt="cat" />
      </div>

      <div className={styles.breedDetails}>
        <h2>{`${number}. ${name}`}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default MostSearched;
