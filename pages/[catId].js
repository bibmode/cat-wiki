import Head from "next/head";
import BreedDetail from "../components/BreedDetail";
import OtherPhotos from "../components/OtherPhotos";
import { getBreedData } from "../utils/data";

const BreedDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{`CatWiki | ${props.cat.breeds[0].name}`}</title>
        <link rel="icon" href="devchallenges.png" />
        <meta
          name="description"
          content={`${props.cat.breeds[0].description}`}
        />
      </Head>
      <BreedDetail cat={props.cat} />
      <OtherPhotos images={props.images} />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const catId = params.catId;

  const req1 = await getBreedData(catId);
  const cat = await req1;

  const images = [];

  for (let index = 0; index < 8; index++) {
    const req2 = await getBreedData(catId);
    const image = await req2.url;

    images.push(image);
  }

  return {
    props: {
      cat,
      images,
    },
  };
};

export default BreedDetailPage;
