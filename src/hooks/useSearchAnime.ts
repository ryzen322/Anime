import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import { searchAnime } from "../services/api";

export const useSearchAnime = () => {
  const [filter, setFilter] = useState<string | undefined>("dragon");
  const debouncedFilter = useDebounce(filter, 500);

  const queries = useQuery({
    queryKey: ["search", debouncedFilter],
    queryFn: async () => searchAnime(debouncedFilter),
    retry: 1,
  });

  return {
    queries,
    setFilter,
  };
};
