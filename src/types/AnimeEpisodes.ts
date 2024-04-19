export interface AnimeEpisodes {
  data: AnimeEpisode[];
  pagination: Pagination;
}

export interface AnimeEpisode {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  duration: number;
  aired: string;
  filler: boolean;
  recap: boolean;
  forum_url: string;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
}
