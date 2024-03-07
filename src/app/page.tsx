import SuggestionCard from "@/components/anime/suggestion/suggestionCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Lamp from "@/components/ui/lamp";
import PopularCard from "@/components/ui/popularCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-[40vh] w-full cursor-pointer">
        <Image
          src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
          alt="anime"
          className="object-cover"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-28 top-48 rounded-sm text-lg font-semibold uppercase text-slate-100 md:text-xl">
          #Trending
        </span>

        <h3 className="absolute left-28 top-56 rounded-sm text-2xl font-bold text-slate-100 md:text-4xl">
          Anime title
        </h3>
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="px-1 xl:px-2">
                  <PopularCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
