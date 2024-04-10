import { Statistics } from "@/types/StatisticsResponse";
import React from "react";
import Rating from "../rating";
import { CalendarClock, Check, Eye, PauseCircle, Trash2 } from "lucide-react";

type Props = {
  score: number;
  scored_by: number;
  statistics: Statistics;
};

const AnimeReview = (props: Props) => {
  const { scored_by, score, statistics } = props;
  const { watching, completed, on_hold, dropped, plan_to_watch, scores } =
    statistics;
  return (
    <div className="grid grid-cols-1 gap-y-4  p-4 px-4 md:gap-y-8 lg:grid-cols-2">
      <div>
        <h3 className="py-6 text-2xl">What users are saying</h3>
        <Rating rating={score} totalReviews={scored_by} scores={scores} />
      </div>
      <div>
        <h3 className="py-6 text-2xl">Anime Fandom Overview</h3>

        <div className="flex h-fit flex-wrap justify-start gap-x-4 gap-y-8  rounded-lg border border-gray-100 bg-white px-6 py-8 dark:border-gray-800 dark:bg-gray-700 md:justify-evenly">
          <div className="flex items-center gap-x-4">
            <span className="rounded-full bg-teal-100 p-2 text-teal-600 md:p-3">
              <Eye />
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white md:text-2xl">
              {watching}
            </p>
            {/* <span className="text-sm text-gray-500">Watching</span> */}
          </div>
          <div className="flex items-center gap-x-4">
            <span className="rounded-full bg-green-100 p-2 text-green-600 md:p-3">
              <Check />
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white md:text-2xl">
              {completed}
            </p>
            {/* <span className="text-sm text-gray-500">Watching</span> */}
          </div>
          <div className="flex flex-wrap items-center gap-x-4">
            <span className="rounded-full bg-red-100 p-2 text-red-600 md:p-3">
              <Trash2 />
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white md:text-2xl">
              {dropped}
            </p>
            {/* <span className="text-sm text-gray-500">Watching</span> */}
          </div>
          <div className="flex items-center gap-x-4">
            <span className="rounded-full bg-yellow-100 p-2 text-yellow-600 md:p-3">
              <CalendarClock />
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white md:text-2xl">
              {plan_to_watch}
            </p>
            {/* <span className="text-sm text-gray-500">Watching</span> */}
          </div>
          <div className="flex items-center gap-x-4">
            <span className="rounded-full bg-blue-100 p-2 text-blue-600 md:p-3">
              <PauseCircle />
            </span>
            <p className="text-lg font-medium text-gray-900 dark:text-white md:text-2xl">
              {on_hold}
            </p>
            {/* <span className="text-sm text-gray-500">Watching</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeReview;
