import { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "wouter";
import { AnimesContext } from "../context/AnimesContext";
import { AnimeContextType } from "../types";
import { Paths } from "../pages/paths";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  input {
    width: 80%;
    min-width: 300px;
    max-width: 500px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
    font-size: 2rem;
  }
`;
function SearchBar() {
  let { handleSearch, searchKeyword } = useContext(
    AnimesContext
  ) as AnimeContextType;
  let [location, setLocation] = useLocation();

  let handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let animeId = Number(searchKeyword);
    if (!animeId) {
      alert("Make sure you enter a valid ID"); //TODO - Create a modal to show this message

      handleSearch("");
      setLocation(Paths.HOME);
    } else {
      setLocation(`${Paths.ANIME}/${animeId}`);
    }
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearchInput}
          placeholder="Search for an anime"
          value={searchKeyword}
        />
      </StyledForm>
    </>
  );
}

export default SearchBar;
