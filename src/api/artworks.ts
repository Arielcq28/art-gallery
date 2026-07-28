import type { Artwork } from "../types/artwork";
import { api } from "./client";

interface ApiResponse<T> {
  data: T;
}

export function getArtworks() {
  return api("/artworks");
}

export async function getArtwork(id: number): Promise<Artwork> {
  const json: ApiResponse<Artwork> = await api(`/artworks/${id}`);
  return json.data;
}
