import React, { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Rating from "@/components/anime/rating";
import { AnimeDetails } from "@/types/ApiResponse";
import Video from "@/components/ui/video";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  anime: AnimeDetails;
};

const AnimeDetails = (props: Props) => {
  const { anime } = props;
  const { rank, synopsis, title_english, scored_by, score, images, trailer } =
    anime;

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
            <h3 className="text-2xl font-bold md:text-4xl">{title_english}</h3>
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
        <div className="flex">
          <div className="flow-root w-2/3">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Japanese Title</dt>
                <dd className="text-gray-700 sm:col-span-2">{anime.title}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Genres</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {anime.genres.map((g) => g.name).join(" ,")}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Source</dt>
                <dd className="text-gray-700 sm:col-span-2">{anime.source}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Salary</dt>
                <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Bio</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  facilis debitis explicabo doloremque impedit nesciunt dolorem
                  facere, dolor quasi veritatis quia fugit aperiam aspernatur
                  neque molestiae labore aliquam soluta architecto?
                </dd>
              </div>
            </dl>
          </div>
          <div className="w-1/3">
            <Rating rating={score} totalReviews={scored_by} />
          </div>
        </div>

        <Tabs defaultValue="Videos" className="w-full">
          <TabsList>
            <TabsTrigger value="Videos">Videos</TabsTrigger>
            <TabsTrigger value="Episodes">Password</TabsTrigger>
            <TabsTrigger value="Reviews">Reviews</TabsTrigger>
            <TabsTrigger value="RECOMMENDATIONS">RECOMMENDATIONS</TabsTrigger>
            <TabsTrigger value="STATS">STATS</TabsTrigger>
            <TabsTrigger value="CHARACTER">CHARACTER</TabsTrigger>
          </TabsList>
          <TabsContent value="Videos">
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
          </TabsContent>
          <TabsContent value="Episodes">Change your password here.</TabsContent>
          <TabsContent value="Reviews">Password</TabsContent>
          <TabsContent value="RECOMMENDATIONS">Password</TabsContent>
          <TabsContent
            value="STATS
"
          >
            Password
          </TabsContent>
          <TabsContent value="CHARACTER">Password</TabsContent>
        </Tabs>
        <h4>Moments</h4>
      </div>
    </>
  );
};

export default AnimeDetails;
