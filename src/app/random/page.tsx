import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Rating from "@/components/anime/rating";

type Props = {};

const RandomSuggestion = (props: Props) => {
  return (
    <>
      <div className="relative h-[30vh] w-full cursor-pointer md:h-[40vh]">
        <Image
          src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
          alt="anime"
          className="object-cover"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="relative left-1/3 top-1/2 h-72 w-52 cursor-pointer md:left-8 md:h-80 md:w-60">
          <Image
            src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
            alt="anime"
            className="rounded-lg object-cover md:rounded-2xl"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="mt-52 space-y-4 px-6 py-4 md:mt-4 md:pl-80">
        <div className="gap-x6 flex md:gap-x-10">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold md:text-4xl">
              Sousou no Frieren
            </h3>
            <span className="block">
              Sep 29, 2023 to Mar 22, 2024 28 Episodes
            </span>
            <Button>
              <Plus className="mr-2" />
              Add to List
            </Button>
          </div>
          <span>
            Rating:
            <span className="ml-1 text-2xl font-bold italic text-green-300">
              #12
            </span>
          </span>
        </div>
        <p>
          During their decade-long quest to defeat the Demon King, the members
          of the heros party—Himmel himself, the priest Heiter, the dwarf
          warrior Eisen, and the elven mage Frieren—forge bonds through
          adventures and battles, creating unforgettable precious memories for
          most of them. However, the time that Frieren spends with her comrades
          is equivalent to merely a fraction of her life, which has lasted over
          a thousand years. When the party disbands after their victory, Frieren
          casually returns to her usual routine of collecting spells across the
          continent. Due to her different sense of time, she seemingly holds no
          strong feelings toward the experiences she went through. As the years
          pass, Frieren gradually realizes how her days in the heros party truly
          impacted her. Witnessing the deaths of two of her former companions,
          Frieren begins to regret having taken their presence for granted; she
          vows to better understand humans and create real personal connections.
          Although the story of that once memorable journey has long ended, a
          new tale is about to begin.
        </p>
      </div>

      <div className="px-4">
        <Rating />
        <h3 className="text-2xl font-bold md:text-4xl">Videos</h3>

        <h4 className="text-xl font-medium md:text-2xl">Trailer</h4>
        <iframe
          width="420"
          height="315"
          className="rounded-lg"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <h4>Moments</h4>
      </div>
    </>
  );
};

export default RandomSuggestion;
