import { createContext, useState } from "react";
import { Anime, AnimeContextType } from "../types";

type AnimeContextProps = {
  children: JSX.Element | JSX.Element[];
};
const AnimesContext = createContext<AnimeContextType | null>(null);

const AnimesContextProvider = ({ children }: AnimeContextProps) => {
  let [animes, setAnimes] = useState<Anime[]>([]);
  let [searchKeyword, setSearchKeyword] = useState("");
  let filteredAnimes = animes.filter((anime) =>
    anime.title.toLowerCase().includes(searchKeyword)
  );

  let handleSearch = (keyword: string) => {
    setSearchKeyword(keyword.toLowerCase());
  };

  return (
    <AnimesContext.Provider
      value={{ handleSearch, searchKeyword, setAnimes, animes, filteredAnimes }}
    >
      {children}
    </AnimesContext.Provider>
  );
};

export { AnimesContext, AnimesContextProvider };
