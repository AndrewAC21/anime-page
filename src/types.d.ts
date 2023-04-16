export interface Anime {
  id: number;
  title: string;
  image: string;
  description?: string;
}

export interface AnimeContextType {
  searchKeyword: string;
  filteredAnimes: Anime[];
  handleSearch: (keyword: string) => void;
}
