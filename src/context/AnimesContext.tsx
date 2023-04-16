import { createContext, useState } from "react";
import useAnime from "../hooks/useAnime";
import { Anime, AnimeContextType } from "../types";

type AnimeContextProps = {
  children: JSX.Element | JSX.Element[];
};
const AnimesContext = createContext<AnimeContextType | null>(null);

const AnimesContextProvider = ({ children }: AnimeContextProps) => {
  let { animes } = useAnime();
  let [searchKeyword, setSearchKeyword] = useState("");
  let filteredAnimes = animes.filter((anime: Anime) =>
    anime.title.toLowerCase().includes(searchKeyword)
  );

  let handleSearch = (keyword: string) => {
    setSearchKeyword(keyword.toLowerCase());
  };

  return (
    <AnimesContext.Provider
      value={{ handleSearch, searchKeyword, filteredAnimes }}
    >
      {children}
    </AnimesContext.Provider>
  );
};

export { AnimesContext, AnimesContextProvider };
