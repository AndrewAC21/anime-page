import { useContext } from "react";
import { AnimesContext } from "../context/AnimesContext";
import { Anime, AnimeContextType } from "../types";
interface Props {
  params: {
    id: number;
  };
}

function SpecificAnime({ params }: Props) {
  const { globalAnimes } = useContext(AnimesContext) as AnimeContextType;
  let selectedAnime: Anime | undefined = globalAnimes.find(
    (singleAnime) => singleAnime.id == params.id
  );
  console.log(selectedAnime);
  return (
    <>
      <h1>{selectedAnime?.title}</h1>
      <img src={selectedAnime?.image} alt="" />
      <p>{selectedAnime?.description}</p>

    </>
  );
}

export default SpecificAnime;
