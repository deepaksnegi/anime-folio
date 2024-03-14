"use client";

import BentoGrid from "@/components/ui/bentoGrid/bentoGrid";
import BentoGridItem from "@/components/ui/bentoGrid/bentoGridItem";
import { ChevronDown, FileIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { useGetPopularAnime } from "@/lib/hooks/animeHook";
import { Button } from "@/components/ui/button";

type Props = {};

const Collection = (props: Props) => {
  const {
    popularAnime,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useGetPopularAnime();

  const Skeleton = ({ imageUrl }: { imageUrl: string }) => (
    <div className="relative h-[40vh] w-full cursor-pointer">
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
    return "Loading";
  }

  if (status === "error") {
    return "Error" + error?.message;
  }

  const animeList = popularAnime?.map((anime) => ({
    title: anime.title,
    description: anime.description,
    header: <Skeleton imageUrl={anime.images.jpg.large_image_url} />,
    icon: <FileIcon className="h-4 w-4 text-neutral-500" />,
  }));

  return (
    <div>
      <BentoGrid className="px-8">
        {animeList?.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            tags={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
        <Button onClick={() => fetchNextPage()}>
          Load more
          <ChevronDown className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Collection;
