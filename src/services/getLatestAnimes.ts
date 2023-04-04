import axios from "axios";
import { Anime } from "../types";

const API_KEY = import.meta.env.VITE_API_TOKEN;
const BASE_URL = "https://myanimelist.p.rapidapi.com";

const options = {
  method: "GET",
  url: "https://myanimelist.p.rapidapi.com/anime/top/airing",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  },
};

export async function getLatestAnimes() {
  let response = await axios.get("https://api.jikan.moe/v4/seasons/now");
  let { data } = await response.data;
  const mappedList: Anime[] = data.map((anime: any) => {
    return {
      id: anime.mal_id,
      title: anime.title,
      image: anime.images.webp.image_url,
    };
  });

  return mappedList;
}
