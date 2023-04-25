import { createContext, useState } from "react";
import useAnime from "../hooks/useAnime";
import { Anime, AnimeContextType } from "../types";
import useFilterAnimes from "../hooks/useFilterAnime";

type AnimeContextProps = {
  children: JSX.Element | JSX.Element[];
};
const AnimesContext = createContext<AnimeContextType | null>(null);

const AnimesContextProvider = ({ children }: AnimeContextProps) => {
  const [keyword, setKeyword] = useState<string>("");
  let { animes } = useAnime();
  let { filteredAnimes } = useFilterAnimes({ keyword, array: animes });

  let handleSearch = (e: string) => {
    setKeyword(e);
  };
  return (
    <AnimesContext.Provider
      value={{ globalAnimes: filteredAnimes, handleSearch }}
    >
      {children}
    </AnimesContext.Provider>
  );
};

export { AnimesContext, AnimesContextProvider };
