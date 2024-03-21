import { AnimeDetails } from "@/types/ApiResponse";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  anime: AnimeDetails;
};

const TrendingCard = (props: Props) => {
  const { anime } = props;

  return (
    <div className="relative h-72 w-52 cursor-pointer">
      <Link href={`/details/${anime.mal_id}`}>
        <Image
          src={anime.images.webp.large_image_url}
          fill
          alt={anime.title}
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute bottom-0 right-0 flex items-center gap-x-1 rounded-ee-xl rounded-ss-xl bg-green-500 px-2 py-1">
          <Star size={14} className="" />
          <span className="text-sm">{anime.score}</span>
        </span>
      </Link>
    </div>
  );
};

export default TrendingCard;
