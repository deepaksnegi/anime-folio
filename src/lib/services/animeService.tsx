import jikanClient from "../clients/jikanClient";
import { APIType } from "@/types/ApiResponse";

const getPopularAnime = async ({
  pageParam = 0,
  limit = 10,
}: {
  pageParam: number;
  limit?: number;
}) => {
  const response = await jikanClient.get<APIType>(
    `/top/anime?page=${pageParam}&limit=${limit}`,
  );

  return response.data;
};

export { getPopularAnime };
