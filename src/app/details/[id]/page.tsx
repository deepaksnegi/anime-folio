"use client";

import AnimeDetails from "@/components/anime/animeDetails";
import Loader from "@/components/ui/loader";
import { useGetAnimeById } from "@/lib/hooks/animeHook";

const Page = ({ params }: { params: { id: string } }) => {
  const { error, isLoading, data } = useGetAnimeById(params.id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return "Error" + error?.message;
  }

  return data && <AnimeDetails anime={data} />;
};

export default Page;
