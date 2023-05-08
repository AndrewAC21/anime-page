import { useContext } from "react";
import styled from "styled-components";
import { AnimesContext } from "../context/AnimesContext";
import { Anime, AnimeContextType } from "../types";

const ContainerAnime = styled.div`
  width: 90%;
  height: 80vhs;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  > h1 {
    font-size: 2rem;
    margin: 1rem;
    text-transform: uppercase;
    align-self: center;
    text-align: center;
  }
`;
const Image = styled.img`
  width: 100%;
  max-width: 350px;
  margin: 1rem auto;
  border-radius: 10px;
`;

const Description = styled.p`
  width: 90%;
  font-size: 1.2rem;
  text-align: justify;
  margin: 1rem auto;
`;
interface Props {
  params: {
    id?: string | number | undefined;
  };
}

function SpecificAnime({ params }: Props) {
  const { globalAnimes } = useContext(AnimesContext) as AnimeContextType;
  console.log(params?.id);
  let selectedAnime: Anime | undefined = globalAnimes.find(
    (singleAnime) => singleAnime.id == params?.id
  );
  return (
    <ContainerAnime>
      <h1>{selectedAnime?.title}</h1>
      <Image src={selectedAnime?.image} alt="" />
      <Description>{selectedAnime?.description}</Description>
    </ContainerAnime>
  );
}

export default SpecificAnime;
