import { CalendarIcon, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useGetPopularAnime } from "@/lib/hooks/animeHook";
import Loader from "../loaders/loader";

type Props = {
  heading: string;
  filterName: string;
};

const CategoryCard = (props: Props) => {
  const { heading, filterName } = props;
  const {
    popularAnime,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useGetPopularAnime(5, filterName);

  const list = popularAnime.map((anime) => {
    const title = anime.title_english ?? anime.title;
    return (
      <div
        key={anime.mal_id}
        className="flex items-center gap-x-5 border-b-2 p-4"
      >
        <div className="relative h-28 w-20">
          <Image
            src={
              anime.images.webp.large_image_url || anime.images.webp.image_url
            }
            className="rounded object-cover"
            alt="poster"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="w-60 space-y-2">
          <span className="font-medium">
            <Link href={`/details/${anime.mal_id}`}>
              {title.length > 50 ? title.slice(0, 50) + "..." : title}
            </Link>
          </span>
          <div className="flex items-center gap-x-2">
            <span className="flex items-center gap-x-1 text-sm">
              <CalendarIcon size={16} /> {anime.year}
            </span>

            <span className="flex items-center gap-x-1 text-sm">
              <Star size={16} className="text-green-400" />
              {anime.score || "?"}
            </span>
            <div className="h-1 w-1 rounded-full bg-slate-500"></div>
            <div className="text-sm">{anime.type}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col p-5">
      <h4 className="font-bold">{heading}</h4>
      {status === "pending" ? (
        <Loader className="mt-6" />
      ) : (
        <>
          <div className="max-w-80">{list}</div>
          <Link
            href={`/collection/?filter=${filterName}&heading=${heading}`}
            className="flex items-center gap-x-1 p-2 font-semibold"
          >
            View More
            <ChevronRight size={16} />
          </Link>
        </>
      )}
    </div>
  );
};

export default CategoryCard;
