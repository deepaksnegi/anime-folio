import { PopularAnime } from "@/types/PopularAnime";

const PopularCard = (props: { anime: PopularAnime }) => {
  const { title, images } = props.anime;
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-xl border shadow-sm dark:border-white/[0.8] dark:shadow-none">
      <div
        className="flex h-72 flex-col-reverse bg-cover bg-center transition ease-linear hover:scale-105"
        style={{
          backgroundImage: `url("${images.jpg.image_url}")`,
        }}
      >
        <h2 className="bg-gradient-to-b from-transparent to-white px-4 py-2 text-2xl font-semibold text-black">
          {title}
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
