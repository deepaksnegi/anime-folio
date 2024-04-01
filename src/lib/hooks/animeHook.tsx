"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getAnimeById,
  getAnimeList,
  getAnimeStatistics,
  getRandomAnime,
} from "../services/animeService";

const useGetPopularAnime = (limit?: number, filter?: string, type?: string) => {
  const queryKey = ["popularAnime", filter, limit, type];

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      getAnimeList({ pageParam, filter, limit, type }),
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
    queryFn: () => getAnimeById(id),
  });

  return {
    data,
    error,
    isLoading,
  };
};

const useGetAnimeStatistics = (id: string, enabled?: boolean) => {
  const queryKey = ["getAnimeStatistics", id];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => getAnimeStatistics(id),
    enabled,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export {
  useGetPopularAnime,
  useGetRandomAnime,
  useGetAnimeById,
  useGetAnimeStatistics,
};
