import { useContext } from "react";
import styled from "styled-components";
import { Anime, AnimeContextType } from "../types";
import AnimeCard from "./AnimeCard";
import { AnimesContext } from "../context/AnimesContext";
import NotFound from "./NotFound";

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
  let { globalAnimes } = useContext(AnimesContext) as AnimeContextType;
  return (
    <Container>
      {globalAnimes.map((anime: Anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
      {globalAnimes.length === 0 && <NotFound />}
    </Container>
  );
}
