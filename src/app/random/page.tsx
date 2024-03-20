"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Rating from "@/components/anime/rating";
import { useGetRandomAnime } from "@/lib/hooks/animeHook";
import AnimeDetails from "@/components/anime/animeDetails";

type Props = {};

const RandomSuggestion = (props: Props) => {
  const { randomAnime, isLoading, error } = useGetRandomAnime();

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "Error" + error?.message;
  }

  return <AnimeDetails anime={randomAnime} />;
};

export default RandomSuggestion;
