import { useGetTopFivePopularAnime } from "@/lib/hooks/animeHook";
import React from "react";
import CategoryCard from "../categoryCard";

const Featured = () => {
  const { topFiveAnime, error, isLoading } = useGetTopFivePopularAnime();

  return isLoading ? (
    <h3>Loading</h3>
  ) : (
    <div className="flex flex-wrap px-7 py-5">
      <CategoryCard
        heading="Top Airing"
        animeList={topFiveAnime}
        filterName="airing"
      />
      <CategoryCard
        heading="Most Popular"
        animeList={topFiveAnime}
        filterName="bypopularity"
      />
      <CategoryCard
        heading="Most Favorite"
        animeList={topFiveAnime}
        filterName="favorite"
      />
      <CategoryCard
        heading="Top Upcoming"
        animeList={topFiveAnime}
        filterName="upcoming"
      />
    </div>
  );
};

export default Featured;
