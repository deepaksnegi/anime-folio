export interface StatisticsResponse {
  data: Statistics;
}

export interface Statistics {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: Score[];
}

export interface Score {
  score: number;
  votes: number;
  percentage: number;
}
