import {
  CalendarIcon,
  ChevronRight,
  ClockIcon,
  PlayCircleIcon,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimeDetails } from "@/types/ApiResponse";

type Props = {};

const Hero = ({ animeList }: { animeList: AnimeDetails[] }) => {
  const heroSlide = animeList.map((anime) => (
    <CarouselItem data-bs-interval="4 00" key={anime.mal_id}>
      <div className="h-[55vh] min-h-72 w-full cursor-pointer">
        <div className="relative flex h-full">
          <div className="w-[30%]">
            <div className="absolute bottom-12 left-6 z-10 w-[40%] space-y-4 md:left-12">
              <span className="text-lg font-semibold">
                #{anime.rank} Spotlight
              </span>
              <h1 className="text-xl font-medium lg:text-4xl">
                {anime.title_english}
              </h1>
              <div className="hidden gap-10 md:flex">
                <span className="flex items-center gap-1">
                  <CalendarIcon size={16} /> {anime.year}
                </span>
                <span className="flex items-center gap-1">
                  <PlayCircleIcon size={16} />
                  {anime.episodes}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon size={16} />
                  {anime.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-green-400" />
                  <span className="episode-count">{anime.score}</span>
                </span>
              </div>
              <p className="hidden md:block">
                {anime.synopsis?.slice(0, 200) + "..."}
              </p>
              <div className="flex gap-3">
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  href={`/watch?name=`}
                  className="flex h-11 items-center gap-x-2 rounded-3xl bg-secondary px-6 text-secondary-foreground hover:bg-secondary/80"
                >
                  Watch Now
                  <PlayCircleIcon size={18} />
                </Link>
                <Link
                  href={`/details/${anime.mal_id}/`}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="flex h-11 items-center gap-x-1 rounded-3xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
                >
                  Details <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-[70%]">
            <Image
              className="object-cover"
              src={anime.images?.webp.large_image_url}
              fill
              alt="anime"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute -left-1 h-full w-full bg-[linear-gradient(90deg,_#fff_5%,_#24242800_55%,_#24242800_10%)] dark:bg-[linear-gradient(90deg,_#020817_5%,_#24242800_55%,_#24242800_10%)]" />
          </div>
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>{heroSlide}</CarouselContent>
        <div className="absolute bottom-20 right-20 hidden md:block">
          <CarouselPrevious type="button" />
          <CarouselNext type="button" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
