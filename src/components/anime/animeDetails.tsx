import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Rating from "@/components/anime/rating";
import { AnimeDetails } from "@/types/ApiResponse";

type Props = {
  anime: AnimeDetails;
};

const AnimeDetails = (props: Props) => {
  const { anime } = props;
  const { rank, synopsis, title, scored_by, score, images, trailer } = anime;

  const webp = images?.webp;

  return (
    <>
      <div className="relative h-[30vh] min-h-72 w-full cursor-pointer md:h-[65vh]">
        <Image
          src={trailer.images.maximum_image_url}
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
            <h3 className="text-2xl font-bold md:text-4xl">{title}</h3>
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
              #{rank}
            </span>
          </span>
        </div>
        <p>{synopsis}</p>
      </div>

      <div className="px-4">
        <Rating rating={score} totalReviews={scored_by} />
        <h3 className="text-2xl font-bold md:text-4xl">Videos</h3>

        <h4 className="text-xl font-medium md:text-2xl">Trailer</h4>
        <iframe
          width="420"
          height="315"
          className="rounded-lg"
          src={trailer.embed_url}
        ></iframe>
        <h4>Moments</h4>
      </div>
    </>
  );
};

export default AnimeDetails;
