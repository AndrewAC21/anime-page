import { useEffect, useState } from "react";
import { getLatestAnimes } from "../services/getAnimes";
import { Anime } from "../types";

export default function useAnime() {
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
  return { loading, animes  };
}


