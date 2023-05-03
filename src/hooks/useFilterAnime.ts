import { useEffect, useState } from "react";
import { Anime } from "../types";

interface Props {
  keyword: string;
  array: Array<Anime>;
}
export default function useFilterAnimes({ keyword, array }: Props) {
  let [filteredAnimes, setFilteredAnimes] = useState<Anime[]>([]);
  useEffect(() => {
    if (!keyword) return setFilteredAnimes(array)

    let filteredData = array.filter((anime) =>
      anime.title.toLowerCase().includes(keyword.toLowerCase())
    );
    if (filteredData.length > 0) setFilteredAnimes(filteredData);
  }, [keyword, array]);
  return { filteredAnimes };
}
