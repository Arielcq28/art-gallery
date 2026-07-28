import { useArtwork } from "../hooks/useArtwork";

function Art() {
  const { data, isLoading, error } = useArtwork(129884);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      <h1>{data?.title}</h1>
      <img
        style={{ width: "420px", margin: "0 auto" }}
        src={`https://www.artic.edu/iiif/2/${data?.image_id}/full/843,/0/default.jpg`}
        alt={data?.short_description}
      />
    </>
  );
}

export default Art;
