"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPopularAnime } from "../services/animeService";
import { PopularAnime } from "@/types/PopularAnime";

const useGetPopularAnime = () => {
  const queryKey = ["popularAnime"];

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey,
    queryFn: getPopularAnime,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.pagination.has_next_page
        ? lastPage.pagination.current_page + 1
        : undefined;
      return nextPage;
    },
  });

  let popularAnime: PopularAnime[] = [];
  const pages = data?.pages ?? [];

  for (const page of pages) {
    const data = page.data;
    const animeList = data.map((anime) => ({
      id: anime.mal_id,
      url: anime.url,
      images: anime.images,
      trailer: anime.trailer,
      title: anime.title_english,
      episodes: anime.episodes,
      status: anime.status,
      duration: anime.duration,
      score: anime.score,
      rank: anime.rank,
      scoreBy: anime.scored_by,
      description: anime.synopsis,
    }));

    popularAnime = popularAnime.concat(animeList);
  }

  return {
    popularAnime,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};

const useGetTopFivePopularAnime = () => {
  const queryKey = ["topFivePopularAnime"];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => getPopularAnime({ pageParam: 1, limit: 5 }),
  });

  const topFiveAnime =
    data?.data.map((anime) => ({
      id: anime.mal_id,
      url: anime.url,
      images: anime.images,
      trailer: anime.trailer,
      title: anime.title_english,
      episodes: anime.episodes,
      status: anime.status,
      duration: anime.duration,
      score: anime.score,
      rank: anime.rank,
      scoreBy: anime.scored_by,
      description: anime.synopsis,
    })) ?? [];

  return {
    topFiveAnime,
    error,
    isLoading,
  };
};

export { useGetPopularAnime, useGetTopFivePopularAnime };
