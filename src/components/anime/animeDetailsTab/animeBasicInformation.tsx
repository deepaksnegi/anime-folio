import { AnimeInformation } from "@/types/AnimeResponse";
import React from "react";

type Props = {
  anime: AnimeInformation;
};

const AnimeBasicInformation = (props: Props) => {
  const { anime } = props;
  return (
    <div>
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
    </div>
  );
};

export default AnimeBasicInformation;
