import axios from "axios";

export const mostSearchedBreeds = [
  "ragd",
  "esho",
  "mcoo",
  "pers",
  "bsho",
  "drex",
  "abys",
  "asho",
  "sfol",
  "sphy",
];

export const getBreedData = async (breedId) => {
  const res = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`
  );

  return res.data[0];
};

export const getBreedImage = async (breedId) => {
  const res = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`
  );

  return res.data[0].url;
};

export const getAllBreeds = async () => {
  const req = await axios.get("https://api.thecatapi.com/v1/breeds");
  const res = await req.data;

  const data = res.map(({ id, name }) => ({ id, name }));

  return data;
};
