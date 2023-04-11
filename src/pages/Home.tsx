import { useContext } from "react";
import { AnimesContext } from "../context/AnimesContext";
import AnimeList from "../components/AnimeList";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <AnimeList />
    </>
  );
}
