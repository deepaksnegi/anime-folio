import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  totalCards?: number;
};

const PopularAnimeSkeleton = (props: Props) => {
  const { totalCards = 12 } = props;
  return (
    <div className="flex flex-wrap justify-evenly gap-6 py-4">
      {Array(totalCards)
        .fill(0)
        .map((_, id) => (
          <Skeleton key={id} className="h-72 w-52 rounded-xl" />
        ))}
    </div>
  );
};

export default PopularAnimeSkeleton;
