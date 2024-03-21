import React from "react";
import CategoryCard from "../categoryCard";

const Featured = () => {
  return (
    <div className="flex flex-wrap px-7 py-5">
      <CategoryCard heading="Top Airing" filterName="airing" />
      <CategoryCard heading="Most Popular" filterName="bypopularity" />
      <CategoryCard heading="Most Favorite" filterName="favorite" />
      <CategoryCard heading="Top Upcoming" filterName="upcoming" />
    </div>
  );
};

export default Featured;
