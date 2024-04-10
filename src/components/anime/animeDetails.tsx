import React, { Suspense } from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CalendarClock,
  Check,
  Eye,
  ListCollapse,
  PauseCircle,
  PersonStanding,
  Plus,
  Star,
  Trash2,
  VideoIcon,
} from "lucide-react";
import Rating from "@/components/anime/rating";
import { AnimeInformation } from "@/types/AnimeResponse";
import Video from "@/components/ui/video";
import { Skeleton } from "@/components/ui/skeleton";
import { Statistics } from "@/types/StatisticsResponse";
import Link from "next/link";
import { Separator } from "../ui/separator";
import AnimeDetailsTab from "./animeDetailsTab/animeDetailsTab";

type Props = {
  anime: AnimeInformation;
  statistics: Statistics;
};

const AnimeDetails = (props: Props) => {
  const { anime, statistics } = props;
  const {
    rank,
    synopsis,
    title_english,
    scored_by,
    score,
    images,
    trailer,
    aired,
    mal_id,
  } = anime;

  const airedFrom = new Date(aired.from).toDateString();
  const airedTo = new Date(aired.to).toDateString();

  const { scores, watching, completed, on_hold, dropped, plan_to_watch } =
    statistics;

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
            <span className="block">
              {airedFrom} to {airedTo}
            </span>
            <Link
              href={`/add-anime/${mal_id}`}
              className={buttonVariants({ variant: "default" })}
            >
              <Plus className="mr-2" />
              Add to List
            </Link>
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
      <Separator className="my-4" />
      <AnimeDetailsTab anime={anime} statistics={statistics} />
    </>
  );
};

export default AnimeDetails;
