import { Anime } from "../types";

function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.image} alt={anime.title} />
    </div>
  );
}

export default AnimeCard;
