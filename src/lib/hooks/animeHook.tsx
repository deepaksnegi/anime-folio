"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getAnimeByID,
  getAnimeList,
  getRandomAnime,
} from "../services/animeService";

const useGetPopularAnime = (limit?: number, filter?: string) => {
  const queryKey = ["popularAnime", filter, limit];

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => getAnimeList({ pageParam, filter, limit }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.pagination.has_next_page
        ? lastPage.pagination.current_page + 1
        : undefined;
      return nextPage;
    },
  });

  const pages = data?.pages ?? [];

  const popularAnime = pages.flatMap((page) => page.data);

  return {
    popularAnime,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};

const useGetRandomAnime = () => {
  const queryKey = ["randomAnime"];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: getRandomAnime,
  });

  return {
    data,
    error,
    isLoading,
  };
};

const useGetAnimeById = (id: string) => {
  const queryKey = ["getAnimeById", id];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => getAnimeByID(id),
  });

  return {
    data,
    error,
    isLoading,
  };
};

export { useGetPopularAnime, useGetRandomAnime, useGetAnimeById };
