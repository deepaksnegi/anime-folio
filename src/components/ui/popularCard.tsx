import { useRef, useState } from "react";

const PopularCard = () => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-tl-xl rounded-tr-xl border shadow-xl dark:border-white/[0.8] dark:shadow-none">
      <div
        className="flex h-72 flex-col-reverse bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img1.ak.crunchyroll.com/i/spire4/5f9d50bdd044a1579c4cd4abd27052741578512245_full.jpg")',
        }}
      >
        <h2 className="bg-gradient-to-b from-transparent to-white px-4 py-2 text-2xl font-semibold text-black">
          Keep Your Hands Off Eizouken!
        </h2>
      </div>
      <div className="px-4 py-2">
        <p className="text-sm text-gray-700 dark:text-gray-100">
          Adventure, Comedy • 2020
        </p>
      </div>
    </div>
  );
};

export default PopularCard;
