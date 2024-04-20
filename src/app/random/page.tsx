"use client";

import React from "react";
import {
  useGetAnimeCharacters,
  useGetAnimePictures,
  useGetAnimeStatistics,
  useGetRandomAnime,
} from "@/lib/hooks/animeHook";
import AnimeDetails from "@/components/anime/animeDetails";
import Loader from "@/components/loaders/loader";

type Props = {};

const RandomSuggestion = (props: Props) => {
  const anime = useGetRandomAnime();

  const id = anime.data?.mal_id;
  const statistics = useGetAnimeStatistics(
    id?.toString() ?? "",
    id != undefined,
  );

  const animeCharacters = useGetAnimeCharacters(
    id?.toString() ?? "",
    id != undefined,
  );

  const animePicture = useGetAnimePictures(
    id?.toString() ?? "",
    id != undefined,
  );

  if (anime.isLoading && statistics.isLoading && animePicture.isLoading) {
    return <Loader showDialog />;
  }

  if (anime.error && statistics.error) {
    return "Error" + anime.error?.message;
  }

  return (
    anime.data &&
    statistics.data && (
      <AnimeDetails
        anime={anime.data}
        statistics={statistics.data}
        pictures={animePicture.data ?? []}
        characters={animeCharacters.data ?? []}
      />
    )
  );
};

export default RandomSuggestion;
