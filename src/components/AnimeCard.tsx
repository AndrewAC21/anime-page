import styled from "styled-components";
import { Anime } from "../types";
const Container = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 00px;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border-left: 10px;
    border-top: 10px;
    margin: 2rem 0;
  }
`;
const Image = styled.img`
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h3`
  width: 90%;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem auto;
  text-align: center;
`;
interface AnimeCardProps {
  anime: Anime;
}
function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Container>
      <Image src={anime.image} alt={anime.title} />
      <Title>{anime.title}</Title>
      {/* <p>{anime.synopsis}</p> */}
    </Container>
  );
}

export default AnimeCard;
