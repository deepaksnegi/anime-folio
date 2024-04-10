"use client";

import AnimeDetails from "@/components/anime/animeDetails";
import Loader from "@/components/loaders/loader";
import {
  useGetAnimeById,
  useGetAnimeCharacters,
  useGetAnimeStatistics,
} from "@/lib/hooks/animeHook";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const anime = useGetAnimeById(id);
  const statistics = useGetAnimeStatistics(id);
  const animeCharacters = useGetAnimeCharacters(id, !anime.isLoading);

  if (anime.isLoading && statistics.isLoading) {
    return <Loader />;
  }

  if (anime.error && statistics.error) {
    return "Error" + anime.error?.message;
  }

  return (
    anime.data &&
    statistics.data && (
      <AnimeDetails anime={anime.data} statistics={statistics.data} />
    )
  );
};

export default Page;
