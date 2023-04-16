import { useContext } from "react";
import { AnimesContext } from "../context/AnimesContext";
import { AnimeContextType } from "../types";

function SearchBar() {
  let { handleSearch } = useContext(AnimesContext) as AnimeContextType;
  
  let handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO - Create conditional to check if search input is a valid anime id
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearchInput}
          placeholder="Search for an anime"
        />
      </form>
    </>
  );
}

export default SearchBar;
