import { useState, useEffect } from "react";
import { Anime } from "./types";
import { getLatestAnimes } from "./services/getLatestAnimes";
import AnimeCard from "./components/AnimeCard";
function App() {
  let [animes, setAnimes] = useState<Array<Anime>>([]);
  useEffect(() => {
    async function fetchData() {
      let animesArray = await getLatestAnimes(); 
      setAnimes([...animesArray]);
    }
    fetchData();
  }, []);
  return (
    <div>
      {animes.map((anime: Anime) => {
        return <AnimeCard anime={anime} key={anime.id} />;
      })}
    </div>
  );
}

export default App;
