import { useState, useEffect } from "react";
import styled from "styled-components";
import { Anime } from "../types";
import AnimeCard from "./AnimeCard";
import { getLatestAnimes } from "../services/getLatestAnimes";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export default function AnimeList() {
  let [animes, setAnimes] = useState<Array<Anime>>([]);
  useEffect(() => {
    async function fetchData() {
      let animesArray = await getLatestAnimes();
      setAnimes([...animesArray]);
    }
    fetchData();
  }, []);
  return (
    <Container>
      {animes.map((anime: Anime) => {
        return <AnimeCard anime={anime} key={anime.id} />;
      })}
    </Container>
  );
}
