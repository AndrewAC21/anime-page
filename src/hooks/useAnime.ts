import { useEffect, useState } from "react";
import { getAnimeById, getLatestAnimes } from "../services/getAnimes";
import { Anime } from "../types";

interface Props {
  animeId?: number;
}

export default function useAnime({ animeId }: Props = {}) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      let animesArray = await getLatestAnimes();
      setAnimes([...animesArray]);
      setLoading(false);
    }
    fetchData();
  }, []);

  return { loading, animes };
}
