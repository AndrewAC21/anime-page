import styled from "styled-components";
import { Anime } from "../types";
import { Link } from "wouter";
import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Container = styled(Grid)`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ImageListItemStyled = styled(ImageListItem)`
  width: 80%;
  min-width: 270px;
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
    cursor: pointer;
  }
`;
const Image = styled.img`
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ImageListItemBarTitle = styled(ImageListItemBar)`
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;
interface AnimeCardProps {
  anime: Anime;
}
function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Container xs={12} sm={6} md={4}>
      <StyledLink to={`/anime/${anime.id}`}>
        <ImageListItemStyled key={anime.id}>
          <Image
            src={`${anime.image}?w=248&fit=crop&auto=format`}
            srcSet={`${anime.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={anime.title}
            loading="lazy"
          />
          <ImageListItemBarTitle
            title={anime.title}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`Add to favorites ${anime.title}`}
              >
                <StarBorderIcon />
              </IconButton>
            }
          />
        </ImageListItemStyled>
      </StyledLink>
    </Container>
  );
}

export default AnimeCard;
