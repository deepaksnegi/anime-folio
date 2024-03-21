"use client";

import React from "react";
import { useGetRandomAnime } from "@/lib/hooks/animeHook";
import AnimeDetails from "@/components/anime/animeDetails";

type Props = {};

const RandomSuggestion = (props: Props) => {
  const { data, isLoading, error } = useGetRandomAnime();

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "Error" + error?.message;
  }

  return data && <AnimeDetails anime={data} />;
};

export default RandomSuggestion;
