import { useQuery } from "@tanstack/react-query";
import { getArtwork } from "../api/artworks";

export function useArtwork(id: number) {
  return useQuery({
    queryKey: ["artwork", id],
    queryFn: () => getArtwork(id),
    enabled: !!id,
  });
}
