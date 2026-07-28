export interface Artwork {
  id: number;
  title: string;
  artist_title: string | null;
  image_id: string | null;
  date_display: string;
  medium_display: string;
  dimensions: string;
  place_of_origin: string | null;
  department_title: string;
  short_description: string;
}
