"use client";

import AnimeDetails from "@/components/anime/animeDetails";
import Loader from "@/components/loaders/loader";
import {
  useGetAnimeById,
  useGetAnimeCharacters,
  useGetAnimePictures,
  useGetAnimeStatistics,
} from "@/lib/hooks/animeHook";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const anime = useGetAnimeById(id);
  const statistics = useGetAnimeStatistics(id);
  const animeCharacters = useGetAnimeCharacters(id);
  const animePicture = useGetAnimePictures(id);

  if (anime.isLoading && statistics.isLoading && animePicture.isLoading) {
    return <Loader />;
  }

  if (anime.error && statistics.error && animePicture.error) {
    return "Error" + anime.error?.message;
  }

  return (
    anime.data &&
    statistics.data &&
    animeCharacters.data && (
      <AnimeDetails
        anime={anime.data}
        statistics={statistics.data}
        pictures={animePicture.data ?? []}
        characters={animeCharacters.data}
      />
    )
  );
};

export default Page;
