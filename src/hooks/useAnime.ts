import { useEffect, useState } from "react";
import { getAnimeById, getLatestAnimes } from "../services/getAnimes";
import { Anime } from "../types";

interface Props {
  animeId?: string;
}

export default function useAnime({ animeId }: Props = {}) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  // const [specificAnime, setSpecificAnime] = useState<Anime>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let animesArray = await getLatestAnimes();
      setAnimes([...animesArray]);
      setLoading(false);
    }
    fetchData();
  }, []);
  // useEffect(() => {
  //   async function fetchSpecificAnime() {
  //     if (!animeId) return;

  //     let animeInfo = await getAnimeById(animeId);
  //     setSpecificAnime(animeInfo);
  //   }
  //   fetchSpecificAnime();
  // }, [animeId]);
  return { loading, animes  };
}


