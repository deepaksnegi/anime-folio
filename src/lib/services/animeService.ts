import jikanClient from "../clients/jikanClient";
import { APIType, AnimeDetails } from "@/types/ApiResponse";

export interface QueryParams {
  pageParam: number;
  limit?: number;
  filter?: string;
}

const getAnimeList = async (queryParams: QueryParams) => {
  const { pageParam = 1, limit = 10, filter } = queryParams;

  const queryParameters: Record<string, string> = {
    page: pageParam.toString(),
    limit: limit.toString(),
  };

  if (filter) {
    queryParameters.filter = filter;
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

const getAnimeByID = async (id: string) => {
  const response = await jikanClient.get<{ data: AnimeDetails }>(
    `/anime/${id}`,
  );

  return response.data.data;
};

export { getAnimeList, getRandomAnime, getAnimeByID };
