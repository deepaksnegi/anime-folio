import { Statistics, StatisticsResponse } from "@/types/StatisticsResponse";
import jikanClient from "../clients/jikanClient";
import { APIType, AnimeDetails } from "@/types/AnimeResponse";

export interface QueryParams {
  pageParam: number;
  limit?: number;
  filter?: string;
  type?: string;
}

const getAnimeList = async (queryParams: QueryParams) => {
  const { pageParam = 1, limit = 10, filter, type } = queryParams;

  const queryParameters: Record<string, string> = {
    page: pageParam.toString(),
    limit: limit.toString(),
  };

  if (filter) {
    queryParameters.filter = filter;
  }

  if (type) {
    queryParameters.type = type;
  }

  const response = await jikanClient.get<APIType>(
    `/top/anime?${new URLSearchParams(queryParameters)}`,
  );

  return response.data;
};

const getRandomAnime = async () => {
  const response = await jikanClient.get<{ data: AnimeDetails }>(
    "/random/anime",
  );

  return response.data.data;
};

const getAnimeById = async (id: string) => {
  const response = await jikanClient.get<{ data: AnimeDetails }>(
    `/anime/${id}`,
  );

  return response.data.data;
};

const getAnimeStatistics = async (id: string) => {
  const response = await jikanClient.get<StatisticsResponse>(
    `/anime/${id}/statistics`,
  );

  return response.data.data;
};

export { getAnimeList, getRandomAnime, getAnimeById, getAnimeStatistics };
