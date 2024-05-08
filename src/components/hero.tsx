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
import { AnimeInformation } from "@/types/AnimeResponse";

type Props = {};

const Hero = ({ animeList }: { animeList: AnimeInformation[] }) => {
  const heroSlide = animeList.map(
    ({
      rank,
      year,
      episodes,
      title_english,
      duration,
      score,
      synopsis,
      trailer,
      mal_id,
      images,
    }) => (
      <CarouselItem data-bs-interval="4 00" key={mal_id}>
        <div className="h-[55vh] min-h-72 w-full cursor-pointer">
          <div className="relative flex h-full">
            <div className="w-[30%]">
              <div className="absolute bottom-12 left-6 z-10 w-[70%] space-y-4 md:left-12 md:w-[40%]">
                <span className="text-lg font-semibold">#{rank} Spotlight</span>
                <h1 className="text-xl font-medium lg:text-4xl">
                  {title_english}
                </h1>
                <div className="hidden gap-10 md:flex">
                  <span className="flex items-center gap-1">
                    <CalendarIcon size={16} /> {year}
                  </span>
                  <span className="flex items-center gap-1">
                    <PlayCircleIcon size={16} />
                    {episodes}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon size={16} />
                    {duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-green-400" />
                    <span className="episode-count">{score}</span>
                  </span>
                </div>
                <p className="hidden md:block">
                  {synopsis?.slice(0, 200) + "..."}
                </p>
                <div className="flex gap-3">
                  <Link
                    href={trailer.embed_url || `/details/${mal_id}/`}
                    className="flex h-11 items-center gap-x-2 rounded-3xl bg-secondary px-4 text-sm text-secondary-foreground hover:bg-secondary/80 md:px-6 md:text-lg"
                  >
                    Watch Now
                    <PlayCircleIcon size={18} />
                  </Link>
                  <Link
                    href={`/details/${mal_id}/`}
                    className="flex h-11 items-center gap-x-1 rounded-3xl bg-primary px-4 text-sm text-primary-foreground hover:bg-primary/90 md:px-6 md:text-lg"
                  >
                    Details <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-[70%]">
              <Image
                className="object-cover"
                src={
                  trailer.images.maximum_image_url ??
                  images.webp.large_image_url
                }
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
    ),
  );

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
