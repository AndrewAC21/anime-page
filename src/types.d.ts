export interface Anime {
  id: number;
  title: string;
  image: string;
}

export interface AnimeContextType {
  animes: Anime[];
  searchKeyword: string;
  filteredAnimes: Anime[];
  handleSearch: (keyword: string) => void;
  setAnimes: (animeList: Anime[]) => void;
}
export interface Animex {
  state: AnimeState;
}
