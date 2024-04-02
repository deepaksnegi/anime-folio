import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const PopularAnimeSkeleton = (props: Props) => {
  return (
    <div className="px-4">
      <Skeleton className="h-6 w-[250px]" />

      <div className="flex flex-wrap justify-evenly gap-6 px-4 py-4">
        {Array(12)
          .fill(0)
          .map((_, id) => (
            <Skeleton key={id} className="h-72 w-52 rounded-xl" />
          ))}
      </div>
    </div>
  );
};

export default PopularAnimeSkeleton;
