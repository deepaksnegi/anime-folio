import { Statistics } from "@/types/StatisticsResponse";
import jikanClient from "../clients/jikanClient";
import { APIType, AnimeInformation } from "@/types/AnimeResponse";
import { AnimeCharacter } from "@/types/AnimeCharacters";
import PQueue from "p-queue";
import { AnimePicture } from "@/types/AnimePictures";
import { AnimeEpisodes } from "@/types/AnimeEpisodes";

export interface QueryParams {
  pageParam: number;
  limit?: number;
  filter?: string;
  type?: string;
  sfw?: boolean;
  q?: string;
}

const jikanQueue = new PQueue({
  concurrency: 1,
  intervalCap: 1,
  interval: 900,
});

const getAnimeList = async (queryParams: QueryParams) => {
  return jikanQueue.add(
    async () => await getTopAnimeByFilter(queryParams),
  ) as Promise<APIType>;
};
const getTopAnimeByFilter = async (queryParams: QueryParams) => {
  const { pageParam = 1, limit = 10, filter, type, sfw = true } = queryParams;

  const queryParameters: Record<string, string> = {
    page: pageParam.toString(),
    limit: limit.toString(),
    sfw: sfw.toString(),
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

const getAnimeBySearch = async (queryParams: QueryParams) => {
  const { pageParam = 1, limit = 10, type, sfw = true, q } = queryParams;

  const queryParameters: Record<string, string> = {
    page: pageParam.toString(),
    limit: limit.toString(),
    sfw: sfw.toString(),
  };

  if (type) {
    queryParameters.type = type;
  }

  if (q) {
    queryParameters.q = q;
  }

  const response = await jikanClient.get<APIType>(
    `/anime?${new URLSearchParams(queryParameters)}`,
  );

  return response.data;
};

const getRandomAnime = async () => {
  const response = await jikanClient.get<{ data: AnimeInformation }>(
    "/random/anime",
  );

  return response.data.data;
};

const getAnimeById = async (id: string) => {
  const response = await jikanClient.get<{ data: AnimeInformation }>(
    `/anime/${id}`,
  );

  return response.data.data;
};

const getAnimeStatistics = async (id: string) => {
  const response = await jikanClient.get<{ data: Statistics }>(
    `/anime/${id}/statistics`,
  );

  return response.data.data;
};

const getAnimeCharacters = async (id: string) => {
  const response = await jikanClient.get<{ data: AnimeCharacter[] }>(
    `/anime/${id}/characters`,
  );

  return response.data.data;
};

const getAnimePictures = async (id: string) => {
  const response = await jikanClient.get<{ data: AnimePicture[] }>(
    `/anime/${id}/pictures`,
  );

  return response.data.data;
};

const getAnimeEpisodes = async (id: string) => {
  const response = await jikanClient.get<AnimeEpisodes>(
    `/anime/${id}/episodes`,
  );

  return response.data.data;
};

export {
  getAnimeList,
  getRandomAnime,
  getAnimeById,
  getAnimeStatistics,
  getAnimeCharacters,
  getAnimePictures,
  getAnimeEpisodes,
  getAnimeBySearch,
};
