import { LoaderIcon } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="flex h-full w-full  items-center justify-center gap-5">
      <LoaderIcon size={30} className="animate-spin " />
      <h4>Loading... It&#39;s not a filler episode, we promise!</h4>
    </div>
  );
};

export default Loader;
