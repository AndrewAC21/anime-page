import axios from "axios";
import { Anime } from "../types";

const BASE_URL = "https://api.jikan.moe/v4";

export async function getLatestAnimes() {
  let response = await axios.get(`${BASE_URL}/seasons/now`);
  let { data } = await response.data;
  const mappedList: Anime[] = data.map((anime: any) => {
    return {
      id: anime.mal_id,
      title: anime.title,
      image: anime.images.webp.image_url,
      description: anime.synopsis,
    };
  });

  return mappedList;
}

export async function getAnimeById(id: number | string) {
  let response = await axios.get(`${BASE_URL}/anime/${id}`);
  let { data } = await response.data;
  return data
}
