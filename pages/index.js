import Head from "next/head";
import HomeArticle from "../components/HomeArticle";
import HomeBanner from "../components/HomeBanner";
import SearchDrawer from "../components/SearchDrawer";
import { mostSearchedBreeds, getBreedData, getAllBreeds } from "../utils/data";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>CatWiki</title>
        <link rel="icon" href="devchallenges.png" />
        <meta
          name="description"
          content="Browse cat breeds and learn more about your favorite cats!"
        />
      </Head>
      <div>
        <SearchDrawer searchData={props.searchData} />
        <HomeBanner cats={props.cats} searchData={props.searchData} />
        <HomeArticle />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let data = [];
  for (let index = 0; index < 4; index++) {
    const cat = await getBreedData(mostSearchedBreeds[index]).then(
      (res) => res
    );

    data[index] = { cat };
  }

  const searchData = await getAllBreeds().then((res) => res);

  return {
    props: {
      cats: data,
      searchData,
    },
  };
};
