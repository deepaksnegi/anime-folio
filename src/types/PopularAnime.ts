import { Images, Trailer } from "./ApiResponse";

export interface PopularAnime {
  id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  title: string;
  episodes: number;
  status: string;
  duration: string;
  score: number;
  rank: number;
  scoreBy: number;
  description: string;
}
