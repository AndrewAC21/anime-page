export interface Anime {
  id: number;
  title: string;
  image: string;
  description?: string;
}

export interface AnimeContextType {
  globalAnimes: Anime[];
  handleSearch: (keyword: string) => void;
}
