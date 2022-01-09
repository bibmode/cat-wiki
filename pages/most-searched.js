import MostSearched from "../components/MostSearched";
import { getBreedData, getBreedImage, mostSearchedBreeds } from "../utils/data";

const MostSearchedPage = (props) => {
  return (
    <>
      <MostSearched cats={props.cats} />
    </>
  );
};

export const getStaticProps = async () => {
  let data = [];
  for (let index = 0; index < mostSearchedBreeds.length; index++) {
    const cat = await getBreedData(mostSearchedBreeds[index]).then(
      (res) => res
    );

    data[index] = { cat };
  }

  return {
    props: {
      cats: data,
    },
  };
};

export default MostSearchedPage;
