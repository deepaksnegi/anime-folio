"use client";

import AnimeDetails from "@/components/anime/animeDetails";
import { useGetAnimeById } from "@/lib/hooks/animeHook";

const Page = ({ params }: { params: { id: string } }) => {
  const { error, isLoading, anime } = useGetAnimeById(params.id);

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "Error" + error?.message;
  }

  return <AnimeDetails anime={anime} />;
};

export default Page;
