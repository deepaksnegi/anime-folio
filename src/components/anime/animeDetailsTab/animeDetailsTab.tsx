import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListCollapse, PersonStanding, Star, VideoIcon } from "lucide-react";
import { AnimeInformation } from "@/types/AnimeResponse";
import { Statistics } from "@/types/StatisticsResponse";
import { Skeleton } from "@/components/ui/skeleton";
import Video from "@/components/ui/video";
import AnimeReview from "./animeReview";
import AnimeBasicInformation from "./animeBasicInformation";
import { AnimePicture } from "@/types/AnimePictures";
import { AnimeCharacter } from "@/types/AnimeCharacters";
import Image from "next/image";

type Props = {
  anime: AnimeInformation;
  statistics: Statistics;
  pictures: AnimePicture[];
  characters: AnimeCharacter[];
};

const AnimeDetailsTab = (props: Props) => {
  const { anime, statistics, pictures, characters } = props;
  const { scored_by, score, trailer } = anime;

  return (
    <Tabs defaultValue="information" className="p-4 md:p-8">
      <div className="flex justify-center">
        <TabsList className="w-full md:w-fit">
          <TabsTrigger value="information" className="gap-x-2">
            <span className="hidden md:block">Information</span>
            <ListCollapse />
          </TabsTrigger>
          <TabsTrigger value="reviews" className="gap-x-2">
            <span className="hidden md:block">Fandom</span>
            <Star />
          </TabsTrigger>
          <TabsTrigger value="videos" className="gap-x-2">
            <span className="hidden md:block">Videos</span>
            <VideoIcon />
          </TabsTrigger>
          <TabsTrigger value="characters" className="gap-x-2">
            <span className="hidden md:block">Characters</span>
            <PersonStanding />
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="information">
        <AnimeBasicInformation anime={anime} pictures={pictures} />
      </TabsContent>
      <TabsContent value="reviews">
        <AnimeReview
          statistics={statistics}
          score={score}
          scored_by={scored_by}
        />
      </TabsContent>
      <TabsContent value="videos">
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
      </TabsContent>
      <TabsContent value="characters">
        <h3 className="py-6 text-2xl">Character you will love</h3>
        <div className="flex flex-wrap gap-4 px-4 lg:gap-8">
          {characters.map(({ character, role, voice_actors }) => (
            <div
              className="rounded-xl border border-gray-400 bg-white p-4 shadow-input  hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none"
              key={character.name}
            >
              <div className="relative h-72 w-52 lg:h-80 lg:w-72">
                <Image
                  className="rounded-xl object-cover"
                  src={character.images.webp.image_url}
                  alt=" anime picture"
                  fill
                />
              </div>
              <div>
                <span className="text-xs text-neutral-600 dark:text-neutral-300">
                  {role}
                </span>
                <div className="mt-2 font-bold text-neutral-600 dark:text-neutral-200">
                  {character.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AnimeDetailsTab;
