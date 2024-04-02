import React, { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Rating from "@/components/anime/rating";
import { AnimeDetails } from "@/types/AnimeResponse";
import Video from "@/components/ui/video";
import { Skeleton } from "@/components/ui/skeleton";
import { Statistics } from "@/types/StatisticsResponse";

type Props = {
  anime: AnimeDetails;
  statistics: Statistics;
};

const AnimeDetails = (props: Props) => {
  const { anime, statistics } = props;
  const { rank, synopsis, title_english, scored_by, score, images, trailer } =
    anime;

  const { scores } = statistics;

  const webp = images?.webp;

  return (
    <>
      <div className="relative h-[30vh] min-h-72 w-full cursor-pointer md:h-[65vh]">
        <Image
          src={trailer.images.maximum_image_url ?? images.webp.image_url}
          alt="anime"
          className="object-cover"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="relative left-1/3 top-1/2 h-72 w-52 cursor-pointer md:left-8 md:h-80 md:w-60">
          <Image
            src={webp.image_url}
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
            <h3 className="text-2xl font-bold md:text-4xl">{title_english}</h3>
            <span className="block">Sep 29, 2023 to Mar 22, 2024</span>
            <Button>
              <Plus className="mr-2" />
              Add to List
            </Button>
          </div>
          {/* <span>
            Rating:
            <span className="ml-1 text-2xl font-bold italic text-green-300">
              #{rank}
            </span>
          </span> */}
          {anime.year} | {anime.genres.map((g) => g.name).join(" | ")}
        </div>
        <p>{synopsis}</p>
      </div>

      <h3 className="px-4 py-6 text-2xl">More Details</h3>

      <div className="grid grid-cols-1 gap-y-4 px-4 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4">
        <div>
          <dt className="font-medium">Premiered</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {anime.season} | {anime.year}
          </dd>
        </div>

        <div>
          <dt className="font-medium">Japanese Title</dt>
          <dd className="text-gray-500 sm:col-span-2">
            {anime.title_japanese}
          </dd>
        </div>
        <div>
          <dt className="font-medium">Rating</dt>
          <dd className="text-gray-500 sm:col-span-2">{anime.rating}</dd>
        </div>
        <div>
          <dt className="font-medium">Type</dt>
          <dd className="text-gray-500 sm:col-span-2">{anime.type}</dd>
        </div>
        <div>
          <dt className="font-medium">Episodes</dt>
          <dd className="text-gray-500 sm:col-span-2">{anime.episodes}</dd>
        </div>
        <div>
          <dt className="font-medium">Duration</dt>
          <dd className="text-gray-500 sm:col-span-2">{anime.duration}</dd>
        </div>
        <div>
          <dt className="font-medium">Status</dt>
          <dd className="text-gray-500 sm:col-span-2">{anime.status}</dd>
        </div>
        <div>
          <dt className="font-medium">Themes</dt>
          <dd className="text-gray-500 sm:col-span-2">
            {anime.themes.map(({ name }) => name).join(", ")}
          </dd>
        </div>
        <div>
          <dt className="font-medium">Built By</dt>
          <dd className="text-gray-500 sm:col-span-2">
            {anime.studios.map((s) => s.name).join(", ")}
          </dd>
        </div>
        <div>
          <dt className="font-medium">Also Known As</dt>
          <dd className="text-gray-500 sm:col-span-2">
            {anime.title_synonyms.join(", ")}
          </dd>
        </div>
      </div>
      <div className="w-full p-4 md:w-2/3">
        <h3 className="py-6 text-2xl">What users are saying</h3>
        <Rating rating={score} totalReviews={scored_by} scores={scores} />
      </div>

      <div className="aspect-video w-full max-w-[812px] px-4">
        <h4 className="text-xl font-medium md:text-2xl">Trailer</h4>
        <Suspense
          fallback={
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            </div>
          }
        >
          <Video src={trailer.embed_url} />
        </Suspense>
      </div>
    </>
  );
};

export default AnimeDetails;
