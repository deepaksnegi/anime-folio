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
        <span className="absolute left-28 top-48 rounded-sm text-xl font-bold uppercase text-slate-100">
          #Trending
        </span>

        <h3 className="absolute left-28 top-56 rounded-sm text-4xl font-bold uppercase text-slate-100">
          Anime title
        </h3>
      </div>

      <div>
        <h3>Quote of the</h3>

        <Lamp />
      </div>

      <div className="">
        <h3>Top</h3>
        <Carousel
          className="w-4/5 "
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <SuggestionCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </>
  );
}
