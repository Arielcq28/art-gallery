import { api } from "./client";

export function getArtworks() {
  return api("/artworks");
}

export function getArtwork(id: number) {
  return api(`/artworks/${id}`);
}
