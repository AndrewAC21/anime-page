import { useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import AnimeCard from "./AnimeCard";
import { AnimesContext } from "../context/AnimesContext";
import { Anime, AnimeContextType } from "../types";

export default function AnimeList() {
  let { globalAnimes } = useContext(AnimesContext) as AnimeContextType;
  return (
    <Grid container sx={{ width: "90%", margin: "1.5rem auto" }}>
      {globalAnimes.map((anime: Anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
    </Grid>
  );
}
