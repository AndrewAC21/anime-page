import { ReactNode, createContext } from "react";

type AnimeContextProps = {
  children: ReactNode;
};
const AnimesContext = createContext("");

const AnimesContextProvider = ({ children }: AnimeContextProps) => {
  return <AnimesContext.Provider value="">{children}</AnimesContext.Provider>;
};

export { AnimesContext, AnimesContextProvider };
