import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListCollapse, PersonStanding, Star, VideoIcon } from "lucide-react";
import { AnimeInformation } from "@/types/AnimeResponse";
import { Statistics } from "@/types/StatisticsResponse";
import { Skeleton } from "@/components/ui/skeleton";
import Video from "@/components/ui/video";
import AnimeReview from "./animeReview";
import AnimeBasicInformation from "./animeBasicInformation";

type Props = {
  anime: AnimeInformation;
  statistics: Statistics;
};

const AnimeDetailsTab = (props: Props) => {
  const { anime, statistics } = props;
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
        <AnimeBasicInformation anime={anime} />
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
      <TabsContent value="characters">Work in progress</TabsContent>
    </Tabs>
  );
};

export default AnimeDetailsTab;
