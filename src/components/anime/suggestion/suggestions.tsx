import { useGetPopularAnime } from "@/lib/hooks/animeHook";
import React from "react";
import TrendingCard from "@/components/anime/trendingCard";
import PopularAnimeSkeleton from "@/components/loaders/popularAnimeSkeleton";

type Props = {};

const Suggestions = (props: Props) => {
  const Suggestion = ({
    heading,
    filter,
  }: {
    heading: string;
    filter: string;
  }) => {
    const {
      popularAnime,
      error,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      status,
    } = useGetPopularAnime(12, undefined, filter);

    return (
      <div className="mb-6">
        <h3 className="text-2xl">{heading}</h3>
        <div className="flex flex-wrap justify-evenly gap-6 px-4 py-4">
          {status === "pending" ? (
            <PopularAnimeSkeleton />
          ) : (
            popularAnime.map((anime) => (
              <TrendingCard anime={anime} key={anime.mal_id} />
            ))
          )}
        </div>
      </div>
    );
  };

  const categories = [
    { title: "Top Movies", filter: "movie" },
    { title: "Top Original Video Animations (OVAs)", filter: "ova" },
    { title: "Specials", filter: "special" },
  ];

  return (
    <div className="px-4 py-6">
      {categories.map(({ title, filter }) => (
        <Suggestion key={title} heading={title} filter={filter} />
      ))}
    </div>
  );
};

export default Suggestions;
