import { useContext } from "react";
import { useLocation } from "wouter";
import { AnimesContext } from "../context/AnimesContext";
import { AnimeContextType } from "../types";

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
      setLocation("/");
    } else {
      setLocation(`/anime/${animeId}`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearchInput}
          placeholder="Search for an anime"
          value={searchKeyword}
        />
      </form>
    </>
  );
}

export default SearchBar;
