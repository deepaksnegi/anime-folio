"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PopularCard from "@/components/ui/popularCard";
import { useGetTopFivePopularAnime } from "@/lib/hooks/animeHook";
import { randomIntFromInterval } from "@/lib/utils";
import Image from "next/image";

const Home = () => {
  const { topFiveAnime, error, isLoading } = useGetTopFivePopularAnime();

  const randomIndex = randomIntFromInterval(0, 4);

  const topAnime = topFiveAnime[randomIndex];

  if (isLoading) {
    return "Loading";
  }

  if (error) {
    return "Error" + error?.message;
  }

  return (
    <>
      <div className="relative h-[40vh] min-h-72 w-full cursor-pointer">
        <Image
          src={topAnime.images.jpg.large_image_url}
          alt="anime"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-28 top-48">
          <span className="text-lg font-semibold uppercase text-slate-100 md:text-xl">
            #Trending
          </span>
          <h3 className="text-2xl font-bold text-slate-100 md:text-4xl">
            {topAnime.title}
          </h3>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="px-4 py-6 text-2xl">Popular Anime</h3>
        <Carousel
          className="w-full px-2 md:px-10 lg:px-20"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {topFiveAnime.map((anime) => (
              <CarouselItem
                key={anime.id}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="px-1 xl:px-2">
                  <PopularCard anime={anime} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="mt-4">
        <h3 className="px-4 py-6 text-2xl">Top Airing</h3>
        <Carousel
          className="w-full px-2 md:px-10 lg:px-20"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {topFiveAnime.map((anime) => (
              <CarouselItem
                key={anime.id}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="px-1 xl:px-2">
                  <PopularCard anime={anime} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
