"use client";

import BentoGrid from "@/components/ui/bentoGrid/bentoGrid";
import BentoGridItem from "@/components/ui/bentoGrid/bentoGridItem";
import { ChevronDown, FileIcon, Star } from "lucide-react";
import React, { Suspense } from "react";
import Image from "next/image";
import { useGetPopularAnime } from "@/lib/hooks/animeHook";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Loader from "@/components/loaders/loader";

type Props = {};

const Collection = (props: Props) => {
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter") ?? undefined;

  const {
    popularAnime,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useGetPopularAnime(10, filter);

  const Skeleton = ({ imageUrl }: { imageUrl: string }) => (
    <div className="relative h-full w-full cursor-pointer">
      <Image
        src={imageUrl}
        alt="anime"
        className="object-cover"
        quality={100}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "error") {
    return "Error" + error?.message;
  }

  const animeList = popularAnime?.map((anime) => ({
    title: anime.title,
    description: anime.synopsis,
    header: <Skeleton imageUrl={anime.images.jpg.large_image_url} />,
    icon: (
      <span className="flex items-center gap-1">
        <Star size={16} className="text-green-400" />
        <span className="episode-count">{anime.score}</span>
      </span>
    ),
  }));

  return (
    <div className="p-6 md:px-32">
      <h3 className=" text-2xl">Popular Anime</h3>

      <BentoGrid className="mt-8">
        {animeList?.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            // description={item.description}
            header={item.header}
            tags={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <div
        className={cn(
          "my-16 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']",
          {
            hidden: !hasNextPage,
          },
        )}
      >
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
          <ChevronDown className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

const CollectionPage = () => {
  return (
    <Suspense>
      <Collection />
    </Suspense>
  );
};

export default CollectionPage;
