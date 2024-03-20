"use client";

import Featured from "@/components/anime/suggestion/featured";
import TrendingCard from "@/components/anime/trendingCard";
import Hero from "@/components/hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetTopFivePopularAnime } from "@/lib/hooks/animeHook";

const Home = () => {
  const { topFiveAnime, error, isLoading } = useGetTopFivePopularAnime();

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "Error" + error?.message;
  }

  return (
    <>
      <Hero animeList={topFiveAnime} />

      <div className="mt-4">
        <h3 className="px-4 py-6 text-2xl">Popular Anime</h3>
        <Carousel
          className=" w-full px-2 md:px-10 lg:px-20"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious
            className="absolute bottom-20 left-10 z-10 hidden md:flex"
            type="button"
          />
          <CarouselContent>
            {topFiveAnime.map((anime) => (
              <CarouselItem
                key={anime.mal_id}
                className="basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="px-1 xl:px-2">
                  <TrendingCard anime={anime} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext
            className="absolute bottom-20 right-20 hidden md:flex"
            type="button"
          />
        </Carousel>
      </div>

      <Featured />
    </>
  );
};

export default Home;
